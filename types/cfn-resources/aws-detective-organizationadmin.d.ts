/**
 * TypeScript definitions for AWS::Detective::OrganizationAdmin
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Detective::OrganizationAdmin
 */
export namespace AWS_Detective_OrganizationAdmin {
  /**
   * Resource schema for AWS::Detective::OrganizationAdmin
   */
  export type OrganizationAdminResourceType = {
    /**
     * The account ID of the account that should be registered as your Organization's delegated administrator for Detective
     * Create-only property
     */
    AccountId: string;

    /**
     * The Detective graph ARN
     * Read-only property
     */
    GraphArn?: string;
  };
}
