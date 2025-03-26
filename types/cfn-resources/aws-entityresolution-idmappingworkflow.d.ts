/**
 * TypeScript definitions for AWS::EntityResolution::IdMappingWorkflow
 * Generated from CloudFormation Resource Schema
 */

/**
 * IdMappingWorkflow defined in AWS Entity Resolution service
 */
export namespace AWS_EntityResolution_IdMappingWorkflow {
  export type IdMappingWorkflowOutputSourceType = {
    KMSArn?: KMSArnType;

    /**
     * The S3 path to which Entity Resolution will write the output table
     */
    OutputS3Path: string;
  };

  export type DescriptionType = {};

  export type IdMappingWorkflowInputSourceType = {
    Type?: string;

    /**
     * An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN
     */
    InputSourceARN: string;

    SchemaArn?: SchemaMappingArnType;
  };

  export type EntityNameType = {};

  export type IdMappingTechniquesType = {
    RuleBasedProperties?: IdMappingRuleBasedPropertiesType;

    ProviderProperties?: ProviderPropertiesType;

    IdMappingType?: string;
  };

  /**
   * The time of this IdMappingWorkflow got created
   */
  export type CreatedAtType = {};

  /**
   * The default IdMappingWorkflow arn
   */
  export type IdMappingWorkflowArnType = {};

  /**
   * The time of this IdMappingWorkflow got last updated at
   */
  export type UpdatedAtType = {};

  export type IdMappingRuleBasedPropertiesType = {
    AttributeMatchingModel: string;

    RuleDefinitionType?: string;

    Rules?: RuleType[];

    RecordMatchingModel: string;
  };

  export type KMSArnType = {};

  export type ProviderPropertiesType = {
    IntermediateSourceConfiguration?: IntermediateSourceConfigurationType;

    /**
     * Arn of the Provider Service being used.
     */
    ProviderServiceArn: string;

    /**
     * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
     */
    ProviderConfiguration?: Record<string, any>;
  };

  export type IntermediateSourceConfigurationType = {
    /**
     * The s3 path that would be used to stage the intermediate data being generated during workflow execution.
     */
    IntermediateS3Path: string;
  };

  /**
   * The SchemaMapping arn associated with the Schema
   */
  export type SchemaMappingArnType = {};

  export type AttributeNameType = {};

  export type RuleType = {
    MatchingKeys: AttributeNameType[];

    RuleName: string;
  };

  /**
   * A key-value pair to associate with a resource
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * IdMappingWorkflow defined in AWS Entity Resolution service
   */
  export type IdMappingWorkflowResourceType = {
    /**
     * The description of the IdMappingWorkflow
     */
    Description?: DescriptionType;

    InputSourceConfig: IdMappingWorkflowInputSourceType[];

    IdMappingTechniques: IdMappingTechniquesType;

    /**
     * The name of the IdMappingWorkflow
     * Create-only property
     */
    WorkflowName: EntityNameType;

    /**
     * Read-only property
     */
    CreatedAt?: CreatedAtType;

    OutputSourceConfig?: IdMappingWorkflowOutputSourceType[];

    /**
     * Read-only property
     */
    WorkflowArn?: IdMappingWorkflowArnType;

    /**
     * Read-only property
     */
    UpdatedAt?: UpdatedAtType;

    RoleArn: string;

    Tags?: TagType[];
  };
}
