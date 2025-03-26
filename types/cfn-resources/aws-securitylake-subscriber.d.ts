/**
 * TypeScript definitions for AWS::SecurityLake::Subscriber
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SecurityLake::Subscriber
 */
export namespace AWS_SecurityLake_Subscriber {
  /**
   * The Amazon S3 or AWS Lake Formation access type.
   */
  export type AccessTypesType = {};

  /**
   * Amazon Security Lake supports log and event collection for natively supported AWS services.
   */
  export type AwsLogSourceType = {
    /**
     * The name for a AWS source. This must be a Regionally unique value.
     */
    SourceName?: string;

    /**
     * The version for a AWS source. This must be a Regionally unique value.
     */
    SourceVersion?: string;
  };

  export type CustomLogSourceType = {
    /**
     * The name for a third-party custom source. This must be a Regionally unique value.
     */
    SourceName?: string;

    /**
     * The version for a third-party custom source. This must be a Regionally unique value.
     */
    SourceVersion?: string;
  };

  export type SourceType = {
    AwsLogSource?: AwsLogSourceType;

    CustomLogSource?: CustomLogSourceType;
  };

  export type TagType = {
    /**
     * The name of the tag. This is a general label that acts as a category for a more specific tag value (value).
     */
    Key: string;

    /**
     * The value that is associated with the specified tag key (key). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::SecurityLake::Subscriber
   */
  export type SubscriberResourceType = {
    AccessTypes: AccessTypesType;

    /**
     * The ARN for the data lake.
     * Create-only property
     */
    DataLakeArn: string;

    /**
     * The AWS identity used to access your data.
     */
    SubscriberIdentity: Record<string, any>;

    /**
     * The name of your Security Lake subscriber account.
     */
    SubscriberName: string;

    /**
     * The description for your subscriber account in Security Lake.
     */
    SubscriberDescription?: string;

    /**
     * An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
     */
    Tags?: TagType[];

    /**
     * The supported AWS services from which logs and events are collected.
     */
    Sources: SourceType[];

    /**
     * Read-only property
     */
    ResourceShareArn?: string;

    /**
     * Read-only property
     */
    ResourceShareName?: string;

    /**
     * Read-only property
     */
    SubscriberRoleArn?: string;

    /**
     * Read-only property
     */
    S3BucketArn?: string;

    /**
     * Read-only property
     */
    SubscriberArn?: string;
  };
}
