/**
 * TypeScript definitions for AWS::Route53::HealthCheck
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53::HealthCheck.
 */
export namespace AWS_Route53_HealthCheck {
  /**
   * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
   */
  export type AlarmIdentifierType = {
    /**
     * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
     */
    Name: string;

    /**
     * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
     */
    Region: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type HealthCheckTagType = {
    /**
     * The key name of the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::Route53::HealthCheck.
   */
  export type HealthCheckResourceType = {
    /**
     * Read-only property
     */
    HealthCheckId?: string;

    /**
     * A complex type that contains information about the health check.
     */
    HealthCheckConfig: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    HealthCheckTags?: HealthCheckTagType[];
  };
}
