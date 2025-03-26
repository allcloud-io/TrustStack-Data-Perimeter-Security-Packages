/**
 * TypeScript definitions for AWS::MediaConnect::BridgeOutput
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::BridgeOutput
 */
export namespace AWS_MediaConnect_BridgeOutput {
  /**
   * The output of the bridge. A network output is delivered to your premises.
   */
  export type BridgeNetworkOutputType = {
    /**
     * The network output protocol.
     */
    Protocol: string;

    /**
     * The network output IP Address.
     */
    IpAddress: string;

    /**
     * The network output port.
     */
    Port: number;

    /**
     * The network output's gateway network name.
     */
    NetworkName: string;

    /**
     * The network output TTL.
     */
    Ttl: number;
  };

  /**
   * Resource schema for AWS::MediaConnect::BridgeOutput
   */
  export type BridgeOutputResourceType = {
    /**
     * The Amazon Resource Number (ARN) of the bridge.
     * Create-only property
     */
    BridgeArn: string;

    /**
     * The output of the bridge.
     */
    NetworkOutput: BridgeNetworkOutputType;

    /**
     * The network output name.
     * Create-only property
     */
    Name: string;
  };
}
