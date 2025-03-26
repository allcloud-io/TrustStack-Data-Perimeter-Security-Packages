/**
 * TypeScript definitions for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
 */
export namespace AWS_ServiceCatalog_PortfolioPrincipalAssociation {
  /**
   * Resource Type definition for AWS::ServiceCatalog::PortfolioPrincipalAssociation
   */
  export type PortfolioPrincipalAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    PrincipalARN: string;

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
    PrincipalType: string;
  };
}
