/**
 * TypeScript definitions for AWS::OpenSearchServerless::VpcEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchServerless vpc endpoint resource
 */
export namespace AWS_OpenSearchServerless_VpcEndpoint {
  /**
   * Amazon OpenSearchServerless vpc endpoint resource
   */
  export type VpcEndpointResourceType = {
    /**
     * The identifier of the VPC Endpoint
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the VPC Endpoint
     * Create-only property
     */
    Name: string;

    /**
     * The ID of one or more security groups to associate with the endpoint network interface
     */
    SecurityGroupIds?: string[];

    /**
     * The ID of one or more subnets in which to create an endpoint network interface
     */
    SubnetIds: string[];

    /**
     * The ID of the VPC in which the endpoint will be used.
     * Create-only property
     */
    VpcId: string;
  };
}
