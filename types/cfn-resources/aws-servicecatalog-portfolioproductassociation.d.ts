/**
 * TypeScript definitions for AWS::ServiceCatalog::PortfolioProductAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
 */
export namespace AWS_ServiceCatalog_PortfolioProductAssociation {
  /**
   * Resource Type definition for AWS::ServiceCatalog::PortfolioProductAssociation
   */
  export type PortfolioProductAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    SourcePortfolioId?: string;

    /**
     * Create-only property
     */
    AcceptLanguage?: string;

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
