/**
 * TypeScript definitions for AWS::RDS::DBProxyTargetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::RDS::DBProxyTargetGroup
 */
export namespace AWS_RDS_DBProxyTargetGroup {
  export type ConnectionPoolConfigurationInfoFormatType = {
    /**
     * The maximum size of the connection pool for each target in a target group.
     */
    MaxConnectionsPercent?: number;

    /**
     * Controls how actively the proxy closes idle database connections in the connection pool.
     */
    MaxIdleConnectionsPercent?: number;

    /**
     * The number of seconds for a proxy to wait for a connection to become available in the connection pool.
     */
    ConnectionBorrowTimeout?: number;

    /**
     * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.
     */
    SessionPinningFilters?: string[];

    /**
     * One or more SQL statements for the proxy to run when opening each new database connection.
     */
    InitQuery?: string;
  };

  /**
   * Resource schema for AWS::RDS::DBProxyTargetGroup
   */
  export type DBProxyTargetGroupResourceType = {
    /**
     * The identifier for the proxy.
     * Create-only property
     */
    DBProxyName: string;

    /**
     * The Amazon Resource Name (ARN) representing the target group.
     * Read-only property
     */
    TargetGroupArn?: string;

    /**
     * The identifier for the DBProxyTargetGroup
     * Create-only property
     */
    TargetGroupName: string;

    ConnectionPoolConfigurationInfo?: ConnectionPoolConfigurationInfoFormatType;

    DBInstanceIdentifiers?: string[];

    DBClusterIdentifiers?: string[];
  };
}
