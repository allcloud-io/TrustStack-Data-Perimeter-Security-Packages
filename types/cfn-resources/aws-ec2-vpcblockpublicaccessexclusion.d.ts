/**
 * TypeScript definitions for AWS::EC2::VPCBlockPublicAccessExclusion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPCBlockPublicAccessExclusion.
 */
export namespace AWS_EC2_VPCBlockPublicAccessExclusion {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::EC2::VPCBlockPublicAccessExclusion.
   */
  export type VPCBlockPublicAccessExclusionResourceType = {
    /**
     * The ID of the exclusion
     * Read-only property
     */
    ExclusionId?: string;

    /**
     * The desired Block Public Access Exclusion Mode for a specific VPC/Subnet.
     */
    InternetGatewayExclusionMode: string;

    /**
     * The ID of the vpc. Required only if you don't specify SubnetId.
     * Create-only property
     */
    VpcId?: string;

    /**
     * The ID of the subnet. Required only if you don't specify VpcId
     * Create-only property
     */
    SubnetId?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
