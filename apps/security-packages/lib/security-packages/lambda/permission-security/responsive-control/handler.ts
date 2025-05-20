import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { Lambda } from "@aws-sdk/client-lambda";
import { SecurityHub, type WorkflowStatus } from "@aws-sdk/client-securityhub";
import middy from "@middy/core";
import { resolveErrorMessage } from "@trust-stack/utils";
import type {
  SecurityHubFindingsImportedEvent,
  SecurityHubFindingsImportedEventDetail,
} from "../../../../../../../types/aws-security-hub-events";
import { SECURITY_PACKAGE_NAME } from "../shared";

// Initialize clients
const lambda = new Lambda({});
const securityHub = new SecurityHub({});

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}ResponsiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for remediating unauthorized Lambda permissions
 * identified by Security Hub findings.
 */
async function lambdaHandler(
  event: SecurityHubFindingsImportedEvent,
): Promise<void> {
  logger.appendKeys({ event });
  logger.info("Processing Security Hub findings event");

  const { findings } = event.detail;

  for (const finding of findings) {
    await processFinding(finding);
  }
}

/**
 * Process a Security Hub finding and remediate the unauthorized Lambda permission
 */
async function processFinding(
  finding: SecurityHubFindingsImportedEventDetail["findings"][number],
): Promise<void> {
  const { Id: findingID, ProductArn: productARN } = finding;

  // Extract resource details from the finding
  const lambdaResource = finding.Resources.find(
    (resource) => resource.Type === "AwsLambdaFunction",
  );

  if (!lambdaResource) {
    logger.warn("No Lambda function resource found in finding");
    return;
  }

  const lambdaARN = lambdaResource.Id;
  const principal = finding.UserDefinedFields["TrustStack/Principal"];
  const principalOrgID = finding.UserDefinedFields["TrustStack/PrincipalOrgID"];
  const reason = finding.UserDefinedFields["TrustStack/Reason"];

  logger.appendKeys({
    findingID,
    lambdaARN,
    principal,
    principalOrgID,
    reason,
  });

  logger.info("Processing unauthorized Lambda permission");

  let lambdaFunctionPolicyString: string | undefined;
  try {
    const policyResponse = await lambda.getPolicy({
      FunctionName: lambdaARN,
    });

    lambdaFunctionPolicyString = policyResponse.Policy;
  } catch (error: unknown) {
    logger.error("Error getting Lambda function policy", {
      error: resolveErrorMessage(error),
    });

    return;
  }

  if (!lambdaFunctionPolicyString) {
    logger.warn("No policy found for Lambda function");

    await updateFindingStatus({
      findingID,
      productARN,
      status: "SUPPRESSED",
      note: "No policy found for Lambda function",
    });

    return;
  }

  // Parse policy to find the unauthorized statement
  const policy = JSON.parse(lambdaFunctionPolicyString) as {
    Statement: {
      Principal:
        | {
            AWS: string;
            Service: string;
            [key: string]: string;
          }
        | string;
      Sid: string;
      [key: string]: unknown;
    }[];
  };

  // Find the statement with the unauthorized principal
  const statements = Array.isArray(policy.Statement)
    ? policy.Statement
    : [policy.Statement];

  const unauthorizedStatement = statements.find((statement) => {
    if (typeof statement.Principal === "string") {
      return statement.Principal === principal;
    }

    if (/^\d{12}$/.test(principal)) {
      return statement.Principal.AWS === `arn:aws:iam::${principal}:root`;
    }

    return (
      statement.Principal.AWS === principal ||
      statement.Principal.Service === principal
    );
  });

  if (!unauthorizedStatement) {
    logger.warn("No matching statement found in Lambda policy");

    await updateFindingStatus({
      findingID,
      productARN,
      status: "SUPPRESSED",
      note: "No matching statement found in Lambda policy",
    });

    return;
  }

  // Remove the unauthorized statement
  const statementID = unauthorizedStatement.Sid;

  if (!statementID) {
    logger.warn("Statement ID not found in policy statement", {
      statement: unauthorizedStatement,
    });

    await updateFindingStatus({
      findingID,
      productARN,
      status: "NEW",
      note: "Statement ID not found in policy statement",
    });

    return;
  }

  logger.appendKeys({ statementID });

  logger.info("Removing unauthorized Lambda permission");

  try {
    // Remove the permission
    await lambda.removePermission({
      FunctionName: lambdaARN,
      StatementId: statementID,
    });

    logger.info("Removed unauthorized Lambda permission successfully");
  } catch (error: unknown) {
    logger.error("Error removing unauthorized Lambda permission", {
      error: resolveErrorMessage(error),
    });

    // Update finding with error
    await updateFindingStatus({
      findingID,
      productARN,
      status: "NEW",
      note: `Failed to remove Lambda permission: ${resolveErrorMessage(error)}`,
    });

    throw error;
  }

  // Update finding status to RESOLVED
  await updateFindingStatus({
    findingID,
    productARN,
    status: "RESOLVED",
    note: `Removed unauthorized Lambda permission (${statementID}) for principal ${principal}`,
  });
}

/**
 * Updates a Security Hub finding status with the remediation result
 */
async function updateFindingStatus({
  findingID,
  productARN,
  status,
  note,
}: Readonly<{
  findingID: string;
  productARN: string;
  status: WorkflowStatus;
  note: string;
}>): Promise<void> {
  try {
    await securityHub.batchUpdateFindings({
      FindingIdentifiers: [
        {
          Id: findingID,
          ProductArn: productARN,
        },
      ],
      Note: {
        Text: note,
        UpdatedBy: `${SECURITY_PACKAGE_NAME}-ResponsiveControl`,
      },
      Workflow: {
        Status: status,
      },
    });

    logger.info("Updated Security Hub finding status", {
      findingID,
      status,
      note,
    });
  } catch (error: unknown) {
    logger.error("Failed to update Security Hub finding", {
      error: resolveErrorMessage(error),
      findingID,
      status,
      note,
    });

    throw error;
  }
}
