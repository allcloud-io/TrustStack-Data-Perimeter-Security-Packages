/**
 * TypeScript definitions for AWS::Lex::Bot
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon Lex conversational bot performing automated tasks such as ordering a pizza, booking a hotel, and so on.
 */
export namespace AWS_Lex_Bot {
  /**
   * The secondary region that will be used in the replication of the source bot.
   */
  export type ReplicaRegionType = {};

  /**
   * Parameter used to create a replication of the source bot in the secondary region.
   */
  export type ReplicationType = {
    /**
     * List of secondary regions for bot replication.
     */
    ReplicaRegions: ReplicaRegionType[];
  };

  /**
   * A list of bot alias locale settings to add to the bot alias.
   */
  export type BotAliasLocaleSettingsListType = {};

  /**
   * A locale setting in alias
   */
  export type BotAliasLocaleSettingsItemType = {
    /**
     * A string used to identify the locale
     */
    LocaleId: string;

    BotAliasLocaleSetting: BotAliasLocaleSettingsType;
  };

  /**
   * You can use this parameter to specify a specific Lambda function to run different functions in different locales.
   */
  export type BotAliasLocaleSettingsType = {
    CodeHookSpecification?: CodeHookSpecificationType;

    /**
     * Whether the Lambda code hook is enabled
     */
    Enabled: boolean;
  };

  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  export type CodeHookSpecificationType = {
    LambdaCodeHook: LambdaCodeHookType;
  };

  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  export type LambdaCodeHookType = {
    /**
     * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
     */
    CodeHookInterfaceVersion: string;

    /**
     * The Amazon Resource Name (ARN) of the Lambda function.
     */
    LambdaArn: string;
  };

  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  export type ConversationLogSettingsType = {
    AudioLogSettings?: AudioLogSettingsType;

    TextLogSettings?: TextLogSettingsType;
  };

  /**
   * List of audio log settings that pertain to the conversation log settings for the bot's TestBotAlias.
   */
  export type AudioLogSettingsType = {};

  /**
   * List of text log settings that pertain to the conversation log settings for the bot's TestBotAlias
   */
  export type TextLogSettingsType = {};

  /**
   * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
   */
  export type AudioLogSettingType = {
    Destination: AudioLogDestinationType;

    Enabled: boolean;
  };

  /**
   * Contains information about code hooks that Amazon Lex calls during a conversation.
   */
  export type TextLogSettingType = {
    Destination: TextLogDestinationType;

    Enabled: boolean;
  };

  /**
   * The location of audio log files collected when conversation logging is enabled for a bot.
   */
  export type AudioLogDestinationType = {
    S3Bucket: S3BucketLogDestinationType;
  };

  /**
   * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
   */
  export type TextLogDestinationType = {
    CloudWatch: CloudWatchLogGroupLogDestinationType;
  };

  export type CloudWatchLogGroupLogDestinationType = {
    /**
     * A string used to identify the groupArn for the Cloudwatch Log Group
     */
    CloudWatchLogGroupArn: string;

    /**
     * A string containing the value for the Log Prefix
     */
    LogPrefix: string;
  };

  /**
   * Specifies an Amazon S3 bucket for logging audio conversations
   */
  export type S3BucketLogDestinationType = {
    /**
     * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
     */
    S3BucketArn: string;

    /**
     * The Amazon S3 key of the deployment package.
     */
    LogPrefix: string;

    /**
     * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
     */
    KmsKeyArn?: string;
  };

  /**
   * Configuring the test bot alias settings for a given bot
   */
  export type TestBotAliasSettingsType = {
    BotAliasLocaleSettings?: BotAliasLocaleSettingsListType;

    ConversationLogSettings?: ConversationLogSettingsType;

    Description?: DescriptionType;

    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    SentimentAnalysisSettings?: Record<string, any>;
  };

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
   */
  export type RoleArnType = {};

  /**
   * Unique ID of resource
   */
  export type IdType = {};

  export type BotArnType = {};

  /**
   * Unique name for a resource.
   */
  export type NameType = {};

  /**
   * A description of the resource
   */
  export type DescriptionType = {};

