/**
 * TypeScript definitions for AWS::DAX::SubnetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DAX::SubnetGroup
 */
export namespace AWS_DAX_SubnetGroup {
  /**
   * Resource Type definition for AWS::DAX::SubnetGroup
   */
  export type SubnetGroupResourceType = {
    Description?: string;

    /**
     * Read-only property
     */
    Id?: string;

    SubnetIds: string[];

    /**
     * Create-only property
     */
    SubnetGroupName?: string;
  };
}
