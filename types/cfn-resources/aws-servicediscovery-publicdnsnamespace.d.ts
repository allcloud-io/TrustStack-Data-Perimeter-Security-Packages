/**
 * TypeScript definitions for AWS::ServiceDiscovery::PublicDnsNamespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
 */
export namespace AWS_ServiceDiscovery_PublicDnsNamespace {
  export type SOAType = {
    TTL?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type PropertiesType = {
    DnsProperties?: PublicDnsPropertiesMutableType;
  };

  export type PublicDnsPropertiesMutableType = {
    SOA?: SOAType;
  };

  /**
   * Resource Type definition for AWS::ServiceDiscovery::PublicDnsNamespace
   */
  export type PublicDnsNamespaceResourceType = {
    Description?: string;

    /**
     * Read-only property
     */
    HostedZoneId?: string;

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
