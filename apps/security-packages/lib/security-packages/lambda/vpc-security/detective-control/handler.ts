import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import {
  type GetFunctionConfigurationCommandOutput,
  Lambda,
} from "@aws-sdk/client-lambda";
import {
  type AwsSecurityFinding,
  ComplianceStatus,
  Partition,
  RecordState,
  SecurityHub,
  SeverityLabel,
  WorkflowStatus,
} from "@aws-sdk/client-securityhub";
import middy from "@middy/core";
import {
  getValidatedPackageConfig,
  resolveErrorMessage,
} from "@trust-stack/utils";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type {
  LambdaFunctionCreateEventDetail,
  LambdaFunctionUpdateConfigurationEventDetail,
} from "../../../../../../../types/cloudtrail-events";
import { SECURITY_PACKAGE_NAME, SECURITY_PACKAGE_SLUG } from "../shared";

const lambda = new Lambda();
const securityHub = new SecurityHub();

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for processing CloudTrail events for Lambda function creation/update.
 *
 * This function processes CloudTrail events via EventBridge, validates that Lambda functions
 * have VPC configurations, and creates Security Hub findings for non-compliant functions.
 *
 * @param event - The EventBridge event containing the CloudTrail event
 * @param _context - The Lambda context (unused)
 * @returns A promise that resolves when processing is complete
 */
async function lambdaHandler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    | LambdaFunctionCreateEventDetail
    | LambdaFunctionUpdateConfigurationEventDetail
  >,
  _context: Context,
): Promise<void> {
  logger.appendKeys({ event });
  logger.info("Received event");

  // Check if this is a Lambda API call we're interested in
  if (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    event.detail.eventSource !== "lambda.amazonaws.com" ||
    ![
      "CreateFunction20150331",
      "UpdateFunctionConfiguration20150331v2",
    ].includes(event.detail.eventName) ||
    // Skip cases where the creation or update failed due to a resource state conflict(e.g., the function is in "Creating" state)
    ("errorCode" in event.detail &&
      event.detail.errorCode === "ResourceConflictException")
  ) {
    logger.info("Not a relevant Lambda API event, skipping");
    return;
  }

  const accountID = event.detail.userIdentity.accountId;
  const region = event.detail.awsRegion;

  try {
    const config = await getValidatedPackageConfig(SECURITY_PACKAGE_SLUG);
    logger.info("Configuration retrieved successfully");

    // Get the function ARN or name from the event
    let functionARN = event.detail.responseElements?.functionArn;
    let functionName = event.detail.requestParameters.functionName;

    if (!functionARN && !functionName) {
      logger.warn("Could not determine Lambda function identifier, skipping");
      return;
    }

    let tags: Record<string, string | undefined>;
    try {
      tags = (await lambda.listTags({ Resource: functionARN })).Tags ?? {};
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.name === "ResourceNotFoundException"
      ) {
        logger.warn("Lambda function not found, skipping");
        return;
      }
      throw error;
    }

    const excludeTag = tags["ts:exclude"];
    if (
      excludeTag === "ALL" ||
      excludeTag?.split(",").includes(SECURITY_PACKAGE_NAME)
    ) {
      logger.info("Lambda function is excluded from security checks, skipping");
      return;
    }

    // Get the Lambda function configuration
    let functionConfig: GetFunctionConfigurationCommandOutput;
    try {
      functionConfig = await lambda.getFunctionConfiguration({
        FunctionName: functionARN ?? functionName,
      });

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      functionARN = functionConfig.FunctionArn!;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      functionName = functionConfig.FunctionName!;
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        error.name === "ResourceNotFoundException"
      ) {
        logger.warn("Lambda function not found, skipping");
        return;
      }
      throw error;
    }

    // Check if the function has VPC configuration
    if (!functionConfig.VpcConfig?.VpcId) {
      logger.warn("Lambda function does not have a VPC configuration", {
        functionName,
      });

      await importOrUpdateSecurityHubFinding({
        functionName,
        functionARN,
        accountID,
        region,
        note: "Lambda function is not configured to run in a VPC",
      });

      logger.info(
        "Security Hub finding created for non-compliant Lambda function",
      );
    } else if (
      config.allowedVPCIDs &&
      Array.isArray(config.allowedVPCIDs) &&
      config.allowedVPCIDs.length > 0 &&
      !config.allowedVPCIDs.includes(functionConfig.VpcConfig.VpcId)
    ) {
      // If we have a list of allowed VPC IDs and this VPC is not in the list
      logger.warn("Lambda function is in an unauthorized VPC", {
        functionName,
        vpcID: functionConfig.VpcConfig.VpcId,
      });

      await importOrUpdateSecurityHubFinding({
        functionName,
        functionARN,
        accountID,
        region,
        note: `Lambda function is configured to run in an unauthorized VPC: ${functionConfig.VpcConfig.VpcId}`,
      });

      logger.info(
        "Security Hub finding created for Lambda function in unauthorized VPC",
      );
    } else {
      logger.info("Lambda function has a valid VPC configuration", {
        functionName,
        vpcID: functionConfig.VpcConfig.VpcId,
      });
    }
  } catch (error: unknown) {
    logger.error("Error processing Lambda function event", {
      error: resolveErrorMessage(error),
    });

    throw error;
  }
}

