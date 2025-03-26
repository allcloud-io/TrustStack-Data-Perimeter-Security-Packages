/**
 * TypeScript definitions for AWS::QuickSight::DataSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::DataSource Resource Type.
 */
export namespace AWS_QuickSight_DataSource {
  /**
   * <p>The parameters for OpenSearch.</p>
   */
  export type AmazonElasticsearchParametersType = {
    /**
     * <p>The OpenSearch domain.</p>
     */
    Domain: string;
  };

  /**
   * <p>The parameters for OpenSearch.</p>
   */
  export type AmazonOpenSearchParametersType = {
    /**
     * <p>The OpenSearch domain.</p>
     */
    Domain: string;
  };

  /**
   * <p>Parameters for Amazon Athena.</p>
   */
  export type AthenaParametersType = {
    /**
     * <p>The workgroup that Amazon Athena uses.</p>
     */
    WorkGroup?: string;

    /**
     * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
     */
    RoleArn?: string;
  };

  /**
   * <p>Parameters for Amazon Aurora.</p>
   */
  export type AuroraParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  /**
   * <p>Parameters for Amazon Aurora PostgreSQL-Compatible Edition.</p>
   */
  export type AuroraPostgreSqlParametersType = {
    /**
     * <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
     */
    Host: string;

    /**
     * <p>The port that Amazon Aurora PostgreSQL is listening on.</p>
     */
    Port: number;

    /**
     * <p>The Amazon Aurora PostgreSQL database to connect to.</p>
     */
    Database: string;
  };

  export type AuthenticationTypeType = {};

  /**
   * <p>The parameters for IoT Analytics.</p>
   */
  export type AwsIotAnalyticsParametersType = {
    /**
     * <p>Dataset name.</p>
     */
    DataSetName: string;
  };

  /**
   * <p>The combination of user name and password that are used as credentials.</p>
   */
  export type CredentialPairType = {
    /**
     * <p>User name.</p>
     */
    Username: string;

    /**
     * <p>Password.</p>
     */
    Password: string;

    /**
     * <p>A set of alternate data source parameters that you want to share for these
     * credentials. The credentials are applied in tandem with the data source parameters when
     * you copy a data source by using a create or update request. The API operation compares
     * the <code>DataSourceParameters</code> structure that's in the request with the
     * structures in the <code>AlternateDataSourceParameters</code> allow list. If the
     * structures are an exact match, the request is allowed to use the new data source with
     * the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
     * null, the <code>DataSourceParameters</code> originally used with these
     * <code>Credentials</code> is automatically allowed.</p>
     */
    AlternateDataSourceParameters?: DataSourceParametersType[];
  };

  /**
   * <p>Data source credentials. This is a variant type structure. For this structure to be
   * valid, only one of the attributes can be non-null.</p>
   */
  export type DataSourceCredentialsType = {
    CredentialPair?: CredentialPairType;

    /**
     * <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
     * want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
     * data source in the ARN is used as the credentials for the
     * <code>DataSourceCredentials</code> structure.</p>
     */
    CopySourceArn?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>
     */
    SecretArn?: string;
  };

  /**
   * <p>Error information for the data source creation or update.</p>
   */
  export type DataSourceErrorInfoType = {
    Type?: DataSourceErrorInfoTypeType;

    /**
     * <p>Error message.</p>
     */
    Message?: string;
  };

  export type DataSourceErrorInfoTypeType = {};

  /**
   * <p>The parameters that Amazon QuickSight uses to connect to your underlying data source.
   * This is a variant type structure. For this structure to be valid, only one of the
   * attributes can be non-null.</p>
   */
  export type DataSourceParametersType = {
    AmazonElasticsearchParameters?: AmazonElasticsearchParametersType;

    AthenaParameters?: AthenaParametersType;

    AuroraParameters?: AuroraParametersType;

    AuroraPostgreSqlParameters?: AuroraPostgreSqlParametersType;

    MariaDbParameters?: MariaDbParametersType;

    MySqlParameters?: MySqlParametersType;

    OracleParameters?: OracleParametersType;

    PostgreSqlParameters?: PostgreSqlParametersType;

    PrestoParameters?: PrestoParametersType;

    RdsParameters?: RdsParametersType;

    RedshiftParameters?: RedshiftParametersType;

    S3Parameters?: S3ParametersType;

    SnowflakeParameters?: SnowflakeParametersType;

    SparkParameters?: SparkParametersType;

    SqlServerParameters?: SqlServerParametersType;

    TeradataParameters?: TeradataParametersType;

    AmazonOpenSearchParameters?: AmazonOpenSearchParametersType;

    DatabricksParameters?: DatabricksParametersType;

    StarburstParameters?: StarburstParametersType;

    TrinoParameters?: TrinoParametersType;
  };

