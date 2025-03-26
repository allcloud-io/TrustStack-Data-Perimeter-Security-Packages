/**
 * TypeScript definitions for AWS::Pinpoint::SmsTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::SmsTemplate
 */
export namespace AWS_Pinpoint_SmsTemplate {
  /**
   * Resource Type definition for AWS::Pinpoint::SmsTemplate
   */
  export type SmsTemplateResourceType = {
    /**
     * Create-only property
     */
    TemplateName: string;

    TemplateDescription?: string;

    DefaultSubstitutions?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Body: string;

    Tags?: Record<string, any>;
  };
}
