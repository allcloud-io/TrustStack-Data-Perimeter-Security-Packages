/**
 * TypeScript definitions for AWS::LakeFormation::PrincipalPermissions
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::LakeFormation::PrincipalPermissions` resource represents the permissions that a principal has on a GLUDC resource (such as GLUlong databases or GLUlong tables). When you create a `PrincipalPermissions` resource, the permissions are granted via the LFlong `GrantPermissions` API operation. When you delete a `PrincipalPermissions` resource, the permissions on principal-resource pair are revoked via the LFlong `RevokePermissions` API operation.
 */
export namespace AWS_LakeFormation_PrincipalPermissions {
  export type CatalogIdStringType = {};

  export type PathStringType = {};

  export type ResourceArnStringType = {};

  export type NameStringType = {};

  export type IAMRoleArnType = {};

  /**
   * The LF-tag key and values attached to a resource.
   */
  export type LFTagType = {
    /**
     * The key-name for the LF-tag.
     */
    TagKey?: LFTagKeyType;

    /**
     * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
     */
    TagValues?: TagValueListType;
  };

  export type LFTagPairType = {
    CatalogId?: CatalogIdStringType;

    TagKey: LFTagKeyType;

    TagValues: TagValueListType;
  };

  export type LFTagsListType = {};

  export type ExpressionType = {};

  export type DataLakePrincipalStringType = {};

  /**
   * The LFlong principal.
   */
  export type DataLakePrincipalType = {
    /**
     * An identifier for the LFlong principal.
     */
    DataLakePrincipalIdentifier?: DataLakePrincipalStringType;
  };

  export type ResourceTypeType = {};

  export type CatalogResourceType = {};

  /**
   * A structure for the database object.
   */
  export type DatabaseResourceType = {
    /**
     * The identifier for the Data Catalog. By default, it is the account ID of the caller.
     */
    CatalogId: CatalogIdStringType;

    /**
     * The name of the database resource. Unique to the Data Catalog.
     */
    Name: NameStringType;
  };

  export type TableWildcardType = {};

  /**
   * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
   */
  export type TableResourceType = {
    /**
     * The identifier for the Data Catalog. By default, it is the account ID of the caller.
     */
    CatalogId: CatalogIdStringType;

    /**
     * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
     */
    DatabaseName: NameStringType;

    /**
     * The name of the table.
     */
    Name?: NameStringType;

    /**
     * A wildcard object representing every table under a database.
     * At least one of `TableResource$Name` or `TableResource$TableWildcard` is required.
     */
    TableWildcard?: TableWildcardType;
  };

  export type ColumnNamesType = {};

  /**
   * A wildcard object, consisting of an optional list of excluded column names or indexes.
   */
  export type ColumnWildcardType = {
    /**
     * Excludes column names. Any column with this name will be excluded.
     */
    ExcludedColumnNames?: ColumnNamesType;
  };

  /**
   * A structure for a table with columns object. This object is only used when granting a SELECT permission.
   * This object must take a value for at least one of `ColumnsNames`, `ColumnsIndexes`, or `ColumnsWildcard`.
   */
  export type TableWithColumnsResourceType = {
    /**
     * The identifier for the GLUDC where the location is registered with LFlong.
     */
    CatalogId: CatalogIdStringType;

    /**
     * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
     */
    DatabaseName: NameStringType;

    /**
     * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
     */
    Name: NameStringType;

    /**
     * The list of column names for the table. At least one of `ColumnNames` or `ColumnWildcard` is required.
     */
    ColumnNames?: ColumnNamesType;

    /**
     * A wildcard specified by a `ColumnWildcard` object. At least one of `ColumnNames` or `ColumnWildcard` is required.
     */
    ColumnWildcard?: ColumnWildcardType;
  };

  /**
   * A structure for a data location object where permissions are granted or revoked.
   */
  export type DataLocationResourceType = {
    /**
     * The identifier for the GLUDC where the location is registered with LFlong.
     */
    CatalogId: CatalogIdStringType;

    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
     */
    ResourceArn: ResourceArnStringType;
  };

