/**
 * TypeScript definitions for AWS::Glue::SchemaVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource represents an individual schema version of a schema defined in Glue Schema Registry.
 */
export namespace AWS_Glue_SchemaVersion {
  /**
   * Identifier for the schema where the schema version will be created.
   */
  export type SchemaType = {
    /**
     * Amazon Resource Name for the Schema. This attribute can be used to uniquely represent the Schema.
     */
    SchemaArn?: string;

    /**
     * Name of the schema. This parameter requires RegistryName to be provided.
     */
    SchemaName?: string;

    /**
     * Name of the registry to identify where the Schema is located.
     */
    RegistryName?: string;
  };

  /**
   * This resource represents an individual schema version of a schema defined in Glue Schema Registry.
   */
  export type SchemaVersionResourceType = {
    /**
     * Create-only property
     */
    Schema: SchemaType;

    /**
     * Complete definition of the schema in plain-text.
     * Create-only property
     */
    SchemaDefinition: string;

    /**
     * Represents the version ID associated with the schema version.
     * Read-only property
     */
    VersionId?: string;
  };
}
