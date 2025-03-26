/**
 * TypeScript definitions for AWS::RDS::DBProxyEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::RDS::DBProxyEndpoint.
 */
export namespace AWS_RDS_DBProxyEndpoint {
  export type TagFormatType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource schema for AWS::RDS::DBProxyEndpoint.
   */
  export type DBProxyEndpointResourceType = {
    /**
     * The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
     * Create-only property
     */
    DBProxyEndpointName: string;

    /**
     * The Amazon Resource Name (ARN) for the DB proxy endpoint.
     * Read-only property
     */
    DBProxyEndpointArn?: string;

    /**
     * The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
     * Create-only property
     */
    DBProxyName: string;

    /**
     * VPC ID to associate with the new DB proxy endpoint.
     * Read-only property
     */
    VpcId?: string;

    /**
     * VPC security group IDs to associate with the new DB proxy endpoint.
     */
    VpcSecurityGroupIds?: string[];

    /**
     * VPC subnet IDs to associate with the new DB proxy endpoint.
     * Create-only property
     */
    VpcSubnetIds: string[];

    /**
     * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
     * Read-only property
     */
    Endpoint?: string;

    /**
     * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
     */
    TargetRole?: string;

    /**
     * A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
     * Read-only property
     */
    IsDefault?: boolean;

    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
     */
    Tags?: TagFormatType[];
  };
}