  /**
   * Provides information on additional privacy protections Amazon Lex should use with the bot's data.
   */
  export type DataPrivacyType = {
    /**
     * Specify whether your use of Amazon Lex is related to application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA).
     */
    ChildDirected: boolean;
  };

  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
   */
  export type IdleSessionTTLInSecondsType = {};

  /**
   * The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents/slots.
   */
  export type UtteranceType = {};

  /**
   * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
   */
  export type SampleUtteranceType = {
    Utterance: UtteranceType;
  };

  /**
   * An array of sample utterances
   */
  export type SampleUtterancesListType = {};

  /**
   * A key-value pair for tagging Lex resources
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
   * The identifier of the language and locale that the bot will be used in.
   */
  export type LocaleIdType = {};

  /**
   * Settings for using an Amazon Polly voice to communicate with a user.
   */
  export type VoiceSettingsType = {
    /**
     * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.
     */
    VoiceId: string;

    /**
     * Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide.
     */
    Engine?: string;
  };

  /**
   * The specified confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents.
   */
  export type ConfidenceThresholdType = {};

  /**
   * A unique identifier for the built-in intent to base this intent on.
   */
  export type ParentIntentSignatureType = {};

  /**
   * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
   */
  export type DialogCodeHookSettingType = {
    Enabled: boolean;
  };

  /**
   * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
   */
  export type FulfillmentStartResponseSpecificationType = {
    MessageGroups: MessageGroupsListType;

    /**
     * The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
     */
    DelayInSeconds: number;

    /**
     * Determines whether the user can interrupt the start message while it is playing.
     */
    AllowInterrupt?: boolean;
  };

  /**
   * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
   */
  export type FulfillmentUpdateResponseSpecificationType = {
    MessageGroups: MessageGroupsListType;

    /**
     * The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
     */
    FrequencyInSeconds: number;

    /**
     * Determines whether the user can interrupt an update message while it is playing.
     */
    AllowInterrupt?: boolean;
  };

  /**
   * Provides information for updating the user on the progress of fulfilling an intent.
   */
  export type FulfillmentUpdatesSpecificationType = {
    StartResponse?: FulfillmentStartResponseSpecificationType;

    UpdateResponse?: FulfillmentUpdateResponseSpecificationType;

    /**
     * The length of time that the fulfillment Lambda function should run before it times out.
     */
    TimeoutInSeconds?: number;

    /**
     * Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
     */
    Active: boolean;
  };

  /**
   * Provides a setting that determines whether the post-fulfillment response is sent to the user.
   */
  export type PostFulfillmentStatusSpecificationType = {
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    SuccessResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
     */
    SuccessNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
     */
    SuccessConditional?: ConditionalSpecificationType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    FailureResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the State field of the Intent object set to Failed.
     */
    FailureNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the State field of the Intent object set to Failed.
     */
    FailureConditional?: ConditionalSpecificationType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    TimeoutResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step that the bot runs when the fulfillment code hook times out.
     */
    TimeoutNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate if the fulfillment code hook times out.
     */
    TimeoutConditional?: ConditionalSpecificationType;
  };

  /**
   * Settings that determine if a Lambda function should be invoked to fulfill a specific intent.
   */
  export type FulfillmentCodeHookSettingType = {
    FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecificationType;

    PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecificationType;

    Enabled: boolean;

    /**
     * Determines whether the fulfillment code hook is used. When active is false, the code hook doesn't run.
     */
    IsActive?: boolean;
  };

  /**
   * A button to use on a response card used to gather slot values from a user.
   */
  export type ButtonType = {
    /**
     * The text that appears on the button.
     */
    Text: string;

    /**
     * The value returned to Amazon Lex when the user chooses this button.
     */
    Value: string;
  };

  export type AttachmentTitleType = {};

  export type AttachmentUrlType = {};

  /**
   * A message that defines a response card that the client application can show to the user.
   */
  export type ImageResponseCardType = {
    /**
     * The title to display on the response card.
     */
    Title: AttachmentTitleType;

    /**
     * The subtitle to display on the response card.
     */
    Subtitle?: AttachmentTitleType;

    /**
     * The URL of an image to display on the response card.
     */
    ImageUrl?: AttachmentUrlType;

    /**
     * A list of buttons that should be displayed on the response card.
     */
    Buttons?: ButtonType[];
  };

