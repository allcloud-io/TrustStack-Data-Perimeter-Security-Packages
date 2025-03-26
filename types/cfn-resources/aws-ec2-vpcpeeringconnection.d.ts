/**
 * TypeScript definitions for AWS::EC2::VPCPeeringConnection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPCPeeringConnection
 */
export namespace AWS_EC2_VPCPeeringConnection {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::VPCPeeringConnection
   */
  export type VPCPeeringConnectionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the VPC peer role for the peering connection in another AWS account.
     * Create-only property
     */
    PeerRoleArn?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
     * Create-only property
     */
    PeerVpcId: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request.
     * Create-only property
     */
    PeerRegion?: string;

    /**
     * The AWS account ID of the owner of the accepter VPC.
     * Create-only property
     */
    PeerOwnerId?: string;

    Tags?: TagType[];
  };
}
