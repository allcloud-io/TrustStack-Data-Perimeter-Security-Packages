import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { Lambda } from "@aws-sdk/client-lambda";
import {
  type BatchUpdateFindingsCommandInput,
  SecurityHub,
  WorkflowStatus,
} from "@aws-sdk/client-securityhub";
import middy from "@middy/core";
import { resolveErrorMessage } from "@trust-stack/utils";
import type { EventBridgeEvent } from "aws-lambda";
import type { SecurityHubFindingsImportedEventDetail } from "../../../../../../../types/aws-security-hub-events";
import { SECURITY_PACKAGE_NAME } from "../shared";

const lambda = new Lambda({});
const securityHub = new SecurityHub({});

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}ResponsiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for processing Security Hub findings and remediating
 * non-compliant Lambda layer permissions.
 */
async function lambdaHandler(
  event: EventBridgeEvent<
    "Security Hub Findings - Imported",
    SecurityHubFindingsImportedEventDetail
  >,
) {
  logger.appendKeys({ event });
  logger.info("Received Security Hub findings event");

  const findings = event.detail.findings;

  for (const finding of findings) {
    logger.appendKeys({ finding });

    try {
      logger.info("Processing finding");

      await processSecurityHubFinding(finding);

      logger.info("Successfully processed finding");
    } catch (error: unknown) {
      logger.error("Failed to process finding", {
        error: resolveErrorMessage(error),
      });
      throw error;
    }

    logger.removeKeys(["finding"]);
  }
}

/**
 * Process a single Security Hub finding and remediate if necessary
 */
async function processSecurityHubFinding(
  finding: SecurityHubFindingsImportedEventDetail["findings"][0],
) {
  // Extract layer information from the finding
  const resource = finding.Resources.at(0);
  if (!resource || resource.Type !== "AwsLambdaLayerVersion") {
    const errorMessage =
      'Finding does not contain expected resource type "AwsLambdaLayerVersion"';
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }

  const layerName = resource.Details.Other.LayerName;
  const versionNumber = resource.Details.Other.VersionNumber;
  const statementId = resource.Details.Other.StatementId;

  if (!layerName || !versionNumber || !statementId) {
    const errorMessage = "Finding does not contain required layer information";
    logger.error(errorMessage);
    throw new Error(errorMessage);
  }

  logger.appendKeys({ layerName, versionNumber, statementId });

  let updateFindingNote: string | undefined;

  try {
    // Remove the non-compliant permission
    try {
      logger.info("Removing layer permission");

      await lambda.removeLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: parseInt(versionNumber, 10),
        StatementId: statementId,
      });

      logger.info("Successfully removed layer permission");
    } catch (error: unknown) {
      const errorMessage = resolveErrorMessage(error);

      if (
        error instanceof Error &&
        error.name === "ResourceNotFoundException"
      ) {
        logger.info("Permission already removed");
        updateFindingNote = "Permission already removed";
      } else {
        logger.error("Failed to remove layer permission", {
          error: errorMessage,
        });
        throw error;
      }
    }

    await updateSecurityHubFinding(
      finding.Id,
      finding.ProductArn,
      "RESOLVED",
      updateFindingNote,
    );
  } finally {
    logger.removeKeys(["layerName", "versionNumber", "statementId"]);
  }
}

/**
 * Update Security Hub finding status
 */
async function updateSecurityHubFinding(
  findingId: string,
  productArn: string,
  workflowStatus: "NEW" | "RESOLVED" | "SUPPRESSED",
  note?: string,
) {
  logger.info("Updating Security Hub finding");

  const batchUpdateFindingsInput: BatchUpdateFindingsCommandInput = {
    FindingIdentifiers: [
      {
        Id: findingId,
        ProductArn: productArn,
      },
    ],
    Workflow: {
      Status: WorkflowStatus[workflowStatus],
    },
  };

  if (note) {
    batchUpdateFindingsInput.Note = {
      Text: note,
      UpdatedBy: "TrustStack",
    };
  }

  try {
    await securityHub.batchUpdateFindings(batchUpdateFindingsInput);
  } catch (error: unknown) {
    logger.error("Failed to update Security Hub finding", {
      error: resolveErrorMessage(error),
    });
    throw error;
  }

  logger.info("Successfully updated Security Hub finding");
}
