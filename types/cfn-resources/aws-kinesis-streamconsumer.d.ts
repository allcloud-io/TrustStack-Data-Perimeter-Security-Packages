/**
 * TypeScript definitions for AWS::Kinesis::StreamConsumer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Kinesis::StreamConsumer
 */
export namespace AWS_Kinesis_StreamConsumer {
  /**
   * Resource Type definition for AWS::Kinesis::StreamConsumer
   */
  export type StreamConsumerResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    ConsumerCreationTimestamp?: string;

    /**
     * Create-only property
     */
    ConsumerName: string;

    /**
     * Read-only property
     */
    ConsumerARN?: string;

    /**
     * Read-only property
     */
    ConsumerStatus?: string;

    /**
     * Create-only property
     */
    StreamARN: string;
  };
}
