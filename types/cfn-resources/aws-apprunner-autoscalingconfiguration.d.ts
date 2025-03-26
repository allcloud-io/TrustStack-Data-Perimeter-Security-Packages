/**
 * TypeScript definitions for AWS::AppRunner::AutoScalingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Describes an AWS App Runner automatic configuration resource that enables automatic scaling of instances used to process web requests. You can share an auto scaling configuration across multiple services.
 */
export namespace AWS_AppRunner_AutoScalingConfiguration {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Describes an AWS App Runner automatic configuration resource that enables automatic scaling of instances used to process web requests. You can share an auto scaling configuration across multiple services.
   */
  export type AutoScalingConfigurationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of this auto scaling configuration.
     * Read-only property
     */
    AutoScalingConfigurationArn?: string;

    /**
     * The customer-provided auto scaling configuration name.  When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.
     * Create-only property
     */
    AutoScalingConfigurationName?: string;

    /**
     * The revision of this auto scaling configuration. It's unique among all the active configurations ("Status": "ACTIVE") that share the same AutoScalingConfigurationName.
     * Read-only property
     */
    AutoScalingConfigurationRevision?: number;

    /**
     * The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.
     * Create-only property
     */
    MaxConcurrency?: number;

    /**
     * The maximum number of instances that an App Runner service scales up to. At most MaxSize instances actively serve traffic for your service.
     * Create-only property
     */
    MaxSize?: number;

    /**
     * The minimum number of instances that App Runner provisions for a service. The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
     * Create-only property
     */
    MinSize?: number;

    /**
     * It's set to true for the configuration with the highest Revision among all configurations that share the same AutoScalingConfigurationName. It's set to false otherwise. App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
     * Read-only property
     */
    Latest?: boolean;

    /**
     * A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
