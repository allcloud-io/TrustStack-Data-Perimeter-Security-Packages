/**
 * TypeScript definitions for AWS::Logs::DeliveryDestination
 * Generated from CloudFormation Resource Schema
 */

/**
 * This structure contains information about one delivery destination in your account.
 * A delivery destination is an AWS resource that represents an AWS service that logs can be sent to CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.
 */
export namespace AWS_Logs_DeliveryDestination {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a resource.
   */
  export type ArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type DestinationPolicyType = {
    /**
     * The name of the delivery destination to assign this policy to
     */
    DeliveryDestinationName: string;

    /**
     * The contents of the policy attached to the delivery destination
     */
    DeliveryDestinationPolicy: string;
  };

  /**
   * This structure contains information about one delivery destination in your account.
   * A delivery destination is an AWS resource that represents an AWS service that logs can be sent to CloudWatch Logs, Amazon S3, are supported as Kinesis Data Firehose delivery destinations.
   */
  export type DeliveryDestinationResourceType = {
    /**
     * The name of this delivery destination.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The ARN of the Amazon Web Services destination that this delivery destination represents. That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
     * Create-only property
     */
    DestinationResourceArn?: ArnType;

    /**
     * The tags that have been assigned to this delivery destination.
     */
    Tags?: TagType[];

    /**
     * Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
     * Read-only property
     */
    DeliveryDestinationType?: string;

    /**
     * IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.
     * The policy must be in JSON string format.
     * Length Constraints: Maximum length of 51200
     */
    DeliveryDestinationPolicy?: Record<string, any>;

    /**
     * The format of the logs that are sent to this delivery destination.
     * Create-only property
     */
    OutputFormat?: string;
  };
}
