/**
 * TypeScript definitions for AWS::Logs::QueryDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * The resource schema for AWSLogs QueryDefinition
 */
export namespace AWS_Logs_QueryDefinition {
  export type LogGroupType = {};

  /**
   * The resource schema for AWSLogs QueryDefinition
   */
  export type QueryDefinitionResourceType = {
    /**
     * A name for the saved query definition
     */
    Name: string;

    /**
     * The query string to use for this definition
     */
    QueryString: string;

    /**
     * Optionally define specific log groups as part of your query definition
     */
    LogGroupNames?: LogGroupType[];

    /**
     * Unique identifier of a query definition
     * Read-only property
     */
    QueryDefinitionId?: string;

    /**
     * Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default.
     * Default: "CWLI"
     */
    QueryLanguage?: string;
  };
}
