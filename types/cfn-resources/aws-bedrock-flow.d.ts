/**
 * TypeScript definitions for AWS::Bedrock::Flow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::Flow Resource Type
 */
export namespace AWS_Bedrock_Flow {
  /**
   * Condition flow node configuration
   */
  export type ConditionFlowNodeConfigurationType = {
    /**
     * List of conditions in a condition node
     */
    Conditions: FlowConditionType[];
  };

  /**
   * Condition branch for a condition node
   */
  export type FlowConditionType = {
    /**
     * Name of a condition in a flow
     */
    Name: string;

    /**
     * Expression for a condition in a flow
     */
    Expression?: string;
  };

  /**
   * Conditional connection configuration
   */
  export type FlowConditionalConnectionConfigurationType = {
    /**
     * Name of a condition in a flow
     */
    Condition: string;
  };

  /**
   * Flow connection
   */
  export type FlowConnectionType = {
    Type: FlowConnectionTypeType;

    /**
     * Name of a connection in a flow
     */
    Name: string;

    /**
     * Name of a node in a flow
     */
    Source: string;

    /**
     * Name of a node in a flow
     */
    Target: string;

    Configuration?: FlowConnectionConfigurationType;
  };

  /**
   * Connection configuration
   */
  export type FlowConnectionConfigurationType = {};

  /**
   * Connection type
   */
  export type FlowConnectionTypeType = {};

  /**
   * Data connection configuration
   */
  export type FlowDataConnectionConfigurationType = {
    /**
     * Name of a node output in a flow
     */
    SourceOutput: string;

    /**
     * Name of a node input in a flow
     */
    TargetInput: string;
  };

  /**
   * Flow definition
   */
  export type FlowDefinitionType = {
    /**
     * List of nodes in a flow
     */
    Nodes?: FlowNodeType[];

    /**
     * List of connections
     */
    Connections?: FlowConnectionType[];
  };

  /**
   * Validation for Flow
   */
  export type FlowValidationType = {
    /**
     * validation message
     */
    Message: string;
  };

  /**
   * List of flow validations
   */
  export type FlowValidationsType = {};

  /**
   * Internal mixin for flow node
   */
  export type FlowNodeType = {
    /**
     * Name of a node in a flow
     */
    Name: string;

    Type: FlowNodeTypeType;

    Configuration?: FlowNodeConfigurationType;

    /**
     * List of node inputs in a flow
     */
    Inputs?: FlowNodeInputType[];

    /**
     * List of node outputs in a flow
     */
    Outputs?: FlowNodeOutputType[];
  };

  /**
   * Node configuration in a flow
   */
  export type FlowNodeConfigurationType = {};

  /**
   * Type of input/output for a node in a flow
   */
  export type FlowNodeIODataTypeType = {};

  /**
   * Input to a node in a flow
   */
  export type FlowNodeInputType = {
    /**
     * Name of a node input in a flow
     */
    Name: string;

    Type: FlowNodeIODataTypeType;

    /**
     * Expression for a node input in a flow
     */
    Expression: string;
  };

  /**
   * Output of a node in a flow
   */
  export type FlowNodeOutputType = {
    /**
     * Name of a node output in a flow
     */
    Name: string;

    Type: FlowNodeIODataTypeType;
  };

  /**
   * Flow node types
   */
  export type FlowNodeTypeType = {};

  /**
   * Schema Type for Flow APIs
   */
  export type FlowStatusType = {};

  /**
   * Input flow node configuration
   */
  export type InputFlowNodeConfigurationType = {};

  /**
   * Agent flow node configuration
   */
  export type AgentFlowNodeConfigurationType = {
    /**
     * Arn representation of the Agent Alias.
     */
    AgentAliasArn: string;
  };

  /**
   * Knowledge base flow node configuration
   */
  export type KnowledgeBaseFlowNodeConfigurationType = {
    /**
     * Identifier of the KnowledgeBase
     */
    KnowledgeBaseId: string;

    /**
     * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
     */
    ModelId?: string;

    GuardrailConfiguration?: GuardrailConfigurationType;
  };

  /**
   * Lambda function flow node configuration
   */
  export type LambdaFunctionFlowNodeConfigurationType = {
    /**
     * ARN of a Lambda.
     */
    LambdaArn: string;
  };

  /**
   * Lex flow node configuration
   */
  export type LexFlowNodeConfigurationType = {
    /**
     * ARN of a Lex bot alias
     */
    BotAliasArn: string;

    /**
     * Lex bot locale id
     */
    LocaleId: string;
  };

  /**
   * Output flow node configuration
   */
  export type OutputFlowNodeConfigurationType = {};

  /**
   * Iterator flow node configuration
   */
  export type IteratorFlowNodeConfigurationType = {};

  /**
   * Collector flow node configuration
   */
  export type CollectorFlowNodeConfigurationType = {};

  /**
   * Prompt flow node configuration
   */
  export type PromptFlowNodeConfigurationType = {
    SourceConfiguration: PromptFlowNodeSourceConfigurationType;

    GuardrailConfiguration?: GuardrailConfigurationType;
  };

