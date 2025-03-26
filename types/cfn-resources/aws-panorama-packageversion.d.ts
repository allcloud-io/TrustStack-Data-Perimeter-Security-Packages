/**
 * TypeScript definitions for AWS::Panorama::PackageVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Registers a package version.
 */
export namespace AWS_Panorama_PackageVersion {
  export type PackageOwnerAccountType = {};

  export type NodePackageIdType = {};

  export type NodePackageArnType = {};

  export type NodePackageNameType = {};

  export type NodePackageVersionType = {};

  export type NodePackagePatchVersionType = {};

  export type PackageVersionStatusType = {};

  export type PackageVersionStatusDescriptionType = {};

  export type TimeStampType = {};

  /**
   * Registers a package version.
   */
  export type PackageVersionResourceType = {
    /**
     * An owner account.
     * Create-only property
     */
    OwnerAccount?: PackageOwnerAccountType;

    /**
     * A package ID.
     * Create-only property
     */
    PackageId: NodePackageIdType;

    /**
     * Read-only property
     */
    PackageArn?: NodePackageArnType;

    /**
     * A package version.
     * Create-only property
     */
    PackageVersion: NodePackageVersionType;

    /**
     * A patch version.
     * Create-only property
     */
    PatchVersion: NodePackagePatchVersionType;

    /**
     * Whether to mark the new version as the latest version.
     */
    MarkLatest?: boolean;

    /**
     * Read-only property
     */
    IsLatestPatch?: boolean;

    /**
     * Read-only property
     */
    PackageName?: NodePackageNameType;

    /**
     * Read-only property
     */
    Status?: PackageVersionStatusType;

    /**
     * Read-only property
     */
    StatusDescription?: PackageVersionStatusDescriptionType;

    /**
     * Read-only property
     */
    RegisteredTime?: TimeStampType;

    /**
     * If the version was marked latest, the new version to maker as latest.
     */
    UpdatedLatestPatchVersion?: NodePackagePatchVersionType;
  };
}
