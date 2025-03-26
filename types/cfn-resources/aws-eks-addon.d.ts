/**
 * TypeScript definitions for AWS::EKS::Addon
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::EKS::Addon
 */
export namespace AWS_EKS_Addon {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * A pod identity to associate with an add-on.
   */
  export type PodIdentityAssociationType = {
    /**
     * The Kubernetes service account that the pod identity association is created for.
     */
    ServiceAccount: string;

    /**
     * The IAM role ARN that the pod identity association is created for.
     */
    RoleArn: string;
  };

  /**
   * Resource Schema for AWS::EKS::Addon
   */
  export type AddonResourceType = {
    /**
     * Name of Cluster
     * Create-only property
     */
    ClusterName: string;

    /**
     * Name of Addon
     * Create-only property
     */
    AddonName: string;

    /**
     * Version of Addon
     */
    AddonVersion?: string;

    /**
     * PreserveOnDelete parameter value
     */
    PreserveOnDelete?: boolean;

    /**
     * Resolve parameter value conflicts
     */
    ResolveConflicts?: string;

    /**
     * IAM role to bind to the add-on's service account
     */
    ServiceAccountRoleArn?: string;

    /**
     * An array of pod identities to apply to this add-on.
     */
    PodIdentityAssociations?: PodIdentityAssociationType[];

    /**
     * The configuration values to use with the add-on
     */
    ConfigurationValues?: string;

    /**
     * Amazon Resource Name (ARN) of the add-on
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
