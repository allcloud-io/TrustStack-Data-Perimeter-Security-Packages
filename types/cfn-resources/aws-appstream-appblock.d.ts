/**
 * TypeScript definitions for AWS::AppStream::AppBlock
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::AppBlock
 */
export namespace AWS_AppStream_AppBlock {
  export type S3LocationType = {
    S3Bucket: string;

    S3Key?: string;
  };

  export type ScriptDetailsType = {
    ScriptS3Location: S3LocationType;

    ExecutablePath: string;

    ExecutableParameters?: string;

    TimeoutInSeconds: number;
  };

  export type ArnType = {};

  export type TagType = {};

  export type PackagingTypeType = {};

  /**
   * Resource Type definition for AWS::AppStream::AppBlock
   */
  export type AppBlockResourceType = {
    /**
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Create-only property
     */
    DisplayName?: string;

    /**
     * Create-only property
     */
    SourceS3Location: S3LocationType;

    /**
     * Create-only property
     */
    SetupScriptDetails?: ScriptDetailsType;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * Create-only property
     */
    PackagingType?: PackagingTypeType;

    /**
     * Create-only property
     */
    PostSetupScriptDetails?: ScriptDetailsType;
  };
}
