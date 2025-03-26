/**
 * TypeScript definitions for AWS::SES::Template
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::Template
 */
export namespace AWS_SES_Template {
  /**
   * The content of the email, composed of a subject line, an HTML part, and a text-only part
   */
  export type TemplateType = {
    /**
     * The name of the template.
     */
    TemplateName?: string;

    /**
     * The subject line of the email.
     */
    SubjectPart: string;

    /**
     * The email body that is visible to recipients whose email clients do not display HTML content.
     */
    TextPart?: string;

    /**
     * The HTML body of the email.
     */
    HtmlPart?: string;
  };

  /**
   * Resource Type definition for AWS::SES::Template
   */
  export type TemplateResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Template?: TemplateType;
  };
}
