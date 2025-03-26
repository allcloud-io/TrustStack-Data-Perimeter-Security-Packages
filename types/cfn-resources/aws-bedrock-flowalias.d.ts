/**
 * TypeScript definitions for AWS::Bedrock::FlowAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::FlowAlias Resource Type
 */
export namespace AWS_Bedrock_FlowAlias {
  /**
   * Details about the routing configuration for a Flow alias.
   */
  export type FlowAliasRoutingConfigurationListItemType = {
    /**
     * Version.
     */
    FlowVersion?: string;
  };

  /**
   * A map of tag keys and values
   */
  export type TagsMapType = {};

  /**
   * Definition of AWS::Bedrock::FlowAlias Resource Type
   */
  export type FlowAliasResourceType = {
    /**
     * Arn of the Flow Alias
     * Read-only property
     */
    Arn?: string;

    /**
     * Arn representation of the Flow
     * Create-only property
     */
    FlowArn: string;

    /**
     * Time Stamp.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Description of the Resource.
     */
    Description?: string;

    /**
     * Identifier for a flow resource.
     * Read-only property
     */
    FlowId?: string;

    /**
     * Id for a Flow Alias generated at the server side.
     * Read-only property
     */
    Id?: string;

    /**
     * Name for a resource.
     */
    Name: string;

    /**
     * Routing configuration for a Flow alias.
     */
    RoutingConfiguration: FlowAliasRoutingConfigurationListItemType[];

    /**
     * Time Stamp.
     * Read-only property
     */
    UpdatedAt?: string;

    Tags?: TagsMapType;
  };
}
