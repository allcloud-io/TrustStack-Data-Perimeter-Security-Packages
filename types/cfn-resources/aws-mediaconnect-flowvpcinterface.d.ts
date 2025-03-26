/**
 * TypeScript definitions for AWS::MediaConnect::FlowVpcInterface
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::FlowVpcInterface
 */
export namespace AWS_MediaConnect_FlowVpcInterface {
  /**
   * Resource schema for AWS::MediaConnect::FlowVpcInterface
   */
  export type FlowVpcInterfaceResourceType = {
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     * Create-only property
     */
    FlowArn: string;

    /**
     * Immutable and has to be a unique against other VpcInterfaces in this Flow.
     * Create-only property
     */
    Name: string;

    /**
     * Role Arn MediaConnect can assume to create ENIs in customer's account.
     */
    RoleArn: string;

    /**
     * Security Group IDs to be used on ENI.
     */
    SecurityGroupIds: string[];

    /**
     * Subnet must be in the AZ of the Flow
     */
    SubnetId: string;

    /**
     * IDs of the network interfaces created in customer's account by MediaConnect.
     * Read-only property
     */
    NetworkInterfaceIds?: string[];
  };
}
