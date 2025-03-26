/**
 * TypeScript definitions for AWS::ManagedBlockchain::Node
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ManagedBlockchain::Node
 */
export namespace AWS_ManagedBlockchain_Node {
  export type NodeConfigurationType = {
    InstanceType: string;

    AvailabilityZone: string;
  };

  /**
   * Resource Type definition for AWS::ManagedBlockchain::Node
   */
  export type NodeResourceType = {
    /**
     * Read-only property
     */
    NodeId?: string;

    MemberId?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    NetworkId: string;

    NodeConfiguration: NodeConfigurationType;
  };
}
