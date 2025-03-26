/**
 * TypeScript definitions for AWS::MSK::VpcConnection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::VpcConnection
 */
export namespace AWS_MSK_VpcConnection {
  /**
   * The type of private link authentication
   */
  export type AuthenticationType = {};

  export type ClientSubnetsType = {};

  export type SecurityGroupsType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  export type VpcIdType = {};

  /**
   * Resource Type definition for AWS::MSK::VpcConnection
   */
  export type VpcConnectionResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    Authentication: AuthenticationType;

    /**
     * Create-only property
     */
    ClientSubnets: ClientSubnetsType;

    /**
     * The Amazon Resource Name (ARN) of the target cluster
     * Create-only property
     */
    TargetClusterArn: string;

    /**
     * Create-only property
     */
    SecurityGroups: SecurityGroupsType;

    Tags?: TagsType;

    /**
     * Create-only property
     */
    VpcId: VpcIdType;
  };
}
