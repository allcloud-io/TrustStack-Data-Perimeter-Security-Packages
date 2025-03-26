/**
 * TypeScript definitions for AWS::AppFlow::ConnectorProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppFlow::ConnectorProfile
 */
export namespace AWS_AppFlow_ConnectorProfile {
  export type ConnectorTypeType = {};

  /**
   * Connector specific configurations needed to create connector profile
   */
  export type ConnectorProfileConfigType = {
    ConnectorProfileProperties?: ConnectorProfilePropertiesType;

    ConnectorProfileCredentials?: ConnectorProfileCredentialsType;
  };

  /**
   * Connector specific properties needed to create connector profile - currently not needed for Amplitude, Trendmicro, Googleanalytics and Singular
   */
  export type ConnectorProfilePropertiesType = {
    Datadog?: DatadogConnectorProfilePropertiesType;

    Dynatrace?: DynatraceConnectorProfilePropertiesType;

    InforNexus?: InforNexusConnectorProfilePropertiesType;

    Marketo?: MarketoConnectorProfilePropertiesType;

    Redshift?: RedshiftConnectorProfilePropertiesType;

    SAPOData?: SAPODataConnectorProfilePropertiesType;

    Salesforce?: SalesforceConnectorProfilePropertiesType;

    Pardot?: PardotConnectorProfilePropertiesType;

    ServiceNow?: ServiceNowConnectorProfilePropertiesType;

    Slack?: SlackConnectorProfilePropertiesType;

    Snowflake?: SnowflakeConnectorProfilePropertiesType;

    Veeva?: VeevaConnectorProfilePropertiesType;

    Zendesk?: ZendeskConnectorProfilePropertiesType;

    CustomConnector?: CustomConnectorProfilePropertiesType;
  };

  /**
   * Connector specific configuration needed to create connector profile based on Authentication mechanism
   */
  export type ConnectorProfileCredentialsType = {
    Amplitude?: AmplitudeConnectorProfileCredentialsType;

    Datadog?: DatadogConnectorProfileCredentialsType;

    Dynatrace?: DynatraceConnectorProfileCredentialsType;

    GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentialsType;

    InforNexus?: InforNexusConnectorProfileCredentialsType;

    Marketo?: MarketoConnectorProfileCredentialsType;

    Redshift?: RedshiftConnectorProfileCredentialsType;

    SAPOData?: SAPODataConnectorProfileCredentialsType;

    Salesforce?: SalesforceConnectorProfileCredentialsType;

    Pardot?: PardotConnectorProfileCredentialsType;

    ServiceNow?: ServiceNowConnectorProfileCredentialsType;

    Singular?: SingularConnectorProfileCredentialsType;

    Slack?: SlackConnectorProfileCredentialsType;

    Snowflake?: SnowflakeConnectorProfileCredentialsType;

    Trendmicro?: TrendmicroConnectorProfileCredentialsType;

    Veeva?: VeevaConnectorProfileCredentialsType;

    Zendesk?: ZendeskConnectorProfileCredentialsType;

    CustomConnector?: CustomConnectorProfileCredentialsType;
  };

  export type AmplitudeConnectorProfileCredentialsType = {
    /**
     * A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API.
     */
    ApiKey: ApiKeyType;

    SecretKey: SecretKeyType;
  };

  export type DatadogConnectorProfileCredentialsType = {
    /**
     * A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API.
     */
    ApiKey: ApiKeyType;

    /**
     * Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
     */
    ApplicationKey: ApplicationKeyType;
  };

  export type DatadogConnectorProfilePropertiesType = {
    /**
     * The location of the Datadog resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type DynatraceConnectorProfileCredentialsType = {
    /**
     * The API tokens used by Dynatrace API to authenticate various API calls.
     */
    ApiToken: ApiTokenType;
  };

  export type DynatraceConnectorProfilePropertiesType = {
    /**
     * The location of the Dynatrace resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type GoogleAnalyticsConnectorProfileCredentialsType = {
    /**
     * The identiﬁer for the desired client.
     */
    ClientId: ClientIdType;

    /**
     * The client secret used by the oauth client to authenticate to the authorization server.
     */
    ClientSecret: ClientSecretType;

    /**
     * The credentials used to access protected resources.
     */
    AccessToken?: AccessTokenType;

    /**
     * The credentials used to acquire new access tokens.
     */
    RefreshToken?: RefreshTokenType;

    /**
     * The oauth needed to request security tokens from the connector endpoint.
     */
    ConnectorOAuthRequest?: ConnectorOAuthRequestType;
  };

