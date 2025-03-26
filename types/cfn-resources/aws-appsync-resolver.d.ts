/**
 * TypeScript definitions for AWS::AppSync::Resolver
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::AppSync::Resolver` resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see Resolver Mapping Template Reference.
 * When you submit an update, CFNLong updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CFNshort template. Changing the S3 file content without changing a property value will not result in an update operation.
 * See Update Behaviors of Stack Resources in the *User Guide*.
 */
export namespace AWS_AppSync_Resolver {
  /**
   * Describes a runtime used by an APSYlong resolver or APSYlong function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
   */
  export type AppSyncRuntimeType = {
    /**
     * The `version` of the runtime to use. Currently, the only allowed version is `1.0.0`.
     */
    RuntimeVersion: string;

    /**
     * The `name` of the runtime to use. Currently, the only allowed value is `APPSYNC_JS`.
     */
    Name: string;
  };

  /**
   * Use the `PipelineConfig` property type to specify `PipelineConfig` for an APSYlong resolver.
   * `PipelineConfig` is a property of the AWS::AppSync::Resolver resource.
   */
  export type PipelineConfigType = {
    /**
     * A list of `Function` objects.
     */
    Functions?: string[];
  };

  /**
   * The caching configuration for a resolver that has caching activated.
   */
  export type CachingConfigType = {
    /**
     * The caching keys for a resolver that has caching activated.
     * Valid values are entries from the `$context.arguments`, `$context.source`, and `$context.identity` maps.
     */
    CachingKeys?: string[];

    /**
     * The TTL in seconds for a resolver that has caching activated.
     * Valid values are 1–3,600 seconds.
     */
    Ttl: number;
  };

  /**
   * Describes a Sync configuration for a resolver.
   * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
   */
  export type SyncConfigType = {
    /**
     * The Conflict Resolution strategy to perform in the event of a conflict.
     * +   *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
     * +   *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
     * +   *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the `LambdaConflictHandlerConfig`.
     */
    ConflictHandler?: string;

    /**
     * The Conflict Detection strategy to use.
     * +   *VERSION*: Detect conflicts based on object versions for this resolver.
     * +   *NONE*: Do not detect conflicts when invoking this resolver.
     */
    ConflictDetection: string;

    /**
     * The `LambdaConflictHandlerConfig` when configuring `LAMBDA` as the Conflict Handler.
     */
    LambdaConflictHandlerConfig?: LambdaConflictHandlerConfigType;
  };

  /**
   * The `LambdaConflictHandlerConfig` when configuring LAMBDA as the Conflict Handler.
   */
  export type LambdaConflictHandlerConfigType = {
    /**
     * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
     */
    LambdaConflictHandlerArn?: string;
  };

  /**
   * The `AWS::AppSync::Resolver` resource defines the logical GraphQL resolver that you attach to fields in a schema. Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see Resolver Mapping Template Reference.
   * When you submit an update, CFNLong updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CFNshort template. Changing the S3 file content without changing a property value will not result in an update operation.
   * See Update Behaviors of Stack Resources in the *User Guide*.
   */
  export type ResolverResourceType = {
    /**
     * The APSYlong GraphQL API to which you want to attach this resolver.
     * Create-only property
     */
    ApiId: string;

    /**
     * The caching configuration for the resolver.
     */
    CachingConfig?: CachingConfigType;

    /**
     * The `resolver` code that contains the request and response functions. When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS`.
     */
    Code?: string;

    /**
     * The Amazon S3 endpoint.
     */
    CodeS3Location?: string;

    /**
     * The resolver data source name.
     */
    DataSourceName?: string;

    /**
     * The GraphQL field on a type that invokes the resolver.
     * Create-only property
     */
    FieldName: string;

    /**
     * The resolver type.
     * +   *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
     * +   *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
     */
    Kind?: string;

    /**
     * The maximum number of resolver request inputs that will be sent to a single LAMlong function in a `BatchInvoke` operation.
     */
    MaxBatchSize?: number;

    /**
     * Functions linked with the pipeline resolver.
     */
    PipelineConfig?: PipelineConfigType;

    /**
     * The request mapping template.
     * Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.
     */
    RequestMappingTemplate?: string;

    /**
     * The location of a request mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.
     */
    RequestMappingTemplateS3Location?: string;

    /**
     * Read-only property
     */
    ResolverArn?: string;

    /**
     * The response mapping template.
     */
    ResponseMappingTemplate?: string;

    /**
     * The location of a response mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.
     */
    ResponseMappingTemplateS3Location?: string;

    /**
     * Describes a runtime used by an APSYlong resolver or APSYlong function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    Runtime?: AppSyncRuntimeType;

    /**
     * The `SyncConfig` for a resolver attached to a versioned data source.
     */
    SyncConfig?: SyncConfigType;

    /**
     * The GraphQL type that invokes this resolver.
     * Create-only property
     */
    TypeName: string;

    /**
     * Enables or disables enhanced resolver metrics for specified resolvers. Note that `MetricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS`. If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `MetricsConfig` will be ignored. However, you can still set its value.
     */
    MetricsConfig?: string;
  };
}
