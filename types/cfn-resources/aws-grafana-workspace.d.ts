/**
 * TypeScript definitions for AWS::Grafana::Workspace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Grafana::Workspace Resource Type
 */
export namespace AWS_Grafana_Workspace {
  /**
   * Maps Grafana friendly names to the IdPs SAML attributes.
   */
  export type AssertionAttributesType = {
    /**
     * Name of the attribute within the SAML assert to use as the users name in Grafana.
     */
    Name?: string;

    /**
     * Name of the attribute within the SAML assert to use as the users login handle in Grafana.
     */
    Login?: string;

    /**
     * Name of the attribute within the SAML assert to use as the users email in Grafana.
     */
    Email?: string;

    /**
     * Name of the attribute within the SAML assert to use as the users groups in Grafana.
     */
    Groups?: string;

    /**
     * Name of the attribute within the SAML assert to use as the users roles in Grafana.
     */
    Role?: string;

    /**
     * Name of the attribute within the SAML assert to use as the users organizations in Grafana.
     */
    Org?: string;
  };

  /**
   * IdP Metadata used to configure SAML authentication in Grafana.
   */
  export type IdpMetadataType = {
    /**
     * URL that vends the IdPs metadata.
     */
    Url?: string;

    /**
     * XML blob of the IdPs metadata.
     */
    Xml?: string;
  };

  /**
   * Maps SAML roles to the Grafana Editor and Admin roles.
   */
  export type RoleValuesType = {
    /**
     * List of SAML roles which will be mapped into the Grafana Editor role.
     */
    Editor?: string[];

    /**
     * List of SAML roles which will be mapped into the Grafana Admin role.
     */
    Admin?: string[];
  };

  /**
   * SAML configuration data associated with an AMG workspace.
   */
  export type SamlConfigurationType = {
    IdpMetadata: IdpMetadataType;

    AssertionAttributes?: AssertionAttributesType;

    RoleValues?: RoleValuesType;

    /**
     * List of SAML organizations allowed to access Grafana.
     */
    AllowedOrganizations?: string[];

    /**
     * The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.
     */
    LoginValidityDuration?: number;
  };

  /**
   * The configuration settings for Network Access Control.
   */
  export type NetworkAccessControlType = {
    /**
     * The list of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration then no IP addresses will be allowed to access the workspace.
     */
    PrefixListIds?: string[];

    /**
     * The list of Amazon VPC endpoint IDs for the workspace. If a NetworkAccessConfiguration is specified then only VPC endpoints specified here will be allowed to access the workspace.
     */
    VpceIds?: string[];
  };

  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
   */
  export type VpcConfigurationType = {
    /**
     * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.
     */
    SecurityGroupIds: string[];

    /**
     * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.
     */
    SubnetIds: string[];
  };

  /**
   * These enums represent valid account access types. Specifically these enums determine whether the workspace can access AWS resources in the AWS account only, or whether it can also access resources in other accounts in the same organization. If the value CURRENT_ACCOUNT is used, a workspace role ARN must be provided. If the value is ORGANIZATION, a list of organizational units must be provided.
   */
  export type AccountAccessTypeType = {};

  /**
   * Valid workspace authentication providers.
   */
  export type AuthenticationProviderTypesType = {};

  /**
   * These enums represent valid AWS data sources that can be queried via the Grafana workspace. These data sources are primarily used to help customers visualize which data sources have been added to a service managed workspace IAM role.
   */
  export type DataSourceTypeType = {};

  /**
   * These enums represent valid AWS notification destinations that the Grafana workspace has permission to use. These notification destinations are primarily used to help customers visualize which destinations have been added to a service managed IAM role.
   */
  export type NotificationDestinationTypeType = {};

  /**
   * These enums represent valid permission types to use when creating or configuring a Grafana workspace. The SERVICE_MANAGED permission type means the Managed Grafana service will create a workspace IAM role on your behalf. The CUSTOMER_MANAGED permission type means that the customer is expected to provide an IAM role that the Grafana workspace can use to query data sources.
   */
  export type PermissionTypeType = {};

  /**
   * These enums represent the status of a workspace.
   */
  export type WorkspaceStatusType = {};

  /**
   * Valid SAML configuration statuses.
   */
  export type SamlConfigurationStatusType = {};

  /**
   * Definition of AWS::Grafana::Workspace Resource Type
   */
  export type WorkspaceResourceType = {
    /**
     * List of authentication providers to enable.
     */
    AuthenticationProviders: AuthenticationProviderTypesType[];

    /**
     * The client ID of the AWS SSO Managed Application.
     * Read-only property
     */
    SsoClientId?: string;

    SamlConfiguration?: SamlConfigurationType;

    NetworkAccessControl?: NetworkAccessControlType;

    VpcConfiguration?: VpcConfigurationType;

    /**
     * Read-only property
     */
    SamlConfigurationStatus?: SamlConfigurationStatusType;

    /**
     * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
     * Create-only property
     */
    ClientToken?: string;

    /**
     * Read-only property
     */
    Status?: WorkspaceStatusType;

    /**
     * Timestamp when the workspace was created.
     * Read-only property
     */
    CreationTimestamp?: string;

    /**
     * Timestamp when the workspace was last modified
     * Read-only property
     */
    ModificationTimestamp?: string;

    /**
     * The version of Grafana to support in your workspace.
     */
    GrafanaVersion?: string;

    /**
     * Endpoint for the Grafana workspace.
     * Read-only property
     */
    Endpoint?: string;

    AccountAccessType: AccountAccessTypeType;

    /**
     * The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.
     */
    OrganizationRoleName?: string;

    PermissionType: PermissionTypeType;

    /**
     * The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.
     */
    StackSetName?: string;

    /**
     * List of data sources on the service managed IAM role.
     */
    DataSources?: DataSourceTypeType[];

    /**
     * Description of a workspace.
     */
    Description?: string;

    /**
     * The id that uniquely identifies a Grafana workspace.
     * Read-only property
     */
    Id?: string;

    /**
     * The user friendly name of a workspace.
     */
    Name?: string;

    /**
     * List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.
     */
    NotificationDestinations?: NotificationDestinationTypeType[];

    /**
     * List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.
     */
    OrganizationalUnits?: string[];

    /**
     * IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.
     */
    RoleArn?: string;

    /**
     * Allow workspace admins to install plugins
     */
    PluginAdminEnabled?: boolean;
  };
}
