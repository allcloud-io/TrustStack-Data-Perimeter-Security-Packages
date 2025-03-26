/**
 * TypeScript definitions for AWS::EC2::NetworkAcl
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a network ACL for your VPC.
 * To add a network ACL entry, see AWS::EC2::NetworkAclEntry.
 */
export namespace AWS_EC2_NetworkAcl {
  /**
   * Specifies a tag. For more information, see Resource tags.
   */
  export type TagType = {
    /**
     * The tag value.
     */
    Value: string;

    /**
     * The tag key.
     */
    Key: string;
  };

  /**
   * Specifies a network ACL for your VPC.
   * To add a network ACL entry, see AWS::EC2::NetworkAclEntry.
   */
  export type NetworkAclResourceType = {
    /**
     * The ID of the VPC for the network ACL.
     * Create-only property
     */
    VpcId: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The tags for the network ACL.
     */
    Tags?: TagType[];
  };
}
