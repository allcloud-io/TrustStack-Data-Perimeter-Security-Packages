/**
 * TypeScript definitions for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation.
 */
export namespace AWS_ServiceCatalogAppRegistry_AttributeGroupAssociation {
  /**
   * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation.
   */
  export type AttributeGroupAssociationResourceType = {
    /**
     * The name or the Id of the Application.
     * Create-only property
     */
    Application: string;

    /**
     * The name or the Id of the AttributeGroup.
     * Create-only property
     */
    AttributeGroup: string;

    /**
     * Read-only property
     */
    ApplicationArn?: string;

    /**
     * Read-only property
     */
    AttributeGroupArn?: string;
  };
}
