/**
 * TypeScript definitions for AWS::QuickSight::VPCConnection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::VPCConnection Resource Type.
 */
export namespace AWS_QuickSight_VPCConnection {
  /**
   * <p>The structure that contains information about a network interface.</p>
   */
  export type NetworkInterfaceType = {
    /**
     * <p>The subnet ID associated with the network interface.</p>
     */
    SubnetId?: string;

    /**
     * <p>The availability zone that the network interface resides in.</p>
     */
    AvailabilityZone?: string;

    /**
     * <p>An error message.</p>
     */
    ErrorMessage?: string;

    Status?: NetworkInterfaceStatusType;

    /**
     * <p>The network interface ID.</p>
     */
    NetworkInterfaceId?: string;
  };

  export type NetworkInterfaceStatusType = {};

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag key.</p>
     */
    Key: string;

    /**
     * <p>Tag value.</p>
     */
    Value: string;
  };

  export type VPCConnectionAvailabilityStatusType = {};

  export type VPCConnectionResourceStatusType = {};

  /**
   * Definition of the AWS::QuickSight::VPCConnection Resource Type.
   */
  export type VPCConnectionResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
     * Read-only property
     */
    Arn?: string;

    AvailabilityStatus?: VPCConnectionAvailabilityStatusType;

    /**
     * Create-only property
     */
    AwsAccountId?: string;

    /**
     * <p>The time that the VPC connection was created.</p>
     * Read-only property
     */
    CreatedTime?: string;

    DnsResolvers?: string[];

    /**
     * <p>The time that the VPC connection was last updated.</p>
     * Read-only property
     */
    LastUpdatedTime?: string;

    Name?: string;

    /**
     * <p>A list of network interfaces.</p>
     * Read-only property
     */
    NetworkInterfaces?: NetworkInterfaceType[];

    RoleArn?: string;

    SecurityGroupIds?: string[];

    /**
     * Read-only property
     */
    Status?: VPCConnectionResourceStatusType;

    SubnetIds?: string[];

    Tags?: TagType[];

    /**
     * Create-only property
     */
    VPCConnectionId?: string;

    /**
     * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
     * Read-only property
     */
    VPCId?: string;
  };
}
