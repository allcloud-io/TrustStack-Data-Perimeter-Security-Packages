/**
 * TypeScript definitions for AWS::CodeGuruProfiler::ProfilingGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource schema represents the Profiling Group resource in the Amazon CodeGuru Profiler service.
 */
export namespace AWS_CodeGuruProfiler_ProfilingGroup {
  export type ProfilingGroupArnType = {};

  export type IamArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     */
    Value: string;
  };

  /**
   * Unique identifier for each Channel in the notification configuration of a Profiling Group
   */
  export type ChannelIdType = {};

  /**
   * Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.
   */
  export type ChannelUriType = {};

  /**
   * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
   */
  export type ChannelType = {
    channelId?: ChannelIdType;

    channelUri: ChannelUriType;
  };

  /**
   * This resource schema represents the Profiling Group resource in the Amazon CodeGuru Profiler service.
   */
  export type ProfilingGroupResourceType = {
    /**
     * The name of the profiling group.
     * Create-only property
     */
    ProfilingGroupName: string;

    /**
     * The compute platform of the profiling group.
     * Create-only property
     */
    ComputePlatform?: string;

    /**
     * The agent permissions attached to this profiling group.
     */
    AgentPermissions?: Record<string, any>;

    /**
     * Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
     */
    AnomalyDetectionNotificationConfiguration?: ChannelType[];

    /**
     * The Amazon Resource Name (ARN) of the specified profiling group.
     * Read-only property
     */
    Arn?: ProfilingGroupArnType;

    /**
     * The tags associated with a profiling group.
     */
    Tags?: TagType[];
  };
}
