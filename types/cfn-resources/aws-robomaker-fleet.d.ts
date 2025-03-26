/**
 * TypeScript definitions for AWS::RoboMaker::Fleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::RoboMaker::Fleet resource creates an AWS RoboMaker fleet. Fleets contain robots and can receive deployments.
 */
export namespace AWS_RoboMaker_Fleet {
  export type ArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  /**
   * AWS::RoboMaker::Fleet resource creates an AWS RoboMaker fleet. Fleets contain robots and can receive deployments.
   */
  export type FleetResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    Tags?: TagsType;

    /**
     * The name of the fleet.
     * Create-only property
     */
    Name?: string;
  };
}
