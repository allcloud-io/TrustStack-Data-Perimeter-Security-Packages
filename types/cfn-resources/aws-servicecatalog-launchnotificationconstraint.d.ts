/**
 * TypeScript definitions for AWS::ServiceCatalog::LaunchNotificationConstraint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::LaunchNotificationConstraint
 */
export namespace AWS_ServiceCatalog_LaunchNotificationConstraint {
  /**
   * Resource Type definition for AWS::ServiceCatalog::LaunchNotificationConstraint
   */
  export type LaunchNotificationConstraintResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Description?: string;

    NotificationArns: string[];

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
