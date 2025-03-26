/**
 * TypeScript definitions for AWS::Lex::BotAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * A Bot Alias enables you to change the version of a bot without updating applications that use the bot
 */
export namespace AWS_Lex_BotAlias {
  /**
   * The identifier of the language and locale that the bot alias will be configured in.
   */
  export type LocaleIdType = {};

  /**
   * A list of bot alias locale settings to add to the bot alias.
   */
  export type BotAliasLocaleSettingsListType = {};

  export type BotAliasStatusType = {};

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
   * List of audio log settings
   */
  export type AudioLogSettingsType = {};

  /**
   * List of text log settings
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
   * Unique ID of resource
   */
  export type IdType = {};

  /**
   * A unique identifier for a resource.
   */
  export type NameType = {};

  /**
   * The version of a bot.
   */
  export type BotVersionType = {};

  /**
   * A description of the bot alias. Use the description to help identify the bot alias in lists.
   */
  export type DescriptionType = {};

  export type ArnType = {};

  /**
   * A label for tagging Lex resources
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * A Bot Alias enables you to change the version of a bot without updating applications that use the bot
   */
  export type BotAliasResourceType = {
    /**
     * Read-only property
     */
    BotAliasId?: IdType;

    /**
     * Create-only property
     */
    BotId: IdType;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Read-only property
     */
    BotAliasStatus?: BotAliasStatusType;

    BotAliasLocaleSettings?: BotAliasLocaleSettingsListType;

    BotAliasName: NameType;

    BotVersion?: BotVersionType;

    ConversationLogSettings?: ConversationLogSettingsType;

    Description?: DescriptionType;

    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    SentimentAnalysisSettings?: Record<string, any>;

    /**
     * A list of tags to add to the bot alias.
     */
    BotAliasTags?: TagType[];
  };
}