  /**
   * A message in plain text format.
   */
  export type PlainTextMessageType = {
    /**
     * The message to send to the user.
     */
    Value: string;
  };

  /**
   * A message in a custom format defined by the client application.
   */
  export type CustomPayloadType = {
    /**
     * The string that is sent to your application.
     */
    Value: string;
  };

  /**
   * A message in Speech Synthesis Markup Language (SSML).
   */
  export type SSMLMessageType = {
    /**
     * The SSML text that defines the prompt.
     */
    Value: string;
  };

  /**
   * The primary message that Amazon Lex should send to the user.
   */
  export type MessageType = {
    PlainTextMessage?: PlainTextMessageType;

    CustomPayload?: CustomPayloadType;

    SSMLMessage?: SSMLMessageType;

    ImageResponseCard?: ImageResponseCardType;
  };

  /**
   * One or more messages that Amazon Lex can send to the user.
   */
  export type MessageGroupType = {
    Message: MessageType;

    /**
     * Message variations to send to the user.
     */
    Variations?: MessageType[];
  };

  /**
   * One to 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
   */
  export type MessageGroupsListType = {};

  /**
   * The maximum number of times the bot tries to elicit a response from the user using this prompt.
   */
  export type PromptMaxRetriesType = {};

  /**
   * Indicates how a message is selected from a message group among retries.
   */
  export type MessageSelectionStrategyType = {};

  /**
   * Specifies the allowed input types.
   */
  export type AllowedInputTypesType = {
    /**
     * Indicates whether audio input is allowed.
     */
    AllowAudioInput: boolean;

    /**
     * Indicates whether DTMF input is allowed.
     */
    AllowDTMFInput: boolean;
  };

  /**
   * Specifies the settings on DTMF input.
   */
  export type DTMFSpecificationType = {
    /**
     * The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
     */
    DeletionCharacter: string;

    /**
     * The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
     */
    EndCharacter: string;

    /**
     * How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
     */
    EndTimeoutMs: number;

    /**
     * The maximum number of DTMF digits allowed in an utterance.
     */
    MaxLength: number;
  };

  /**
   * Specifies the audio input specifications.
   */
  export type AudioSpecificationType = {
    /**
     * Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
     */
    EndTimeoutMs: number;

    /**
     * Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
     */
    MaxLengthMs: number;
  };

  /**
   * Specifies the audio and DTMF input specification.
   */
  export type AudioAndDTMFInputSpecificationType = {
    /**
     * Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.
     */
    StartTimeoutMs: number;

    DTMFSpecification?: DTMFSpecificationType;

    AudioSpecification?: AudioSpecificationType;
  };

  /**
   * Specifies the text input specifications.
   */
  export type TextInputSpecificationType = {
    /**
     * Time for which a bot waits before re-prompting a customer for text input.
     */
    StartTimeoutMs: number;
  };

  /**
   * Specifies the settings on a prompt attempt.
   */
  export type PromptAttemptSpecificationType = {
    AllowedInputTypes: AllowedInputTypesType;

    /**
     * Indicates whether the user can interrupt a speech prompt attempt from the bot.
     */
    AllowInterrupt?: boolean;

    AudioAndDTMFInputSpecification?: AudioAndDTMFInputSpecificationType;

    TextInputSpecification?: TextInputSpecificationType;
  };

  /**
   * Prompts the user to confirm the intent.
   */
  export type PromptSpecificationType = {
    MessageGroupsList: MessageGroupsListType;

    MaxRetries: PromptMaxRetriesType;

    /**
     * Indicates whether the user can interrupt a speech prompt from the bot.
     */
    AllowInterrupt?: boolean;

    MessageSelectionStrategy?: MessageSelectionStrategyType;

    /**
     * Specifies the advanced settings on each attempt of the prompt.
     */
    PromptAttemptsSpecification?: Record<string, any>;
  };

  /**
   * A list of message groups that Amazon Lex uses to respond the user input.
   */
  export type ResponseSpecificationType = {
    MessageGroupsList: MessageGroupsListType;

    /**
     * Indicates whether the user can interrupt a speech prompt from the bot.
     */
    AllowInterrupt?: boolean;
  };

  /**
   * How often a message should be sent to the user in seconds.
   */
  export type StillWaitingResponseFrequencyType = {};

