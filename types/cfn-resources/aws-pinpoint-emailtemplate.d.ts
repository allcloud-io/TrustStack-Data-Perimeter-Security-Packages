/**
 * TypeScript definitions for AWS::Pinpoint::EmailTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::EmailTemplate
 */
export namespace AWS_Pinpoint_EmailTemplate {
  /**
   * Resource Type definition for AWS::Pinpoint::EmailTemplate
   */
  export type EmailTemplateResourceType = {
    HtmlPart?: string;

    TextPart?: string;

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

    Subject: string;

    Tags?: Record<string, any>;
  };
}
