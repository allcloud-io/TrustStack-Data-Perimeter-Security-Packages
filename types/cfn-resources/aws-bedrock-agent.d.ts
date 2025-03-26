/**
 * TypeScript definitions for AWS::Bedrock::Agent
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::Agent Resource Type
 */
export namespace AWS_Bedrock_Agent {
  /**
   * Contains information about the API Schema for the Action Group
   */
  export type APISchemaType = {};

  /**
   * Type of Executors for an Action Group
   */
  export type ActionGroupExecutorType = {};

  /**
   * Action Group Signature for a BuiltIn Action
   */
  export type ActionGroupSignatureType = {};

  /**
   * State of the action group
   */
  export type ActionGroupStateType = {};

  /**
   * Contains the information of an Agent Action Group
   */
  export type AgentActionGroupType = {
    /**
     * Name of the action group
     */
    ActionGroupName: string;

    /**
     * Description of action group
     */
    Description?: string;

    ParentActionGroupSignature?: ActionGroupSignatureType;

    ActionGroupExecutor?: ActionGroupExecutorType;

    ApiSchema?: APISchemaType;

    ActionGroupState?: ActionGroupStateType;

    FunctionSchema?: FunctionSchemaType;

    /**
     * Specifies whether to allow deleting action group while it is in use.
     */
    SkipResourceInUseCheckOnDelete?: boolean;
  };

  /**
   * Agent collaboration state
   */
  export type AgentCollaborationType = {};

  /**
   * Agent Collaborator
   */
  export type AgentCollaboratorType = {
    /**
     * Agent descriptor for agent collaborator
     */
    AgentDescriptor: Record<string, any>;

    /**
     * Agent collaborator instruction
     */
    CollaborationInstruction: string;

    /**
     * Agent collaborator name
     */
    CollaboratorName: string;

    RelayConversationHistory?: RelayConversationHistoryType;
  };

  /**
   * Agent Knowledge Base
   */
  export type AgentKnowledgeBaseType = {
    /**
     * Identifier for a resource.
     */
    KnowledgeBaseId: string;

    /**
     * Description of the Resource.
     */
    Description: string;

    KnowledgeBaseState?: KnowledgeBaseStateType;
  };

  /**
   * Schema Type for Action APIs.
   */
  export type AgentStatusType = {};

  /**
   * Creation Mode for Prompt Configuration.
   */
  export type CreationModeType = {};

  /**
   * Structure for custom orchestration
   */
  export type CustomOrchestrationType = {
    Executor?: OrchestrationExecutorType;
  };

  /**
   * Custom control of action execution
   */
  export type CustomControlMethodType = {};

  /**
   * ARN or name of a Bedrock model.
   */
  export type FoundationModelType = {};

  /**
   * Function definition
   */
  export type FunctionType = {
    /**
     * Name for a resource.
     */
    Name: string;

    /**
     * Description of function
     */
    Description?: string;

    Parameters?: ParameterMapType;

    RequireConfirmation?: RequireConfirmationType;
  };

  /**
   * Schema of Functions
   */
  export type FunctionSchemaType = {
    /**
     * List of Function definitions
     */
    Functions: FunctionType[];
  };

  /**
   * Configuration for a guardrail.
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
   * Configuration for memory storage
   */
  export type MemoryConfigurationType = {
    EnabledMemoryTypes?: EnabledMemoryTypesType;

    /**
     * Maximum number of days to store session details
     */
    StorageDays?: number;

    SessionSummaryConfiguration?: SessionSummaryConfigurationType;
  };

  /**
   * Types of session storage persisted in memory
   */
  export type EnabledMemoryTypesType = {};

  /**
   * Memory type
   */
  export type MemoryTypeType = {};

  /**
   * Configuration for Session Summarization
   */
  export type SessionSummaryConfigurationType = {
    /**
     * Maximum number of Sessions to Summarize
     */
    MaxRecentSessions?: number;
  };

  /**
   * Configuration for inference in prompt configuration
   */
  export type InferenceConfigurationType = {
    /**
     * Controls randomness, higher values increase diversity
     */
    Temperature?: number;

    /**
     * Cumulative probability cutoff for token selection
     */
    TopP?: number;

    /**
     * Sample from the k most likely next tokens
     */
    TopK?: number;

    /**
     * Maximum length of output
     */
    MaximumLength?: number;

    /**
     * List of stop sequences
     */
    StopSequences?: string[];
  };

  /**
   * State of the knowledge base; whether it is enabled or disabled
   */
  export type KnowledgeBaseStateType = {};

  /**
   * Types of executors for custom orchestration strategy
   */
  export type OrchestrationExecutorType = {
    /**
     * ARN of a Lambda.
     */
    Lambda: string;
  };

