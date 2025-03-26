/**
 * TypeScript definitions for AWS::ServiceCatalogAppRegistry::AttributeGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
 */
export namespace AWS_ServiceCatalogAppRegistry_AttributeGroup {
  export type TagsType = {};

  /**
   * Resource Schema for AWS::ServiceCatalogAppRegistry::AttributeGroup.
   */
  export type AttributeGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the attribute group.
     */
    Name: string;

    /**
     * The description of the attribute group.
     */
    Description?: string;

    Attributes: Record<string, any>;

    Tags?: TagsType;
  };
}
