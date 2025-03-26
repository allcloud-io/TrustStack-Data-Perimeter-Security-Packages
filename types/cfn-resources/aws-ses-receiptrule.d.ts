/**
 * TypeScript definitions for AWS::SES::ReceiptRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::ReceiptRule
 */
export namespace AWS_SES_ReceiptRule {
  export type ConnectActionType = {
    InstanceARN: string;

    IAMRoleARN: string;
  };

  export type ActionType = {
    ConnectAction?: ConnectActionType;

    BounceAction?: BounceActionType;

    S3Action?: S3ActionType;

    StopAction?: StopActionType;

    SNSAction?: SNSActionType;

    WorkmailAction?: WorkmailActionType;

    AddHeaderAction?: AddHeaderActionType;

    LambdaAction?: LambdaActionType;
  };

  export type BounceActionType = {
    Sender: string;

    SmtpReplyCode: string;

    Message: string;

    TopicArn?: string;

    StatusCode?: string;
  };

  export type S3ActionType = {
    ObjectKeyPrefix?: string;

    BucketName: string;

    IamRoleArn?: string;

    KmsKeyArn?: string;

    TopicArn?: string;
  };

  export type StopActionType = {
    Scope: string;

    TopicArn?: string;
  };

  export type RuleType = {
    ScanEnabled?: boolean;

    Recipients?: string[];

    Actions?: ActionType[];

    Enabled?: boolean;

    Name?: string;

    TlsPolicy?: string;
  };

  export type SNSActionType = {
    TopicArn?: string;

    Encoding?: string;
  };

  export type WorkmailActionType = {
    TopicArn?: string;

    OrganizationArn: string;
  };

  export type AddHeaderActionType = {
    HeaderName: string;

    HeaderValue: string;
  };

  export type LambdaActionType = {
    InvocationType?: string;

    FunctionArn: string;

    TopicArn?: string;
  };

  /**
   * Resource Type definition for AWS::SES::ReceiptRule
   */
  export type ReceiptRuleResourceType = {
    After?: string;

    Rule: RuleType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    RuleSetName: string;
  };
}
