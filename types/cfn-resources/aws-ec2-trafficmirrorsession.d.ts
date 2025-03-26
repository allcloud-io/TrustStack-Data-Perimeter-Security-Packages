/**
 * TypeScript definitions for AWS::EC2::TrafficMirrorSession
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorSession
 */
export namespace AWS_EC2_TrafficMirrorSession {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TrafficMirrorSession
   */
  export type TrafficMirrorSessionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    TrafficMirrorTargetId: string;

    Description?: string;

    SessionNumber: number;

    VirtualNetworkId?: number;

    PacketLength?: number;

    /**
     * Create-only property
     */
    NetworkInterfaceId: string;

    TrafficMirrorFilterId: string;

    Tags?: TagType[];
  };
}
