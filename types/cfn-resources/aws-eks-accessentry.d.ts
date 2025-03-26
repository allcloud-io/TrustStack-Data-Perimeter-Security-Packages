/**
 * TypeScript definitions for AWS::EKS::AccessEntry
 * Generated from CloudFormation Resource Schema
 */

/**
 * An object representing an Amazon EKS AccessEntry.
 */
export namespace AWS_EKS_AccessEntry {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * An access policy to associate with the current access entry.
   */
  export type AccessPolicyType = {
    /**
     * The ARN of the access policy to add to the access entry.
     */
    PolicyArn: string;

    AccessScope: AccessScopeType;
  };

  /**
   * The access scope of the access policy.
   */
  export type AccessScopeType = {
    /**
     * The type of the access scope.
     */
    Type: string;

    /**
     * The namespaces to associate with the access scope. Only specify if Type is set to 'namespace'.
     */
    Namespaces?: string[];
  };

  /**
   * An object representing an Amazon EKS AccessEntry.
   */
  export type AccessEntryResourceType = {
    /**
     * The cluster that the access entry is created for.
     * Create-only property
     */
    ClusterName: string;

    /**
     * The principal ARN that the access entry is created for.
     * Create-only property
     */
    PrincipalArn: string;

    /**
     * The Kubernetes user that the access entry is associated with.
     */
    Username?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The ARN of the access entry.
     * Read-only property
     */
    AccessEntryArn?: string;

    /**
     * The Kubernetes groups that the access entry is associated with.
     */
    KubernetesGroups?: string[];

    /**
     * An array of access policies that are associated with the access entry.
     */
    AccessPolicies?: AccessPolicyType[];

    /**
     * The node type to associate with the access entry.
     * Create-only property
     */
    Type?: string;
  };
}
