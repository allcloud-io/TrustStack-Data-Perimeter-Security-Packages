/**
 * TypeScript definitions for AWS::AppSync::GraphQLSchema
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::GraphQLSchema
 */
export namespace AWS_AppSync_GraphQLSchema {
  /**
   * Resource Type definition for AWS::AppSync::GraphQLSchema
   */
  export type GraphQLSchemaResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Definition?: string;

    DefinitionS3Location?: string;

    /**
     * Create-only property
     */
    ApiId: string;
  };
}
