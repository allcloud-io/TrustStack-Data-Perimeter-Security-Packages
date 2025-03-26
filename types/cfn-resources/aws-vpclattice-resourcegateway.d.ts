/**
 * TypeScript definitions for AWS::VpcLattice::ResourceGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a resource gateway for a service.
 */
export namespace AWS_VpcLattice_ResourceGateway {
  export type TagType = {
    Value?: string;

    Key: string;
  };

  /**
   * Creates a resource gateway for a service.
   */
  export type ResourceGatewayResourceType = {
    /**
     * Create-only property
     */
    IpAddressType?: string;

    /**
     * Create-only property
     */
    VpcIdentifier?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of one or more subnets in which to create an endpoint network interface.
     * Create-only property
     */
    SubnetIds?: string[];

    /**
     * The ID of one or more security groups to associate with the endpoint network interface.
     */
    SecurityGroupIds?: string[];

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
