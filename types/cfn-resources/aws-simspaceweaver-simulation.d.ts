/**
 * TypeScript definitions for AWS::SimSpaceWeaver::Simulation
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::SimSpaceWeaver::Simulation resource creates an AWS Simulation.
 */
export namespace AWS_SimSpaceWeaver_Simulation {
  export type S3LocationType = {
    /**
     * The Schema S3 bucket name.
     */
    BucketName: string;

    /**
     * This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.
     */
    ObjectKey: string;
  };

  /**
   * AWS::SimSpaceWeaver::Simulation resource creates an AWS Simulation.
   */
  export type SimulationResourceType = {
    /**
     * The name of the simulation.
     * Create-only property
     */
    Name: string;

    /**
     * Role ARN.
     * Create-only property
     */
    RoleArn: string;

    /**
     * Create-only property
     */
    SchemaS3Location?: S3LocationType;

    /**
     * Json object with all simulation details
     * Read-only property
     */
    DescribePayload?: string;

    /**
     * The maximum running time of the simulation.
     * Create-only property
     */
    MaximumDuration?: string;

    /**
     * Create-only property
     */
    SnapshotS3Location?: S3LocationType;
  };
}
