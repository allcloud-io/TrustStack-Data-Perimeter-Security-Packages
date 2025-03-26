/**
 * TypeScript definitions for AWS::ResourceExplorer2::View
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ResourceExplorer2::View Resource Type
 */
export namespace AWS_ResourceExplorer2_View {
  export type IncludedPropertyType = {
    Name: string;
  };

  export type SearchFilterType = {
    FilterString: string;
  };

  export type TagMapType = {};

  /**
   * Definition of AWS::ResourceExplorer2::View Resource Type
   */
  export type ViewResourceType = {
    Filters?: SearchFilterType;

    IncludedProperties?: IncludedPropertyType[];

    /**
     * Create-only property
     */
    Scope?: string;

    Tags?: TagMapType;

    /**
     * Read-only property
     */
    ViewArn?: string;

    /**
     * Create-only property
     */
    ViewName: string;
  };
}
