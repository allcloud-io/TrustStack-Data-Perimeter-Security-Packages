/**
 * TypeScript definitions for AWS::CloudFront::RealtimeLogConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * A real-time log configuration.
 */
export namespace AWS_CloudFront_RealtimeLogConfig {
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
   */
  export type EndPointType = {
    /**
     * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
     */
    KinesisStreamConfig: KinesisStreamConfigType;

    /**
     * The type of data stream where you are sending real-time log data. The only valid value is `Kinesis`.
     */
    StreamType: string;
  };

  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
   */
  export type KinesisStreamConfigType = {
    /**
     * The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.
     * For more information the IAM role, see Real-time log configuration IAM role in the *Amazon CloudFront Developer Guide*.
     */
    RoleArn: string;

    /**
     * The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.
     */
    StreamArn: string;
  };

  /**
   * A real-time log configuration.
   */
  export type RealtimeLogConfigResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
     */
    EndPoints: EndPointType[];

    /**
     * A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
     * For more information about fields, see Real-time log configuration fields in the *Amazon CloudFront Developer Guide*.
     */
    Fields: string[];

    /**
     * The unique name of this real-time log configuration.
     * Create-only property
     */
    Name: string;

    /**
     * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.
     */
    SamplingRate: number;
  };
}
