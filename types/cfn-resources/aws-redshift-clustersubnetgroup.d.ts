/**
 * TypeScript definitions for AWS::Redshift::ClusterSubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies an Amazon Redshift subnet group.
 */
export namespace AWS_Redshift_ClusterSubnetGroup {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Specifies an Amazon Redshift subnet group.
   */
  export type ClusterSubnetGroupResourceType = {
    /**
     * The description of the parameter group.
     */
    Description: string;

    /**
     * The list of VPC subnet IDs
     */
    SubnetIds: string[];

    /**
     * The list of tags for the cluster parameter group.
     */
    Tags?: TagType[];

    /**
     * This name must be unique for all subnet groups that are created by your AWS account. If costumer do not provide it, cloudformation will generate it. Must not be "Default".
     * Read-only property
     */
    ClusterSubnetGroupName?: string;
  };
}
