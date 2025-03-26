/**
 * TypeScript definitions for AWS::ApiGateway::RestApi
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::RestApi` resource creates a REST API. For more information, see restapi:create in the *Amazon API Gateway REST API Reference*.
 * On January 1, 2016, the Swagger Specification was donated to the OpenAPI initiative, becoming the foundation of the OpenAPI Specification.
 */
export namespace AWS_ApiGateway_RestApi {
  /**
   * The `EndpointConfiguration` property type specifies the endpoint types of a REST API.
   * `EndpointConfiguration` is a property of the AWS::ApiGateway::RestApi resource.
   */
  export type EndpointConfigurationType = {
    Types?: string[];

    VpcEndpointIds?: string[];
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * `S3Location` is a property of the AWS::ApiGateway::RestApi resource that specifies the Amazon S3 location of a OpenAPI (formerly Swagger) file that defines a set of RESTful APIs in JSON or YAML.
   * On January 1, 2016, the Swagger Specification was donated to the OpenAPI initiative, becoming the foundation of the OpenAPI Specification.
   */
  export type S3LocationType = {
    /**
     * The name of the S3 bucket where the OpenAPI file is stored.
     */
    Bucket?: string;

    /**
     * The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.
     */
    ETag?: string;

    /**
     * For versioning-enabled buckets, a specific version of the OpenAPI file.
     */
    Version?: string;

    /**
     * The file name of the OpenAPI file (Amazon S3 object name).
     */
    Key?: string;
  };

  /**
   * The `AWS::ApiGateway::RestApi` resource creates a REST API. For more information, see restapi:create in the *Amazon API Gateway REST API Reference*.
   * On January 1, 2016, the Swagger Specification was donated to the OpenAPI initiative, becoming the foundation of the OpenAPI Specification.
   */
  export type RestApiResourceType = {
    /**
     * A policy document that contains the permissions for the `RestApi` resource. To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.
     */
    Policy?: Record<string, any> | string;

    /**
     * The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
     */
    BodyS3Location?: S3LocationType;

    Description?: string;

    MinimumCompressionSize?: number;

    Parameters?: Record<string, any> | string;

    CloneFrom?: string;

    /**
     * This property applies only when you use OpenAPI to define your REST API. The `Mode` determines how API Gateway handles resource updates.
     * Valid values are `overwrite` or `merge`.
     * For `overwrite`, the new API definition replaces the existing one. The existing API identifier remains unchanged.
     * For `merge`, the new API definition is merged with the existing API.
     * If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite`. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.
     * Use the default mode to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.
     */
    Mode?: string;

    /**
     * Read-only property
     */
    RestApiId?: string;

    DisableExecuteApiEndpoint?: boolean;

    FailOnWarnings?: boolean;

    BinaryMediaTypes?: string[];

    /**
     * The name of the RestApi. A name is required if the REST API is not based on an OpenAPI specification.
     */
    Name?: string;

    /**
     * Read-only property
     */
    RootResourceId?: string;

    ApiKeySourceType?: string;

    /**
     * A list of the endpoint types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.
     */
    EndpointConfiguration?: EndpointConfigurationType;

    /**
     * An OpenAPI specification that defines a set of RESTful APIs in JSON format. For YAML templates, you can also provide the specification in YAML format.
     */
    Body?: Record<string, any> | string;

    Tags?: TagType[];
  };
}
