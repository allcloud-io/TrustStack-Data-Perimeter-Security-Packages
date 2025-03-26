/**
 * TypeScript definitions for AWS::DocDB::DBClusterParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DocDB::DBClusterParameterGroup
 */
export namespace AWS_DocDB_DBClusterParameterGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::DocDB::DBClusterParameterGroup
   */
  export type DBClusterParameterGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Description: string;

    Parameters: Record<string, any>;

    /**
     * Create-only property
     */
    Family: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
