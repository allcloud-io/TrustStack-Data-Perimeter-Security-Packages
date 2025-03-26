/**
 * TypeScript definitions for AWS::EntityResolution::SchemaMapping
 * Generated from CloudFormation Resource Schema
 */

/**
 * SchemaMapping defined in AWS Entity Resolution service
 */
export namespace AWS_EntityResolution_SchemaMapping {
  export type EntityNameType = {};

  export type DescriptionType = {};

  export type AttributeNameType = {};

  export type SchemaAttributeTypeType = {};

  export type MappedInputFieldsType = {};

  export type HashedType = {};

  export type SchemaInputAttributeType = {
    FieldName: AttributeNameType;

    Type: SchemaAttributeTypeType;

    /**
     * The subtype of the Attribute. Would be required only when type is PROVIDER_ID
     */
    SubType?: string;

    GroupName?: AttributeNameType;

    MatchKey?: AttributeNameType;

    Hashed?: HashedType;
  };

  /**
   * The SchemaMapping arn associated with the Schema
   */
  export type SchemaMappingArnType = {};

  /**
   * The time of this SchemaMapping got created
   */
  export type CreatedAtType = {};

  /**
   * The time of this SchemaMapping got last updated at
   */
  export type UpdatedAtType = {};

  /**
   * The boolean value that indicates whether or not a SchemaMapping has MatchingWorkflows that are associated with
   */
  export type HasWorkflowsType = {};

  /**
   * A key-value pair to associate with a resource
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * SchemaMapping defined in AWS Entity Resolution service
   */
  export type SchemaMappingResourceType = {
    /**
     * The name of the SchemaMapping
     * Create-only property
     */
    SchemaName: EntityNameType;

    /**
     * The description of the SchemaMapping
     */
    Description?: DescriptionType;

    /**
     * The SchemaMapping attributes input
     */
    MappedInputFields: MappedInputFieldsType;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    SchemaArn?: SchemaMappingArnType;

    /**
     * Read-only property
     */
    CreatedAt?: CreatedAtType;

    /**
     * Read-only property
     */
    UpdatedAt?: UpdatedAtType;

    /**
     * Read-only property
     */
    HasWorkflows?: HasWorkflowsType;
  };
}
