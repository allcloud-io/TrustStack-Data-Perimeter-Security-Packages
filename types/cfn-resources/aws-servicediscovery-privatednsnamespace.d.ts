/**
 * TypeScript definitions for AWS::ServiceDiscovery::PrivateDnsNamespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace
 */
export namespace AWS_ServiceDiscovery_PrivateDnsNamespace {
  export type PrivateDnsPropertiesMutableType = {
    SOA?: SOAType;
  };

  export type SOAType = {
    TTL?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type PropertiesType = {
    DnsProperties?: PrivateDnsPropertiesMutableType;
  };

  /**
   * Resource Type definition for AWS::ServiceDiscovery::PrivateDnsNamespace
   */
  export type PrivateDnsNamespaceResourceType = {
    Description?: string;

    /**
     * Read-only property
     */
    HostedZoneId?: string;

    /**
     * Create-only property
     */
    Vpc: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Properties?: PropertiesType;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
