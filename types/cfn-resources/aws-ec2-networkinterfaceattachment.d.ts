/**
 * TypeScript definitions for AWS::EC2::NetworkInterfaceAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instance without interruption.
 */
export namespace AWS_EC2_NetworkInterfaceAttachment {
  /**
   * ENA Express uses AWS Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
   * To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
   */
  export type EnaSrdSpecificationType = {
    /**
     * Indicates whether ENA Express is enabled for the network interface.
     */
    EnaSrdEnabled?: boolean;

    /**
     * Configures ENA Express for UDP network traffic.
     */
    EnaSrdUdpSpecification?: Record<string, any>;
  };

  /**
   * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instance without interruption.
   */
  export type NetworkInterfaceAttachmentResourceType = {
    /**
     * Read-only property
     */
    AttachmentId?: string;

    /**
     * Whether to delete the network interface when the instance terminates. By default, this value is set to `true`.
     * Default: true
     */
    DeleteOnTermination?: boolean;

    /**
     * The network interface's position in the attachment order. For example, the first attached network interface has a `DeviceIndex` of 0.
     * Create-only property
     */
    DeviceIndex: string;

    /**
     * The ID of the instance to which you will attach the ENI.
     * Create-only property
     */
    InstanceId: string;

    /**
     * The ID of the ENI that you want to attach.
     * Create-only property
     */
    NetworkInterfaceId: string;

    /**
     * Configures ENA Express for the network interface that this action attaches to the instance.
     */
    EnaSrdSpecification?: EnaSrdSpecificationType;
  };
}
