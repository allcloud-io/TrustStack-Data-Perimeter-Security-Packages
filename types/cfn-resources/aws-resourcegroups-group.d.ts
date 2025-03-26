/**
 * TypeScript definitions for AWS::ResourceGroups::Group
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for ResourceGroups::Group
 */
export namespace AWS_ResourceGroups_Group {
  export type ResourceQueryType = {
    Type?: string;

    Query?: QueryType;
  };

  export type QueryType = {
    ResourceTypeFilters?: string[];

    StackIdentifier?: string;

    TagFilters?: TagFilterType[];
  };

  export type TagFilterType = {
    Key?: string;

    Values?: string[];
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  export type ConfigurationType = {};

  export type ConfigurationItemType = {
    Type?: string;

    Parameters?: ConfigurationParameterType[];
  };

  export type ConfigurationParameterType = {
    Name?: string;

    Values?: string[];
  };

  /**
   * Schema for ResourceGroups::Group
   */
  export type GroupResourceType = {
    /**
     * The name of the resource group
     * Create-only property
     */
    Name: string;

    /**
     * The description of the resource group
     */
    Description?: string;

    ResourceQuery?: ResourceQueryType;

    Tags?: TagType[];

    /**
     * The Resource Group ARN.
     * Read-only property
     */
    Arn?: string;

    Configuration?: ConfigurationType;

    Resources?: string[];
  };
}
