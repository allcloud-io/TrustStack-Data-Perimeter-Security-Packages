/**
 * TypeScript definitions for AWS::SageMaker::NotebookInstanceLifecycleConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig
 */
export namespace AWS_SageMaker_NotebookInstanceLifecycleConfig {
  export type NotebookInstanceLifecycleHookType = {
    Content?: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::NotebookInstanceLifecycleConfig
   */
  export type NotebookInstanceLifecycleConfigResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    NotebookInstanceLifecycleConfigName?: string;

    OnStart?: NotebookInstanceLifecycleHookType[];

    OnCreate?: NotebookInstanceLifecycleHookType[];
  };
}
