/**
 * TypeScript definitions for AWS::Glue::Schema
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource represents a schema of Glue Schema Registry.
 */
export namespace AWS_Glue_Schema {
  /**
   * Identifier for the registry which the schema is part of.
   */
  export type RegistryType = {
    /**
     * Name of the registry in which the schema will be created.
     */
    Name?: string;

    /**
     * Amazon Resource Name for the Registry.
     */
    Arn?: string;
  };

  /**
   * Specify checkpoint version for update. This is only required to update the Compatibility.
   */
  export type SchemaVersionType = {
    /**
     * Indicates if the latest version needs to be updated.
     */
    IsLatest?: boolean;

    /**
     * Indicates the version number in the schema to update.
     */
    VersionNumber?: number;
  };

  export type TagType = {
    /**
     * A key to identify the tag.
     */
    Key: string;

    /**
     * Corresponding tag value for the key.
     */
    Value: string;
  };

  /**
   * This resource represents a schema of Glue Schema Registry.
   */
  export type SchemaResourceType = {
    /**
     * Amazon Resource Name for the Schema.
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    Registry?: RegistryType;

    /**
     * Name of the schema.
     * Create-only property
     */
    Name: string;

    /**
     * A description of the schema. If description is not provided, there will not be any default value for this.
     */
    Description?: string;

    /**
     * Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
     * Create-only property
     */
    DataFormat: string;

    /**
     * Compatibility setting for the schema.
     */
    Compatibility: string;

    /**
     * Definition for the initial schema version in plain-text.
     * Create-only property
     */
    SchemaDefinition?: string;

    CheckpointVersion?: SchemaVersionType;

    /**
     * List of tags to tag the schema
     */
    Tags?: TagType[];

    /**
     * Represents the version ID associated with the initial schema version.
     * Read-only property
     */
    InitialSchemaVersionId?: string;
  };
}
