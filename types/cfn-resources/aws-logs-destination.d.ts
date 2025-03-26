/**
 * TypeScript definitions for AWS::Logs::Destination
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Logs::Destination resource specifies a CloudWatch Logs destination. A destination encapsulates a physical resource (such as an Amazon Kinesis data stream) and enables you to subscribe that resource to a stream of log events.
 */
export namespace AWS_Logs_Destination {
  /**
   * The AWS::Logs::Destination resource specifies a CloudWatch Logs destination. A destination encapsulates a physical resource (such as an Amazon Kinesis data stream) and enables you to subscribe that resource to a stream of log events.
   */
  export type DestinationResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the destination resource
     * Create-only property
     */
    DestinationName: string;

    /**
     * An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
     */
    DestinationPolicy?: string;

    /**
     * The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource
     */
    RoleArn: string;

    /**
     * The ARN of the physical target where the log events are delivered (for example, a Kinesis stream)
     */
    TargetArn: string;
  };
}
