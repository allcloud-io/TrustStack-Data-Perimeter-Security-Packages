/**
 * TypeScript definitions for AWS::SSM::MaintenanceWindowTask
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSM::MaintenanceWindowTask
 */
export namespace AWS_SSM_MaintenanceWindowTask {
  export type TaskInvocationParametersType = {
    MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParametersType;

    MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParametersType;

    MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParametersType;

    MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParametersType;
  };

  export type TargetType = {
    Values: string[];

    Key: string;
  };

  export type CloudWatchOutputConfigType = {
    CloudWatchOutputEnabled?: boolean;

    CloudWatchLogGroupName?: string;
  };

  export type MaintenanceWindowRunCommandParametersType = {
    TimeoutSeconds?: number;

    Comment?: string;

    OutputS3KeyPrefix?: string;

    Parameters?: Record<string, any>;

    CloudWatchOutputConfig?: CloudWatchOutputConfigType;

    DocumentHashType?: string;

    ServiceRoleArn?: string;

    NotificationConfig?: NotificationConfigType;

    DocumentVersion?: string;

    OutputS3BucketName?: string;

    DocumentHash?: string;
  };

  export type MaintenanceWindowAutomationParametersType = {
    Parameters?: Record<string, any>;

    DocumentVersion?: string;
  };

  export type NotificationConfigType = {
    NotificationEvents?: string[];

    NotificationArn: string;

    NotificationType?: string;
  };

  export type MaintenanceWindowStepFunctionsParametersType = {
    Input?: string;

    Name?: string;
  };

  export type LoggingInfoType = {
    Region: string;

    S3Prefix?: string;

    S3Bucket: string;
  };

  export type MaintenanceWindowLambdaParametersType = {
    Qualifier?: string;

    Payload?: string;

    ClientContext?: string;
  };

  /**
   * Resource Type definition for AWS::SSM::MaintenanceWindowTask
   */
  export type MaintenanceWindowTaskResourceType = {
    MaxErrors?: string;

    Description?: string;

    ServiceRoleArn?: string;

    Priority: number;

    MaxConcurrency?: string;

    Targets?: TargetType[];

    Name?: string;

    TaskArn: string;

    TaskInvocationParameters?: TaskInvocationParametersType;

    /**
     * Create-only property
     */
    WindowId: string;

    TaskParameters?: Record<string, any>;

    /**
     * Create-only property
     */
    TaskType: string;

    CutoffBehavior?: string;

    /**
     * Read-only property
     */
    Id?: string;

    LoggingInfo?: LoggingInfoType;
  };
}
