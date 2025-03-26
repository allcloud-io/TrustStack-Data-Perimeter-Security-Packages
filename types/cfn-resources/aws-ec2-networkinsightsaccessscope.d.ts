/**
 * TypeScript definitions for AWS::EC2::NetworkInsightsAccessScope
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EC2::NetworkInsightsAccessScope
 */
export namespace AWS_EC2_NetworkInsightsAccessScope {
  export type TagType = {
    Key: string;

    Value?: string;
  };

  export type AccessScopePathRequestType = {
    Source?: PathStatementRequestType;

    Destination?: PathStatementRequestType;

    ThroughResources?: ThroughResourcesStatementRequestType[];
  };

  export type PathStatementRequestType = {
    PacketHeaderStatement?: PacketHeaderStatementRequestType;

    ResourceStatement?: ResourceStatementRequestType;
  };

  export type PacketHeaderStatementRequestType = {
    SourceAddresses?: string[];

    DestinationAddresses?: string[];

    SourcePorts?: string[];

    DestinationPorts?: string[];

    SourcePrefixLists?: string[];

    DestinationPrefixLists?: string[];

    Protocols?: ProtocolType[];
  };

  export type ProtocolType = {};

  export type ResourceStatementRequestType = {
    Resources?: string[];

    ResourceTypes?: string[];
  };

  export type ThroughResourcesStatementRequestType = {
    ResourceStatement?: ResourceStatementRequestType;
  };

  /**
   * Resource schema for AWS::EC2::NetworkInsightsAccessScope
   */
  export type NetworkInsightsAccessScopeResourceType = {
    /**
     * Read-only property
     */
    NetworkInsightsAccessScopeId?: string;

    /**
     * Read-only property
     */
    NetworkInsightsAccessScopeArn?: string;

    /**
     * Read-only property
     */
    CreatedDate?: string;

    /**
     * Read-only property
     */
    UpdatedDate?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    MatchPaths?: AccessScopePathRequestType[];

    /**
     * Create-only property
     */
    ExcludePaths?: AccessScopePathRequestType[];
  };
}
