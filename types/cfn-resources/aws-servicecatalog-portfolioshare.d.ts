/**
 * TypeScript definitions for AWS::ServiceCatalog::PortfolioShare
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
 */
export namespace AWS_ServiceCatalog_PortfolioShare {
  /**
   * Resource Type definition for AWS::ServiceCatalog::PortfolioShare
   */
  export type PortfolioShareResourceType = {
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
    AccountId: string;

    ShareTagOptions?: boolean;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
