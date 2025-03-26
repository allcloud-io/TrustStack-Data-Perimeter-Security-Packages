/**
 * TypeScript definitions for AWS::Lex::BotVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.
 */
export namespace AWS_Lex_BotVersion {
  /**
   * Unique ID of resource
   */
  export type IdType = {};

  /**
   * A description of the version. Use the description to help identify the version in lists.
   */
  export type DescriptionType = {};

  /**
   * The identifier of the language and locale that the bot will be used in.
   */
  export type LocaleIdType = {};

  /**
   * The version of a bot.
   */
  export type BotVersionType = {};

  /**
   * The version of a bot used for a bot locale.
   */
  export type BotVersionLocaleDetailsType = {
    SourceBotVersion: BotVersionType;
  };

  export type BotVersionLocaleSpecificationType = {
    LocaleId: LocaleIdType;

    BotVersionLocaleDetails: BotVersionLocaleDetailsType;
  };

  /**
   * Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.
   */
  export type BotVersionLocaleSpecificationListType = {};

  /**
   * A version is a numbered snapshot of your work that you can publish for use in different parts of your workflow, such as development, beta deployment, and production.
   */
  export type BotVersionResourceType = {
    /**
     * Create-only property
     */
    BotId: IdType;

    /**
     * Read-only property
     */
    BotVersion?: BotVersionType;

    Description?: DescriptionType;

    BotVersionLocaleSpecification: BotVersionLocaleSpecificationListType;
  };
}
