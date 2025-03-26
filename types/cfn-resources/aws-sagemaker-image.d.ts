/**
 * TypeScript definitions for AWS::SageMaker::Image
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Image
 */
export namespace AWS_SageMaker_Image {
  /**
   * The name of the image.
   */
  export type ImageNameType = {};

  /**
   * The Amazon Resource Name (ARN) of the image.
   */
  export type ImageArnType = {};

  /**
   * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
   */
  export type ImageRoleArnType = {};

  /**
   * The display name of the image.
   */
  export type ImageDisplayNameType = {};

  /**
   * A description of the image.
   */
  export type ImageDescriptionType = {};

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
   * Resource Type definition for AWS::SageMaker::Image
   */
  export type ImageResourceType = {
    /**
     * Create-only property
     */
    ImageName: ImageNameType;

    /**
     * Read-only property
     */
    ImageArn?: ImageArnType;

    ImageRoleArn: ImageRoleArnType;

    ImageDisplayName?: ImageDisplayNameType;

    ImageDescription?: ImageDescriptionType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
