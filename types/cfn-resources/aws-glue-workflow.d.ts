/**
 * TypeScript definitions for AWS::Glue::Workflow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Workflow
 */
export namespace AWS_Glue_Workflow {
  /**
   * Resource Type definition for AWS::Glue::Workflow
   */
  export type WorkflowResourceType = {
    Description?: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: Record<string, any>;

    DefaultRunProperties?: Record<string, any>;

    /**
     * Create-only property
     */
    Name?: string;

    MaxConcurrentRuns?: number;
  };
}
