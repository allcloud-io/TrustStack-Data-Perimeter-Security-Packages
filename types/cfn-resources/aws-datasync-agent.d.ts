/**
 * TypeScript definitions for AWS::DataSync::Agent
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::Agent.
 */
export namespace AWS_DataSync_Agent {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key for an AWS resource tag.
     */
    Key: string;

    /**
     * The value for an AWS resource tag.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::DataSync::Agent.
   */
  export type AgentResourceType = {
    /**
     * The name configured for the agent. Text reference used to identify the agent in the console.
     */
    AgentName?: string;

    /**
     * Activation key of the Agent.
     * Create-only property
     */
    ActivationKey?: string;

    /**
     * The ARNs of the security group used to protect your data transfer task subnets.
     * Create-only property
     */
    SecurityGroupArns?: string[];

    /**
     * The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
     * Create-only property
     */
    SubnetArns?: string[];

    /**
     * The ID of the VPC endpoint that the agent has access to.
     * Create-only property
     */
    VpcEndpointId?: string;

    /**
     * The service endpoints that the agent will connect to.
     * Read-only property
     */
    EndpointType?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The DataSync Agent ARN.
     * Read-only property
     */
    AgentArn?: string;
  };
}
