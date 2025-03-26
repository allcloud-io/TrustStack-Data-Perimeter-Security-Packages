/**
 * TypeScript definitions for AWS::AppSync::DataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::DataSource
 */
export namespace AWS_AppSync_DataSource {
  export type RdsHttpEndpointConfigType = {
    /**
     * Logical database name.
     */
    DatabaseName?: string;

    /**
     * AWS Region for RDS HTTP endpoint.
     */
    AwsRegion: string;

    /**
     * Amazon RDS cluster Amazon Resource Name (ARN).
     */
    DbClusterIdentifier: string;

    /**
     * The ARN for database credentials stored in AWS Secrets Manager.
     */
    AwsSecretStoreArn: string;

    /**
     * Logical schema name.
     */
    Schema?: string;
  };

  export type OpenSearchServiceConfigType = {
    /**
     * The AWS Region.
     */
    AwsRegion: string;

    /**
     * The endpoint.
     */
    Endpoint: string;
  };

  export type AwsIamConfigType = {
    /**
     * The signing Region for AWS Identity and Access Management authorization.
     */
    SigningRegion?: string;

    /**
     * The signing service name for AWS Identity and Access Management authorization.
     */
    SigningServiceName?: string;
  };

  export type EventBridgeConfigType = {
    /**
     * ARN for the EventBridge bus.
     */
    EventBusArn: string;
  };

  export type AuthorizationConfigType = {
    /**
     * The authorization type that the HTTP endpoint requires.
     */
    AuthorizationType: string;

    /**
     * The AWS Identity and Access Management settings.
     */
    AwsIamConfig?: AwsIamConfigType;
  };

  export type DeltaSyncConfigType = {
    /**
     * The number of minutes that an Item is stored in the data source.
     */
    BaseTableTTL: string;

    /**
     * The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
     */
    DeltaSyncTableTTL: string;

    /**
     * The Delta Sync table name.
     */
    DeltaSyncTableName: string;
  };

  export type RelationalDatabaseConfigType = {
    /**
     * Information about the Amazon RDS resource.
     */
    RdsHttpEndpointConfig?: RdsHttpEndpointConfigType;

    /**
     * The type of relational data source.
     */
    RelationalDatabaseSourceType: string;
  };

  export type HttpConfigType = {
    /**
     * The endpoint.
     */
    Endpoint: string;

    /**
     * The authorization configuration.
     */
    AuthorizationConfig?: AuthorizationConfigType;
  };

  export type LambdaConfigType = {
    /**
     * The ARN for the Lambda function.
     */
    LambdaFunctionArn: string;
  };

  export type ElasticsearchConfigType = {
    /**
     * The AWS Region.
     */
    AwsRegion: string;

    /**
     * The endpoint.
     */
    Endpoint: string;
  };

  export type DynamoDBConfigType = {
    /**
     * The table name.
     */
    TableName: string;

    /**
     * The DeltaSyncConfig for a versioned datasource.
     */
    DeltaSyncConfig?: DeltaSyncConfigType;

    /**
     * Set to TRUE to use AWS Identity and Access Management with this data source.
     */
    UseCallerCredentials?: boolean;

    /**
     * The AWS Region.
     */
    AwsRegion: string;

    /**
     * Set to TRUE to use Conflict Detection and Resolution with this data source.
     */
    Versioned?: boolean;
  };

  /**
   * Resource Type definition for AWS::AppSync::DataSource
   */
  export type DataSourceResourceType = {
    /**
     * Unique AWS AppSync GraphQL API identifier where this data source will be created.
     * Create-only property
     */
    ApiId: string;

    /**
     * The description of the data source.
     */
    Description?: string;

    /**
     * AWS Region and TableName for an Amazon DynamoDB table in your account.
     */
    DynamoDBConfig?: DynamoDBConfigType;

    /**
     * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
     * As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.
     */
    ElasticsearchConfig?: ElasticsearchConfigType;

    /**
     * ARN for the EventBridge bus.
     */
    EventBridgeConfig?: EventBridgeConfigType;

    /**
     * Endpoints for an HTTP data source.
     */
    HttpConfig?: HttpConfigType;

    /**
     * An ARN of a Lambda function in valid ARN format. This can be the ARN of a Lambda function that exists in the current account or in another account.
     */
    LambdaConfig?: LambdaConfigType;

    /**
     * Friendly name for you to identify your AppSync data source after creation.
     * Create-only property
     */
    Name: string;

    /**
     * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
     */
    OpenSearchServiceConfig?: OpenSearchServiceConfigType;

    /**
     * Relational Database configuration of the relational database data source.
     */
    RelationalDatabaseConfig?: RelationalDatabaseConfigType;

    /**
     * The AWS Identity and Access Management service role ARN for the data source. The system assumes this role when accessing the data source.
     */
    ServiceRoleArn?: string;

    /**
     * The type of the data source.
     */
    Type: string;

    /**
     * The Amazon Resource Name (ARN) of the API key, such as arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/datasources/datasourcename.
     * Read-only property
     */
    DataSourceArn?: string;

    MetricsConfig?: string;
  };
}
