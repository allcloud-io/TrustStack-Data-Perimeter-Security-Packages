/**
 * TypeScript definitions for AWS::ApiGatewayV2::Stage
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::Stage
 */
export namespace AWS_ApiGatewayV2_Stage {
  export type AccessLogSettingsType = {
    DestinationArn?: string;

    Format?: string;
  };

  export type RouteSettingsType = {
    DetailedMetricsEnabled?: boolean;

    LoggingLevel?: string;

    DataTraceEnabled?: boolean;

    ThrottlingBurstLimit?: number;

    ThrottlingRateLimit?: number;
  };

  /**
   * Resource Type definition for AWS::ApiGatewayV2::Stage
   */
  export type StageResourceType = {
    DeploymentId?: string;

    Description?: string;

    AutoDeploy?: boolean;

    RouteSettings?: Record<string, any>;

    /**
     * Create-only property
     */
    StageName: string;

    StageVariables?: Record<string, any>;

    AccessPolicyId?: string;

    ClientCertificateId?: string;

    AccessLogSettings?: AccessLogSettingsType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApiId: string;

    DefaultRouteSettings?: RouteSettingsType;

    Tags?: Record<string, any>;
  };
}
