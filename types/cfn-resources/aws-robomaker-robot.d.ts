/**
 * TypeScript definitions for AWS::RoboMaker::Robot
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::RoboMaker::Robot resource creates an AWS RoboMaker Robot.
 */
export namespace AWS_RoboMaker_Robot {
  export type ArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  /**
   * AWS::RoboMaker::Robot resource creates an AWS RoboMaker Robot.
   */
  export type RobotResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The Amazon Resource Name (ARN) of the fleet.
     * Create-only property
     */
    Fleet?: string;

    /**
     * The target architecture of the robot.
     * Create-only property
     */
    Architecture: string;

    /**
     * The Greengrass group id.
     * Create-only property
     */
    GreengrassGroupId: string;

    Tags?: TagsType;

    /**
     * The name for the robot.
     * Create-only property
     */
    Name?: string;
  };
}
