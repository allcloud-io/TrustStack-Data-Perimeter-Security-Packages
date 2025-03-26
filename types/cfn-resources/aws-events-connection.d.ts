/**
 * TypeScript definitions for AWS::Events::Connection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Events::Connection.
 */
export namespace AWS_Events_Connection {
  export type AuthParametersType = {
    ApiKeyAuthParameters?: ApiKeyAuthParametersType;

    BasicAuthParameters?: BasicAuthParametersType;

    OAuthParameters?: OAuthParametersType;

    InvocationHttpParameters?: ConnectionHttpParametersType;

    ConnectivityParameters?: ConnectivityParametersType;
  };

  export type BasicAuthParametersType = {
    Username: string;

    Password: string;
  };

  export type OAuthParametersType = {
    ClientParameters: ClientParametersType;

    AuthorizationEndpoint: string;

    HttpMethod: string;

    OAuthHttpParameters?: ConnectionHttpParametersType;
  };

  export type ApiKeyAuthParametersType = {
    ApiKeyName: string;

    ApiKeyValue: string;
  };

  export type ClientParametersType = {
    ClientID: string;

    ClientSecret: string;
  };

  export type ConnectionHttpParametersType = {
    HeaderParameters?: ParameterType[];

    QueryStringParameters?: ParameterType[];

    BodyParameters?: ParameterType[];
  };

  export type ConnectivityParametersType = {
    ResourceParameters: ResourceParametersType;
  };

  export type ResourceParametersType = {
    ResourceConfigurationArn: string;

    ResourceAssociationArn?: string;
  };

  export type ParameterType = {
    Key: string;

    Value: string;

    IsValueSecret?: boolean;
  };

  /**
   * Resource Type definition for AWS::Events::Connection.
   */
  export type ConnectionResourceType = {
    /**
     * Name of the connection.
     * Create-only property
     */
    Name?: string;

    /**
     * The arn of the connection resource.
     * Read-only property
     */
    Arn?: string;

    /**
     * The arn of the secrets manager secret created in the customer account.
     * Read-only property
     */
    SecretArn?: string;

    /**
     * Description of the connection.
     */
    Description?: string;

    AuthorizationType?: string;

    AuthParameters?: AuthParametersType;

    /**
     * The private resource the HTTP request will be sent to.
     */
    InvocationConnectivityParameters?: Record<string, any>;
  };
}
