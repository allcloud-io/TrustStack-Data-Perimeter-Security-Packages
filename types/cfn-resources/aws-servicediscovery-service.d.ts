/**
 * TypeScript definitions for AWS::ServiceDiscovery::Service
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceDiscovery::Service
 */
export namespace AWS_ServiceDiscovery_Service {
  export type HealthCheckCustomConfigType = {
    FailureThreshold?: number;
  };

  export type DnsConfigType = {
    DnsRecords: DnsRecordType[];

    RoutingPolicy?: string;

    NamespaceId?: string;
  };

  export type HealthCheckConfigType = {
    Type: string;

    ResourcePath?: string;

    FailureThreshold?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type DnsRecordType = {
    TTL: number;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::ServiceDiscovery::Service
   */
  export type ServiceResourceType = {
    /**
     * Create-only property
     */
    Type?: string;

    Description?: string;

    /**
     * Create-only property
     */
    HealthCheckCustomConfig?: HealthCheckCustomConfigType;

    DnsConfig?: DnsConfigType;

    ServiceAttributes?: Record<string, any>;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    NamespaceId?: string;

    HealthCheckConfig?: HealthCheckConfigType;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
