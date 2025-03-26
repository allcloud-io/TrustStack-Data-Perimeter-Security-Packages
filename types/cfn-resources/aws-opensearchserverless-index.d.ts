/**
 * TypeScript definitions for AWS::OpenSearchServerless::Index
 * Generated from CloudFormation Resource Schema
 */

/**
 * An OpenSearch Serverless index resource
 */
export namespace AWS_OpenSearchServerless_Index {
  export type IndexSettingsType = {
    Index?: Record<string, any>;
  };

  export type PropertyMappingType = {
    /**
     * Dimension size for vector fields, defines the number of dimensions in the vector
     */
    Dimension?: number;

    /**
     * Whether a field should be indexed
     */
    Index?: boolean;

    /**
     * Configuration for k-NN search method
     */
    Method?: Record<string, any>;

    /**
     * Nested fields within an object or nested field type
     */
    Properties?: Record<string, any>;

    /**
     * The field data type. Must be a valid OpenSearch field type.
     */
    Type: string;

    /**
     * Default value for the field when not specified in a document
     */
    Value?: string;
  };

  /**
   * An OpenSearch Serverless index resource
   */
  export type IndexResourceType = {
    /**
     * The endpoint for the collection.
     * Create-only property
     */
    CollectionEndpoint: string;

    /**
     * The name of the OpenSearch Serverless index.
     * Create-only property
     */
    IndexName: string;

    /**
     * Index settings
     */
    Settings?: IndexSettingsType;

    /**
     * Index Mappings
     */
    Mappings?: Record<string, any>;

    /**
     * The unique identifier for the index.
     * Read-only property
     */
    Uuid?: string;
  };
}
