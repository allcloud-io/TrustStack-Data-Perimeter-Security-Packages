/**
 * TypeScript definitions for AWS::Athena::NamedQuery
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Athena::NamedQuery
 */
export namespace AWS_Athena_NamedQuery {
  /**
   * Resource schema for AWS::Athena::NamedQuery
   */
  export type NamedQueryResourceType = {
    /**
     * The query name.
     * Create-only property
     */
    Name?: string;

    /**
     * The database to which the query belongs.
     * Create-only property
     */
    Database: string;

    /**
     * The query description.
     * Create-only property
     */
    Description?: string;

    /**
     * The contents of the query with all query statements.
     * Create-only property
     */
    QueryString: string;

    /**
     * The name of the workgroup that contains the named query.
     * Create-only property
     */
    WorkGroup?: string;

    /**
     * The unique ID of the query.
     * Read-only property
     */
    NamedQueryId?: string;
  };
}
