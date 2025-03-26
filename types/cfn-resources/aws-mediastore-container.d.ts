/**
 * TypeScript definitions for AWS::MediaStore::Container
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaStore::Container
 */
export namespace AWS_MediaStore_Container {
  export type MetricPolicyType = {
    ContainerLevelMetrics: string;

    MetricPolicyRules?: MetricPolicyRuleType[];
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type MetricPolicyRuleType = {
    ObjectGroupName: string;

    ObjectGroup: string;
  };

  export type CorsRuleType = {
    AllowedMethods?: string[];

    AllowedOrigins?: string[];

    ExposeHeaders?: string[];

    MaxAgeSeconds?: number;

    AllowedHeaders?: string[];
  };

  /**
   * Resource Type definition for AWS::MediaStore::Container
   */
  export type ContainerResourceType = {
    Policy?: string;

    MetricPolicy?: MetricPolicyType;

    /**
     * Read-only property
     */
    Endpoint?: string;

    /**
     * Create-only property
     */
    ContainerName: string;

    CorsPolicy?: CorsRuleType[];

    LifecyclePolicy?: string;

    AccessLoggingEnabled?: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
