/**
 * TypeScript definitions for AWS::VpcLattice::ServiceNetworkServiceAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates a service with a service network.
 */
export namespace AWS_VpcLattice_ServiceNetworkServiceAssociation {
  export type DnsEntryType = {
    DomainName?: string;

    HostedZoneId?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Associates a service with a service network.
   */
  export type ServiceNetworkServiceAssociationResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    DnsEntry?: DnsEntryType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    ServiceNetworkArn?: string;

    /**
     * Read-only property
     */
    ServiceNetworkId?: string;

    /**
     * Create-only property
     */
    ServiceNetworkIdentifier?: string;

    /**
     * Read-only property
     */
    ServiceNetworkName?: string;

    /**
     * Read-only property
     */
    ServiceArn?: string;

    /**
     * Read-only property
     */
    ServiceId?: string;

    /**
     * Create-only property
     */
    ServiceIdentifier?: string;

    /**
     * Read-only property
     */
    ServiceName?: string;

    /**
     * Read-only property
     */
    Status?: string;

    Tags?: TagType[];
  };
}
