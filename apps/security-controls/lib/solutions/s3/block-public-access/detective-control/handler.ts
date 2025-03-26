import {
  S3Client,
  GetPublicAccessBlockCommand,
  GetBucketPolicyStatusCommand,
  GetBucketAclCommand,
} from "@aws-sdk/client-s3";
import type { Grant } from "@aws-sdk/client-s3";
import {
  SecurityHubClient,
  BatchImportFindingsCommand,
} from "@aws-sdk/client-securityhub";
import type { AwsSecurityFinding } from "@aws-sdk/client-securityhub";
import type { Context, EventBridgeEvent } from "aws-lambda";

/**
 * Interface for CloudTrail S3 event detail
 */
type CloudTrailS3EventDetail = {
  eventSource: string;
  eventName: string;
  awsRegion: string;
  requestParameters?: {
    bucketName?: string;
    publicAccessBlockConfiguration?: {
      blockPublicAcls?: boolean;
      ignorePublicAcls?: boolean;
      blockPublicPolicy?: boolean;
      restrictPublicBuckets?: boolean;
    };
  };
  responseElements?: Record<string, unknown>;
  sourceIPAddress?: string;
  userIdentity?: {
    type: string;
    principalId: string;
    arn: string;
    accountId: string;
    userName?: string;
  };
  recipientAccountId: string;
};

/**
 * Represents the BlockPublicAccess configuration for an S3 bucket
 */
type BlockPublicAccessConfig = {
  blockPublicAcls: boolean;
  ignorePublicAcls: boolean;
  blockPublicPolicy: boolean;
  restrictPublicBuckets: boolean;
};

/**
 * List of S3 API events that should trigger an evaluation
 */
const S3_EVENTS_TO_MONITOR = [
  "CreateBucket",
  "PutBucketPolicy",
  "PutBucketAcl",
  "PutPublicAccessBlock",
  "DeletePublicAccessBlock",
];

/**
 * Lambda handler that processes EventBridge events for S3 operations
 * and creates Security Hub findings for buckets without proper Block Public Access settings
 */
export const handler = async (
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    CloudTrailS3EventDetail
  >,
  _context: Context,
): Promise<void> => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const detail = event.detail;

    // Check if this is an S3 event we care about
    if (
      detail.eventSource !== "s3.amazonaws.com" ||
      !S3_EVENTS_TO_MONITOR.includes(detail.eventName)
    ) {
      console.log(`Ignoring event: ${detail.eventSource}:${detail.eventName}`);
      return;
    }

    // Extract bucket information from the event
    const bucketName = detail.requestParameters?.bucketName;
    if (!bucketName) {
      console.log("No bucket name found in the event");
      return;
    }

    const accountId = detail.recipientAccountId;
    const region = detail.awsRegion;

    // Initialize AWS clients
    const s3Client = new S3Client({ region });
    const securityHubClient = new SecurityHubClient({ region });

    // Check the bucket's block public access settings
    const isCompliant = await checkBucketCompliance(s3Client, bucketName);

    // Create or update findings in Security Hub
    await updateSecurityHubFinding(
      securityHubClient,
      accountId,
      region,
      bucketName,
      isCompliant,
      detail,
    );

    console.log(
      `Processed bucket: ${bucketName}, Compliance status: ${isCompliant ? "Compliant" : "Non-Compliant"}`,
    );
  } catch (error) {
    console.error("Error processing event:", error);
    throw error;
  }
};

/**
 * Checks if an S3 bucket is compliant with Block Public Access settings
 */
async function checkBucketCompliance(
  s3Client: S3Client,
  bucketName: string,
): Promise<boolean> {
  try {
    // Check the bucket's public access block configuration
    const blockPublicAccessConfig = await getBucketPublicAccessBlockConfig(
      s3Client,
      bucketName,
    );

    // Evaluate if all four Block Public Access settings are enabled
    if (blockPublicAccessConfig) {
      return (
        blockPublicAccessConfig.blockPublicAcls === true &&
        blockPublicAccessConfig.ignorePublicAcls === true &&
        blockPublicAccessConfig.blockPublicPolicy === true &&
        blockPublicAccessConfig.restrictPublicBuckets === true
      );
    }

    // If no block public access configuration exists, check if the bucket is already public
    const isPublicPolicy = await checkBucketPublicPolicy(s3Client, bucketName);
    const isPublicAcl = await checkBucketPublicAcl(s3Client, bucketName);

    // If the bucket has public access through policy or ACL, it's non-compliant
    if (isPublicPolicy || isPublicAcl) {
      return false;
    }

    // If no public access block and not publicly accessible, we'll mark it as non-compliant
    // since we want to enforce explicit block public access settings
    return false;
  } catch (error) {
    console.error(`Error checking bucket compliance for ${bucketName}:`, error);
    // We'll consider any error as non-compliant to be safe
    return false;
  }
}

/**
 * Gets the Block Public Access configuration for a bucket
 */
async function getBucketPublicAccessBlockConfig(
  s3Client: S3Client,
  bucketName: string,
): Promise<BlockPublicAccessConfig | null> {
  try {
    const command = new GetPublicAccessBlockCommand({ Bucket: bucketName });
    const response = await s3Client.send(command);

    return {
      blockPublicAcls:
        response.PublicAccessBlockConfiguration?.BlockPublicAcls ?? false,
      ignorePublicAcls:
        response.PublicAccessBlockConfiguration?.IgnorePublicAcls ?? false,
      blockPublicPolicy:
        response.PublicAccessBlockConfiguration?.BlockPublicPolicy ?? false,
      restrictPublicBuckets:
        response.PublicAccessBlockConfiguration?.RestrictPublicBuckets ?? false,
    };
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "NoSuchPublicAccessBlockConfiguration"
    ) {
      console.log(
        `No public access block configuration for bucket ${bucketName}`,
      );
      return null;
    }
    console.error(
      `Error getting public access block config for ${bucketName}:`,
      error,
    );
    throw error;
  }
}

