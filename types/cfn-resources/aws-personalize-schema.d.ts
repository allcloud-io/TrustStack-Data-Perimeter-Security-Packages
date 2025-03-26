/**
 * TypeScript definitions for AWS::Personalize::Schema
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Personalize::Schema.
 */
export namespace AWS_Personalize_Schema {
  /**
   * Resource schema for AWS::Personalize::Schema.
   */
  export type SchemaResourceType = {
    /**
     * Name for the schema.
     * Create-only property
     */
    Name: string;

    /**
     * Arn for the schema.
     * Read-only property
     */
    SchemaArn?: string;

    /**
     * A schema in Avro JSON format.
     * Create-only property
     */
    Schema: string;

    /**
     * The domain of a Domain dataset group.
     * Create-only property
     */
    Domain?: string;
  };
}
