/**
 * TypeScript definitions for AWS::ServiceCatalog::TagOptionAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
 */
export namespace AWS_ServiceCatalog_TagOptionAssociation {
  /**
   * Resource Type definition for AWS::ServiceCatalog::TagOptionAssociation
   */
  export type TagOptionAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    TagOptionId: string;

    /**
     * Create-only property
     */
    ResourceId: string;
  };
}
