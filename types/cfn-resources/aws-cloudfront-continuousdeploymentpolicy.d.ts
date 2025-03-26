/**
 * TypeScript definitions for AWS::CloudFront::ContinuousDeploymentPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a continuous deployment policy that routes a subset of production traffic from a primary distribution to a staging distribution.
 * After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This enables you to test changes to a distribution's configuration before moving all of your production traffic to the new configuration.
 * For more information, see Using CloudFront continuous deployment to safely test CDN configuration changes in the *Amazon CloudFront Developer Guide*.
 */
export namespace AWS_CloudFront_ContinuousDeploymentPolicy {
  /**
   * Contains the configuration for a continuous deployment policy.
   */
  export type ContinuousDeploymentPolicyConfigType = {
    /**
     * A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is `true`, this policy is enabled and in effect. When this value is `false`, this policy is not enabled and has no effect.
     */
    Enabled: boolean;

    /**
     * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
     */
    SingleHeaderPolicyConfig?: Record<string, any>;

    /**
     * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
     */
    SingleWeightPolicyConfig?: Record<string, any>;

    /**
     * The CloudFront domain name of the staging distribution. For example: `d111111abcdef8.cloudfront.net`.
     */
    StagingDistributionDnsNames: string[];

    /**
     * Contains the parameters for routing production traffic from your primary to staging distributions.
     */
    TrafficConfig?: TrafficConfigType;

    /**
     * The type of traffic configuration.
     */
    Type?: string;
  };

  /**
   * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
   */
  export type SessionStickinessConfigType = {
    /**
     * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes).
     */
    IdleTTL: number;

    /**
     * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes).
     */
    MaximumTTL: number;
  };

  /**
   * Determines which HTTP requests are sent to the staging distribution.
   */
  export type SingleHeaderConfigType = {
    /**
     * The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix `aws-cf-cd-`.
     */
    Header: string;

    /**
     * The request header value.
     */
    Value: string;
  };

  /**
   * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
   */
  export type SingleWeightConfigType = {
    /**
     * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
     */
    SessionStickinessConfig?: SessionStickinessConfigType;

    /**
     * The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.
     */
    Weight: number;
  };

  /**
   * The traffic configuration of your continuous deployment.
   */
  export type TrafficConfigType = {
    /**
     * Determines which HTTP requests are sent to the staging distribution.
     */
    SingleHeaderConfig?: SingleHeaderConfigType;

    /**
     * Contains the percentage of traffic to send to the staging distribution.
     */
    SingleWeightConfig?: SingleWeightConfigType;

    /**
     * The type of traffic configuration.
     */
    Type: string;
  };

  /**
   * Creates a continuous deployment policy that routes a subset of production traffic from a primary distribution to a staging distribution.
   * After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This enables you to test changes to a distribution's configuration before moving all of your production traffic to the new configuration.
   * For more information, see Using CloudFront continuous deployment to safely test CDN configuration changes in the *Amazon CloudFront Developer Guide*.
   */
  export type ContinuousDeploymentPolicyResourceType = {
    /**
     * Contains the configuration for a continuous deployment policy.
     */
    ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfigType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LastModifiedTime?: string;
  };
}
