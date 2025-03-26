/**
 * TypeScript definitions for AWS::VpcLattice::ServiceNetwork
 * Generated from CloudFormation Resource Schema
 */

/**
 * A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.
 */
export namespace AWS_VpcLattice_ServiceNetwork {
  export type SharingConfigType = {
    enabled: boolean;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A service network is a logical boundary for a collection of services. You can associate services and VPCs with a service network.
   */
  export type ServiceNetworkResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LastUpdatedAt?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Default: "NONE"
     */
    AuthType?: string;

    Tags?: TagType[];

    SharingConfig?: SharingConfigType;
  };
}