  /**
   * Storage flow node configuration
   */
  export type StorageFlowNodeConfigurationType = {
    ServiceConfiguration: StorageFlowNodeServiceConfigurationType;
  };

  /**
   * Retrieval flow node configuration
   */
  export type RetrievalFlowNodeConfigurationType = {
    ServiceConfiguration: RetrievalFlowNodeServiceConfigurationType;
  };

  /**
   * Inline prompt configuration for prompt node
   */
  export type PromptFlowNodeInlineConfigurationType = {
    TemplateType: PromptTemplateTypeType;

    TemplateConfiguration: PromptTemplateConfigurationType;

    /**
     * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
     */
    ModelId: string;

    InferenceConfiguration?: PromptInferenceConfigurationType;
  };

  /**
   * Resource prompt configuration for prompt node
   */
  export type PromptFlowNodeResourceConfigurationType = {
    /**
     * ARN of a prompt resource possibly with a version
     */
    PromptArn: string;
  };

  /**
   * Prompt source configuration for prompt node
   */
  export type PromptFlowNodeSourceConfigurationType = {};

  /**
   * storage service configuration for storage node
   */
  export type StorageFlowNodeServiceConfigurationType = {};

  /**
   * s3 storage configuration for storage node
   */
  export type StorageFlowNodeS3ConfigurationType = {
    /**
     * bucket name of an s3 that will be used for storage flow node configuration
     */
    BucketName: string;
  };

  /**
   * Retrieval service configuration for Retrieval node
   */
  export type RetrievalFlowNodeServiceConfigurationType = {};

  /**
   * s3 Retrieval configuration for Retrieval node
   */
  export type RetrievalFlowNodeS3ConfigurationType = {
    /**
     * bucket name of an s3 that will be used for Retrieval flow node configuration
     */
    BucketName: string;
  };

  /**
   * Model inference configuration
   */
  export type PromptInferenceConfigurationType = {};

  /**
   * Input variable
   */
  export type PromptInputVariableType = {
    /**
     * Name for an input variable
     */
    Name?: string;
  };

  /**
   * Prompt model inference configuration
   */
  export type PromptModelInferenceConfigurationType = {
    /**
     * Controls randomness, higher values increase diversity
     */
    Temperature?: number;

    /**
     * Cumulative probability cutoff for token selection
     */
    TopP?: number;

    /**
     * Maximum length of output
     */
    MaxTokens?: number;

    /**
     * List of stop sequences
     */
    StopSequences?: string[];
  };

  /**
   * Prompt template configuration
   */
  export type PromptTemplateConfigurationType = {};

  /**
   * Prompt template type
   */
  export type PromptTemplateTypeType = {};

  /**
   * A bucket, key and optional version pointing to an S3 object containing a UTF-8 encoded JSON string Definition with the same schema as the Definition property of this resource
   */
  export type S3LocationType = {
    /**
     * A bucket in S3
     */
    Bucket: string;

    /**
     * A object key in S3
     */
    Key: string;

    /**
     * The version of the the S3 object to use
     */
    Version?: string;
  };

  /**
   * When supplied with DefinitionString or DefinitionS3Location, substrings in the definition matching ${keyname} will be replaced with the associated value from this map
   */
  export type DefinitionSubstitutionsType = {};

  /**
   * Configuration for text prompt template
   */
  export type TextPromptTemplateConfigurationType = {
    /**
     * Prompt content for String prompt template
     */
    Text: string;

    /**
     * List of input variables
     */
    InputVariables?: PromptInputVariableType[];
  };

  /**
   * A map of tag keys and values
   */
  export type TagsMapType = {};

  /**
   * Configuration for a guardrail
   */
  export type GuardrailConfigurationType = {
    /**
     * Identifier for the guardrail, could be the id or the arn
     */
    GuardrailIdentifier?: string;

    /**
     * Version of the guardrail
     */
    GuardrailVersion?: string;
  };

  /**
   * Definition of AWS::Bedrock::Flow Resource Type
   */
  export type FlowResourceType = {
    /**
     * Arn representation of the Flow
     * Read-only property
     */
    Arn?: string;

    /**
     * Time Stamp.
     * Read-only property
     */
    CreatedAt?: string;

    Definition?: FlowDefinitionType;

    /**
     * A JSON string containing a Definition with the same schema as the Definition property of this resource
     */
    DefinitionString?: string;

    DefinitionS3Location?: S3LocationType;

    DefinitionSubstitutions?: DefinitionSubstitutionsType;

    /**
     * Description of the flow
     */
    Description?: string;

    /**
     * ARN of a IAM role
     */
    ExecutionRoleArn: string;

    /**
     * Identifier for a Flow
     * Read-only property
     */
    Id?: string;

    /**
     * Name for the flow
     */
    Name: string;

    /**
     * Read-only property
     */
    Status?: FlowStatusType;

    /**
     * Time Stamp.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * A KMS key ARN
     */
    CustomerEncryptionKeyArn?: string;

    /**
     * Read-only property
     */
    Validations?: FlowValidationsType;

    /**
     * Draft Version.
     * Read-only property
     */
    Version?: string;

    Tags?: TagsMapType;

    TestAliasTags?: TagsMapType;
  };
}
