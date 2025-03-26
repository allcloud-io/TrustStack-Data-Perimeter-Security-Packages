/**
 * TypeScript definitions for AWS::EC2::TrafficMirrorTarget
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorTarget
 */
export namespace AWS_EC2_TrafficMirrorTarget {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TrafficMirrorTarget
   */
  export type TrafficMirrorTargetResourceType = {
    /**
     * Create-only property
     */
    NetworkLoadBalancerArn?: string;

    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    NetworkInterfaceId?: string;

    /**
     * Create-only property
     */
    GatewayLoadBalancerEndpointId?: string;

    Tags?: TagType[];
  };
}
