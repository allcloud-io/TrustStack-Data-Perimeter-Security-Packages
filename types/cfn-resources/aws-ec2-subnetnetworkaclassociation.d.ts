/**
 * TypeScript definitions for AWS::EC2::SubnetNetworkAclAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::SubnetNetworkAclAssociation
 */
export namespace AWS_EC2_SubnetNetworkAclAssociation {
  /**
   * Resource Type definition for AWS::EC2::SubnetNetworkAclAssociation
   */
  export type SubnetNetworkAclAssociationResourceType = {
    /**
     * The ID of the subnet
     * Create-only property
     */
    SubnetId: string;

    /**
     * The ID of the network ACL
     * Create-only property
     */
    NetworkAclId: string;

    /**
     * Read-only property
     */
    AssociationId?: string;
  };
}
