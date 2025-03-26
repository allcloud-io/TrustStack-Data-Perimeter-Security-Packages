/**
 * TypeScript definitions for AWS::SageMaker::StudioLifecycleConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::StudioLifecycleConfig
 */
export namespace AWS_SageMaker_StudioLifecycleConfig {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::StudioLifecycleConfig
   */
  export type StudioLifecycleConfigResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the Lifecycle Configuration.
     * Read-only property
     */
    StudioLifecycleConfigArn?: string;

    /**
     * The App type that the Lifecycle Configuration is attached to.
     * Create-only property
     */
    StudioLifecycleConfigAppType: string;

    /**
     * The content of your Amazon SageMaker Studio Lifecycle Configuration script. This content must be base64 encoded.
     * Create-only property
     */
    StudioLifecycleConfigContent: string;

    /**
     * The name of the Amazon SageMaker Studio Lifecycle Configuration.
     * Create-only property
     */
    StudioLifecycleConfigName: string;

    /**
     * Tags to be associated with the Lifecycle Configuration. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
