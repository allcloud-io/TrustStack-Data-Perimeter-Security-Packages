/**
 * TypeScript definitions for AWS::EntityResolution::IdNamespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * IdNamespace defined in AWS Entity Resolution service
 */
export namespace AWS_EntityResolution_IdNamespace {
  export type EntityNameType = {};

  export type AttributeNameType = {};

  export type IdNamespaceInputSourceType = {
    InputSourceARN: string;

    SchemaName?: EntityNameType;
  };

  export type IdNamespaceIdMappingWorkflowPropertiesType = {
    IdMappingType: string;

    RuleBasedProperties?: NamespaceRuleBasedPropertiesType;

    ProviderProperties?: NamespaceProviderPropertiesType;
  };

  export type NamespaceRuleBasedPropertiesType = {
    Rules?: RuleType[];

    RuleDefinitionTypes?: RuleDefinitionTypeType[];

    AttributeMatchingModel?: string;

    RecordMatchingModels?: RecordMatchingModelType[];
  };

  export type RecordMatchingModelType = {};

  export type RuleDefinitionTypeType = {};

  export type RuleType = {
    RuleName: string;

    MatchingKeys: AttributeNameType[];
  };

  export type NamespaceProviderPropertiesType = {
    ProviderServiceArn: ProviderServiceArnType;

    /**
     * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.
     */
    ProviderConfiguration?: Record<string, any>;
  };

  export type ProviderServiceArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * IdNamespace defined in AWS Entity Resolution service
   */
  export type IdNamespaceResourceType = {
    /**
     * Create-only property
     */
    IdNamespaceName: EntityNameType;

    Description?: string;

    InputSourceConfig?: IdNamespaceInputSourceType[];

    IdMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowPropertiesType[];

    Type: string;

    RoleArn?: string;

    /**
     * The arn associated with the IdNamespace
     * Read-only property
     */
    IdNamespaceArn?: string;

    /**
     * The date and time when the IdNamespace was created
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The date and time when the IdNamespace was updated
     * Read-only property
     */
    UpdatedAt?: string;

    Tags?: TagType[];
  };
}
