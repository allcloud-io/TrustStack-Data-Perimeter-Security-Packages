import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { EC2 } from "@aws-sdk/client-ec2";
import { Lambda } from "@aws-sdk/client-lambda";
import { SecurityHub } from "@aws-sdk/client-securityhub";
import middy from "@middy/core";
import type { Context } from "aws-lambda";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";
import { getValidatedPackageConfig } from "@trust-stack/utils";
import { SECURITY_PACKAGE_NAME } from "../shared";

const lambda = new Lambda();
const securityHub = new SecurityHub();
const ec2 = new EC2();

const logger = new Logger({
  serviceName: `${SECURITY_PACKAGE_NAME}ResponsiveControl`,
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

/**
 * Lambda handler for processing Security Hub findings for Lambda functions without VPC configuration.
 *
 * This function processes Security Hub findings, identifies Lambda functions that are not
 * configured to run in a VPC, and attempts to update them to run in a VPC.
 *
 * @param event - The Security Hub findings imported event
 * @param _context - The Lambda context (unused)
 */
async function lambdaHandler(
  event: SecurityHubFindingsImportedEvent,
  _context: Context,
): Promise<void> {
  logger.info("Event received", { event });

  // Extract findings from the event
  const { findings } = event.detail;

  try {
    const config = await getValidatedPackageConfig("lambda-vpc-security");
    logger.info("Configuration retrieved successfully", { config });

    // Process each finding
    for (const finding of findings) {
      // Only process findings from our detective control
      if (finding.GeneratorId !== `${SECURITY_PACKAGE_NAME}DetectiveControl`) {
        logger.info("Skipping finding from different generator", {
          generatorId: finding.GeneratorId,
        });
        continue;
      }

      // Check if the finding is for a Lambda function
      const resourceType = finding.Resources[0].Type;
      if (resourceType !== "AwsLambdaFunction") {
        logger.info("Skipping finding for non-Lambda resource", {
          resourceType,
        });
        continue;
      }

      const functionArn = finding.Resources[0].Id;
      if (!functionArn) {
        logger.warn("Finding does not contain Lambda function ARN, skipping");
        continue;
      }

      // Extract function name from ARN
      const functionName = functionArn.split(":").pop();
      if (!functionName) {
        logger.warn("Could not extract function name from ARN, skipping", {
          functionArn,
        });
        continue;
      }

      logger.info("Processing Lambda function", { functionName });

      // Get default VPC and subnets from the configured allowed VPCs or use default VPC
      let vpcID: string | undefined;

      if (
        config.allowedVPCIDs &&
        Array.isArray(config.allowedVPCIDs) &&
        config.allowedVPCIDs.length > 0
      ) {
        // Use the first allowed VPC from the configuration
        vpcID = config.allowedVPCIDs[0];
      } else {
        // Find default VPC
        const vpcs = await ec2.describeVpcs({
          Filters: [
            {
              Name: "isDefault",
              Values: ["true"],
            },
          ],
        });

        if (vpcs.Vpcs && vpcs.Vpcs.length > 0) {
          vpcID = vpcs.Vpcs[0].VpcId;
        }
      }

      if (!vpcID) {
        logger.warn("No VPC found for remediation, skipping", {
          functionName,
        });

        // Update the finding to note that remediation failed
        await updateFindingStatus(
          finding.Id,
          finding.ProductArn,
          "Could not find a suitable VPC for remediation",
          "NEW",
        );

        continue;
      }

      // Get subnets for the VPC
      const subnets = await ec2.describeSubnets({
        Filters: [
          {
            Name: "vpc-id",
            Values: [vpcID],
          },
        ],
      });

      if (!subnets.Subnets || subnets.Subnets.length === 0) {
        logger.warn("No subnets found in VPC for remediation, skipping", {
          functionName,
          vpcId: vpcID,
        });

        // Update the finding to note that remediation failed
        await updateFindingStatus(
          finding.Id,
          finding.ProductArn,
          "No subnets found in the VPC for remediation",
          "NEW",
        );

        continue;
      }

      // Get a security group for the VPC
      const securityGroups = await ec2.describeSecurityGroups({
        Filters: [
          {
            Name: "vpc-id",
            Values: [vpcID],
          },
        ],
      });

      if (
        !securityGroups.SecurityGroups ||
        securityGroups.SecurityGroups.length === 0
      ) {
        logger.warn(
          "No security groups found in VPC for remediation, skipping",
          {
            functionName,
            vpcId: vpcID,
          },
        );

        // Update the finding to note that remediation failed
        await updateFindingStatus(
          finding.Id,
          finding.ProductArn,
          "No security groups found in the VPC for remediation",
          "NEW",
        );

        continue;
      }

      // Select the first security group
      const securityGroupID = securityGroups.SecurityGroups[0]?.GroupId;
      if (!securityGroupID) {
        logger.warn(
          "No security group ID found in VPC for remediation, skipping",
          {
            functionName,
            vpcID,
          },
        );

        // Update the finding to note that remediation failed
        await updateFindingStatus(
          finding.Id,
          finding.ProductArn,
          "No security group ID found in the VPC for remediation",
          "NEW",
        );

        continue;
      }

      // Select up to 5 subnets
      const subnetIDs = subnets.Subnets.slice(0, 5).map(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (subnet) => subnet.SubnetId!,
      );

      try {
        // Update the Lambda function to use the VPC configuration
        await lambda.updateFunctionConfiguration({
          FunctionName: functionName,
          VpcConfig: {
            SubnetIds: subnetIDs,
            SecurityGroupIds: [securityGroupID],
          },
        });

        logger.info("Lambda function updated with VPC configuration", {
          functionName,
          vpcID,
          subnetIDs,
          securityGroupID,
        });
      } catch (error) {
        logger.error("Failed to update Lambda function VPC configuration", {
          error: error instanceof Error ? error.message : String(error),
          functionName,
        });

        // Update the finding to note that remediation failed
        await updateFindingStatus(
          finding.Id,
          finding.ProductArn,
          `Failed to update Lambda function: ${error instanceof Error ? error.message : "Unknown error"}`,
          "NEW",
        );

        continue;
      }

      try {
        // Update the finding to mark as resolved
        await updateFindingStatus(
          finding.Id,
          finding.ProductArn,
          `Lambda function updated to use VPC: ${vpcID}`,
          "RESOLVED",
        );
      } catch (error) {
        logger.error("Failed to update finding status", {
          error: error instanceof Error ? error.message : String(error),
          findingID: finding.Id,
        });

        throw error;
      }
    }
  } catch (error) {
    logger.error("Error processing Security Hub findings", {
      error: error instanceof Error ? error.message : String(error),
    });

    throw error;
  }
}

/**
 * Updates the status of a Security Hub finding
 *
 * @param findingID - The ID of the finding
 * @param productARN - The product ARN of the finding
 * @param note - A note to add to the finding
 * @param status - The new workflow status
 */
async function updateFindingStatus(
  findingID: string,
  productARN: string,
  note: string,
  status: "NEW" | "NOTIFIED" | "RESOLVED" | "SUPPRESSED",
): Promise<void> {
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
        UpdatedBy: `${SECURITY_PACKAGE_NAME}ResponsiveControl`,
      },
      Workflow: {
        Status: status,
      },
    });

    logger.info("Security Hub finding updated", {
      findingID,
      status,
      note,
    });
  } catch (error) {
    logger.error("Failed to update Security Hub finding", {
      error: error instanceof Error ? error.message : String(error),
      findingID,
    });
  }
}
