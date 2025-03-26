/**
 * TypeScript definitions for AWS::ServiceCatalog::LaunchTemplateConstraint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint
 */
export namespace AWS_ServiceCatalog_LaunchTemplateConstraint {
  /**
   * Resource Type definition for AWS::ServiceCatalog::LaunchTemplateConstraint
   */
  export type LaunchTemplateConstraintResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Description?: string;

    AcceptLanguage?: string;

    /**
     * Create-only property
     */
    PortfolioId: string;

    /**
     * Create-only property
     */
    ProductId: string;

    Rules: string;
  };
}
