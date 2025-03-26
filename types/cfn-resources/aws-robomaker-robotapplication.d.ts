/**
 * TypeScript definitions for AWS::RoboMaker::RobotApplication
 * Generated from CloudFormation Resource Schema
 */

/**
 * This schema is for testing purpose only.
 */
export namespace AWS_RoboMaker_RobotApplication {
  export type ArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  export type SourceConfigType = {
    /**
     * The Arn of the S3Bucket that stores the robot application source.
     */
    S3Bucket: string;

    /**
     * The s3 key of robot application source.
     */
    S3Key: string;

    /**
     * The architecture of robot application.
     */
    Architecture: string;
  };

  /**
   * The robot software suite used by the robot application.
   */
  export type RobotSoftwareSuiteType = {
    /**
     * The name of robot software suite.
     */
    Name: string;

    /**
     * The version of robot software suite.
     */
    Version?: string;
  };

  /**
   * This schema is for testing purpose only.
   */
  export type RobotApplicationResourceType = {
    /**
     * The name of the robot application.
     * Create-only property
     */
    Name?: string;

    /**
     * The sources of the robot application.
     */
    Sources?: SourceConfigType[];

    /**
     * The URI of the Docker image for the robot application.
     */
    Environment?: string;

    RobotSoftwareSuite: RobotSoftwareSuiteType;

    /**
     * The revision ID of robot application.
     */
    CurrentRevisionId?: string;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    Tags?: TagsType;
  };
}