  /**
   * If Amazon Lex waits longer than this length of time in seconds for a response, it will stop sending messages.
   */
  export type StillWaitingResponseTimeoutType = {};

  /**
   * StillWaitingResponseSpecification.
   */
  export type StillWaitingResponseSpecificationType = {
    MessageGroupsList: MessageGroupsListType;

    FrequencyInSeconds: StillWaitingResponseFrequencyType;

    TimeoutInSeconds: StillWaitingResponseTimeoutType;

    /**
     * Indicates whether the user can interrupt a speech prompt from the bot.
     */
    AllowInterrupt?: boolean;
  };

  /**
   * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
   */
  export type IntentConfirmationSettingType = {
    /**
     * Prompts the user to confirm the intent. This question should have a yes or no answer.
     */
    PromptSpecification: PromptSpecificationType;

    /**
     * Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the active field isn't specified, the default is true.
     */
    IsActive?: boolean;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    ConfirmationResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step that the bot executes when the customer confirms the intent.
     */
    ConfirmationNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the intent is closed.
     */
    ConfirmationConditional?: ConditionalSpecificationType;

    /**
     * When the user answers "no" to the question defined in promptSpecification, Amazon Lex responds with this response to acknowledge that the intent was canceled.
     */
    DeclinationResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step that the bot executes when the customer declines the intent.
     */
    DeclinationNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the intent is declined.
     */
    DeclinationConditional?: ConditionalSpecificationType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    FailureResponse?: ResponseSpecificationType;

    /**
     * The next step to take in the conversation if the confirmation step fails.
     */
    FailureNextStep?: DialogStateType;

    /**
     * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     */
    FailureConditional?: ConditionalSpecificationType;

    /**
     * The DialogCodeHookInvocationSetting object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is InvokeDialogCodeHook.
     */
    CodeHook?: DialogCodeHookInvocationSettingType;

    /**
     * The DialogCodeHookInvocationSetting used when the code hook is invoked during confirmation prompt retries.
     */
    ElicitationCodeHook?: ElicitationCodeHookInvocationSettingType;
  };

  /**
   * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
   */
  export type IntentClosingSettingType = {
    /**
     * The response that Amazon Lex sends to the user when the intent is complete.
     */
    ClosingResponse?: ResponseSpecificationType;

    /**
     * Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the active field isn't specified, the default is true.
     */
    IsActive?: boolean;

    /**
     * A list of conditional branches associated with the intent's closing response. These branches are executed when the nextStep attribute is set to EvalutateConditional.
     */
    Conditional?: ConditionalSpecificationType;

    /**
     * Specifies the next step that the bot executes after playing the intent's closing response.
     */
    NextStep?: DialogStateType;
  };

  /**
   * InputContext specified for the intent.
   */
  export type InputContextType = {
    /**
     * The name of the context.
     */
    Name: NameType;
  };

  /**
   * The list of input contexts specified for the intent.
   */
  export type InputContextsListType = {};

  /**
   * The amount of time, in seconds, that the output context should remain active.
   */
  export type ContextTimeToLiveInSecondsType = {};

  /**
   * The number of conversation turns that the output context should remain active.
   */
  export type ContextTurnsToLiveType = {};

  /**
   * A session context that is activated when an intent is fulfilled.
   */
  export type OutputContextType = {
    Name: NameType;

    TimeToLiveInSeconds: ContextTimeToLiveInSecondsType;

    TurnsToLive: ContextTurnsToLiveType;
  };

  /**
   * A list of contexts that the intent activates when it is fulfilled.
   */
  export type OutputContextsListType = {};

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search.
   */
  export type KendraIndexArnType = {};

  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query.
   */
  export type QueryFilterStringType = {};

  /**
   * Configuration for searching a Amazon Kendra index specified for the intent.
   */
  export type KendraConfigurationType = {
    KendraIndex: KendraIndexArnType;

    /**
     * Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.
     */
    QueryFilterStringEnabled?: boolean;

    QueryFilterString?: QueryFilterStringType;
  };

  /**
   * The priority that a slot should be elicited.
   */
  export type PriorityValueType = {};

  /**
   * The priority that Amazon Lex should use when eliciting slot values from a user.
   */
  export type SlotPriorityType = {
    Priority: PriorityValueType;

    /**
     * The name of the slot.
     */
    SlotName: NameType;
  };

