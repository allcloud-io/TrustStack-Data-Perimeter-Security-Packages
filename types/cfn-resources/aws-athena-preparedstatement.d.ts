/**
 * TypeScript definitions for AWS::Athena::PreparedStatement
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Athena::PreparedStatement
 */
export namespace AWS_Athena_PreparedStatement {
  /**
   * Resource schema for AWS::Athena::PreparedStatement
   */
  export type PreparedStatementResourceType = {
    /**
     * The name of the prepared statement.
     * Create-only property
     */
    StatementName: string;

    /**
     * The name of the workgroup to which the prepared statement belongs.
     * Create-only property
     */
    WorkGroup: string;

    /**
     * The description of the prepared statement.
     */
    Description?: string;

    /**
     * The query string for the prepared statement.
     */
    QueryStatement: string;
  };
}
