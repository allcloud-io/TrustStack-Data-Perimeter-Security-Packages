/**
 * TypeScript definitions for AWS::Glue::Connection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Connection
 */
export namespace AWS_Glue_Connection {
  export type OAuth2PropertiesInputType = {
    AuthorizationCodeProperties?: AuthorizationCodePropertiesType;

    OAuth2ClientApplication?: OAuth2ClientApplicationType;

    TokenUrl?: string;

    OAuth2Credentials?: OAuth2CredentialsType;

    OAuth2GrantType?: string;

    TokenUrlParametersMap?: Record<string, any>;
  };

  export type ConnectionInputType = {
    AuthenticationConfiguration?: AuthenticationConfigurationInputType;

    PythonProperties?: Record<string, any>;

    Description?: string;

    ConnectionType: string;

    MatchCriteria?: string[];

    ConnectionProperties?: Record<string, any>;

    AthenaProperties?: Record<string, any>;

    ValidateForComputeEnvironments?: string[];

    Name?: string;

    SparkProperties?: Record<string, any>;

    PhysicalConnectionRequirements?: PhysicalConnectionRequirementsType;

    ValidateCredentials?: boolean;
  };

  export type PhysicalConnectionRequirementsType = {
    AvailabilityZone?: string;

    SecurityGroupIdList?: string[];

    SubnetId?: string;
  };

  export type BasicAuthenticationCredentialsType = {
    Username?: string;

    Password?: string;
  };

  export type AuthorizationCodePropertiesType = {
    AuthorizationCode?: string;

    RedirectUri?: string;
  };

  export type OAuth2ClientApplicationType = {
    AWSManagedClientApplicationReference?: string;

    UserManagedClientApplicationClientId?: string;
  };

  export type OAuth2CredentialsType = {
    UserManagedClientApplicationClientSecret?: string;

    JwtToken?: string;

    RefreshToken?: string;

    AccessToken?: string;
  };

  export type AuthenticationConfigurationInputType = {
    SecretArn?: string;

    KmsKeyArn?: string;

    OAuth2Properties?: OAuth2PropertiesInputType;

    CustomAuthenticationCredentials?: Record<string, any>;

    BasicAuthenticationCredentials?: BasicAuthenticationCredentialsType;

    AuthenticationType: string;
  };

  /**
   * Resource Type definition for AWS::Glue::Connection
   */
  export type ConnectionResourceType = {
    ConnectionInput: ConnectionInputType;

    /**
     * Create-only property
     */
    CatalogId: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
