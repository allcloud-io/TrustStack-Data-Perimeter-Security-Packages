/**
 * TypeScript definitions for AWS::SageMaker::MlflowTrackingServer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::MlflowTrackingServer
 */
export namespace AWS_SageMaker_MlflowTrackingServer {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::MlflowTrackingServer
   */
  export type MlflowTrackingServerResourceType = {
    /**
     * The name of the MLFlow Tracking Server.
     * Create-only property
     */
    TrackingServerName: string;

    /**
     * The Amazon Resource Name (ARN) of the MLFlow Tracking Server.
     * Read-only property
     */
    TrackingServerArn?: string;

    /**
     * The size of the MLFlow Tracking Server.
     */
    TrackingServerSize?: string;

    /**
     * The MLFlow Version used on the MLFlow Tracking Server.
     */
    MlflowVersion?: string;

    /**
     * The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.
     */
    RoleArn: string;

    /**
     * The Amazon S3 URI for MLFlow Tracking Server artifacts.
     */
    ArtifactStoreUri: string;

    /**
     * A flag to enable Automatic SageMaker Model Registration.
     */
    AutomaticModelRegistration?: boolean;

    /**
     * The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.
     */
    WeeklyMaintenanceWindowStart?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
