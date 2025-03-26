/**
 * TypeScript definitions for AWS::ServiceCatalog::LaunchRoleConstraint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
 */
export namespace AWS_ServiceCatalog_LaunchRoleConstraint {
  /**
   * Resource Type definition for AWS::ServiceCatalog::LaunchRoleConstraint
   */
  export type LaunchRoleConstraintResourceType = {
    Description?: string;

    LocalRoleName?: string;

    AcceptLanguage?: string;

    /**
     * Create-only property
     */
    PortfolioId: string;

    /**
     * Create-only property
     */
    ProductId: string;

    /**
     * Read-only property
     */
    Id?: string;

    RoleArn?: string;
  };
}
