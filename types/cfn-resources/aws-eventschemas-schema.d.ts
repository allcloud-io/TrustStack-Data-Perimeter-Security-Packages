/**
 * TypeScript definitions for AWS::EventSchemas::Schema
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EventSchemas::Schema
 */
export namespace AWS_EventSchemas_Schema {
  export type TagsEntryType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EventSchemas::Schema
   */
  export type SchemaResourceType = {
    /**
     * The type of schema. Valid types include OpenApi3 and JSONSchemaDraft4.
     */
    Type: string;

    /**
     * A description of the schema.
     */
    Description?: string;

    /**
     * The version number of the schema.
     * Read-only property
     */
    SchemaVersion?: string;

    /**
     * The source of the schema definition.
     */
    Content: string;

    /**
     * The name of the schema registry.
     * Create-only property
     */
    RegistryName: string;

    /**
     * The ARN of the schema.
     * Read-only property
     */
    SchemaArn?: string;

    /**
     * The name of the schema.
     * Create-only property
     */
    SchemaName?: string;

    /**
     * The last modified time of the schema.
     * Read-only property
     */
    LastModified?: string;

    /**
     * The date the schema version was created.
     * Read-only property
     */
    VersionCreatedDate?: string;

    /**
     * Tags associated with the resource.
     */
    Tags?: TagsEntryType[];
  };
}
