/**
 * TypeScript definitions for AWS::Lambda::Url
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lambda::Url
 */
export namespace AWS_Lambda_Url {
  export type AllowHeadersType = {};

  export type AllowMethodsType = {};

  export type AllowOriginsType = {};

  export type ExposeHeadersType = {};

  export type CorsType = {
    /**
     * Specifies whether credentials are included in the CORS request.
     */
    AllowCredentials?: boolean;

    /**
     * Represents a collection of allowed headers.
     */
    AllowHeaders?: AllowHeadersType;

    /**
     * Represents a collection of allowed HTTP methods.
     */
    AllowMethods?: AllowMethodsType;

    /**
     * Represents a collection of allowed origins.
     */
    AllowOrigins?: AllowOriginsType;

    /**
     * Represents a collection of exposed headers.
     */
    ExposeHeaders?: ExposeHeadersType;

    MaxAge?: number;
  };

  /**
   * Resource Type definition for AWS::Lambda::Url
   */
  export type UrlResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the function associated with the Function URL.
     * Create-only property
     */
    TargetFunctionArn: string;

    /**
     * The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.
     * Create-only property
     */
    Qualifier?: string;

    /**
     * Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.
     */
    AuthType: string;

    /**
     * The invocation mode for the function's URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.
     */
    InvokeMode?: string;

    /**
     * The full Amazon Resource Name (ARN) of the function associated with the Function URL.
     * Read-only property
     */
    FunctionArn?: string;

    /**
     * The generated url for this resource.
     * Read-only property
     */
    FunctionUrl?: string;

    Cors?: CorsType;
  };
}
