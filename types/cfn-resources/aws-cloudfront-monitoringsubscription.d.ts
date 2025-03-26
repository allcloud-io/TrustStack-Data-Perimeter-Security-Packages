/**
 * TypeScript definitions for AWS::CloudFront::MonitoringSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 */
export namespace AWS_CloudFront_MonitoringSubscription {
  /**
   * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   */
  export type MonitoringSubscriptionType = {
    /**
     * A subscription configuration for additional CloudWatch metrics.
     */
    RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfigType;
  };

  /**
   * A subscription configuration for additional CloudWatch metrics.
   */
  export type RealtimeMetricsSubscriptionConfigType = {
    /**
     * A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
     */
    RealtimeMetricsSubscriptionStatus: string;
  };

  /**
   * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   */
  export type MonitoringSubscriptionResourceType = {
    /**
     * The ID of the distribution that you are enabling metrics for.
     * Create-only property
     */
    DistributionId: string;

    /**
     * A subscription configuration for additional CloudWatch metrics.
     */
    MonitoringSubscription: MonitoringSubscriptionType;
  };
}
