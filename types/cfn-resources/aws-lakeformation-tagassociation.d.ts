/**
 * TypeScript definitions for AWS::LakeFormation::TagAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema representing a Lake Formation Tag Association. While tag associations are not explicit Lake Formation resources, this CloudFormation resource can be used to associate tags with Lake Formation entities.
 */
export namespace AWS_LakeFormation_TagAssociation {
  export type CatalogIdStringType = {};

  export type NameStringType = {};

  export type LFTagPairType = {
    CatalogId: CatalogIdStringType;

    TagKey: LFTagKeyType;

    TagValues: TagValueListType;
  };

  export type LFTagsListType = {};

  export type DataLakePrincipalStringType = {};

  export type DataLakePrincipalType = {
    DataLakePrincipalIdentifier?: DataLakePrincipalStringType;
  };

  export type ResourceTypeType = {};

  export type CatalogResourceType = {};

  export type DatabaseResourceType = {
    CatalogId: CatalogIdStringType;

    Name: NameStringType;
  };

  export type TableWildcardType = {};

  export type TableResourceType = {
    CatalogId: CatalogIdStringType;

    DatabaseName: NameStringType;

    Name?: NameStringType;

    TableWildcard?: TableWildcardType;
  };

  export type ColumnNamesType = {};

  export type TableWithColumnsResourceType = {
    CatalogId: CatalogIdStringType;

    DatabaseName: NameStringType;

    Name: NameStringType;

    ColumnNames: ColumnNamesType;
  };

  export type ResourceType = {
    Catalog?: CatalogResourceType;

    Database?: DatabaseResourceType;

    Table?: TableResourceType;

    TableWithColumns?: TableWithColumnsResourceType;
  };

  export type LFTagKeyType = {};

  export type LFTagValueType = {};

  export type TagValueListType = {};

  /**
   * A resource schema representing a Lake Formation Tag Association. While tag associations are not explicit Lake Formation resources, this CloudFormation resource can be used to associate tags with Lake Formation entities.
   */
  export type TagAssociationResourceType = {
    /**
     * Resource to tag with the Lake Formation Tags
     * Create-only property
     */
    Resource: ResourceType;

    /**
     * List of Lake Formation Tags to associate with the Lake Formation Resource
     * Create-only property
     */
    LFTags: LFTagsListType;

    /**
     * Unique string identifying the resource. Used as primary identifier, which ideally should be a string
     * Read-only property
     */
    ResourceIdentifier?: string;

    /**
     * Unique string identifying the resource's tags. Used as primary identifier, which ideally should be a string
     * Read-only property
     */
    TagsIdentifier?: string;
  };
}
