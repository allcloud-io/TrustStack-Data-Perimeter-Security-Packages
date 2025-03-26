/**
 * TypeScript definitions for AWS::Backup::ReportPlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * Contains detailed information about a report plan in AWS Backup Audit Manager.
 */
export namespace AWS_Backup_ReportPlan {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key?: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * Contains detailed information about a report plan in AWS Backup Audit Manager.
   */
  export type ReportPlanResourceType = {
    /**
     * The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     * Create-only property
     */
    ReportPlanName?: string;

    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     * Read-only property
     */
    ReportPlanArn?: string;

    /**
     * An optional description of the report plan with a maximum of 1,024 characters.
     */
    ReportPlanDescription?: string;

    /**
     * Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
     */
    ReportPlanTags?: TagType[];

    /**
     * A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
     */
    ReportDeliveryChannel: Record<string, any>;

    /**
     * Identifies the report template for the report. Reports are built using a report template.
     */
    ReportSetting: Record<string, any>;
  };
}
