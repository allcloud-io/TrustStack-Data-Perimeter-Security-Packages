/**
 * TypeScript definitions for AWS::Config::DeliveryChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::DeliveryChannel
 */
export namespace AWS_Config_DeliveryChannel {
  export type ConfigSnapshotDeliveryPropertiesType = {
    DeliveryFrequency?: string;
  };

  /**
   * Resource Type definition for AWS::Config::DeliveryChannel
   */
  export type DeliveryChannelResourceType = {
    S3KeyPrefix?: string;

    ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryPropertiesType;

    S3BucketName: string;

    SnsTopicARN?: string;

    /**
     * Read-only property
     */
    Id?: string;

    S3KmsKeyArn?: string;

    /**
     * Create-only property
     */
    Name?: string;
  };
}
