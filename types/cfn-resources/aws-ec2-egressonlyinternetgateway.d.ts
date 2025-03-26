/**
 * TypeScript definitions for AWS::EC2::EgressOnlyInternetGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::EgressOnlyInternetGateway
 */
export namespace AWS_EC2_EgressOnlyInternetGateway {
  /**
   * Resource Type definition for AWS::EC2::EgressOnlyInternetGateway
   */
  export type EgressOnlyInternetGatewayResourceType = {
    /**
     * Service Generated ID of the EgressOnlyInternetGateway
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the VPC for which to create the egress-only internet gateway.
     * Create-only property
     */
    VpcId: string;
  };
}