/**
 * Checks if a bucket has a public policy
 */
async function checkBucketPublicPolicy(
  s3Client: S3Client,
  bucketName: string,
): Promise<boolean> {
  try {
    const command = new GetBucketPolicyStatusCommand({ Bucket: bucketName });
    const response = await s3Client.send(command);
    return response.PolicyStatus?.IsPublic ?? false;
  } catch (error) {
    // If there's no policy or we can't check it, we'll assume it's not public
    console.log(
      `Could not check bucket policy status for ${bucketName}:`,
      error,
    );
    return false;
  }
}

/**
 * Checks if a bucket has a public ACL
 */
async function checkBucketPublicAcl(
  s3Client: S3Client,
  bucketName: string,
): Promise<boolean> {
  try {
    const command = new GetBucketAclCommand({ Bucket: bucketName });
    const response = await s3Client.send(command);

    // Check for public ACL grants (AllUsers or AuthenticatedUsers)
    const publicGrants = (response.Grants || []).filter((grant: Grant) => {
      const grantee = grant.Grantee;
      return (
        grantee?.URI === "http://acs.amazonaws.com/groups/global/AllUsers" ||
        grantee?.URI ===
          "http://acs.amazonaws.com/groups/global/AuthenticatedUsers"
      );
    });

    return publicGrants.length > 0;
  } catch (error) {
    console.error(`Error checking bucket ACL for ${bucketName}:`, error);
    // Assume not public if we can't check
    return false;
  }
}

/**
 * Creates or updates a Security Hub finding for an S3 bucket
 */
async function updateSecurityHubFinding(
  securityHubClient: SecurityHubClient,
  accountId: string,
  region: string,
  bucketName: string,
  isCompliant: boolean,
  eventDetail: CloudTrailS3EventDetail,
): Promise<void> {
  const findingId = createFindingId(accountId, region, bucketName);
  const timestamp = new Date().toISOString();

  // Create the finding
  const finding: AwsSecurityFinding = {
    SchemaVersion: "2018-10-08",
    Id: findingId,
    ProductArn: `arn:aws:securityhub:${region}:${accountId}:product/${accountId}/default`,
    GeneratorId: "S3BlockPublicAccessDetectiveControl",
    AwsAccountId: accountId,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    CreatedAt: timestamp,
    UpdatedAt: timestamp,
    Severity: {
      Label: isCompliant ? "INFORMATIONAL" : "HIGH",
    },
    Title: isCompliant
      ? `[RESOLVED] S3 bucket ${bucketName} has Block Public Access enabled`
      : `S3 bucket ${bucketName} does not have Block Public Access properly configured`,
    Description: isCompliant
      ? `S3 bucket ${bucketName} has all Block Public Access settings enabled, which helps prevent data exposure.`
      : `S3 bucket ${bucketName} does not have all Block Public Access settings enabled. This could lead to accidental data exposure if bucket policies or ACLs are misconfigured.`,
    Remediation: {
      Recommendation: {
        Text: "Enable Block Public Access settings for the S3 bucket",
        Url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
      },
    },
    ProductFields: {
      "aws/securityhub/FindingId": findingId,
      "aws/securityhub/ProductName": "Security Controls",
      "aws/securityhub/CompanyName": "AWS",
    },
    Resources: [
      {
        Type: "AwsS3Bucket",
        Id: `arn:aws:s3:::${bucketName}`,
        Partition: "aws",
        Region: region,
        Details: {
          AwsS3Bucket: {
            Name: bucketName,
            PublicAccessBlockConfiguration: isCompliant
              ? {
                  BlockPublicAcls: true,
                  BlockPublicPolicy: true,
                  IgnorePublicAcls: true,
                  RestrictPublicBuckets: true,
                }
              : undefined,
          },
        },
      },
    ],
    WorkflowState: isCompliant ? "RESOLVED" : "NEW",
    RecordState: isCompliant ? "ARCHIVED" : "ACTIVE",
    Compliance: {
      Status: isCompliant ? "PASSED" : "FAILED",
      RelatedRequirements: [
        "NIST CSF PR.AC-3",
        "NIST SP 800-53 AC-1",
        "NIST SP 800-53 AC-3",
        "NIST SP 800-53 AC-17",
        "PCI DSS v3.2.1 Req-7",
        "CIS AWS Foundations Benchmark 2.1.5",
      ],
    },
    UserDefinedFields: {
      eventName: eventDetail.eventName,
      sourceIPAddress: eventDetail.sourceIPAddress || "N/A",
      userIdentityType: eventDetail.userIdentity?.type || "N/A",
      userIdentityARN: eventDetail.userIdentity?.arn || "N/A",
    },
  };

  // Import the finding into Security Hub
  const command = new BatchImportFindingsCommand({
    Findings: [finding],
  });

  try {
    await securityHubClient.send(command);
    console.log(
      `Successfully sent finding to Security Hub for bucket: ${bucketName}`,
    );
  } catch (error) {
    console.error("Error sending finding to Security Hub:", error);
    throw error;
  }
}

/**
 * Creates the finding ID for a particular bucket
 */
function createFindingId(
  accountId: string,
  region: string,
  bucketName: string,
): string {
  return `arn:aws:s3:${region}:${accountId}:bucket/${bucketName}/BlockPublicAccessViolation`;
}
