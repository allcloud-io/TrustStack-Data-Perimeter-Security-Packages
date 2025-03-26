/**
 * TypeScript definitions for AWS::Neptune::DBParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Neptune::DBParameterGroup
 */
export namespace AWS_Neptune_DBParameterGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::Neptune::DBParameterGroup
   */
  export type DBParameterGroupResourceType = {
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
