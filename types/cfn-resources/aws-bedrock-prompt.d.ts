/**
 * TypeScript definitions for AWS::Bedrock::Prompt
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::Prompt Resource Type
 */
export namespace AWS_Bedrock_Prompt {
  /**
   * Prompt template type
   */
  export type PromptTemplateTypeType = {};

  /**
   * Prompt variant
   */
  export type PromptVariantType = {
    /**
     * Name for a variant.
     */
    Name: string;

    TemplateType: PromptTemplateTypeType;

    TemplateConfiguration: PromptTemplateConfigurationType;

    /**
     * ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
     */
    ModelId?: string;

    InferenceConfiguration?: PromptInferenceConfigurationType;

    GenAiResource?: PromptGenAiResourceType;

    AdditionalModelRequestFields?: AdditionalModelRequestFieldsType;

    Metadata?: PromptMetadataListType;
  };

  /**
   * Configuration for text prompt template
   */
  export type TextPromptTemplateConfigurationType = {
    /**
     * Prompt content for String prompt template
     */
    Text?: string;

    TextS3Location?: TextS3LocationType;

    /**
     * List of input variables
     */
    InputVariables?: PromptInputVariableType[];

    CachePoint?: CachePointBlockType;
  };

  /**
   * Configuration for chat prompt template
   */
  export type ChatPromptTemplateConfigurationType = {
    /**
     * List of messages for chat prompt template
     */
    Messages: MessageType[];

    /**
     * Configuration for chat prompt template
     */
    System?: SystemContentBlockType[];

    ToolConfiguration?: ToolConfigurationType;

    /**
     * List of input variables
     */
    InputVariables?: PromptInputVariableType[];
  };

  /**
   * Prompt template configuration
   */
  export type PromptTemplateConfigurationType = {};

  /**
   * The identifier for the S3 resource.
   */
  export type TextS3LocationType = {
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
   * Conversation roles for the chat prompt
   */
  export type ConversationRoleType = {};

  /**
   * Configuration for chat prompt template
   */
  export type ContentBlockType = {};

  /**
   * Configuration for chat prompt template
   */
  export type SystemContentBlockType = {};

  /**
   * Chat prompt Message
   */
  export type MessageType = {
    Role: ConversationRoleType;

    /**
     * List of Content Blocks
     */
    Content: ContentBlockType[];
  };

  /**
   * Tool input schema
   */
  export type ToolInputSchemaType = {};

  /**
   * Tool specification
   */
  export type ToolSpecificationType = {
    /**
     * Tool name
     */
    Name: string;

    Description?: string;

    InputSchema: ToolInputSchemaType;
  };

  /**
   * Tool details
   */
  export type ToolType = {};

  /**
   * Auto Tool choice
   */
  export type AutoToolChoiceType = {};

  /**
   * Any Tool choice
   */
  export type AnyToolChoiceType = {};

  /**
   * Specific Tool choice
   */
  export type SpecificToolChoiceType = {
    /**
     * Tool name
     */
    Name: string;
  };

  /**
   * Tool choice
   */
  export type ToolChoiceType = {};

  /**
   * Tool configuration
   */
  export type ToolConfigurationType = {
    /**
     * List of Tools
     */
    Tools: ToolType[];

    ToolChoice?: ToolChoiceType;
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
   * A map of tag keys and values
   */
  export type TagsMapType = {};

  /**
   * Target Agent to invoke with Prompt
   */
  export type PromptAgentResourceType = {
    /**
     * Arn representation of the Agent Alias.
     */
    AgentIdentifier: string;
  };

  /**
   * Target resource to invoke with Prompt
   */
  export type PromptGenAiResourceType = {};

  /**
   * CachePointBlock
   */
  export type CachePointBlockType = {
    Type: CachePointTypeType;
  };

  /**
   * CachePoint types for CachePointBlock
   */
  export type CachePointTypeType = {};

  /**
   * Contains model-specific configurations
   */
  export type AdditionalModelRequestFieldsType = {};

  /**
   * List of metadata to associate with the prompt variant.
   */
  export type PromptMetadataListType = {};

  /**
   * Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant.
   */
  export type PromptMetadataEntryType = {
    Key: PromptMetadataKeyType;

    Value: PromptMetadataValueType;
  };

  /**
   * The key of a metadata tag for a prompt variant.
   */
  export type PromptMetadataKeyType = {};

  /**
   * The value of a metadata tag for a prompt variant.
   */
  export type PromptMetadataValueType = {};

  /**
   * Definition of AWS::Bedrock::Prompt Resource Type
   */
  export type PromptResourceType = {
    /**
     * ARN of a prompt resource possibly with a version
     * Read-only property
     */
    Arn?: string;

    /**
     * Time Stamp.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Name for a variant.
     */
    DefaultVariant?: string;

    /**
     * Name for a prompt resource.
     */
    Description?: string;

    /**
     * Identifier for a Prompt
     * Read-only property
     */
    Id?: string;

    /**
     * Name for a prompt resource.
     */
    Name: string;

    /**
     * Time Stamp.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * List of prompt variants
     */
    Variants?: PromptVariantType[];

    Tags?: TagsMapType;

    /**
     * A KMS key ARN
     */
    CustomerEncryptionKeyArn?: string;

    /**
     * Draft Version.
     * Read-only property
     */
    Version?: string;
  };
}
