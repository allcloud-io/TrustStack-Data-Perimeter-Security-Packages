/**
 * TypeScript definitions for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 */
export namespace AWS_ApiGatewayV2_ApiGatewayManagedOverrides {
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

  export type StageOverridesType = {
    Description?: string;

    AccessLogSettings?: AccessLogSettingsType;

    AutoDeploy?: boolean;

    RouteSettings?: Record<string, any>;

    StageVariables?: Record<string, any>;

    DefaultRouteSettings?: RouteSettingsType;
  };

  export type RouteOverridesType = {
    AuthorizationScopes?: string[];

    Target?: string;

    AuthorizationType?: string;

    AuthorizerId?: string;

    OperationName?: string;
  };

  export type IntegrationOverridesType = {
    TimeoutInMillis?: number;

    Description?: string;

    PayloadFormatVersion?: string;

    IntegrationMethod?: string;
  };

  /**
   * Resource Type definition for AWS::ApiGatewayV2::ApiGatewayManagedOverrides
   */
  export type ApiGatewayManagedOverridesResourceType = {
    Stage?: StageOverridesType;

    Integration?: IntegrationOverridesType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApiId: string;

    Route?: RouteOverridesType;
  };
}
