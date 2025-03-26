/**
 * TypeScript definitions for AWS::Logs::DeliverySource
 * Generated from CloudFormation Resource Schema
 */

/**
 *  A delivery source is an AWS resource that sends logs to an AWS destination. The destination can be CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
 * Only some AWS services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from AWS services.
 */
export namespace AWS_Logs_DeliverySource {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode
     */
    Value: string;
  };

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
   */
  export type ArnType = {};

  /**
   *  A delivery source is an AWS resource that sends logs to an AWS destination. The destination can be CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
   * Only some AWS services support being configured as a delivery source. These services are listed as Supported [V2 Permissions] in the table at Enabling logging from AWS services.
   */
  export type DeliverySourceResourceType = {
    /**
     * The unique name of the Log source.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * This array contains the ARN of the AWS resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.
     * Read-only property
     */
    ResourceArns?: ArnType[];

    /**
     * The ARN of the resource that will be sending the logs.
     */
    ResourceArn?: ArnType;

    /**
     * The AWS service that is sending logs.
     * Read-only property
     */
    Service?: string;

    /**
     * The type of logs being delivered. Only mandatory when the resourceArn could match more than one. In such a case, the error message will contain all the possible options.
     */
    LogType?: string;

    /**
     * The tags that have been assigned to this delivery source.
     */
    Tags?: TagType[];
  };
}
