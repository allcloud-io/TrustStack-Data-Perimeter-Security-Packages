/**
 * TypeScript definitions for AWS::Redshift::ClusterSecurityGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroup
 */
export namespace AWS_Redshift_ClusterSecurityGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::Redshift::ClusterSecurityGroup
   */
  export type ClusterSecurityGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Description: string;

    Tags?: TagType[];
  };
}
