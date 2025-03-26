/**
 * TypeScript definitions for AWS::Glue::SchemaVersionMetadata
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource adds Key-Value metadata to a Schema version of Glue Schema Registry.
 */
export namespace AWS_Glue_SchemaVersionMetadata {
  /**
   * This resource adds Key-Value metadata to a Schema version of Glue Schema Registry.
   */
  export type SchemaVersionMetadataResourceType = {
    /**
     * Represents the version ID associated with the schema version.
     * Create-only property
     */
    SchemaVersionId: string;

    /**
     * Metadata key
     * Create-only property
     */
    Key: string;

    /**
     * Metadata value
     * Create-only property
     */
    Value: string;
  };
}