  /**
   * Types of orchestration strategy for agents
   */
  export type OrchestrationTypeType = {};

  /**
   * Parameter detail
   */
  export type ParameterDetailType = {
    /**
     * Description of function parameter.
     */
    Description?: string;

    Type: TypeType;

    /**
     * Information about if a parameter is required for function call. Default to false.
     */
    Required?: boolean;
  };

  /**
   * A map of parameter name and detail
   */
  export type ParameterMapType = {};

  /**
   * BasePromptConfiguration per Prompt Type.
   */
  export type PromptConfigurationType = {
    PromptType?: PromptTypeType;

    PromptCreationMode?: CreationModeType;

    PromptState?: PromptStateType;

    /**
     * Base Prompt Template.
     */
    BasePromptTemplate?: string;

    InferenceConfiguration?: InferenceConfigurationType;

    ParserMode?: CreationModeType;

    FoundationModel?: FoundationModelType;
  };

  /**
   * Configuration for prompt override.
   */
  export type PromptOverrideConfigurationType = {
    /**
     * List of BasePromptConfiguration
     */
    PromptConfigurations: PromptConfigurationType[];

    /**
     * ARN of a Lambda.
     */
    OverrideLambda?: string;
  };

  /**
   * Prompt State.
   */
  export type PromptStateType = {};

  /**
   * Prompt Type.
   */
  export type PromptTypeType = {};

  /**
   * Relay conversation history state
   */
  export type RelayConversationHistoryType = {};

  /**
   * ENUM to check if action requires user confirmation
   */
  export type RequireConfirmationType = {};

  /**
   * The identifier for the S3 resource.
   */
  export type S3IdentifierType = {
    /**
     * A bucket in S3.
     */
    S3BucketName?: string;

    /**
     * A object key in S3.
     */
    S3ObjectKey?: string;
  };

  /**
   * A map of tag keys and values
   */
  export type TagsMapType = {};

  /**
   * Parameter Type
   */
  export type TypeType = {};

  /**
   * Definition of AWS::Bedrock::Agent Resource Type
   */
  export type AgentResourceType = {
    /**
     * List of ActionGroups
     */
    ActionGroups?: AgentActionGroupType[];

    /**
     * Arn representation of the Agent.
     * Read-only property
     */
    AgentArn?: string;

    /**
     * Identifier for a resource.
     * Read-only property
     */
    AgentId?: string;

    /**
     * Name for a resource.
     */
    AgentName: string;

    /**
     * ARN of a IAM role.
     */
    AgentResourceRoleArn?: string;

    /**
     * Read-only property
     */
    AgentStatus?: AgentStatusType;

    /**
     * Draft Agent Version.
     * Read-only property
     */
    AgentVersion?: string;

    /**
     * Specifies whether to automatically prepare after creating or updating the agent.
     * Default: false
     */
    AutoPrepare?: boolean;

    /**
     * Time Stamp.
     * Read-only property
     */
    CreatedAt?: string;

    CustomOrchestration?: CustomOrchestrationType;

    /**
     * A KMS key ARN
     */
    CustomerEncryptionKeyArn?: string;

    /**
     * Specifies whether to allow deleting agent while it is in use.
     * Default: false
     */
    SkipResourceInUseCheckOnDelete?: boolean;

    /**
     * Description of the Resource.
     */
    Description?: string;

    /**
     * Failure Reasons for Error.
     * Read-only property
     */
    FailureReasons?: string[];

    FoundationModel?: FoundationModelType;

    GuardrailConfiguration?: GuardrailConfigurationType;

    MemoryConfiguration?: MemoryConfigurationType;

    /**
     * Max Session Time.
     */
    IdleSessionTTLInSeconds?: number;

    AgentCollaboration?: AgentCollaborationType;

    /**
     * Instruction for the agent.
     */
    Instruction?: string;

    /**
     * List of Agent Knowledge Bases
     */
    KnowledgeBases?: AgentKnowledgeBaseType[];

    /**
     * List of Agent Collaborators
     */
    AgentCollaborators?: AgentCollaboratorType[];

    OrchestrationType?: OrchestrationTypeType;

    /**
     * Time Stamp.
     * Read-only property
     */
    PreparedAt?: string;

    PromptOverrideConfiguration?: PromptOverrideConfigurationType;

    /**
     * The recommended actions users can take to resolve an error in failureReasons.
     * Read-only property
     */
    RecommendedActions?: string[];

    Tags?: TagsMapType;

    TestAliasTags?: TagsMapType;

    /**
     * Time Stamp.
     * Read-only property
     */
    UpdatedAt?: string;
  };
}
