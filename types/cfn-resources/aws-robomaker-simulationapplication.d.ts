/**
 * TypeScript definitions for AWS::RoboMaker::SimulationApplication
 * Generated from CloudFormation Resource Schema
 */

/**
 * This schema is for testing purpose only.
 */
export namespace AWS_RoboMaker_SimulationApplication {
  export type ArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  /**
   * Information about a rendering engine.
   */
  export type RenderingEngineType = {
    /**
     * The name of the rendering engine.
     */
    Name: string;

    /**
     * The version of the rendering engine.
     */
    Version: string;
  };

  /**
   * Information about a robot software suite.
   */
  export type RobotSoftwareSuiteType = {
    /**
     * The name of the robot software suite.
     */
    Name: string;

    /**
     * The version of the robot software suite.
     */
    Version?: string;
  };

  /**
   * Information about a source configuration.
   */
  export type SourceConfigType = {
    /**
     * The Amazon S3 bucket name.
     */
    S3Bucket: string;

    /**
     * The s3 object key.
     */
    S3Key: string;

    /**
     * The target processor architecture for the application.
     */
    Architecture: string;
  };

  /**
   * Information about a simulation software suite.
   */
  export type SimulationSoftwareSuiteType = {
    /**
     * The name of the simulation software suite.
     */
    Name: string;

    /**
     * The version of the simulation software suite.
     */
    Version?: string;
  };

  /**
   * This schema is for testing purpose only.
   */
  export type SimulationApplicationResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The name of the simulation application.
     * Create-only property
     */
    Name?: string;

    /**
     * The current revision id.
     */
    CurrentRevisionId?: string;

    /**
     * The rendering engine for the simulation application.
     */
    RenderingEngine?: RenderingEngineType;

    /**
     * The robot software suite used by the simulation application.
     */
    RobotSoftwareSuite: RobotSoftwareSuiteType;

    /**
     * The simulation software suite used by the simulation application.
     */
    SimulationSoftwareSuite: SimulationSoftwareSuiteType;

    /**
     * The sources of the simulation application.
     */
    Sources?: SourceConfigType[];

    /**
     * The URI of the Docker image for the robot application.
     */
    Environment?: string;

    Tags?: TagsType;
  };
}
