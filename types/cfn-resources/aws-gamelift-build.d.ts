/**
 * TypeScript definitions for AWS::GameLift::Build
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GameLift::Build
 */
export namespace AWS_GameLift_Build {
  export type StorageLocationType = {
    /**
     * An Amazon S3 bucket identifier. This is the name of the S3 bucket.
     */
    Bucket: string;

    /**
     * The name of the zip file that contains the build files or script files.
     */
    Key: string;

    /**
     * The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter.
     */
    ObjectVersion?: string;

    /**
     * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.
     */
    RoleArn: string;
  };

  /**
   * Resource Type definition for AWS::GameLift::Build
   */
  export type BuildResourceType = {
    /**
     * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
     * Read-only property
     */
    BuildId?: string;

    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique.
     */
    Name?: string;

    /**
     * The operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value cannot be changed later.
     * Create-only property
     */
    OperatingSystem?: string;

    /**
     * Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.
     * Create-only property
     */
    StorageLocation?: StorageLocationType;

    /**
     * Version information that is associated with this build. Version strings do not need to be unique.
     */
    Version?: string;

    /**
     * A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift sets this value to 4.0.2.
     * Create-only property
     */
    ServerSdkVersion?: string;
  };
}
