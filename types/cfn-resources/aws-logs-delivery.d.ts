/**
 * TypeScript definitions for AWS::Logs::Delivery
 * Generated from CloudFormation Resource Schema
 */

/**
 * This structure contains information about one delivery in your account.
 * A delivery is a connection between a logical delivery source and a logical delivery destination.
 * For more information, see CreateDelivery.
 */
export namespace AWS_Logs_Delivery {
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
   * Amazon Resource Name (ARN) that uniquely identify AWS resource.
   */
  export type ArnType = {};

  /**
   * A single record field to be delivered to the destination.
   */
  export type FieldHeaderType = {};

  /**
   * This structure contains information about one delivery in your account.
   * A delivery is a connection between a logical delivery source and a logical delivery destination.
   * For more information, see CreateDelivery.
   */
  export type DeliveryResourceType = {
    /**
     * The unique ID that identifies this delivery in your account.
     * Read-only property
     */
    DeliveryId?: string;

    /**
     * The Amazon Resource Name (ARN) that uniquely identifies this delivery.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The name of the delivery source that is associated with this delivery.
     * Create-only property
     */
    DeliverySourceName: string;

    /**
     * The ARN of the delivery destination that is associated with this delivery.
     * Create-only property
     */
    DeliveryDestinationArn: ArnType;

    /**
     * Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
     * Read-only property
     */
    DeliveryDestinationType?: string;

    /**
     * The tags that have been assigned to this delivery.
     */
    Tags?: TagType[];

    /**
     * The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
     */
    RecordFields?: FieldHeaderType[];

    /**
     * The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.
     */
    FieldDelimiter?: string;

    /**
     * This string allows re-configuring the S3 object prefix to contain either static or variable sections. The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.
     */
    S3SuffixPath?: string;

    /**
     * This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.
     */
    S3EnableHiveCompatiblePath?: boolean;
  };
}
