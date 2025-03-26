/**
 * TypeScript definitions for AWS::AppStream::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::Application
 */
export namespace AWS_AppStream_Application {
  export type S3LocationType = {
    S3Bucket: string;

    S3Key: string;
  };

  export type ArnType = {};

  export type PlatformTypeType = {};

  export type TagType = {};

  export type ApplicationAttributeType = {};

  /**
   * Resource Type definition for AWS::AppStream::Application
   */
  export type ApplicationResourceType = {
    /**
     * Create-only property
     */
    Name: string;

    DisplayName?: string;

    Description?: string;

    LaunchPath: string;

    LaunchParameters?: string;

    WorkingDirectory?: string;

    /**
     * Create-only property
     */
    InstanceFamilies: string[];

    IconS3Location: S3LocationType;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    AppBlockArn: ArnType;

    /**
     * Create-only property
     */
    Platforms: PlatformTypeType[];

    Tags?: TagType[];

    AttributesToDelete?: ApplicationAttributeType[];

    /**
     * Read-only property
     */
    CreatedTime?: string;
  };
}
