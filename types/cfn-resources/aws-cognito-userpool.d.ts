/**
 * TypeScript definitions for AWS::Cognito::UserPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Cognito::UserPool Resource Type
 */
export namespace AWS_Cognito_UserPool {
  export type PasswordPolicyType = {
    MinimumLength?: number;

    RequireLowercase?: boolean;

    RequireNumbers?: boolean;

    RequireSymbols?: boolean;

    RequireUppercase?: boolean;

    TemporaryPasswordValidityDays?: number;

    PasswordHistorySize?: number;
  };

  export type SignInPolicyType = {
    AllowedFirstAuthFactors?: string[];
  };

  export type PoliciesType = {
    PasswordPolicy?: PasswordPolicyType;

    SignInPolicy?: SignInPolicyType;
  };

  export type InviteMessageTemplateType = {
    EmailMessage?: string;

    EmailSubject?: string;

    SMSMessage?: string;
  };

  export type RecoveryOptionType = {
    Name?: string;

    Priority?: number;
  };

  export type AccountRecoverySettingType = {
    RecoveryMechanisms?: RecoveryOptionType[];
  };

  export type AdminCreateUserConfigType = {
    AllowAdminCreateUserOnly?: boolean;

    InviteMessageTemplate?: InviteMessageTemplateType;

    UnusedAccountValidityDays?: number;
  };

  export type DeviceConfigurationType = {
    ChallengeRequiredOnNewDevice?: boolean;

    DeviceOnlyRememberedOnUserPrompt?: boolean;
  };

  export type EmailConfigurationType = {
    ReplyToEmailAddress?: string;

    SourceArn?: string;

    From?: string;

    ConfigurationSet?: string;

    EmailSendingAccount?: string;
  };

  export type CustomEmailSenderType = {
    LambdaVersion?: string;

    LambdaArn?: string;
  };

  export type CustomSMSSenderType = {
    LambdaVersion?: string;

    LambdaArn?: string;
  };

  export type PreTokenGenerationConfigType = {
    LambdaVersion?: string;

    LambdaArn?: string;
  };

  export type LambdaConfigType = {
    CreateAuthChallenge?: string;

    CustomMessage?: string;

    DefineAuthChallenge?: string;

    PostAuthentication?: string;

    PostConfirmation?: string;

    PreAuthentication?: string;

    PreSignUp?: string;

    VerifyAuthChallengeResponse?: string;

    UserMigration?: string;

    PreTokenGeneration?: string;

    CustomEmailSender?: CustomEmailSenderType;

    CustomSMSSender?: CustomSMSSenderType;

    KMSKeyID?: string;

    PreTokenGenerationConfig?: PreTokenGenerationConfigType;
  };

  export type SmsConfigurationType = {
    ExternalId?: string;

    SnsCallerArn?: string;

    SnsRegion?: string;
  };

  export type StringAttributeConstraintsType = {
    MaxLength?: string;

    MinLength?: string;
  };

  export type NumberAttributeConstraintsType = {
    MaxValue?: string;

    MinValue?: string;
  };

  export type SchemaAttributeType = {
    AttributeDataType?: string;

    DeveloperOnlyAttribute?: boolean;

    Mutable?: boolean;

    Name?: string;

    NumberAttributeConstraints?: NumberAttributeConstraintsType;

    StringAttributeConstraints?: StringAttributeConstraintsType;

    Required?: boolean;
  };

  export type UsernameConfigurationType = {
    CaseSensitive?: boolean;
  };

  export type UserAttributeUpdateSettingsType = {
    AttributesRequireVerificationBeforeUpdate: string[];
  };

  export type VerificationMessageTemplateType = {
    DefaultEmailOption?: string;

    EmailMessage?: string;

    EmailMessageByLink?: string;

    EmailSubject?: string;

    EmailSubjectByLink?: string;

    SmsMessage?: string;
  };

  export type AdvancedSecurityAdditionalFlowsType = {
    CustomAuthMode?: string;
  };

  export type UserPoolAddOnsType = {
    AdvancedSecurityMode?: string;

    AdvancedSecurityAdditionalFlows?: AdvancedSecurityAdditionalFlowsType;
  };

  /**
   * Definition of AWS::Cognito::UserPool Resource Type
   */
  export type UserPoolResourceType = {
    UserPoolName?: string;

    Policies?: PoliciesType;

    AccountRecoverySetting?: AccountRecoverySettingType;

    AdminCreateUserConfig?: AdminCreateUserConfigType;

    AliasAttributes?: string[];

    UsernameAttributes?: string[];

    AutoVerifiedAttributes?: string[];

    DeviceConfiguration?: DeviceConfigurationType;

    EmailConfiguration?: EmailConfigurationType;

    EmailVerificationMessage?: string;

    EmailVerificationSubject?: string;

    DeletionProtection?: string;

    LambdaConfig?: LambdaConfigType;

    MfaConfiguration?: string;

    EnabledMfas?: string[];

    SmsAuthenticationMessage?: string;

    EmailAuthenticationMessage?: string;

    EmailAuthenticationSubject?: string;

    SmsConfiguration?: SmsConfigurationType;

    SmsVerificationMessage?: string;

    WebAuthnRelyingPartyID?: string;

    WebAuthnUserVerification?: string;

    Schema?: SchemaAttributeType[];

    UsernameConfiguration?: UsernameConfigurationType;

    UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;

    UserPoolTags?: Record<string, any>;

    VerificationMessageTemplate?: VerificationMessageTemplateType;

    UserPoolAddOns?: UserPoolAddOnsType;

    /**
     * Read-only property
     */
    ProviderName?: string;

    /**
     * Read-only property
     */
    ProviderURL?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    UserPoolId?: string;

    UserPoolTier?: string;
  };
}
