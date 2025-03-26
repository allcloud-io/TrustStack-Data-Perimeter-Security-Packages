/**
 * TypeScript definitions for AWS::EC2::FlowLog
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a VPC flow log, which enables you to capture IP traffic for a specific network interface, subnet, or VPC.
 */
export namespace AWS_EC2_FlowLog {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Specifies a VPC flow log, which enables you to capture IP traffic for a specific network interface, subnet, or VPC.
   */
  export type FlowLogResourceType = {
    /**
     * The Flow Log ID
     * Read-only property
     */
    Id?: string;

    /**
     * The ARN of the IAM role that allows Amazon EC2 to publish flow logs across accounts.
     * Create-only property
     */
    DeliverCrossAccountRole?: string;

    /**
     * The ARN for the IAM role that permits Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.
     * Create-only property
     */
    DeliverLogsPermissionArn?: string;

    /**
     * Specifies the destination to which the flow log data is to be published. Flow log data can be published to a CloudWatch Logs log group, an Amazon S3 bucket, or a Kinesis Firehose stream. The value specified for this parameter depends on the value specified for LogDestinationType.
     * Create-only property
     */
    LogDestination?: string;

    /**
     * Specifies the type of destination to which the flow log data is to be published. Flow log data can be published to CloudWatch Logs or Amazon S3.
     * Create-only property
     */
    LogDestinationType?: string;

    /**
     * The fields to include in the flow log record, in the order in which they should appear.
     * Create-only property
     */
    LogFormat?: string;

    /**
     * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs. If you specify LogDestinationType as s3 or kinesis-data-firehose, do not specify DeliverLogsPermissionArn or LogGroupName.
     * Create-only property
     */
    LogGroupName?: string;

    /**
     * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. You can specify 60 seconds (1 minute) or 600 seconds (10 minutes).
     * Create-only property
     */
    MaxAggregationInterval?: number;

    /**
     * The ID of the subnet, network interface, or VPC for which you want to create a flow log.
     * Create-only property
     */
    ResourceId: string;

    /**
     * The type of resource for which to create the flow log. For example, if you specified a VPC ID for the ResourceId property, specify VPC for this property.
     * Create-only property
     */
    ResourceType: string;

    /**
     * The tags to apply to the flow logs.
     */
    Tags?: TagType[];

    /**
     * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
     * Create-only property
     */
    TrafficType?: string;

    /**
     * Create-only property
     */
    DestinationOptions?: Record<string, any>;
  };
}
