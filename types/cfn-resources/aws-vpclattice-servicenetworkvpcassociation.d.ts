/**
 * TypeScript definitions for AWS::VpcLattice::ServiceNetworkVpcAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates a VPC with a service network.
 */
export namespace AWS_VpcLattice_ServiceNetworkVpcAssociation {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Associates a VPC with a service network.
   */
  export type ServiceNetworkVpcAssociationResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    SecurityGroupIds?: string[];

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
    Status?: string;

    /**
     * Read-only property
     */
    VpcId?: string;

    /**
     * Create-only property
     */
    VpcIdentifier?: string;

    Tags?: TagType[];
  };
}