  export type InforNexusConnectorProfileCredentialsType = {
    /**
     * The Access Key portion of the credentials.
     */
    AccessKeyId: AccessKeyIdType;

    /**
     * The identiﬁer for the user.
     */
    UserId: UsernameType;

    /**
     * The secret key used to sign requests.
     */
    SecretAccessKey: KeyType;

    /**
     * The encryption keys used to encrypt data.
     */
    Datakey: KeyType;
  };

  export type InforNexusConnectorProfilePropertiesType = {
    /**
     * The location of the InforNexus resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type MarketoConnectorProfileCredentialsType = {
    /**
     * The identiﬁer for the desired client.
     */
    ClientId: ClientIdType;

    /**
     * The client secret used by the oauth client to authenticate to the authorization server.
     */
    ClientSecret: ClientSecretType;

    /**
     * The credentials used to access protected resources.
     */
    AccessToken?: AccessTokenType;

    /**
     * The oauth needed to request security tokens from the connector endpoint.
     */
    ConnectorOAuthRequest?: ConnectorOAuthRequestType;
  };

  export type MarketoConnectorProfilePropertiesType = {
    /**
     * The location of the Marketo resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type RedshiftConnectorProfileCredentialsType = {
    /**
     * The name of the user.
     */
    Username?: UsernameType;

    /**
     * The password that corresponds to the username.
     */
    Password?: PasswordType;
  };

  export type RedshiftConnectorProfilePropertiesType = {
    /**
     * The JDBC URL of the Amazon Redshift cluster.
     */
    DatabaseUrl?: DatabaseUrlType;

    /**
     * The name of the Amazon S3 bucket associated with Redshift.
     */
    BucketName: BucketNameType;

    /**
     * The object key for the destination bucket in which Amazon AppFlow will place the ﬁles.
     */
    BucketPrefix?: BucketPrefixType;

    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     */
    RoleArn: RoleArnType;

    /**
     * If Amazon AppFlow will connect to Amazon Redshift Serverless or Amazon Redshift cluster.
     */
    IsRedshiftServerless?: boolean;

    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants Amazon AppFlow access to the data through the Amazon Redshift Data API.
     */
    DataApiRoleArn?: DataApiRoleArnType;

    /**
     * The unique identifier of the Amazon Redshift cluster.
     */
    ClusterIdentifier?: ClusterIdentifierType;

    /**
     * The name of the Amazon Redshift serverless workgroup
     */
    WorkgroupName?: WorkgroupNameType;

    /**
     * The name of the Amazon Redshift database that will store the transferred data.
     */
    DatabaseName?: DatabaseNameType;
  };

  export type SAPODataConnectorProfileCredentialsType = {
    BasicAuthCredentials?: BasicAuthCredentialsType;

    OAuthCredentials?: Record<string, any>;
  };

  export type SAPODataConnectorProfilePropertiesType = {
    ApplicationHostUrl?: ApplicationHostUrlType;

    ApplicationServicePath?: ApplicationServicePathType;

    PortNumber?: PortNumberType;

    ClientNumber?: ClientNumberType;

    LogonLanguage?: LogonLanguageType;

    PrivateLinkServiceName?: PrivateLinkServiceNameType;

    OAuthProperties?: OAuthPropertiesType;

    /**
     * If you set this parameter to true, Amazon AppFlow bypasses the single sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance.
     */
    DisableSSO?: boolean;
  };

  export type SalesforceConnectorProfileCredentialsType = {
    /**
     * The credentials used to access protected resources.
     */
    AccessToken?: AccessTokenType;

    /**
     * The credentials used to acquire new access tokens.
     */
    RefreshToken?: RefreshTokenType;

    /**
     * The oauth needed to request security tokens from the connector endpoint.
     */
    ConnectorOAuthRequest?: ConnectorOAuthRequestType;

    /**
     * The client credentials to fetch access token and refresh token.
     */
    ClientCredentialsArn?: ClientCredentialsArnType;

    /**
     * The grant types to fetch an access token
     */
    OAuth2GrantType?: OAuth2GrantTypeType;

    /**
     * The credentials used to access your Salesforce records
     */
    JwtToken?: JwtTokenType;
  };

  export type SalesforceConnectorProfilePropertiesType = {
    /**
     * The location of the Salesforce resource
     */
    InstanceUrl?: InstanceUrlType;

    /**
     * Indicates whether the connector profile applies to a sandbox or production environment
     */
    isSandboxEnvironment?: boolean;

    /**
     * Indicates whether to make Metadata And Authorization calls over Pivate Network
     */
    usePrivateLinkForMetadataAndAuthorization?: boolean;
  };

