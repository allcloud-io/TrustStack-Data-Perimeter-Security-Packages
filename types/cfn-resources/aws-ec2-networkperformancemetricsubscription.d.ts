/**
 * TypeScript definitions for AWS::EC2::NetworkPerformanceMetricSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::NetworkPerformanceMetricSubscription
 */
export namespace AWS_EC2_NetworkPerformanceMetricSubscription {
  /**
   * Resource Type definition for AWS::EC2::NetworkPerformanceMetricSubscription
   */
  export type NetworkPerformanceMetricSubscriptionResourceType = {
    /**
     * The starting Region or Availability Zone for metric to subscribe to.
     * Create-only property
     */
    Source: string;

    /**
     * The target Region or Availability Zone for the metric to subscribe to.
     * Create-only property
     */
    Destination: string;

    /**
     * The metric type to subscribe to.
     * Create-only property
     */
    Metric: string;

    /**
     * The statistic to subscribe to.
     * Create-only property
     */
    Statistic: string;
  };
}
