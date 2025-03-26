/**
 * TypeScript definitions for AWS::Panorama::Package
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a package and storage location in an Amazon S3 access point.
 */
export namespace AWS_Panorama_Package {
  export type NodePackageNameType = {};

  export type NodePackageIdType = {};

  export type NodePackageArnType = {};

  export type TimestampType = {};

  /**
   * A storage location.
   */
  export type StorageLocationType = {
    /**
     * The location's bucket.
     */
    Bucket?: string;

    /**
     * The location's repo prefix.
     */
    RepoPrefixLocation?: string;

    /**
     * The location's generated prefix.
     */
    GeneratedPrefixLocation?: string;

    /**
     * The location's binary prefix.
     */
    BinaryPrefixLocation?: string;

    /**
     * The location's manifest prefix.
     */
    ManifestPrefixLocation?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TagListType = {};

  /**
   * Creates a package and storage location in an Amazon S3 access point.
   */
  export type PackageResourceType = {
    /**
     * A name for the package.
     * Create-only property
     */
    PackageName: NodePackageNameType;

    /**
     * Read-only property
     */
    PackageId?: NodePackageIdType;

    /**
     * Read-only property
     */
    Arn?: NodePackageArnType;

    /**
     * A storage location.
     */
    StorageLocation?: StorageLocationType;

    /**
     * Read-only property
     */
    CreatedTime?: TimestampType;

    /**
     * Tags for the package.
     */
    Tags?: TagListType;
  };
}
