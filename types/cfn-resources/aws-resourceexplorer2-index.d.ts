/**
 * TypeScript definitions for AWS::ResourceExplorer2::Index
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ResourceExplorer2::Index Resource Type
 */
export namespace AWS_ResourceExplorer2_Index {
  export type IndexTypeType = {};

  export type TagMapType = {};

  export type IndexStateType = {};

  /**
   * Definition of AWS::ResourceExplorer2::Index Resource Type
   */
  export type IndexResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: TagMapType;

    Type: IndexTypeType;

    /**
     * Read-only property
     */
    IndexState?: IndexStateType;
  };
}
