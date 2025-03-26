/**
 * TypeScript definitions for AWS::GuardDuty::PublishingDestination
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GuardDuty::PublishingDestination
 */
export namespace AWS_GuardDuty_PublishingDestination {
  export type TagItemType = {
    Key: string;

    Value: string;
  };

  export type CFNDestinationPropertiesType = {
    /**
     * The ARN of the resource to publish to.
     */
    DestinationArn?: string;

    /**
     * The ARN of the KMS key to use for encryption.
     */
    KmsKeyArn?: string;
  };

  /**
   * Resource Type definition for AWS::GuardDuty::PublishingDestination
   */
  export type PublishingDestinationResourceType = {
    /**
     * The ID of the publishing destination.
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the GuardDuty detector associated with the publishing destination.
     * Create-only property
     */
    DetectorId: string;

    /**
     * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
     */
    DestinationType: string;

    DestinationProperties: CFNDestinationPropertiesType;

    /**
     * The status of the publishing destination.
     * Read-only property
     */
    Status?: string;

    /**
     * The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.
     * Read-only property
     */
    PublishingFailureStartTimestamp?: string;

    Tags?: TagItemType[];
  };
}
