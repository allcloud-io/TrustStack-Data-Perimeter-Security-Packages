/**
 * TypeScript definitions for AWS::Redshift::EndpointAuthorization
 * Generated from CloudFormation Resource Schema
 */

/**
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.
 */
export namespace AWS_Redshift_EndpointAuthorization {
  export type VpcIdType = {};

  export type AwsAccountType = {};

  /**
   * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.
   */
  export type EndpointAuthorizationResourceType = {
    /**
     * The status of the authorization action.
     * Read-only property
     */
    Status?: string;

    /**
     * The AWS account ID of the grantee of the cluster.
     * Read-only property
     */
    Grantee?: AwsAccountType;

    /**
     * The target AWS account ID to grant or revoke access for.
     * Create-only property
     */
    Account: AwsAccountType;

    /**
     * The AWS account ID of the cluster owner.
     * Read-only property
     */
    Grantor?: AwsAccountType;

    /**
     * The number of Redshift-managed VPC endpoints created for the authorization.
     * Read-only property
     */
    EndpointCount?: number;

    /**
     * The time (UTC) when the authorization was created.
     * Read-only property
     */
    AuthorizeTime?: string;

    /**
     * The VPCs allowed access to the cluster.
     * Read-only property
     */
    AllowedVPCs?: VpcIdType[];

    /**
     *  Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
     */
    Force?: boolean;

    /**
     * Indicates whether all VPCs in the grantee account are allowed access to the cluster.
     * Read-only property
     */
    AllowedAllVPCs?: boolean;

    /**
     * The virtual private cloud (VPC) identifiers to grant or revoke access to.
     */
    VpcIds?: VpcIdType[];

    /**
     * The cluster identifier.
     * Create-only property
     */
    ClusterIdentifier: string;

    /**
     * The status of the cluster.
     * Read-only property
     */
    ClusterStatus?: string;
  };
}