  export type PardotConnectorProfilePropertiesType = {
    /**
     * The location of the Salesforce Pardot resource
     */
    InstanceUrl?: InstanceUrlType;

    /**
     * Indicates whether the connector profile applies to a demo or production environment
     */
    IsSandboxEnvironment?: boolean;

    /**
     * The Business unit id of Salesforce Pardot instance to be connected
     */
    BusinessUnitId: BusinessUnitIdType;
  };

  export type PardotConnectorProfileCredentialsType = {
    /**
     * The credentials used to access protected resources.
     */
    AccessToken?: AccessTokenType;

    /**
     * The credentials used to acquire new access tokens.
     */
    RefreshToken?: RefreshTokenType;

    /**
     * The oauth needed to request security tokens from the connector endpoint.
     */
    ConnectorOAuthRequest?: ConnectorOAuthRequestType;

    /**
     * The client credentials to fetch access token and refresh token.
     */
    ClientCredentialsArn?: ClientCredentialsArnType;
  };

  export type ServiceNowConnectorProfileCredentialsType = {
    /**
     * The name of the user.
     */
    Username?: UsernameType;

    /**
     * The password that corresponds to the username.
     */
    Password?: PasswordType;

    /**
     * The OAuth 2.0 credentials required to authenticate the user.
     */
    OAuth2Credentials?: OAuth2CredentialsType;
  };

  export type ServiceNowConnectorProfilePropertiesType = {
    /**
     * The location of the ServiceNow resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type SingularConnectorProfileCredentialsType = {
    /**
     * A unique alphanumeric identiﬁer used to authenticate a user, developer, or calling program to your API.
     */
    ApiKey: ApiKeyType;
  };

  export type SlackConnectorProfileCredentialsType = {
    /**
     * The identiﬁer for the desired client.
     */
    ClientId: ClientIdType;

    /**
     * The client secret used by the oauth client to authenticate to the authorization server.
     */
    ClientSecret: ClientSecretType;

    /**
     * The credentials used to access protected resources.
     */
    AccessToken?: AccessTokenType;

    /**
     * The oauth needed to request security tokens from the connector endpoint.
     */
    ConnectorOAuthRequest?: ConnectorOAuthRequestType;
  };

  export type SlackConnectorProfilePropertiesType = {
    /**
     * The location of the Slack resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type SnowflakeConnectorProfileCredentialsType = {
    /**
     * The name of the user.
     */
    Username: UsernameType;

    /**
     * The password that corresponds to the username.
     */
    Password: PasswordType;
  };

  export type SnowflakeConnectorProfilePropertiesType = {
    /**
     * The name of the Snowﬂake warehouse.
     */
    Warehouse: WarehouseType;

    /**
     * The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the
     * Snowﬂake account. This is written in the following format: < Database>< Schema><Stage Name>.
     */
    Stage: StageType;

    /**
     * The name of the Amazon S3 bucket associated with Snowﬂake.
     */
    BucketName: BucketNameType;

    /**
     * The bucket prefix that refers to the Amazon S3 bucket associated with Snowﬂake.
     */
    BucketPrefix?: BucketPrefixType;

    /**
     * The Snowﬂake Private Link service name to be used for private data transfers.
     */
    PrivateLinkServiceName?: PrivateLinkServiceNameType;

    /**
     * The name of the account.
     */
    AccountName?: AccountNameType;

    /**
     * The region of the Snowﬂake account.
     */
    Region?: RegionType;
  };

  export type TrendmicroConnectorProfileCredentialsType = {
    /**
     * The Secret Access Key portion of the credentials.
     */
    ApiSecretKey: ApiSecretKeyType;
  };

  export type VeevaConnectorProfileCredentialsType = {
    /**
     * The name of the user.
     */
    Username: UsernameType;

    /**
     * The password that corresponds to the username.
     */
    Password: PasswordType;
  };

  export type VeevaConnectorProfilePropertiesType = {
    /**
     * The location of the Veeva resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type ZendeskConnectorProfileCredentialsType = {
    /**
     * The identiﬁer for the desired client.
     */
    ClientId: ClientIdType;

    /**
     * The client secret used by the oauth client to authenticate to the authorization server.
     */
    ClientSecret: ClientSecretType;

    /**
     * The credentials used to access protected resources.
     */
    AccessToken?: AccessTokenType;

    /**
     * The oauth needed to request security tokens from the connector endpoint.
     */
    ConnectorOAuthRequest?: ConnectorOAuthRequestType;
  };

  export type ZendeskConnectorProfilePropertiesType = {
    /**
     * The location of the Zendesk resource
     */
    InstanceUrl: InstanceUrlType;
  };