async function importOrUpdateSecurityHubFinding({
  functionName,
  functionARN,
  accountID,
  region,
  note,
}: {
  functionName: string;
  functionARN: string;
  accountID: string;
  region: string;
  note: string;
}) {
  // Create a Security Hub finding
  const finding = createSecurityHubFinding(
    functionName,
    functionARN,
    note,
    accountID,
    region,
  );

  async function importFinding() {
    logger.info("Importing new Security Hub finding", {
      finding,
    });

    try {
      await securityHub.batchImportFindings({
        Findings: [finding],
      });
    } catch (error: unknown) {
      logger.error("Error importing Security Hub finding", {
        error: resolveErrorMessage(error),
      });
      throw error;
    }

    logger.info("Security Hub finding imported successfully");
  }

  async function isFindingAlreadyImported() {
    const result = await securityHub.getFindings({
      Filters: {
        Id: [{ Comparison: "EQUALS", Value: finding.Id }],
      },
    });

    return result.Findings && result.Findings.length > 0;
  }

  async function updateFinding() {
    logger.info("Updating existing Security Hub finding", {
      finding,
    });

    try {
      await securityHub.batchUpdateFindings({
        FindingIdentifiers: [
          {
            Id: finding.Id,
            ProductArn: finding.ProductArn,
          },
        ],
        Note: {
          Text: note,
          UpdatedBy: "TrustStack",
        },
        Workflow: {
          Status: WorkflowStatus.NEW,
        },
      });
    } catch (error: unknown) {
      logger.error("Error updating Security Hub finding", {
        error: resolveErrorMessage(error),
      });
      throw error;
    }

    logger.info("Security Hub finding updated successfully");
  }

  const isAlreadyImported = await isFindingAlreadyImported();

  if (isAlreadyImported) {
    await updateFinding();
  } else {
    await importFinding();
  }
}

/**
 * Creates a Security Hub finding for a non-compliant Lambda function
 *
 * @param functionName - The name of the Lambda function
 * @param functionARN - The ARN of the Lambda function
 * @param reason - The reason for non-compliance
 * @param accountID - The AWS account ID
 * @param region - The AWS region
 * @returns The Security Hub finding
 */
function createSecurityHubFinding(
  functionName: string,
  functionARN: string,
  reason: string,
  accountID: string,
  region: string,
): AwsSecurityFinding {
  const timestamp = new Date().toISOString();

  // Generate a deterministic ID based on the function name
  const id = `lambda-vpc-security-${functionName}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${region}:${accountID}:product/${accountID}/default`,
    GeneratorId: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
    AwsAccountId: accountID,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    FirstObservedAt: timestamp,
    CreatedAt: timestamp,
    UpdatedAt: timestamp,
    Severity: {
      Label: SeverityLabel.HIGH,
    },
    Title: "Lambda function without proper VPC configuration",
    Description: reason,
    ProductFields: {
      ProviderName: "TrustStack",
      ProviderVersion: "1.0",
    },
    Resources: [
      {
        Type: "AwsLambdaFunction",
        Id: functionARN,
        Partition: Partition.AWS,
        Region: region,
        Details: {
          AwsLambdaFunction: {
            FunctionName: functionName,
          },
          Other: {
            reason,
          },
        },
      },
    ],
    Compliance: {
      Status: ComplianceStatus.FAILED,
      RelatedRequirements: ["AWS Data Perimeter Guidelines"],
    },
    RecordState: RecordState.ACTIVE,
    Workflow: {
      Status: WorkflowStatus.NEW,
    },
    Remediation: {
      Recommendation: {
        Text: "Update the Lambda function to run in an approved VPC",
        Url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html",
      },
    },
  };
}
