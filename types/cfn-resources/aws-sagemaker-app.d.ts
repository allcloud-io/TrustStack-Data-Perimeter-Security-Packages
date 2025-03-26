/**
 * TypeScript definitions for AWS::SageMaker::App
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::App
 */
export namespace AWS_SageMaker_App {
  export type ResourceSpecType = {
    /**
     * The instance type that the image version runs on.
     */
    InstanceType?: string;

    /**
     * The ARN of the SageMaker image that the image version belongs to.
     */
    SageMakerImageArn?: string;

    /**
     * The ARN of the image version created on the instance.
     */
    SageMakerImageVersionArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
     */
    LifecycleConfigArn?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::App
   */
  export type AppResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the app.
     * Read-only property
     */
    AppArn?: string;

    /**
     * The name of the app.
     * Create-only property
     */
    AppName: string;

    /**
     * The type of app.
     * Create-only property
     */
    AppType: string;

    /**
     * The domain ID.
     * Create-only property
     */
    DomainId: string;

    /**
     * The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.
     * Create-only property
     */
    ResourceSpec?: ResourceSpecType;

    /**
     * A list of tags to apply to the app.
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The user profile name.
     * Create-only property
     */
    UserProfileName: string;
  };
}
