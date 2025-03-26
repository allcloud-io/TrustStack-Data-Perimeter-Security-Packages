/**
 * TypeScript definitions for AWS::RDS::DBProxy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::RDS::DBProxy
 */
export namespace AWS_RDS_DBProxy {
  export type AuthFormatType = {
    /**
     * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
     */
    AuthScheme?: string;

    /**
     * A user-specified description about the authentication used by a proxy to log in as a specific database user.
     */
    Description?: string;

    /**
     * Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.
     */
    IAMAuth?: string;

    /**
     * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.
     */
    SecretArn?: string;

    /**
     * The type of authentication the proxy uses for connections from clients.
     */
    ClientPasswordAuthType?: string;
  };

  export type TagFormatType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource schema for AWS::RDS::DBProxy
   */
  export type DBProxyResourceType = {
    /**
     * The authorization mechanism that the proxy uses.
     */
    Auth: AuthFormatType[];

    /**
     * The Amazon Resource Name (ARN) for the proxy.
     * Read-only property
     */
    DBProxyArn?: string;

    /**
     * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
     * Create-only property
     */
    DBProxyName: string;

    /**
     * Whether the proxy includes detailed information about SQL statements in its logs.
     */
    DebugLogging?: boolean;

    /**
     * The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.
     * Read-only property
     */
    Endpoint?: string;

    /**
     * The kinds of databases that the proxy can connect to.
     * Create-only property
     */
    EngineFamily: string;

    /**
     * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
     */
    IdleClientTimeout?: number;

    /**
     * A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
     */
    RequireTLS?: boolean;

    /**
     * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
     */
    RoleArn: string;

    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
     */
    Tags?: TagFormatType[];

    /**
     * VPC ID to associate with the new DB proxy.
     * Read-only property
     */
    VpcId?: string;

    /**
     * VPC security group IDs to associate with the new proxy.
     */
    VpcSecurityGroupIds?: string[];

    /**
     * VPC subnet IDs to associate with the new proxy.
     * Create-only property
     */
    VpcSubnetIds: string[];
  };
}
