/**
 * TypeScript definitions for AWS::SageMaker::ModelPackageGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::ModelPackageGroup
 */
export namespace AWS_SageMaker_ModelPackageGroup {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * The description of the model package group.
   */
  export type ModelPackageGroupDescriptionType = {};

  /**
   * The name of the model package group.
   */
  export type ModelPackageGroupNameType = {};

  /**
   * The Amazon Resource Name (ARN) of the model package group.
   */
  export type ModelPackageGroupArnType = {};

  /**
   * Resource Type definition for AWS::SageMaker::ModelPackageGroup
   */
  export type ModelPackageGroupResourceType = {
    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    ModelPackageGroupArn?: ModelPackageGroupArnType;

    /**
     * Create-only property
     */
    ModelPackageGroupName: ModelPackageGroupNameType;

    /**
     * Create-only property
     */
    ModelPackageGroupDescription?: ModelPackageGroupDescriptionType;

    ModelPackageGroupPolicy?: Record<string, any> | string;

    /**
     * The time at which the model package group was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The status of a modelpackage group job.
     * Read-only property
     */
    ModelPackageGroupStatus?: string;
  };
}
