/**
 * TypeScript definitions for AWS::LakeFormation::DataLakeSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::LakeFormation::DataLakeSettings
 */
export namespace AWS_LakeFormation_DataLakeSettings {
  export type ExternalDataFilteringAllowListType = {};

  export type CreateTableDefaultPermissionsType = {};

  export type AdminsType = {};

  export type CreateDatabaseDefaultPermissionsType = {};

  /**
   * Resource Type definition for AWS::LakeFormation::DataLakeSettings
   */
  export type DataLakeSettingsResourceType = {
    AllowExternalDataFiltering?: boolean;

    ExternalDataFilteringAllowList?: ExternalDataFilteringAllowListType;

    CreateTableDefaultPermissions?: CreateTableDefaultPermissionsType;

    MutationType?: string;

    Parameters?: Record<string, any>;

    AllowFullTableExternalDataAccess?: boolean;

    Admins?: AdminsType;

    CreateDatabaseDefaultPermissions?: CreateDatabaseDefaultPermissionsType;

    /**
     * Read-only property
     */
    Id?: string;

    AuthorizedSessionTagValueList?: string[];

    TrustedResourceOwners?: string[];
  };
}
