/**
 * TypeScript definitions for AWS::Macie::Session
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Macie::Session resource specifies a new Amazon Macie session. A session is an object that represents the Amazon Macie service. A session is required for Amazon Macie to become operational.
 */
export namespace AWS_Macie_Session {
  /**
   * The AWS::Macie::Session resource specifies a new Amazon Macie session. A session is an object that represents the Amazon Macie service. A session is required for Amazon Macie to become operational.
   */
  export type SessionResourceType = {
    /**
     * AWS account ID of customer
     * Read-only property
     */
    AwsAccountId?: string;

    /**
     * A enumeration value that specifies the status of the Macie Session.
     * Default: "ENABLED"
     */
    Status?: string;

    /**
     * A enumeration value that specifies how frequently finding updates are published.
     * Default: "SIX_HOURS"
     */
    FindingPublishingFrequency?: string;

    /**
     * Service role used by Macie
     * Read-only property
     */
    ServiceRole?: string;
  };
}
