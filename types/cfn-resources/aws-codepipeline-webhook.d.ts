/**
 * TypeScript definitions for AWS::CodePipeline::Webhook
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodePipeline::Webhook
 */
export namespace AWS_CodePipeline_Webhook {
  export type WebhookFilterRuleType = {
    JsonPath: string;

    MatchEquals?: string;
  };

  export type WebhookAuthConfigurationType = {
    AllowedIPRange?: string;

    SecretToken?: string;
  };

  /**
   * Resource Type definition for AWS::CodePipeline::Webhook
   */
  export type WebhookResourceType = {
    AuthenticationConfiguration: WebhookAuthConfigurationType;

    Filters: WebhookFilterRuleType[];

    Authentication: string;

    TargetPipeline: string;

    TargetAction: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Url?: string;

    /**
     * Create-only property
     */
    Name?: string;

    TargetPipelineVersion: number;

    RegisterWithThirdParty?: boolean;
  };
}