  /**
   * List for slot priorities
   */
  export type SlotPrioritiesListType = {};

  /**
   * Represents an action that the user wants to perform.
   */
  export type IntentType = {
    /**
     * The name of the intent.
     */
    Name: NameType;

    /**
     * Description of thr intent.
     */
    Description?: DescriptionType;

    ParentIntentSignature?: ParentIntentSignatureType;

    /**
     * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
     */
    SampleUtterances?: SampleUtterancesListType;

    DialogCodeHook?: DialogCodeHookSettingType;

    FulfillmentCodeHook?: FulfillmentCodeHookSettingType;

    IntentConfirmationSetting?: IntentConfirmationSettingType;

    IntentClosingSetting?: IntentClosingSettingType;

    /**
     * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
     */
    InitialResponseSetting?: InitialResponseSettingType;

    InputContexts?: InputContextsListType;

    OutputContexts?: OutputContextsListType;

    KendraConfiguration?: KendraConfigurationType;

    SlotPriorities?: SlotPrioritiesListType;

    /**
     * List of slots
     */
    Slots?: SlotType[];
  };

  /**
   * The built-in slot type used as a parent of this slot type.
   */
  export type ParentSlotTypeSignatureType = {};

  /**
   * The slot type name that is used in the slot. Allows for custom and built-in slot type names
   */
  export type SlotTypeNameType = {};

  /**
   * Defines one of the values for a slot type.
   */
  export type SampleValueType = {
    /**
     * The value that can be used for a slot type.
     */
    Value: string;
  };

  /**
   * Additional values related to the slot type entry.
   */
  export type SynonymListType = {};

  /**
   * Value that the slot type can take.
   */
  export type SlotTypeValueType = {
    SampleValue: SampleValueType;

    Synonyms?: SynonymListType;
  };

  /**
   * A List of slot type values
   */
  export type SlotTypeValuesType = {};

  export type SlotValueResolutionStrategyType = {};

  /**
   * A regular expression used to validate the value of a slot.
   */
  export type SlotValueRegexFilterType = {
    /**
     * Regex pattern
     */
    Pattern: string;
  };

  /**
   * Enables using slot values as a custom vocabulary when recognizing user utterances.
   */
  export type AudioRecognitionStrategyType = {};

  /**
   * Provides settings that enable advanced recognition settings for slot values.
   */
  export type AdvancedRecognitionSettingType = {
    AudioRecognitionStrategy?: AudioRecognitionStrategyType;
  };

  /**
   * Contains settings used by Amazon Lex to select a slot value.
   */
  export type SlotValueSelectionSettingType = {
    ResolutionStrategy: SlotValueResolutionStrategyType;

    RegexFilter?: SlotValueRegexFilterType;

    AdvancedRecognitionSetting?: AdvancedRecognitionSettingType;
  };

  export type S3BucketNameType = {};

  export type S3ObjectKeyType = {};

  /**
   * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
   */
  export type GrammarSlotTypeSourceType = {
    /**
     * The name of the S3 bucket that contains the grammar source.
     */
    S3BucketName: S3BucketNameType;

    /**
     * The path to the grammar in the S3 bucket.
     */
    S3ObjectKey: S3ObjectKeyType;

    /**
     * The Amazon KMS key required to decrypt the contents of the grammar, if any.
     */
    KmsKeyArn?: string;
  };

  /**
   * Settings required for a slot type based on a grammar that you provide.
   */
  export type GrammarSlotTypeSettingType = {
    Source?: GrammarSlotTypeSourceType;
  };

  /**
   * Provides information about the external source of the slot type's definition.
   */
  export type ExternalSourceSettingType = {
    GrammarSlotTypeSetting?: GrammarSlotTypeSettingType;
  };

  /**
   * A custom, extended built-in or a grammar slot type.
   */
  export type SlotTypeType = {
    Name: NameType;

    Description?: DescriptionType;

    ParentSlotTypeSignature?: ParentSlotTypeSignatureType;

    SlotTypeValues?: SlotTypeValuesType;

    ValueSelectionSetting?: SlotValueSelectionSettingType;

    ExternalSourceSetting?: ExternalSourceSettingType;
  };

