/**
 * TypeScript definitions for AWS::EKS::FargateProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::EKS::FargateProfile
 */
export namespace AWS_EKS_FargateProfile {
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

  export type SelectorType = {
    Namespace: string;

    Labels?: LabelType[];
  };

  /**
   * A key-value pair to associate with a pod.
   */
  export type LabelType = {
    /**
     * The key name of the label.
     */
    Key: string;

    /**
     * The value for the label.
     */
    Value: string;
  };

  /**
   * Resource Schema for AWS::EKS::FargateProfile
   */
  export type FargateProfileResourceType = {
    /**
     * Name of the Cluster
     * Create-only property
     */
    ClusterName: string;

    /**
     * Name of FargateProfile
     * Create-only property
     */
    FargateProfileName?: string;

    /**
     * The IAM policy arn for pods
     * Create-only property
     */
    PodExecutionRoleArn: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    Subnets?: string[];

    /**
     * Create-only property
     */
    Selectors: SelectorType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
