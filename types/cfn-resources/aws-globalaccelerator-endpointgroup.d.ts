/**
 * TypeScript definitions for AWS::GlobalAccelerator::EndpointGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GlobalAccelerator::EndpointGroup
 */
export namespace AWS_GlobalAccelerator_EndpointGroup {
  /**
   * The configuration for a given endpoint
   */
  export type EndpointConfigurationType = {
    /**
     * Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
     */
    EndpointId: string;

    /**
     * Attachment ARN that provides access control to the cross account endpoint. Not required for resources hosted in the same account as the endpoint group.
     */
    AttachmentArn?: string;

    /**
     * The weight for the endpoint.
     */
    Weight?: number;

    /**
     * true if client ip should be preserved
     */
    ClientIPPreservationEnabled?: boolean;
  };

  /**
   * A network port number
   */
  export type PortType = {};

  /**
   * listener to endpoint port mapping.
   */
  export type PortOverrideType = {
    ListenerPort: PortType;

    EndpointPort: PortType;
  };

  /**
   * Resource Type definition for AWS::GlobalAccelerator::EndpointGroup
   */
  export type EndpointGroupResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the listener
     * Create-only property
     */
    ListenerArn: string;

    /**
     * The name of the AWS Region where the endpoint group is located
     * Create-only property
     */
    EndpointGroupRegion: string;

    /**
     * The list of endpoint objects.
     */
    EndpointConfigurations?: EndpointConfigurationType[];

    /**
     * The percentage of traffic to sent to an AWS Region
     * Default: 100
     */
    TrafficDialPercentage?: number;

    /**
     * The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
     * Default: -1
     */
    HealthCheckPort?: number;

    /**
     * The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
     * Default: "TCP"
     */
    HealthCheckProtocol?: string;

    /**
     * Default: "/"
     */
    HealthCheckPath?: string;

    /**
     * The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
     * Default: 30
     */
    HealthCheckIntervalSeconds?: number;

    /**
     * The number of consecutive health checks required to set the state of the endpoint to unhealthy.
     * Default: 3
     */
    ThresholdCount?: number;

    /**
     * The Amazon Resource Name (ARN) of the endpoint group
     * Read-only property
     */
    EndpointGroupArn?: string;

    PortOverrides?: PortOverrideType[];
  };
}
