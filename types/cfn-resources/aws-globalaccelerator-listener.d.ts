/**
 * TypeScript definitions for AWS::GlobalAccelerator::Listener
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GlobalAccelerator::Listener
 */
export namespace AWS_GlobalAccelerator_Listener {
  /**
   * A network port number
   */
  export type PortType = {};

  /**
   * A port range to support for connections from  clients to your accelerator.
   */
  export type PortRangeType = {
    FromPort: PortType;

    ToPort: PortType;
  };

  /**
   * Resource Type definition for AWS::GlobalAccelerator::Listener
   */
  export type ListenerResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     * Read-only property
     */
    ListenerArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the accelerator.
     * Create-only property
     */
    AcceleratorArn: string;

    PortRanges: PortRangeType[];

    /**
     * The protocol for the listener.
     * Default: "TCP"
     */
    Protocol: string;

    /**
     * Client affinity lets you direct all requests from a user to the same endpoint.
     * Default: "NONE"
     */
    ClientAffinity?: string;
  };
}
