/**
 * TypeScript definitions for AWS::ServiceCatalog::Portfolio
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::Portfolio
 */
export namespace AWS_ServiceCatalog_Portfolio {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::ServiceCatalog::Portfolio
   */
  export type PortfolioResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    PortfolioName?: string;

    ProviderName: string;

    Description?: string;

    DisplayName: string;

    AcceptLanguage?: string;

    Tags?: TagType[];
  };
}
