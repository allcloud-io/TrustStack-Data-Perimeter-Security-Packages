/**
 * TypeScript definitions for AWS::Cognito::UserPoolRiskConfigurationAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment
 */
export namespace AWS_Cognito_UserPoolRiskConfigurationAttachment {
  export type RiskExceptionConfigurationTypeType = {
    BlockedIPRangeList?: string[];

    SkippedIPRangeList?: string[];
  };

  export type CompromisedCredentialsActionsTypeType = {
    EventAction: string;
  };

  export type CompromisedCredentialsRiskConfigurationTypeType = {
    Actions: CompromisedCredentialsActionsTypeType;

    EventFilter?: string[];
  };

  export type AccountTakeoverActionTypeType = {
    EventAction: string;

    Notify: boolean;
  };

  export type AccountTakeoverActionsTypeType = {
    HighAction?: AccountTakeoverActionTypeType;

    LowAction?: AccountTakeoverActionTypeType;

    MediumAction?: AccountTakeoverActionTypeType;
  };

  export type NotifyEmailTypeType = {
    HtmlBody?: string;

    Subject: string;

    TextBody?: string;
  };

  export type NotifyConfigurationTypeType = {
    BlockEmail?: NotifyEmailTypeType;

    MfaEmail?: NotifyEmailTypeType;

    NoActionEmail?: NotifyEmailTypeType;

    From?: string;

    ReplyTo?: string;

    SourceArn: string;
  };

  export type AccountTakeoverRiskConfigurationTypeType = {
    Actions: AccountTakeoverActionsTypeType;

    NotifyConfiguration?: NotifyConfigurationTypeType;
  };

  /**
   * Resource Type definition for AWS::Cognito::UserPoolRiskConfigurationAttachment
   */
  export type UserPoolRiskConfigurationAttachmentResourceType = {
    /**
     * Create-only property
     */
    UserPoolId: string;

    /**
     * Create-only property
     */
    ClientId: string;

    RiskExceptionConfiguration?: RiskExceptionConfigurationTypeType;

    CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationTypeType;

    AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationTypeType;
  };
}