  export type DataSourceTypeType = {};

  /**
   * <p>The parameters that are required to connect to a Databricks data source.</p>
   */
  export type DatabricksParametersType = {
    /**
     * <p>The host name of the Databricks data source.</p>
     */
    Host: string;

    /**
     * <p>The port for the Databricks data source.</p>
     */
    Port: number;

    /**
     * <p>The HTTP path of the Databricks data source.</p>
     */
    SqlEndpointPath: string;
  };

  /**
   * <p>The parameters for an IAM Identity Center configuration.</p>
   */
  export type IdentityCenterConfigurationType = {
    /**
     * <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>
     */
    EnableIdentityPropagation?: boolean;
  };

  /**
   * <p>Amazon S3 manifest file location.</p>
   */
  export type ManifestFileLocationType = {
    /**
     * <p>Amazon S3 bucket.</p>
     */
    Bucket: string;

    /**
     * <p>Amazon S3 key that identifies an object.</p>
     */
    Key: string;
  };

  /**
   * <p>The parameters for MariaDB.</p>
   */
  export type MariaDbParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  /**
   * <p>The parameters for MySQL.</p>
   */
  export type MySqlParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  export type OAuthParametersType = {
    TokenProviderUrl: string;

    OAuthScope?: string;

    IdentityProviderVpcConnectionProperties?: VpcConnectionPropertiesType;

    IdentityProviderResourceUri?: string;
  };

  /**
   * <p>The parameters for Oracle.</p>
   */
  export type OracleParametersType = {
    /**
     * <p>An Oracle host.</p>
     */
    Host: string;

    /**
     * <p>The port.</p>
     */
    Port: number;

    /**
     * <p>The database.</p>
     */
    Database: string;
  };

