/**
 * TypeScript definitions for AWS::PinpointEmail::DedicatedIpPool
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::PinpointEmail::DedicatedIpPool
 */
export namespace AWS_PinpointEmail_DedicatedIpPool {
  export type TagsType = {
    Value?: string;

    Key?: string;
  };

  /**
   * Resource Type definition for AWS::PinpointEmail::DedicatedIpPool
   */
  export type DedicatedIpPoolResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    PoolName?: string;

    Tags?: TagsType[];
  };
}
