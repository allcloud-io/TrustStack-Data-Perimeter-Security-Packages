/**
 * TypeScript definitions for AWS::EC2::InstanceConnectEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::InstanceConnectEndpoint
 */
export namespace AWS_EC2_InstanceConnectEndpoint {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type SecurityGroupIdType = {};

  /**
   * Resource Type definition for AWS::EC2::InstanceConnectEndpoint
   */
  export type InstanceConnectEndpointResourceType = {
    /**
     * The id of the instance connect endpoint
     * Read-only property
     */
    Id?: string;

    /**
     * The subnet id of the instance connect endpoint
     * Create-only property
     */
    SubnetId: string;

    /**
     * The client token of the instance connect endpoint.
     * Create-only property
     */
    ClientToken?: string;

    /**
     * If true, the address of the instance connect endpoint client is preserved when connecting to the end resource
     * Create-only property
     */
    PreserveClientIp?: boolean;

    /**
     * The tags of the instance connect endpoint.
     */
    Tags?: TagType[];

    /**
     * The security group IDs of the instance connect endpoint.
     * Create-only property
     */
    SecurityGroupIds?: SecurityGroupIdType[];
  };
}
