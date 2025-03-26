/**
 * TypeScript definitions for AWS::MSK::ServerlessCluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::ServerlessCluster
 */
export namespace AWS_MSK_ServerlessCluster {
  export type VpcConfigType = {
    SecurityGroups?: string[];

    SubnetIds: string[];
  };

  export type ClientAuthenticationType = {
    Sasl: SaslType;
  };

  export type SaslType = {
    Iam: IamType;
  };

  export type IamType = {
    Enabled: boolean;
  };

  /**
   * Resource Type definition for AWS::MSK::ServerlessCluster
   */
  export type ServerlessClusterResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ClusterName: string;

    /**
     * Create-only property
     */
    VpcConfigs: VpcConfigType[];

    /**
     * Create-only property
     */
    ClientAuthentication: ClientAuthenticationType;

    /**
     * A key-value pair to associate with a resource.
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