  /**
   * A custom vocabulary item that contains the phrase to recognize and a weight to give the boost.
   */
  export type CustomVocabularyItemType = {
    /**
     * Phrase that should be recognized.
     */
    Phrase: string;

    /**
     * The degree to which the phrase recognition is boosted. The weight 0 means that no boosting will be applied and the entry will only be used for performing replacements using the displayAs field.
     */
    Weight?: number;

    /**
     * Defines how you want your phrase to look in your transcription output.
     */
    DisplayAs?: string;
  };

  export type CustomVocabularyItemsType = {};

  /**
   * A custom vocabulary is a list of specific phrases that you want Amazon Lex V2 to recognize in the audio input.
   */
  export type CustomVocabularyType = {
    CustomVocabularyItems: CustomVocabularyItemsType;
  };

  /**
   * The default value to use when a user doesn't provide a value for a slot.
   */
  export type SlotDefaultValueType = {
    /**
     * The default value to use when a user doesn't provide a value for a slot.
     */
    DefaultValue: string;
  };

  /**
   * A list of values that Amazon Lex should use as the default value for a slot.
   */
  export type SlotDefaultValueSpecificationType = {
    /**
     * A list of slot default values
     */
    DefaultValueList: SlotDefaultValueType[];
  };

  export type SlotConstraintType = {};

  /**
   * The prompts that Amazon Lex uses while a bot is waiting for customer input.
   */
  export type WaitAndContinueSpecificationType = {
    /**
     * The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.
     */
    WaitingResponse: ResponseSpecificationType;

    /**
     * The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
     */
    ContinueResponse: ResponseSpecificationType;

    /**
     * The response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
     */
    StillWaitingResponse?: StillWaitingResponseSpecificationType;

    /**
     * Specifies whether the bot will wait for a user to respond.
     */
    IsActive?: boolean;
  };

  /**
   * Settings that you can use for eliciting a slot value.
   */
  export type SlotValueElicitationSettingType = {
    /**
     * A list of default values for a slot.
     */
    DefaultValueSpecification?: SlotDefaultValueSpecificationType;

    /**
     * Specifies whether the slot is required or optional.
     */
    SlotConstraint: SlotConstraintType;

    /**
     * The prompt that Amazon Lex uses to elicit the slot value from the user.
     */
    PromptSpecification?: PromptSpecificationType;

    /**
     * If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy.
     */
    SampleUtterances?: SampleUtterancesListType;

    /**
     * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
     */
    WaitAndContinueSpecification?: WaitAndContinueSpecificationType;

    /**
     * Specifies the next stage in the conversation after capturing the slot.
     */
    SlotCaptureSetting?: SlotCaptureSettingType;
  };

  /**
   * Determines whether Amazon Lex obscures slot values in conversation logs.
   */
  export type ObfuscationSettingType = {
    /**
     * Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.
     */
    ObfuscationSettingType: string;
  };

  /**
   * Indicates whether a slot can return multiple values.
   */
  export type MultipleValuesSettingType = {
    AllowMultipleValues?: boolean;
  };

  /**
   * A slot is a variable needed to fulfill an intent, where an intent can require zero or more slots.
   */
  export type SlotType = {
    Name: NameType;

    Description?: DescriptionType;

    SlotTypeName: SlotTypeNameType;

    ValueElicitationSetting: SlotValueElicitationSettingType;

    ObfuscationSetting?: ObfuscationSettingType;

    MultipleValuesSetting?: MultipleValuesSettingType;
  };

  /**
   * A locale in the bot, which contains the intents and slot types that the bot uses in conversations with users in the specified language and locale.
   */
  export type BotLocaleType = {
    LocaleId: LocaleIdType;

    Description?: DescriptionType;

    VoiceSettings?: VoiceSettingsType;

    NluConfidenceThreshold: ConfidenceThresholdType;

    /**
     * List of intents
     */
    Intents?: IntentType[];

    /**
     * List of SlotTypes
     */
    SlotTypes?: SlotTypeType[];

    CustomVocabulary?: CustomVocabularyType;
  };

  /**
   * S3 location of bot definitions zip file, if it's not defined inline in CloudFormation.
   */
  export type S3LocationType = {
    /**
     * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
     */
    S3Bucket: S3BucketNameType;

    /**
     * The Amazon S3 key of the deployment package.
     */
    S3ObjectKey: S3ObjectKeyType;

    /**
     * For versioned objects, the version of the deployment package object to use. If not specified, the current object version will be used.
     */
    S3ObjectVersion?: string;
  };

