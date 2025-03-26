/**
 * TypeScript definitions for AWS::ElasticLoadBalancing::LoadBalancer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
 */
export namespace AWS_ElasticLoadBalancing_LoadBalancer {
  export type ListenersType = {
    PolicyNames?: string[];

    InstancePort: string;

    LoadBalancerPort: string;

    Protocol: string;

    SSLCertificateId?: string;

    InstanceProtocol?: string;
  };

  export type ConnectionDrainingPolicyType = {
    Enabled: boolean;

    Timeout?: number;
  };

  export type PoliciesType = {
    Attributes: Record<string, any>[];

    PolicyType: string;

    LoadBalancerPorts?: string[];

    PolicyName: string;

    InstancePorts?: string[];
  };

  export type AppCookieStickinessPolicyType = {
    CookieName: string;

    PolicyName: string;
  };

  export type LBCookieStickinessPolicyType = {
    CookieExpirationPeriod?: string;

    PolicyName?: string;
  };

  export type HealthCheckType = {
    Target: string;

    UnhealthyThreshold: string;

    Timeout: string;

    HealthyThreshold: string;

    Interval: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type AccessLoggingPolicyType = {
    Enabled: boolean;

    S3BucketName: string;

    EmitInterval?: number;

    S3BucketPrefix?: string;
  };

  export type ConnectionSettingsType = {
    IdleTimeout: number;
  };

  /**
   * Resource Type definition for AWS::ElasticLoadBalancing::LoadBalancer
   */
  export type LoadBalancerResourceType = {
    SecurityGroups?: string[];

    ConnectionDrainingPolicy?: ConnectionDrainingPolicyType;

    Policies?: PoliciesType[];

    /**
     * Create-only property
     */
    Scheme?: string;

    AvailabilityZones?: string[];

    SourceSecurityGroupOwnerAlias?: string;

    HealthCheck?: HealthCheckType;

    /**
     * Read-only property
     */
    CanonicalHostedZoneNameID?: string;

    /**
     * Read-only property
     */
    CanonicalHostedZoneName?: string;

    /**
     * Read-only property
     */
    DNSName?: string;

    AccessLoggingPolicy?: AccessLoggingPolicyType;

    Instances?: string[];

    /**
     * Create-only property
     */
    LoadBalancerName?: string;

    Listeners: ListenersType[];

    Subnets?: string[];

    CrossZone?: boolean;

    AppCookieStickinessPolicy?: AppCookieStickinessPolicyType[];

    LBCookieStickinessPolicy?: LBCookieStickinessPolicyType[];

    /**
     * Read-only property
     */
    Id?: string;

    SourceSecurityGroupGroupName?: string;

    ConnectionSettings?: ConnectionSettingsType;

    Tags?: TagType[];
  };
}
