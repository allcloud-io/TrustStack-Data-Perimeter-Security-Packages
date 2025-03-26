import type { Context } from "aws-lambda";
import type {
  CloudFormationHookEvent,
  CloudFormationHookResult,
} from "../../../../../../../types/cfn-hooks";
import type { AWS_S3_Bucket } from "../../../../../../../types/cfn-resources/aws-s3-bucket";
import type { AWS_S3_MultiRegionAccessPoint } from "../../../../../../../types/cfn-resources/aws-s3-multiregionaccesspoint";

/**
 * Lambda handler for CloudFormation hook
 *
 * This function processes CloudFormation hook events, validates that all S3 buckets
 * have Block Public Access enabled, and returns a success or failure response.
 *
 * @param event - The CloudFormation hook event
 * @param _context - The Lambda context (unused)
 * @returns A promise resolving to the hook result
 */
export async function handler(
  event: CloudFormationHookEvent,
  _context: Context,
): Promise<CloudFormationHookResult> {
  console.log("CloudFormation Hook triggered");
  console.log("Event:", JSON.stringify(event, null, 2));

  // Extract the request type and target logical ID
  const requestType = event.hookContext?.requestType || "Unknown";
  const targetLogicalId = event.hookContext?.targetLogicalId || "Unknown";
  const targetName = event.hookContext?.targetName || "Unknown";

  console.log(`Request Type: ${requestType}`);
  console.log(`Target Logical ID: ${targetLogicalId}`);
  console.log(`Target Name: ${targetName}`);

  // Validation results
  const validationFailures: string[] = [];

  if (event.resources) {
    Object.entries(event.resources).forEach(([resourceId, resource]) => {
      // Validate S3 buckets
      if (resource.resourceType === "AWS::S3::Bucket") {
        const validationResult = validateS3BucketPublicAccessBlock(
          resource.resourceProperties as AWS_S3_Bucket.BucketResourceType,
          resourceId,
        );

        if (!validationResult.isValid && validationResult.reason) {
          validationFailures.push(validationResult.reason);
        }
      }

      // Validate Multi-Region Access Points
      if (resource.resourceType === "AWS::S3::MultiRegionAccessPoint") {
        const validationResult =
          validateMultiRegionAccessPointPublicAccessBlock(
            resource.resourceProperties as AWS_S3_MultiRegionAccessPoint.MultiRegionAccessPointResourceType,
            resourceId,
          );

        if (!validationResult.isValid && validationResult.reason) {
          validationFailures.push(validationResult.reason);
        }
      }
    });
  }

  // If there are validation failures, return a failure response
  if (validationFailures.length > 0) {
    return {
      hookStatus: "FAILURE",
      message: "S3 bucket validation failed: " + validationFailures.join("; "),
      hookData: {
        validationFailures,
      },
    };
  }

  // If all validations pass, return a success response
  return {
    hookStatus: "SUCCESS",
    message: "All S3 buckets have Block Public Access enabled",
    hookData: {
      additionalInfo: "All S3 resources were validated successfully",
    },
  };
}

/**
 * Validates that an S3 bucket has Block Public Access enabled
 *
 * @param resourceProperties - The properties of the S3 bucket resource
 * @param resourceId - The logical ID of the resource
 * @returns An object with validation result and failure reason if applicable
 */
function validateS3BucketPublicAccessBlock(
  resourceProperties: AWS_S3_Bucket.BucketResourceType,
  resourceId: string,
): { isValid: boolean; reason?: string } {
  const publicAccessBlockConfig =
    resourceProperties.PublicAccessBlockConfiguration;

  // If PublicAccessBlockConfiguration is not defined, the bucket is not compliant
  if (!publicAccessBlockConfig) {
    return {
      isValid: false,
      reason:
        `S3 bucket '${resourceId}' does not have PublicAccessBlockConfiguration ` +
        `defined. All S3 buckets must have Block Public Access enabled.`,
    };
  }

  // Check if all Block Public Access settings are enabled
  const blockPublicAcls = publicAccessBlockConfig.BlockPublicAcls === true;
  const ignorePublicAcls = publicAccessBlockConfig.IgnorePublicAcls === true;
  const blockPublicPolicy = publicAccessBlockConfig.BlockPublicPolicy === true;
  const restrictPublicBuckets =
    publicAccessBlockConfig.RestrictPublicBuckets === true;

  // All four settings must be enabled for full Block Public Access protection
  if (
    !blockPublicAcls ||
    !ignorePublicAcls ||
    !blockPublicPolicy ||
    !restrictPublicBuckets
  ) {
    return {
      isValid: false,
      reason:
        `S3 bucket '${resourceId}' does not have all Block Public Access ` +
        `settings enabled. Required settings: BlockPublicAcls=${blockPublicAcls}, ` +
        `IgnorePublicAcls=${ignorePublicAcls}, BlockPublicPolicy=${blockPublicPolicy}, ` +
        `RestrictPublicBuckets=${restrictPublicBuckets}`,
    };
  }

  return { isValid: true };
}

/**
 * Validates that a Multi-Region Access Point has Block Public Access enabled
 *
 * @param resourceProperties - The properties of the Multi-Region Access Point resource
 * @param resourceId - The logical ID of the resource
 * @returns An object with validation result and failure reason if applicable
 */
function validateMultiRegionAccessPointPublicAccessBlock(
  resourceProperties: AWS_S3_MultiRegionAccessPoint.MultiRegionAccessPointResourceType,
  resourceId: string,
): { isValid: boolean; reason?: string } {
  const publicAccessBlockConfig =
    resourceProperties.PublicAccessBlockConfiguration;

  // If PublicAccessBlockConfiguration is not defined, the MRAP is not compliant
  if (!publicAccessBlockConfig) {
    return {
      isValid: false,
      reason:
        `Multi-Region Access Point '${resourceId}' does not have ` +
        `PublicAccessBlockConfiguration defined. All Multi-Region Access Points ` +
        `must have Block Public Access enabled.`,
    };
  }

  // Check if all Block Public Access settings are enabled
  const blockPublicAcls = publicAccessBlockConfig.BlockPublicAcls === true;
  const ignorePublicAcls = publicAccessBlockConfig.IgnorePublicAcls === true;
  const blockPublicPolicy = publicAccessBlockConfig.BlockPublicPolicy === true;
  const restrictPublicBuckets =
    publicAccessBlockConfig.RestrictPublicBuckets === true;

  // All four settings must be enabled for full Block Public Access protection
  if (
    !blockPublicAcls ||
    !ignorePublicAcls ||
    !blockPublicPolicy ||
    !restrictPublicBuckets
  ) {
    return {
      isValid: false,
      reason:
        `Multi-Region Access Point '${resourceId}' does not have all Block ` +
        `Public Access settings enabled. Required settings: ` +
        `BlockPublicAcls=${blockPublicAcls}, IgnorePublicAcls=${ignorePublicAcls}, ` +
        `BlockPublicPolicy=${blockPublicPolicy}, ` +
        `RestrictPublicBuckets=${restrictPublicBuckets}`,
    };
  }

  return { isValid: true };
}
