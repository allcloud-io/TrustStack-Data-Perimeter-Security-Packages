/**
 * TypeScript definitions for AWS::EntityResolution::MatchingWorkflow
 * Generated from CloudFormation Resource Schema
 */

/**
 * MatchingWorkflow defined in AWS Entity Resolution service
 */
export namespace AWS_EntityResolution_MatchingWorkflow {
  export type EntityNameType = {};

  export type DescriptionType = {};

  export type AttributeNameType = {};

  /**
   * The SchemaMapping arn associated with the Schema
   */
  export type SchemaMappingArnType = {};

  export type KMSArnType = {};

  /**
   * The default MatchingWorkflow arn
   */
  export type MatchingWorkflowArnType = {};

  /**
   * The time of this MatchingWorkflow got created
   */
  export type CreatedAtType = {};

  /**
   * The time of this MatchingWorkflow got last updated at
   */
  export type UpdatedAtType = {};

  export type InputSourceType = {
    /**
     * An Glue table ARN for the input source table
     */
    InputSourceARN: string;

    SchemaArn: SchemaMappingArnType;

    ApplyNormalization?: boolean;
  };

  export type OutputSourceType = {
    /**
     * The S3 path to which Entity Resolution will write the output table
     */
    OutputS3Path: string;

    Output: OutputAttributeType[];

    KMSArn?: KMSArnType;

    ApplyNormalization?: boolean;
  };

  export type OutputAttributeType = {
    Name: AttributeNameType;

    Hashed?: boolean;
  };

  export type ResolutionTypeType = {};

  export type ResolutionTechniquesType = {
    ResolutionType?: ResolutionTypeType;

    RuleBasedProperties?: RuleBasedPropertiesType;

    ProviderProperties?: ProviderPropertiesType;
  };

  export type IncrementalRunConfigType = {
    IncrementalRunType: string;
  };

  export type RuleBasedPropertiesType = {
    Rules: RuleType[];

    AttributeMatchingModel: string;

    MatchPurpose?: string;
  };

  export type RuleType = {
    RuleName: string;

    MatchingKeys: AttributeNameType[];
  };

  export type ProviderPropertiesType = {
    /**
     * Arn of the Provider service being used.
     */
    ProviderServiceArn: string;

    /**
     * Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
     */
    ProviderConfiguration?: Record<string, any>;

    IntermediateSourceConfiguration?: IntermediateSourceConfigurationType;
  };

  export type IntermediateSourceConfigurationType = {
    /**
     * The s3 path that would be used to stage the intermediate data being generated during workflow execution.
     */
    IntermediateS3Path: string;
  };

  /**
   * A key-value pair to associate with a resource
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
   * MatchingWorkflow defined in AWS Entity Resolution service
   */
  export type MatchingWorkflowResourceType = {
    /**
     * The name of the MatchingWorkflow
     * Create-only property
     */
    WorkflowName: EntityNameType;

    /**
     * The description of the MatchingWorkflow
     */
    Description?: DescriptionType;

    InputSourceConfig: InputSourceType[];

    OutputSourceConfig: OutputSourceType[];

    ResolutionTechniques: ResolutionTechniquesType;

    RoleArn: string;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    WorkflowArn?: MatchingWorkflowArnType;

    /**
     * Read-only property
     */
    CreatedAt?: CreatedAtType;

    /**
     * Read-only property
     */
    UpdatedAt?: UpdatedAtType;

    IncrementalRunConfig?: IncrementalRunConfigType;
  };
}
