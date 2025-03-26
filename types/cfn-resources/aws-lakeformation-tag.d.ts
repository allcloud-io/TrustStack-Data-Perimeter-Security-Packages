/**
 * TypeScript definitions for AWS::LakeFormation::Tag
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema representing a Lake Formation Tag.
 */
export namespace AWS_LakeFormation_Tag {
  export type CatalogIdStringType = {};

  export type LFTagKeyType = {};

  export type LFTagValueType = {};

  export type TagValueListType = {};

  /**
   * A resource schema representing a Lake Formation Tag.
   */
  export type TagResourceType = {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     * Create-only property
     */
    CatalogId?: CatalogIdStringType;

    /**
     * The key-name for the LF-tag.
     * Create-only property
     */
    TagKey: LFTagKeyType;

    /**
     * A list of possible values an attribute can take.
     */
    TagValues: TagValueListType;
  };
}
