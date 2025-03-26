/**
 * TypeScript definitions for AWS::Redshift::ClusterSecurityGroupIngress
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Redshift::ClusterSecurityGroupIngress
 */
export namespace AWS_Redshift_ClusterSecurityGroupIngress {
  /**
   * Resource Type definition for AWS::Redshift::ClusterSecurityGroupIngress
   */
  export type ClusterSecurityGroupIngressResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    CIDRIP?: string;

    /**
     * Create-only property
     */
    ClusterSecurityGroupName: string;

    /**
     * Create-only property
     */
    EC2SecurityGroupName?: string;

    /**
     * Create-only property
     */
    EC2SecurityGroupOwnerId?: string;
  };
}