  /**
   * Provides an expression that evaluates to true or false.
   */
  export type ConditionType = {
    /**
     * The expression string that is evaluated.
     */
    ExpressionString: ConditionExpressionType;
  };

  /**
   * Contains conditional branches to fork the conversation flow.
   */
  export type ConditionalType = {
    IsActive: boolean;

    ConditionalBranches: ConditionalBranchesType;
  };

  /**
   * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
   */
  export type ConditionalSpecificationType = {
    /**
     * Determines whether a conditional branch is active. When active is false, the conditions are not evaluated.
     */
    IsActive: boolean;

    /**
     * A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
     */
    ConditionalBranches: ConditionalBranchesType;

    /**
     * The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.
     */
    DefaultBranch: DefaultConditionalBranchType;
  };

  /**
   * A set of actions that Amazon Lex should run if none of the other conditions are met.
   */
  export type DefaultConditionalBranchType = {
    /**
     * The next step in the conversation.
     */
    NextStep?: DialogStateType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    Response?: ResponseSpecificationType;
  };

  /**
   * A set of actions that Amazon Lex should run if the condition is matched.
   */
  export type ConditionalBranchType = {
    /**
     * The name of the branch.
     */
    Name: NameType;

    /**
     * Contains the expression to evaluate. If the condition is true, the branch's actions are taken.
     */
    Condition: ConditionType;

    /**
     * The next step in the conversation.
     */
    NextStep: DialogStateType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    Response?: ResponseSpecificationType;
  };

  /**
   * A list of 1 to 4 conditional branches to fork the conversation flow.
   */
  export type ConditionalBranchesType = {};

  /**
   * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
   */
  export type InitialResponseSettingType = {
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    InitialResponse?: ResponseSpecificationType;

    /**
     * The next step in the conversation.
     */
    NextStep?: DialogStateType;

    /**
     * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     */
    Conditional?: ConditionalSpecificationType;

    /**
     * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
     */
    CodeHook?: DialogCodeHookInvocationSettingType;
  };

  /**
   * Expression that is evaluated to true or false at runtime.
   */
  export type ConditionExpressionType = {};

  /**
   * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
   */
  export type DialogCodeHookInvocationSettingType = {
    /**
     * Indicates whether a Lambda function should be invoked for the dialog.
     */
    EnableCodeHookInvocation: boolean;

    /**
     * Determines whether a dialog code hook is used when the intent is activated.
     */
    IsActive: boolean;

    /**
     * A label that indicates the dialog step from which the dialog code hook is happening.
     */
    InvocationLabel?: NameType;

    /**
     * Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.
     */
    PostCodeHookSpecification: PostDialogCodeHookInvocationSpecificationType;
  };

  /**
   * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
   */
  export type ElicitationCodeHookInvocationSettingType = {
    /**
     * Indicates whether a Lambda function should be invoked for the dialog.
     */
    EnableCodeHookInvocation: boolean;

    /**
     * A label that indicates the dialog step from which the dialog code hook is happening.
     */
    InvocationLabel?: NameType;
  };

  /**
   * Specifies next steps to run after the dialog code hook finishes.
   */
  export type PostDialogCodeHookInvocationSpecificationType = {
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    SuccessResponse?: ResponseSpecificationType;

    /**
     * Specifics the next step the bot runs after the dialog code hook finishes successfully.
     */
    SuccessNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the dialog code hook finishes successfully.
     */
    SuccessConditional?: ConditionalSpecificationType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    FailureResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
     */
    FailureNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
     */
    FailureConditional?: ConditionalSpecificationType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    TimeoutResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step that the bot runs when the code hook times out.
     */
    TimeoutNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate if the code hook times out.
     */
    TimeoutConditional?: ConditionalSpecificationType;
  };

  /**
   * The current state of the conversation with the user.
   */
  export type DialogStateType = {
    /**
     * Defines the action that the bot executes at runtime when the conversation reaches this step.
     */
    DialogAction?: DialogActionType;

    /**
     * Override settings to configure the intent state.
     */
    Intent?: IntentOverrideType;

    /**
     * List of session attributes to be applied when the conversation reaches this step.
     */
    SessionAttributes?: SessionAttributeType[];
  };

