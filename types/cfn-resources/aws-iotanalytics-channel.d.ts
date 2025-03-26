/**
 * TypeScript definitions for AWS::IoTAnalytics::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoTAnalytics::Channel
 */
export namespace AWS_IoTAnalytics_Channel {
  export type CustomerManagedS3Type = {
    Bucket: string;

    RoleArn: string;

    KeyPrefix?: string;
  };

  export type ServiceManagedS3Type = {};

  export type ChannelStorageType = {
    ServiceManagedS3?: ServiceManagedS3Type;

    CustomerManagedS3?: CustomerManagedS3Type;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type RetentionPeriodType = {
    NumberOfDays?: number;

    Unlimited?: boolean;
  };

  /**
   * Resource Type definition for AWS::IoTAnalytics::Channel
   */
  export type ChannelResourceType = {
    ChannelStorage?: ChannelStorageType;

    /**
     * Create-only property
     */
    ChannelName?: string;

    /**
     * Read-only property
     */
    Id?: string;

    RetentionPeriod?: RetentionPeriodType;

    Tags?: TagType[];
  };
}
