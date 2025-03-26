/**
 * TypeScript definitions for AWS::RDS::DBSecurityGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::RDS::DBSecurityGroup
 */
export namespace AWS_RDS_DBSecurityGroup {
  export type IngressType = {
    CIDRIP?: string;

    EC2SecurityGroupId?: string;

    EC2SecurityGroupName?: string;

    EC2SecurityGroupOwnerId?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::RDS::DBSecurityGroup
   */
  export type DBSecurityGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    DBSecurityGroupIngress: IngressType[];

    /**
     * Create-only property
     */
    EC2VpcId?: string;

    /**
     * Create-only property
     */
    GroupDescription: string;

    Tags?: TagType[];
  };
}
