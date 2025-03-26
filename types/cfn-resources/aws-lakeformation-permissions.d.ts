/**
 * TypeScript definitions for AWS::LakeFormation::Permissions
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::LakeFormation::Permissions
 */
export namespace AWS_LakeFormation_Permissions {
  export type DataLakePrincipalType = {
    DataLakePrincipalIdentifier?: string;
  };

  export type TableResourceType = {
    DatabaseName?: string;

    CatalogId?: string;

    TableWildcard?: TableWildcardType;

    Name?: string;
  };

  export type ResourceType = {
    DatabaseResource?: DatabaseResourceType;

    DataLocationResource?: DataLocationResourceType;

    TableWithColumnsResource?: TableWithColumnsResourceType;

    TableResource?: TableResourceType;
  };

  export type DatabaseResourceType = {
    CatalogId?: string;

    Name?: string;
  };

  export type DataLocationResourceType = {
    S3Resource?: string;

    CatalogId?: string;
  };

  export type TableWildcardType = {};

  export type TableWithColumnsResourceType = {
    DatabaseName?: string;

    ColumnNames?: string[];

    CatalogId?: string;

    Name?: string;

    ColumnWildcard?: ColumnWildcardType;
  };

  export type ColumnWildcardType = {
    ExcludedColumnNames?: string[];
  };

  /**
   * Resource Type definition for AWS::LakeFormation::Permissions
   */
  export type PermissionsResourceType = {
    /**
     * Create-only property
     */
    Resource: ResourceType;

    Permissions?: string[];

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    DataLakePrincipal: DataLakePrincipalType;

    PermissionsWithGrantOption?: string[];
  };
}
