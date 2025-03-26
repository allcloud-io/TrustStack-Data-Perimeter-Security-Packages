/**
 * TypeScript definitions for AWS::Bedrock::AgentAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::AgentAlias Resource Type
 */
export namespace AWS_Bedrock_AgentAlias {
  /**
   * History event for an alias for an Agent.
   */
  export type AgentAliasHistoryEventType = {
    /**
     * Routing configuration for an Agent alias.
     */
    RoutingConfiguration?: AgentAliasRoutingConfigurationListItemType[];

    /**
     * Time Stamp.
     */
    EndDate?: string;

    /**
     * Time Stamp.
     */
    StartDate?: string;
  };

  /**
   * Details about the routing configuration for an Agent alias.
   */
  export type AgentAliasRoutingConfigurationListItemType = {
    /**
     * Agent Version.
     */
    AgentVersion: string;
  };

  /**
   * The statuses an Agent Alias can be in.
   */
  export type AgentAliasStatusType = {};

  /**
   * A map of tag keys and values
   */
  export type TagsMapType = {};

  /**
   * Definition of AWS::Bedrock::AgentAlias Resource Type
   */
  export type AgentAliasResourceType = {
    /**
     * Arn representation of the Agent Alias.
     * Read-only property
     */
    AgentAliasArn?: string;

    /**
     * The list of history events for an alias for an Agent.
     * Read-only property
     */
    AgentAliasHistoryEvents?: AgentAliasHistoryEventType[];

    /**
     * Id for an Agent Alias generated at the server side.
     * Read-only property
     */
    AgentAliasId?: string;

    /**
     * Name for a resource.
     */
    AgentAliasName: string;

    /**
     * Read-only property
     */
    AgentAliasStatus?: AgentAliasStatusType;

    /**
     * Identifier for a resource.
     * Create-only property
     */
    AgentId: string;

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
     * Routing configuration for an Agent alias.
     */
    RoutingConfiguration?: AgentAliasRoutingConfigurationListItemType[];

    Tags?: TagsMapType;

    /**
     * Time Stamp.
     * Read-only property
     */
    UpdatedAt?: string;
  };
}
