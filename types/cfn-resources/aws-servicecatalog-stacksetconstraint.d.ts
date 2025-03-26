/**
 * TypeScript definitions for AWS::ServiceCatalog::StackSetConstraint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::StackSetConstraint
 */
export namespace AWS_ServiceCatalog_StackSetConstraint {
  /**
   * Resource Type definition for AWS::ServiceCatalog::StackSetConstraint
   */
  export type StackSetConstraintResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Description: string;

    StackInstanceControl: string;

    AcceptLanguage?: string;

    /**
     * Create-only property
     */
    PortfolioId: string;

    /**
     * Create-only property
     */
    ProductId: string;

    RegionList: string[];

    AdminRole: string;

    AccountList: string[];

    ExecutionRole: string;
  };
}
