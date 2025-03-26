/**
 * TypeScript definitions for AWS::ServiceCatalog::TagOption
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption
 */
export namespace AWS_ServiceCatalog_TagOption {
  /**
   * Resource Type definition for AWS::ServiceCatalog::TagOption
   */
  export type TagOptionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Active?: boolean;

    /**
     * Create-only property
     */
    Value: string;

    /**
     * Create-only property
     */
    Key: string;
  };
}
