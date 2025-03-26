/**
 * TypeScript definitions for AWS::EKS::PodIdentityAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * An object representing an Amazon EKS PodIdentityAssociation.
 */
export namespace AWS_EKS_PodIdentityAssociation {
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
   * An object representing an Amazon EKS PodIdentityAssociation.
   */
  export type PodIdentityAssociationResourceType = {
    /**
     * The cluster that the pod identity association is created for.
     * Create-only property
     */
    ClusterName: string;

    /**
     * The IAM role ARN that the pod identity association is created for.
     */
    RoleArn: string;

    /**
     * The Kubernetes namespace that the pod identity association is created for.
     * Create-only property
     */
    Namespace: string;

    /**
     * The Kubernetes service account that the pod identity association is created for.
     * Create-only property
     */
    ServiceAccount: string;

    /**
     * The ARN of the pod identity association.
     * Read-only property
     */
    AssociationArn?: string;

    /**
     * The ID of the pod identity association.
     * Read-only property
     */
    AssociationId?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
