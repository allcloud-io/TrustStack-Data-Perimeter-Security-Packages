/**
 * TypeScript definitions for AWS::EC2::SecurityGroupVpcAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for the AWS::EC2::SecurityGroupVpcAssociation resource
 */
export namespace AWS_EC2_SecurityGroupVpcAssociation {
  export type SecurityGroupVpcAssociationStateType = {};

  /**
   * Resource type definition for the AWS::EC2::SecurityGroupVpcAssociation resource
   */
  export type SecurityGroupVpcAssociationResourceType = {
    /**
     * The group ID of the specified security group.
     * Create-only property
     */
    GroupId: string;

    /**
     * The ID of the VPC in the security group vpc association.
     * Create-only property
     */
    VpcId: string;

    /**
     * The owner of the VPC in the security group vpc association.
     * Read-only property
     */
    VpcOwnerId?: string;

    /**
     * The state of the security group vpc association.
     * Read-only property
     */
    State?: SecurityGroupVpcAssociationStateType;

    /**
     * The reason for the state of the security group vpc association.
     * Read-only property
     */
    StateReason?: string;
  };
}
