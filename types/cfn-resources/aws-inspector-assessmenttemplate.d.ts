/**
 * TypeScript definitions for AWS::Inspector::AssessmentTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Inspector::AssessmentTemplate
 */
export namespace AWS_Inspector_AssessmentTemplate {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::Inspector::AssessmentTemplate
   */
  export type AssessmentTemplateResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AssessmentTargetArn: string;

    /**
     * Create-only property
     */
    DurationInSeconds: number;

    /**
     * Create-only property
     */
    AssessmentTemplateName?: string;

    /**
     * Create-only property
     */
    RulesPackageArns: string[];

    /**
     * Create-only property
     */
    UserAttributesForFindings?: TagType[];
  };
}
