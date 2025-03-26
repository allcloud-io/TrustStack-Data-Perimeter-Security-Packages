/**
 * TypeScript definitions for AWS::S3Outposts::Endpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::S3Outposts::Endpoint
 */
export namespace AWS_S3Outposts_Endpoint {
  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   */
  export type iso8601UTCType = {};

  /**
   * The container for the network interface.
   */
  export type NetworkInterfaceType = {
    NetworkInterfaceId: string;
  };

  export type FailedReasonType = {
    /**
     * The failure code, if any, for a create or delete endpoint operation.
     */
    ErrorCode?: string;

    /**
     * Additional error details describing the endpoint failure and recommended action.
     */
    Message?: string;
  };

  /**
   * Resource Type Definition for AWS::S3Outposts::Endpoint
   */
  export type EndpointResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the endpoint.
     * Read-only property
     */
    Arn?: string;

    /**
     * The VPC CIDR committed by this endpoint.
     * Read-only property
     */
    CidrBlock?: string;

    /**
     * The time the endpoint was created.
     * Read-only property
     */
    CreationTime?: iso8601UTCType;

    /**
     * The ID of the endpoint.
     * Read-only property
     */
    Id?: string;

    /**
     * The network interfaces of the endpoint.
     * Read-only property
     */
    NetworkInterfaces?: NetworkInterfaceType[];

    /**
     * The id of the customer outpost on which the bucket resides.
     * Create-only property
     */
    OutpostId: string;

    /**
     * The ID of the security group to use with the endpoint.
     * Create-only property
     */
    SecurityGroupId: string;

    /**
     * Read-only property
     */
    Status?: string;

    /**
     * The ID of the subnet in the selected VPC. The subnet must belong to the Outpost.
     * Create-only property
     */
    SubnetId: string;

    /**
     * The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool.
     * Default: "Private"
     * Create-only property
     */
    AccessType?: string;

    /**
     * The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint.
     * Create-only property
     */
    CustomerOwnedIpv4Pool?: string;

    /**
     * The failure reason, if any, for a create or delete endpoint operation.
     */
    FailedReason?: FailedReasonType;
  };
}
