/**
 * TypeScript definitions for AWS::Chatbot::MicrosoftTeamsChannelConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Chatbot::MicrosoftTeamsChannelConfiguration.
 */
export namespace AWS_Chatbot_MicrosoftTeamsChannelConfiguration {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource schema for AWS::Chatbot::MicrosoftTeamsChannelConfiguration.
   */
  export type MicrosoftTeamsChannelConfigurationResourceType = {
    /**
     * The id of the Microsoft Teams team
     * Create-only property
     */
    TeamId: string;

    /**
     * The id of the Microsoft Teams channel
     */
    TeamsChannelId: string;

    /**
     * The id of the Microsoft Teams tenant
     * Create-only property
     */
    TeamsTenantId: string;

    /**
     * The name of the configuration
     * Create-only property
     */
    ConfigurationName: string;

    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot
     */
    IamRoleArn: string;

    /**
     * ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
     */
    SnsTopicArns?: string[];

    /**
     * Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
     * Default: "NONE"
     */
    LoggingLevel?: string;

    /**
     * Amazon Resource Name (ARN) of the configuration
     * Read-only property
     */
    Arn?: string;

    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
     */
    GuardrailPolicies?: string[];

    /**
     * Enables use of a user role requirement in your chat configuration
     * Default: false
     */
    UserRoleRequired?: boolean;

    /**
     * The tags to add to the configuration
     */
    Tags?: TagType[];

    /**
     * ARNs of Custom Actions to associate with notifications in the provided chat channel.
     */
    CustomizationResourceArns?: string[];
  };
}
