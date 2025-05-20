import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import {
  SecurityHub,
  WorkflowStatus,
  type AwsSecurityFinding,
  type ComplianceStatus,
  type Partition,
  type RecordState,
  type SeverityLabel,
} from "@aws-sdk/client-securityhub";
import middy from "@middy/core";
import type { LambdaPermissionSecurityConfig } from "@trust-stack/schema";
import {
  getValidatedPackageConfig,
  resolveErrorMessage,
} from "@trust-stack/utils";
import type { EventBridgeEvent } from "aws-lambda";
import type { LambdaAddPermissionEventDetail } from "../../../../../../../types/cloudtrail-events";
import {
  SECURITY_PACKAGE_NAME,
  validateLambdaPermissionPrincipal,
} from "../shared";

const securityHub = new SecurityHub({});

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for monitoring CloudTrail events for Lambda permission creation
 * and validating Lambda permission principals.
 */
async function lambdaHandler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaAddPermissionEventDetail
  >,
): Promise<void> {
  logger.appendKeys({
    eventId: event.id,
    eventName: event.detail.eventName,
  });
  logger.info("Processing Lambda AddPermission event");

  const {
    awsRegion,
    userIdentity: { accountId },
    requestParameters,
  } = event.detail;

  logger.appendKeys({ requestParameters });

  const { functionName, principal, principalOrgID, sourceArn, sourceAccount } =
    requestParameters;

  let config: LambdaPermissionSecurityConfig;
  try {
    logger.info("Retrieving configuration");
    config = await getValidatedPackageConfig("lambda-permission-security");
    logger.info("Configuration retrieved successfully");
  } catch (error) {
    logger.error("Error retrieving configuration", {
      error: resolveErrorMessage(error),
    });
    throw error;
  }

  const { trustedOrgIDs, trustedAccountIDs, trustedServicePrincipals } = config;

  const validationResult = validateLambdaPermissionPrincipal({
    principal,
    principalOrgID,
    sourceARN: sourceArn,
    sourceAccount,
    trustedAccountIDs,
    trustedOrgIDs,
    trustedServicePrincipals,
  });

  if (!validationResult.isValid) {
    logger.warn("Untrusted principal in Lambda permission", {
      principal,
      principalOrgID,
      functionName,
      reason: validationResult.reason,
    });

    await importOrUpdateSecurityHubFinding({
      accountID: accountId,
      region: awsRegion,
      functionName,
      principal,
      principalOrgID,
      reason: validationResult.reason,
      severity: "HIGH",
    });
  } else {
    logger.info("Lambda permission principal is trusted", {
      principal,
      functionName,
    });
  }
}

async function importOrUpdateSecurityHubFinding({
  accountID,
  region,
  functionName,
  principal,
  principalOrgID,
  reason,
  severity,
}: Readonly<{
  accountID: string;
  region: string;
  functionName: string;
  principal: string;
  principalOrgID: string | undefined;
  reason: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}>) {
  // Create a Security Hub finding
  const finding = createSecurityHubFinding({
    accountID,
    region,
    functionName,
    principal,
    principalOrgID,
    reason,
    severity,
  });

  async function importFinding() {
    logger.info("Importing new Security Hub finding", {
      finding,
    });

    try {
      await securityHub.batchImportFindings({
        Findings: [finding],
      });
    } catch (error: unknown) {
      logger.error("Failed to import Security Hub finding", {
        error: resolveErrorMessage(error),
        findingID: finding.Id,
      });
      throw error;
    }

    logger.info("Security Hub finding imported successfully");
  }

  async function isFindingAlreadyImported() {
    try {
      const result = await securityHub.getFindings({
        Filters: {
          Id: [{ Comparison: "EQUALS", Value: finding.Id }],
        },
      });

      return result.Findings && result.Findings.length > 0;
    } catch (error: unknown) {
      logger.error("Failed to get Security Hub finding", {
        error: resolveErrorMessage(error),
        findingID: finding.Id,
      });
      throw error;
    }
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
          Text: reason,
          UpdatedBy: "TrustStack",
        },
        UserDefinedFields: {
          "TrustStack/SecurityPackage": SECURITY_PACKAGE_NAME,
          "TrustStack/Principal": principal,
          ...(principalOrgID && {
            "TrustStack/PrincipalOrgID": principalOrgID,
          }),
          "TrustStack/Reason": reason,
        },
        Workflow: {
          Status: WorkflowStatus.NEW,
        },
      });
    } catch (error: unknown) {
      logger.error("Failed to update Security Hub finding", {
        error: resolveErrorMessage(error),
        findingID: finding.Id,
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
 * Creates a Security Hub finding for an unauthorized Lambda permission
 */
function createSecurityHubFinding({
  accountID,
  region,
  functionName,
  principal,
  principalOrgID,
  reason,
  severity,
}: Readonly<{
  accountID: string;
  region: string;
  functionName: string;
  principal: string;
  principalOrgID: string | undefined;
  reason: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}>): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const id = `lambda-permission-security-${functionName}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${region}:${accountID}:product/${accountID}/default`,
    GeneratorId: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
    AwsAccountId: accountID,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    CreatedAt: timestamp,
    UpdatedAt: timestamp,
    Severity: {
      Label: severity as SeverityLabel,
    },
    Title: "Unauthorized Lambda permission principal detected",
    Description: `An unauthorized principal (${principal}) was granted permission to invoke a Lambda function.`,
    Resources: [
      {
        Type: "AwsLambdaFunction",
        Id: functionName.startsWith("arn:")
          ? functionName
          : `arn:aws:lambda:${region}:${accountID}:function:${functionName}`,
        Partition: "aws" as Partition,
        Region: region,
      },
    ],
    Remediation: {
      Recommendation: {
        Text: "Remove the Lambda permission using the RemovePermission API or update it to use a trusted principal",
        Url: "https://docs.aws.amazon.com/lambda/latest/api/API_RemovePermission.html",
      },
    },
    FindingProviderFields: {
      Types: ["Software and Configuration Checks/AWS Security Best Practices"],
      Severity: {
        Label: severity as SeverityLabel,
      },
    },
    UserDefinedFields: {
      "TrustStack/SecurityPackage": SECURITY_PACKAGE_NAME,
      "TrustStack/Principal": principal,
      ...(principalOrgID && { "TrustStack/PrincipalOrgID": principalOrgID }),
      "TrustStack/Reason": reason,
    },
    Compliance: {
      Status: "FAILED" as ComplianceStatus,
    },
    RecordState: "ACTIVE" as RecordState,
    Workflow: {
      Status: "NEW" as WorkflowStatus,
    },
  };
}
