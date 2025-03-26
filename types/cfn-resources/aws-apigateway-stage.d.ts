/**
 * TypeScript definitions for AWS::ApiGateway::Stage
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::Stage` resource creates a stage for a deployment.
 */
export namespace AWS_ApiGateway_Stage {
  export type CanarySettingType = {
    DeploymentId?: string;

    PercentTraffic?: number;

    StageVariableOverrides?: Record<string, any>;

    UseStageCache?: boolean;
  };

  /**
   * The `AccessLogSetting` property type specifies settings for logging access in this stage.
   * `AccessLogSetting` is a property of the AWS::ApiGateway::Stage resource.
   */
  export type AccessLogSettingType = {
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`. This parameter is required to enable access logging.
     */
    DestinationArn?: string;

    /**
     * A single line format of the access logs of data, as specified by selected $context variables. The format must include at least `$context.requestId`. This parameter is required to enable access logging.
     */
    Format?: string;
  };

  /**
   * The `MethodSetting` property type configures settings for all methods in a stage.
   * The `MethodSettings` property of the `AWS::ApiGateway::Stage` resource contains a list of `MethodSetting` property types.
   */
  export type MethodSettingType = {
    CacheDataEncrypted?: boolean;

    CacheTtlInSeconds?: number;

    CachingEnabled?: boolean;

    DataTraceEnabled?: boolean;

    /**
     * The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (`*`) for the `HttpMethod` and `/*` for the `ResourcePath`. This parameter is required when you specify a `MethodSetting`.
     */
    HttpMethod?: string;

    LoggingLevel?: string;

    MetricsEnabled?: boolean;

    /**
     * The resource path for this method. Forward slashes (`/`) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`. To specify the root path, use only a slash (`/`). To apply settings to multiple resources and methods, specify an asterisk (`*`) for the `HttpMethod` and `/*` for the `ResourcePath`. This parameter is required when you specify a `MethodSetting`.
     */
    ResourcePath?: string;

    ThrottlingBurstLimit?: number;

    ThrottlingRateLimit?: number;
  };

  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.
     */
    Value: string;
  };

  /**
   * The `AWS::ApiGateway::Stage` resource creates a stage for a deployment.
   */
  export type StageResourceType = {
    AccessLogSetting?: AccessLogSettingType;

    CacheClusterEnabled?: boolean;

    CacheClusterSize?: string;

    CanarySetting?: CanarySettingType;

    ClientCertificateId?: string;

    DeploymentId?: string;

    Description?: string;

    DocumentationVersion?: string;

    MethodSettings?: MethodSettingType[];

    /**
     * Create-only property
     */
    RestApiId: string;

    /**
     * Create-only property
     */
    StageName?: string;

    Tags?: TagType[];

    TracingEnabled?: boolean;

    /**
     * A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.
     */
    Variables?: Record<string, any>;
  };
}