  export type CustomConnectorProfileCredentialsType = {
    AuthenticationType: AuthenticationTypeType;

    Basic?: BasicAuthCredentialsType;

    Oauth2?: OAuth2CredentialsType;

    ApiKey?: ApiKeyCredentialsType;

    Custom?: CustomAuthCredentialsType;
  };

  export type CustomConnectorProfilePropertiesType = {
    ProfileProperties?: ProfilePropertiesType;

    OAuth2Properties?: OAuth2PropertiesType;
  };

  export type ApiKeyCredentialsType = {
    ApiKey: ApiKeyType;

    ApiSecretKey?: ApiSecretKeyType;
  };

  export type CustomAuthCredentialsType = {
    CustomAuthenticationType: CustomAuthenticationTypeType;

    CredentialsMap?: CredentialsMapType;
  };

  /**
   * A map for properties for custom authentication.
   */
  export type CredentialsMapType = {};

  export type OAuth2CredentialsType = {
    ClientId?: ClientIdType;

    ClientSecret?: ClientSecretType;

    AccessToken?: AccessTokenType;

    RefreshToken?: RefreshTokenType;

    OAuthRequest?: ConnectorOAuthRequestType;
  };

  export type BasicAuthCredentialsType = {
    Username: UsernameType;

    Password: PasswordType;
  };

  export type AuthenticationTypeType = {};

  export type OAuth2PropertiesType = {
    TokenUrl?: string;

    OAuth2GrantType?: OAuth2GrantTypeType;

    TokenUrlCustomProperties?: TokenUrlCustomPropertiesType;
  };

  /**
   * A map for properties for custom connector.
   */
  export type ProfilePropertiesType = {};

  export type OAuth2GrantTypeType = {};

  /**
   * A map for properties for custom connector Token Url.
   */
  export type TokenUrlCustomPropertiesType = {};

  export type CustomAuthenticationTypeType = {};

  export type ClientIdType = {};

  export type ClientSecretType = {};

  export type InstanceUrlType = {};

  export type AccessTokenType = {};

  export type ApiKeyType = {};

  export type ApiSecretKeyType = {};

  export type ApiTokenType = {};

  export type ApplicationKeyType = {};

  export type AuthCodeType = {};

  export type BucketNameType = {};

  export type BucketPrefixType = {};

  export type KeyType = {};

  export type DatabaseUrlType = {};

  export type RoleArnType = {};

  export type DataApiRoleArnType = {};

  export type ClusterIdentifierType = {};

  export type WorkgroupNameType = {};

  export type DatabaseNameType = {};

  export type WarehouseType = {};

  export type StageType = {};

  export type PrivateLinkServiceNameType = {};

  export type AccountNameType = {};

  export type JwtTokenType = {};

  export type RefreshTokenType = {};

  export type RegionType = {};

  export type SecretKeyType = {};

  export type AccessKeyIdType = {};

  export type UsernameType = {};

  export type PasswordType = {};

  export type BusinessUnitIdType = {};

  export type ConnectorOAuthRequestType = {
    /**
     * The code provided by the connector when it has been authenticated via the connected app.
     */
    AuthCode?: string;

    /**
     * The URL to which the authentication server redirects the browser after authorization has been
     * granted.
     */
    RedirectUri?: string;
  };

  export type ClientCredentialsArnType = {};

  export type ApplicationHostUrlType = {};

  export type ApplicationServicePathType = {};

  export type ClientNumberType = {};

  export type LogonLanguageType = {};

  export type PortNumberType = {};

  export type OAuthPropertiesType = {
    AuthCodeUrl?: string;

    TokenUrl?: string;

    OAuthScopes?: string[];
  };

  /**
   * Resource Type definition for AWS::AppFlow::ConnectorProfile
   */
  export type ConnectorProfileResourceType = {
    /**
     * Unique identifier for connector profile resources
     * Read-only property
     */
    ConnectorProfileArn?: string;

    /**
     * The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.
     * Create-only property
     */
    ConnectorLabel?: string;

    /**
     * The maximum number of items to retrieve in a single batch.
     * Create-only property
     */
    ConnectorProfileName: string;

    /**
     * The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
     */
    KMSArn?: string;

    /**
     * List of Saas providers that need connector profile to be created
     * Create-only property
     */
    ConnectorType: ConnectorTypeType;

    /**
     * Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
     */
    ConnectionMode: string;

    /**
     * Connector specific configurations needed to create connector profile
     */
    ConnectorProfileConfig?: ConnectorProfileConfigType;

    /**
     * A unique Arn for Connector-Profile resource
     * Read-only property
     */
    CredentialsArn?: string;
  };
}