  /**
   * Defines the action that the bot executes at runtime when the conversation reaches this step.
   */
  export type DialogActionType = {
    /**
     * The action that the bot should execute.
     */
    Type: DialogActionTypeType;

    /**
     * If the dialog action is ElicitSlot, defines the slot to elicit from the user.
     */
    SlotToElicit?: NameType;

    /**
     * When true the next message for the intent is not used.
     */
    SuppressNextMessage?: boolean;
  };

  /**
   * The possible values of actions that the conversation can take.
   */
  export type DialogActionTypeType = {};

  /**
   * Key/value pair representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
   */
  export type SessionAttributeType = {
    Key: string;

    Value?: string;
  };

  /**
   * Override settings to configure the intent state.
   */
  export type IntentOverrideType = {
    /**
     * The name of the intent. Only required when you're switching intents.
     */
    Name?: NameType;

    /**
     * A map of all of the slot value overrides for the intent.
     */
    Slots?: SlotValueOverrideMapType[];
  };

  /**
   * A map of slot names and their overridden values.
   */
  export type SlotValueOverrideMapType = {
    SlotName?: NameType;

    SlotValueOverride?: SlotValueOverrideType;
  };

  /**
   * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
   */
  export type SlotValueOverrideType = {
    /**
     * When the shape value is List, it indicates that the values field contains a list of slot values. When the value is Scalar, it indicates that the value field contains a single value.
     */
    Shape?: SlotShapeType;

    /**
     * The current value of the slot.
     */
    Value?: SlotValueType;

    /**
     * A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
     */
    Values?: SlotValuesType;
  };

  /**
   * The value to set in a slot.
   */
  export type SlotValueType = {
    /**
     * The value that Amazon Lex determines for the slot.
     */
    InterpretedValue?: string;
  };

  /**
   * An array of values that slots should be set to
   */
  export type SlotValuesType = {};

  /**
   * The different shapes that a slot can be in during a conversation.
   */
  export type SlotShapeType = {};

  /**
   * Settings used when Amazon Lex successfully captures a slot value from a user.
   */
  export type SlotCaptureSettingType = {
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    CaptureResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
     */
    CaptureNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate after the slot value is captured.
     */
    CaptureConditional?: ConditionalSpecificationType;

    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    FailureResponse?: ResponseSpecificationType;

    /**
     * Specifies the next step that the bot runs when the slot value code is not recognized.
     */
    FailureNextStep?: DialogStateType;

    /**
     * A list of conditional branches to evaluate when the slot value isn't captured.
     */
    FailureConditional?: ConditionalSpecificationType;

    /**
     * Code hook called after Amazon Lex successfully captures a slot value.
     */
    CodeHook?: DialogCodeHookInvocationSettingType;

    /**
     * Code hook called when Amazon Lex doesn't capture a slot value.
     */
    ElicitationCodeHook?: ElicitationCodeHookInvocationSettingType;
  };

  /**
   * Amazon Lex conversational bot performing automated tasks such as ordering a pizza, booking a hotel, and so on.
   */
  export type BotResourceType = {
    /**
     * Read-only property
     */
    Id?: IdType;

    /**
     * Read-only property
     */
    Arn?: BotArnType;

    Name: NameType;

    Description?: DescriptionType;

    RoleArn: RoleArnType;

    /**
     * Data privacy setting of the Bot.
     */
    DataPrivacy: Record<string, any>;

    /**
     * IdleSessionTTLInSeconds of the resource
     */
    IdleSessionTTLInSeconds: number;

    /**
     * List of bot locales
     */
    BotLocales?: BotLocaleType[];

    BotFileS3Location?: S3LocationType;

    /**
     * A list of tags to add to the bot, which can only be added at bot creation.
     */
    BotTags?: TagType[];

    /**
     * A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.
     */
    TestBotAliasTags?: TagType[];

    /**
     * Specifies whether to build the bot locales after bot creation completes.
     */
    AutoBuildBotLocales?: boolean;

    TestBotAliasSettings?: TestBotAliasSettingsType;

    Replication?: ReplicationType;
  };
}
