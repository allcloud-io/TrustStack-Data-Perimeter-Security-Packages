/**
 * TypeScript definitions for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::ResourceAssociation
 */
export namespace AWS_ServiceCatalogAppRegistry_ResourceAssociation {
  /**
   * Resource Schema for AWS::ServiceCatalogAppRegistry::ResourceAssociation
   */
  export type ResourceAssociationResourceType = {
    /**
     * The name or the Id of the Application.
     * Create-only property
     */
    Application: string;

    /**
     * The name or the Id of the Resource.
     * Create-only property
     */
    Resource: string;

    /**
     * The type of the CFN Resource for now it's enum CFN_STACK.
     * Create-only property
     */
    ResourceType: string;

    /**
     * Read-only property
     */
    ApplicationArn?: string;

    /**
     * Read-only property
     */
    ResourceArn?: string;
  };
}
