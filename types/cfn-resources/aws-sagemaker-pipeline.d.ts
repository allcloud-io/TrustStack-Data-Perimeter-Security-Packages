/**
 * TypeScript definitions for AWS::SageMaker::Pipeline
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Pipeline
 */
export namespace AWS_SageMaker_Pipeline {
  export type S3LocationType = {
    /**
     * The name of the S3 bucket where the PipelineDefinition file is stored.
     */
    Bucket: string;

    /**
     * The file name of the PipelineDefinition file (Amazon S3 object name).
     */
    Key: string;

    /**
     * For versioning-enabled buckets, a specific version of the PipelineDefinition file.
     */
    Version?: string;

    /**
     * The Amazon S3 ETag (a file checksum) of the PipelineDefinition file. If you don't specify a value, SageMaker skips ETag validation of your PipelineDefinition file.
     */
    ETag?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::Pipeline
   */
  export type PipelineResourceType = {
    /**
     * The name of the Pipeline.
     * Create-only property
     */
    PipelineName: string;

    /**
     * The display name of the Pipeline.
     */
    PipelineDisplayName?: string;

    /**
     * The description of the Pipeline.
     */
    PipelineDescription?: string;

    PipelineDefinition: Record<string, any>;

    /**
     * Role Arn
     */
    RoleArn: string;

    Tags?: TagType[];

    ParallelismConfiguration?: Record<string, any>;
  };
}
