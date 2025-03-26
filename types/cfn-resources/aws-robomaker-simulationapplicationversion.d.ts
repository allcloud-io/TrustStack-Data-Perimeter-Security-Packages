/**
 * TypeScript definitions for AWS::RoboMaker::SimulationApplicationVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::RoboMaker::SimulationApplicationVersion resource creates an AWS RoboMaker SimulationApplicationVersion. This helps you control which code your simulation uses.
 */
export namespace AWS_RoboMaker_SimulationApplicationVersion {
  export type ArnType = {};

  /**
   * AWS::RoboMaker::SimulationApplicationVersion resource creates an AWS RoboMaker SimulationApplicationVersion. This helps you control which code your simulation uses.
   */
  export type SimulationApplicationVersionResourceType = {
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
