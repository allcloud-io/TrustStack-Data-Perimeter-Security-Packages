/**
 * TypeScript definitions for AWS::Organizations::Organization
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Organizations::Organization
 */
export namespace AWS_Organizations_Organization {
  /**
   * Resource schema for AWS::Organizations::Organization
   */
  export type OrganizationResourceType = {
    /**
     * The unique identifier (ID) of an organization.
     * Read-only property
     */
    Id?: string;

    /**
     * The Amazon Resource Name (ARN) of an organization.
     * Read-only property
     */
    Arn?: string;

    /**
     * Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
     * Default: "ALL"
     */
    FeatureSet?: string;

    /**
     * The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization.
     * Read-only property
     */
    ManagementAccountArn?: string;

    /**
     * The unique identifier (ID) of the management account of an organization.
     * Read-only property
     */
    ManagementAccountId?: string;

    /**
     * The email address that is associated with the AWS account that is designated as the management account for the organization.
     * Read-only property
     */
    ManagementAccountEmail?: string;

    /**
     * The unique identifier (ID) for the root.
     * Read-only property
     */
    RootId?: string;
  };
}
