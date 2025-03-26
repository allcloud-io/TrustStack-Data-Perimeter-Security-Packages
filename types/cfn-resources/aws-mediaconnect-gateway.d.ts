/**
 * TypeScript definitions for AWS::MediaConnect::Gateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::Gateway
 */
export namespace AWS_MediaConnect_Gateway {
  /**
   * The network settings for a gateway.
   */
  export type GatewayNetworkType = {
    /**
     * The name of the network. This name is used to reference the network and must be unique among networks in this gateway.
     */
    Name: string;

    /**
     * A unique IP address range to use for this network. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     */
    CidrBlock: string;
  };

  /**
   * Resource schema for AWS::MediaConnect::Gateway
   */
  export type GatewayResourceType = {
    /**
     * The name of the gateway. This name can not be modified after the gateway is created.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon Resource Name (ARN) of the gateway.
     * Read-only property
     */
    GatewayArn?: string;

    /**
     * The current status of the gateway.
     * Read-only property
     */
    GatewayState?: string;

    /**
     * The range of IP addresses that contribute content or initiate output requests for flows communicating with this gateway. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     * Create-only property
     */
    EgressCidrBlocks: string[];

    /**
     * The list of networks in the gateway.
     * Create-only property
     */
    Networks: GatewayNetworkType[];
  };
}
