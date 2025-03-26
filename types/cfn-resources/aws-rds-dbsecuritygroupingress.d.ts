/**
 * TypeScript definitions for AWS::RDS::DBSecurityGroupIngress
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroupIngress
 */
export namespace AWS_RDS_DBSecurityGroupIngress {
  /**
   * Resource Type definition for AWS::RDS::DBSecurityGroupIngress
   */
  export type DBSecurityGroupIngressResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    CIDRIP?: string;

    DBSecurityGroupName: string;

    EC2SecurityGroupId?: string;

    EC2SecurityGroupName?: string;

    EC2SecurityGroupOwnerId?: string;
  };
}
