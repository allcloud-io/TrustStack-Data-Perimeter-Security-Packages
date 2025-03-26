/**
 * TypeScript definitions for AWS::ServiceCatalog::ResourceUpdateConstraint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
 */
export namespace AWS_ServiceCatalog_ResourceUpdateConstraint {
  /**
   * Resource Type definition for AWS::ServiceCatalog::ResourceUpdateConstraint
   */
  export type ResourceUpdateConstraintResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Description?: string;

    AcceptLanguage?: string;

    TagUpdateOnProvisionedProduct: string;

    /**
     * Create-only property
     */
    PortfolioId: string;

    /**
     * Create-only property
     */
    ProductId: string;
  };
}
