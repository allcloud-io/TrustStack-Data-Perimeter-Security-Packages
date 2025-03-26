/**
 * TypeScript definitions for AWS::VpcLattice::Listener
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services.
 */
export namespace AWS_VpcLattice_Listener {
  export type ForwardType = {
    TargetGroups: WeightedTargetGroupType[];
  };

  export type FixedResponseType = {
    StatusCode: number;
  };

  export type DefaultActionType = {
    Forward?: ForwardType;

    FixedResponse?: FixedResponseType;
  };

  export type WeightedTargetGroupType = {
    TargetGroupIdentifier: string;

    Weight?: number;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must add one or more listeners. A listener is a process that checks for connection requests to your services.
   */
  export type ListenerResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    DefaultAction: DefaultActionType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Create-only property
     */
    Port?: number;

    /**
     * Create-only property
     */
    Protocol: string;

    /**
     * Read-only property
     */
    ServiceArn?: string;

    /**
     * Read-only property
     */
    ServiceId?: string;

    /**
     * Create-only property
     */
    ServiceIdentifier?: string;

    Tags?: TagType[];
  };
}