  /**
   * A structure that describes certain columns on certain rows.
   */
  export type DataCellsFilterResourceType = {
    /**
     * The ID of the catalog to which the table belongs.
     */
    TableCatalogId: CatalogIdStringType;

    /**
     * A database in the GLUDC.
     */
    DatabaseName: NameStringType;

    /**
     * The name of the table.
     */
    TableName: NameStringType;

    /**
     * The name given by the user to the data filter cell.
     */
    Name: NameStringType;
  };

  /**
   * A structure containing an LF-tag key and values for a resource.
   */
  export type LFTagKeyResourceType = {
    /**
     * The identifier for the GLUDC where the location is registered with GLUDC.
     */
    CatalogId: CatalogIdStringType;

    /**
     * The key-name for the LF-tag.
     */
    TagKey: NameStringType;

    /**
     * A list of possible values for the corresponding `TagKey` of an LF-tag key-value pair.
     */
    TagValues: TagValueListType;
  };

  /**
   * A list of LF-tag conditions that define a resource's LF-tag policy.
   * A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'.
   */
  export type LFTagPolicyResourceType = {
    /**
     * The identifier for the GLUDC. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
     */
    CatalogId: CatalogIdStringType;

    /**
     * The resource type for which the LF-tag policy applies.
     */
    ResourceType: ResourceTypeType;

    /**
     * A list of LF-tag conditions that apply to the resource's LF-tag policy.
     */
    Expression: ExpressionType;
  };

  /**
   * A structure for the resource.
   */
  export type ResourceType = {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
     */
    Catalog?: CatalogResourceType;

    /**
     * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
     */
    Database?: DatabaseResourceType;

    /**
     * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
     */
    Table?: TableResourceType;

    /**
     * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
     */
    TableWithColumns?: TableWithColumnsResourceType;

    /**
     * The location of an Amazon S3 path where permissions are granted or revoked.
     */
    DataLocation?: DataLocationResourceType;

    /**
     * A data cell filter.
     */
    DataCellsFilter?: DataCellsFilterResourceType;

    /**
     * The LF-tag key and values attached to a resource.
     */
    LFTag?: LFTagKeyResourceType;

    /**
     * A list of LF-tag conditions that define a resource's LF-tag policy.
     */
    LFTagPolicy?: LFTagPolicyResourceType;
  };

  export type NullableBooleanType = {};

  export type PermissionType = {};

  export type LFTagKeyType = {};

  export type LFTagValueType = {};

  export type DataLakePrincipalListType = {};

  export type PermissionListType = {};

  export type TagValueListType = {};

  export type PrincipalResourcePairType = {
    Principal: DataLakePrincipalType;

    Resource: ResourceType;
  };

  export type PrincipalPermissionsType = {
    DataLakePrincipal?: DataLakePrincipalType;

    PermissionList?: PermissionListType;
  };

  export type PrincipalPermissionsListType = {};

  /**
   * The `AWS::LakeFormation::PrincipalPermissions` resource represents the permissions that a principal has on a GLUDC resource (such as GLUlong databases or GLUlong tables). When you create a `PrincipalPermissions` resource, the permissions are granted via the LFlong `GrantPermissions` API operation. When you delete a `PrincipalPermissions` resource, the permissions on principal-resource pair are revoked via the LFlong `RevokePermissions` API operation.
   */
  export type PrincipalPermissionsResourceType = {
    /**
     * The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     * Create-only property
     */
    Catalog?: CatalogIdStringType;

    /**
     * The principal to be granted a permission.
     * Create-only property
     */
    Principal: DataLakePrincipalType;

    /**
     * The resource to be granted or revoked permissions.
     * Create-only property
     */
    Resource: ResourceType;

    /**
     * The permissions granted or revoked.
     * Create-only property
     */
    Permissions: PermissionListType;

    /**
     * Indicates the ability to grant permissions (as a subset of permissions granted).
     * Create-only property
     */
    PermissionsWithGrantOption: PermissionListType;

    /**
     * Read-only property
     */
    PrincipalIdentifier?: string;

    /**
     * Read-only property
     */
    ResourceIdentifier?: string;
  };
}
