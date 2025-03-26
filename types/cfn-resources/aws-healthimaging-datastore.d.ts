/**
 * TypeScript definitions for AWS::HealthImaging::Datastore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::HealthImaging::Datastore Resource Type
 */
export namespace AWS_HealthImaging_Datastore {
  /**
   * The Datastore's ARN.
   */
  export type DatastoreArnType = {};

  /**
   * User friendly name for Datastore.
   */
  export type DatastoreNameType = {};

  export type DatastoreIdType = {};

  /**
   * A string to denote the Datastore's state.
   */
  export type DatastoreStatusType = {};

  /**
   * ARN referencing a KMS key or KMS key alias.
   */
  export type KmsKeyArnType = {};

  /**
   * The timestamp when the data store was created.
   */
  export type CreatedAtType = {};

  /**
   * The timestamp when the data store was created.
   */
  export type UpdatedAtType = {};

  /**
   * A Map of key value pairs for Tags.
   */
  export type TagsType = {};

  /**
   * Definition of AWS::HealthImaging::Datastore Resource Type
   */
  export type DatastoreResourceType = {
    /**
     * Read-only property
     */
    DatastoreArn?: DatastoreArnType;

    /**
     * Create-only property
     */
    DatastoreName?: DatastoreNameType;

    /**
     * Read-only property
     */
    DatastoreId?: DatastoreIdType;

    /**
     * Read-only property
     */
    DatastoreStatus?: DatastoreStatusType;

    /**
     * Create-only property
     */
    KmsKeyArn?: KmsKeyArnType;

    /**
     * Read-only property
     */
    CreatedAt?: CreatedAtType;

    /**
     * Read-only property
     */
    UpdatedAt?: UpdatedAtType;

    /**
     * Create-only property
     */
    Tags?: TagsType;
  };
}
