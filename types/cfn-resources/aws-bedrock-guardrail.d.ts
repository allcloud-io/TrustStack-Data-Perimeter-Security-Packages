/**
 * TypeScript definitions for AWS::Bedrock::Guardrail
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::Guardrail Resource Type
 */
export namespace AWS_Bedrock_Guardrail {
  /**
   * Content filter in content policy.
   */
  export type ContentFilterType = {
    Type: ContentFilterTypeType;

    InputStrength: FilterStrengthType;

    OutputStrength: FilterStrengthType;
  };

  /**
   * Content filter config in content policy.
   */
  export type ContentFilterConfigType = {
    Type: ContentFilterTypeType;

    InputStrength: FilterStrengthType;

    OutputStrength: FilterStrengthType;
  };

  /**
   * Type of filter in content policy
   */
  export type ContentFilterTypeType = {};

  /**
   * Content policy config for a guardrail.
   */
  export type ContentPolicyConfigType = {
    /**
     * List of content filter configs in content policy.
     */
    FiltersConfig: ContentFilterConfigType[];
  };

  /**
   * A config for grounding filter.
   */
  export type ContextualGroundingFilterConfigType = {
    Type: ContextualGroundingFilterTypeType;

    /**
     * The threshold for this filter.
     */
    Threshold: number;
  };

  /**
   * Type of contextual grounding filter
   */
  export type ContextualGroundingFilterTypeType = {};

  /**
   * Contextual grounding policy config for a guardrail.
   */
  export type ContextualGroundingPolicyConfigType = {
    /**
     * List of contextual grounding filter configs.
     */
    FiltersConfig: ContextualGroundingFilterConfigType[];
  };

  /**
   * Strength for filters
   */
  export type FilterStrengthType = {};

  /**
   * Status of the guardrail
   */
  export type GuardrailStatusType = {};

  /**
   * A managed words definition.
   */
  export type ManagedWordsType = {
    Type: ManagedWordsTypeType;
  };

  /**
   * A managed words config.
   */
  export type ManagedWordsConfigType = {
    Type: ManagedWordsTypeType;
  };

  /**
   * Options for managed words.
   */
  export type ManagedWordsTypeType = {};

  /**
   * Entity name and behavior.
   */
  export type PiiEntityType = {
    Type: PiiEntityTypeType;

    Action: SensitiveInformationActionType;
  };

  /**
   * Pii entity configuration.
   */
  export type PiiEntityConfigType = {
    Type: PiiEntityTypeType;

    Action: SensitiveInformationActionType;
  };

  /**
   * The currently supported PII entities
   */
  export type PiiEntityTypeType = {};

  /**
   * A regex configuration.
   */
  export type RegexConfigType = {
    /**
     * The regex name.
     */
    Name: string;

    /**
     * The regex description.
     */
    Description?: string;

    /**
     * The regex pattern.
     */
    Pattern: string;

    Action: SensitiveInformationActionType;
  };

  /**
   * Options for sensitive information action.
   */
  export type SensitiveInformationActionType = {};

  /**
   * Sensitive information policy config for a guardrail.
   */
  export type SensitiveInformationPolicyConfigType = {
    /**
     * List of entities.
     */
    PiiEntitiesConfig?: PiiEntityConfigType[];

    /**
     * List of regex.
     */
    RegexesConfig?: RegexConfigType[];
  };

  /**
   * Definition of the key/value pair for a tag
   */
  export type TagType = {
    /**
     * Tag Key
     */
    Key: string;

    /**
     * Tag Value
     */
    Value: string;
  };

  /**
   * Topic in topic policy.
   */
  export type TopicType = {
    /**
     * Name of topic in topic policy
     */
    Name: string;

    /**
     * Definition of topic in topic policy
     */
    Definition: string;

    /**
     * List of text examples
     */
    Examples?: string[];

    Type: TopicTypeType;
  };

  /**
   * Topic config in topic policy.
   */
  export type TopicConfigType = {
    /**
     * Name of topic in topic policy
     */
    Name: string;

    /**
     * Definition of topic in topic policy
     */
    Definition: string;

    /**
     * List of text examples
     */
    Examples?: string[];

    Type: TopicTypeType;
  };

  /**
   * Topic policy config for a guardrail.
   */
  export type TopicPolicyConfigType = {
    /**
     * List of topic configs in topic policy.
     */
    TopicsConfig: TopicConfigType[];
  };

  /**
   * Type of topic in a policy
   */
  export type TopicTypeType = {};

  /**
   * A custom word config.
   */
  export type WordConfigType = {
    /**
     * The custom word text.
     */
    Text: string;
  };

  /**
   * Word policy config for a guardrail.
   */
  export type WordPolicyConfigType = {
    /**
     * List of custom word configs.
     */
    WordsConfig?: WordConfigType[];

    /**
     * A config for the list of managed words.
     */
    ManagedWordListsConfig?: ManagedWordsConfigType[];
  };

  /**
   * Definition of AWS::Bedrock::Guardrail Resource Type
   */
  export type GuardrailResourceType = {
    /**
     * Messaging for when violations are detected in text
     */
    BlockedInputMessaging: string;

    /**
     * Messaging for when violations are detected in text
     */
    BlockedOutputsMessaging: string;

    ContentPolicyConfig?: ContentPolicyConfigType;

    ContextualGroundingPolicyConfig?: ContextualGroundingPolicyConfigType;

    /**
     * Time Stamp
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Description of the guardrail or its version
     */
    Description?: string;

    /**
     * List of failure recommendations
     * Read-only property
     */
    FailureRecommendations?: string[];

    /**
     * Arn representation for the guardrail
     * Read-only property
     */
    GuardrailArn?: string;

    /**
     * Unique id for the guardrail
     * Read-only property
     */
    GuardrailId?: string;

    /**
     * The KMS key with which the guardrail was encrypted at rest
     */
    KmsKeyArn?: string;

    /**
     * Name of the guardrail
     */
    Name: string;

    SensitiveInformationPolicyConfig?: SensitiveInformationPolicyConfigType;

    /**
     * Read-only property
     */
    Status?: GuardrailStatusType;

    /**
     * List of status reasons
     * Read-only property
     */
    StatusReasons?: string[];

    /**
     * List of Tags
     */
    Tags?: TagType[];

    TopicPolicyConfig?: TopicPolicyConfigType;

    /**
     * Time Stamp
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * Guardrail version
     * Read-only property
     */
    Version?: string;

    WordPolicyConfig?: WordPolicyConfigType;
  };
}
