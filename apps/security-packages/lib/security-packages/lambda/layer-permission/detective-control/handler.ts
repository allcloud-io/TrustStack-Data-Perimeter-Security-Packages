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
import type { LambdaLayerPermissionSecurityConfig } from "@trust-stack/schema";
import {
  getValidatedPackageConfig,
  resolveErrorMessage,
} from "@trust-stack/utils";
import type { EventBridgeEvent } from "aws-lambda";
import type { LambdaAddLayerVersionPermissionEventDetail } from "../../../../../../../types/cloudtrail-events";
import {
  SECURITY_PACKAGE_NAME,
  validateLayerPermissionPrincipal,
} from "../shared";

const securityHub = new SecurityHub({});

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for processing CloudTrail events and detecting non-compliant
 * Lambda layer permissions.
 */
async function lambdaHandler(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaAddLayerVersionPermissionEventDetail
  >,
) {
  logger.appendKeys({ event });
  logger.info("Received CloudTrail event");

  const detail = event.detail;
  const { principal, organizationId, layerName, versionNumber } =
    detail.requestParameters;
  const accountID = detail.userIdentity.accountId;
  const region = detail.awsRegion;

  logger.appendKeys({
    principal,
    organizationId,
    layerName,
    versionNumber,
    accountID,
  });

  let config: LambdaLayerPermissionSecurityConfig;
  try {
    logger.info("Retrieving configuration from SSM Parameter Store");
    config = await getValidatedPackageConfig(
      "lambda-layer-permission-security",
    );
    logger.info("Configuration retrieved successfully", { config });
  } catch (error: unknown) {
    logger.error("Failed to retrieve configuration from SSM Parameter Store", {
      error: resolveErrorMessage(error),
    });
    throw error;
  }

  const { trustedAccountIDs, trustedOrgIDs } = config;

  // Validate the principal
  const validationResult = validateLayerPermissionPrincipal({
    principal,
    organizationID: organizationId,
    trustedAccountIDs,
    trustedOrgIDs,
  });

  if (!validationResult.isValid) {
    logger.warn("Detected non-compliant layer permission", {
      principal,
      reason: validationResult.reason,
    });

    // Create Security Hub finding
    const finding = createSecurityHubFinding(
      detail,
      validationResult.reason,
      accountID,
      region,
    );

    try {
      const response = await securityHub.batchImportFindings({
        Findings: [finding],
      });

      logger.info("Security Hub finding imported", {
        successCount: response.SuccessCount,
        failedCount: response.FailedCount,
      });
    } catch (error: unknown) {
      logger.error("Failed to import Security Hub finding", {
        error: resolveErrorMessage(error),
      });
      throw error;
    }
  } else {
    logger.info("Layer permission is compliant", { principal });
  }
}

/**
 * Creates a Security Hub finding for non-compliant layer permissions
 */
function createSecurityHubFinding(
  event: LambdaAddLayerVersionPermissionEventDetail,
  reason: string,
  accountID: string,
  region: string,
): AwsSecurityFinding {
  const timestamp = new Date().toISOString();
  const layerArn = `arn:aws:lambda:${region}:${accountID}:layer:${event.requestParameters.layerName}:${event.requestParameters.versionNumber.toString()}`;

  return {
    SchemaVersion: "2018-10-08",
    Id: `${layerArn}/${event.requestParameters.statementId}`,
    ProductArn: `arn:aws:securityhub:${region}:${accountID}:product/${accountID}/default`,
    GeneratorId: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
    AwsAccountId: accountID,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    FirstObservedAt: timestamp,
    CreatedAt: timestamp,
    UpdatedAt: timestamp,
    Severity: {
      Label: "HIGH" as SeverityLabel,
    },
    Title: "Non-compliant Lambda Layer Permission Detected",
    Description: reason,
    Remediation: {
      Recommendation: {
        Text: "Remove the layer permission or update it to use a trusted principal.",
      },
    },
    ProductFields: {
      "Product Name": "TrustStack Lambda Layer Permission Security",
    },
    Resources: [
      {
        Type: "AwsLambdaLayerVersion",
        Id: layerArn,
        Partition: "aws" as Partition,
        Region: region,
        Details: {
          Other: {
            LayerName: event.requestParameters.layerName,
            VersionNumber: event.requestParameters.versionNumber.toString(),
            Principal: event.requestParameters.principal,
            OrganizationId: event.requestParameters.organizationId ?? "N/A",
            StatementId: event.requestParameters.statementId,
          },
        },
      },
    ],
    Compliance: {
      Status: "FAILED" as ComplianceStatus,
    },
    RecordState: "ACTIVE" as RecordState,
    Workflow: {
      Status: WorkflowStatus.NEW,
    },
  };
}
