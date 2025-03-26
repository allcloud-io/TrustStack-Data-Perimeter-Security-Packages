/**
 * TypeScript definitions for AWS::EMRContainers::VirtualCluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EMRContainers::VirtualCluster Type
 */
export namespace AWS_EMRContainers_VirtualCluster {
  export type ContainerProviderType = {
    /**
     * The type of the container provider
     */
    Type: string;

    /**
     * The ID of the container cluster
     */
    Id: string;

    Info: ContainerInfoType;
  };

  export type ContainerInfoType = {
    EksInfo: EksInfoType;
  };

  export type EksInfoType = {
    Namespace: string;
  };

  /**
   * An arbitrary set of tags (key-value pairs) for this virtual cluster.
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
   * Resource Schema of AWS::EMRContainers::VirtualCluster Type
   */
  export type VirtualClusterResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Container provider of the virtual cluster.
     * Create-only property
     */
    ContainerProvider: ContainerProviderType;

    /**
     * Id of the virtual cluster.
     * Read-only property
     */
    Id?: string;

    /**
     * Name of the virtual cluster.
     * Create-only property
     */
    Name: string;

    /**
     * An array of key-value pairs to apply to this virtual cluster.
     */
    Tags?: TagType[];

    /**
     * The ID of the security configuration.
     */
    SecurityConfigurationId?: string;
  };
}