  /**
   * <p>The parameters for PostgreSQL.</p>
   */
  export type PostgreSqlParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  /**
   * <p>The parameters for Presto.</p>
   */
  export type PrestoParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Catalog.</p>
     */
    Catalog: string;
  };

  /**
   * <p>The parameters for Amazon RDS.</p>
   */
  export type RdsParametersType = {
    /**
     * <p>Instance ID.</p>
     */
    InstanceId: string;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  /**
   * <p>A structure that grants Amazon QuickSight access to your cluster and make a call to the <code>redshift:GetClusterCredentials</code> API. For more information on the <code>redshift:GetClusterCredentials</code> API, see <a href="https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html">
   * <code>GetClusterCredentials</code>
   * </a>.</p>
   */
  export type RedshiftIAMParametersType = {
    /**
     * <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>
     */
    RoleArn: string;

    /**
     * <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
     */
    DatabaseUser?: string;

    /**
     * <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
     */
    DatabaseGroups?: string[];

    /**
     * <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
     */
    AutoCreateDatabaseUser?: boolean;
  };

  /**
   * <p>The parameters for Amazon Redshift. The <code>ClusterId</code> field can be blank if
   * <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set.</p>
   */
  export type RedshiftParametersType = {
    /**
     * <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
     */
    Host?: string;

    /**
     * <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>
     */
    Port?: number;

    /**
     * <p>Database.</p>
     */
    Database: string;

    /**
     * <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
     * provided.</p>
     */
    ClusterId?: string;

    IAMParameters?: RedshiftIAMParametersType;

    IdentityCenterConfiguration?: IdentityCenterConfigurationType;
  };

  /**
   * <p>Permission for the resource.</p>
   */
  export type ResourcePermissionType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
     * following:</p>
     * <ul>
     * <li>
     * <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
     * ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
     * (This is less common.) </p>
     * </li>
     * </ul>
     */
    Principal: string;

    Resource?: string;

    /**
     * <p>The IAM action to grant or revoke permissions on.</p>
     */
    Actions: string[];
  };

  export type ResourceStatusType = {};

  /**
   * <p>The parameters for S3.</p>
   */
  export type S3ParametersType = {
    ManifestFileLocation: ManifestFileLocationType;

    /**
     * <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>
     */
    RoleArn?: string;
  };

  /**
   * <p>The parameters for Snowflake.</p>
   */
  export type SnowflakeParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Database.</p>
     */
    Database: string;

    /**
     * <p>Warehouse.</p>
     */
    Warehouse: string;

    AuthenticationType?: AuthenticationTypeType;

    DatabaseAccessControlRole?: string;

    OAuthParameters?: OAuthParametersType;
  };

  /**
   * <p>The parameters for Spark.</p>
   */
  export type SparkParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;
  };

  /**
   * <p>The parameters for SQL Server.</p>
   */
  export type SqlServerParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  /**
   * <p>Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your
   * underlying data source.</p>
   */
  export type SslPropertiesType = {
    /**
     * <p>A Boolean option to control whether SSL should be disabled.</p>
     */
    DisableSsl?: boolean;
  };

  /**
   * <p>The parameters that are required to connect to a Starburst data source.</p>
   */
  export type StarburstParametersType = {
    /**
     * <p>The host name of the Starburst data source.</p>
     */
    Host: string;

    /**
     * <p>The port for the Starburst data source.</p>
     */
    Port: number;

    /**
     * <p>The catalog name for the Starburst data source.</p>
     */
    Catalog: string;

    ProductType?: StarburstProductTypeType;

    DatabaseAccessControlRole?: string;

    AuthenticationType?: AuthenticationTypeType;

    OAuthParameters?: OAuthParametersType;
  };

  export type StarburstProductTypeType = {};

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag key.</p>
     */
    Key: string;

    /**
     * <p>Tag value.</p>
     */
    Value: string;
  };

  /**
   * <p>The parameters for Teradata.</p>
   */
  export type TeradataParametersType = {
    /**
     * <p>Host.</p>
     */
    Host: string;

    /**
     * <p>Port.</p>
     */
    Port: number;

    /**
     * <p>Database.</p>
     */
    Database: string;
  };

  /**
   * <p>The parameters that are required to connect to a Trino data source.</p>
   */
  export type TrinoParametersType = {
    /**
     * <p>The host name of the Trino data source.</p>
     */
    Host: string;

    /**
     * <p>The port for the Trino data source.</p>
     */
    Port: number;

    /**
     * <p>The catalog name for the Trino data source.</p>
     */
    Catalog: string;
  };

  /**
   * <p>VPC connection properties.</p>
   */
  export type VpcConnectionPropertiesType = {
    /**
     * <p>The Amazon Resource Name (ARN) for the VPC connection.</p>
     */
    VpcConnectionArn: string;
  };

  /**
   * Definition of the AWS::QuickSight::DataSource Resource Type.
   */
  export type DataSourceResourceType = {
    /**
     * <p>A set of alternate data source parameters that you want to share for the credentials
     * stored with this data source. The credentials are applied in tandem with the data source
     * parameters when you copy a data source by using a create or update request. The API
     * operation compares the <code>DataSourceParameters</code> structure that's in the request
     * with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
     * structures are an exact match, the request is allowed to use the credentials from this
     * existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
     * the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
     * are automatically allowed.</p>
     */
    AlternateDataSourceParameters?: DataSourceParametersType[];

    /**
     * <p>The Amazon Resource Name (ARN) of the data source.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AwsAccountId?: string;

    /**
     * <p>The time that this data source was created.</p>
     * Read-only property
     */
    CreatedTime?: string;

    Credentials?: DataSourceCredentialsType;

    /**
     * Create-only property
     */
    DataSourceId?: string;

    DataSourceParameters?: DataSourceParametersType;

    ErrorInfo?: DataSourceErrorInfoType;

    FolderArns?: string[];

    /**
     * <p>The last time that this data source was updated.</p>
     * Read-only property
     */
    LastUpdatedTime?: string;

    Name: string;

    Permissions?: ResourcePermissionType[];

    SslProperties?: SslPropertiesType;

    /**
     * Read-only property
     */
    Status?: ResourceStatusType;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Type: DataSourceTypeType;

    VpcConnectionProperties?: VpcConnectionPropertiesType;
  };
}
