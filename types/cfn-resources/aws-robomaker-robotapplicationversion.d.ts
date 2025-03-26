/**
 * TypeScript definitions for AWS::RoboMaker::RobotApplicationVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::RoboMaker::RobotApplicationVersion resource creates an AWS RoboMaker RobotApplicationVersion. This helps you control which code your robot uses.
 */
export namespace AWS_RoboMaker_RobotApplicationVersion {
  export type ArnType = {};

  /**
   * AWS::RoboMaker::RobotApplicationVersion resource creates an AWS RoboMaker RobotApplicationVersion. This helps you control which code your robot uses.
   */
  export type RobotApplicationVersionResourceType = {
    /**
     * Create-only property
     */
    Application: ArnType;

    /**
     * The revision ID of robot application.
     * Create-only property
     */
    CurrentRevisionId?: string;

    /**
     * Read-only property
     */
    ApplicationVersion?: string;

    /**
     * Read-only property
     */
    Arn?: ArnType;
  };
}
