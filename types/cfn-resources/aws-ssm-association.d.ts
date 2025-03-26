/**
 * TypeScript definitions for AWS::SSM::Association
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with EC2 instances that contain a configuration agent to process the document.
 */
export namespace AWS_SSM_Association {
  export type TargetType = {
    Values: string[];

    Key: string;
  };

  export type S3KeyPrefixType = {};

  export type S3RegionType = {};

  export type S3OutputLocationType = {
    OutputS3KeyPrefix?: S3KeyPrefixType;

    OutputS3Region?: S3RegionType;

    OutputS3BucketName?: S3BucketNameType;
  };

  export type S3BucketNameType = {};

  export type InstanceAssociationOutputLocationType = {
    S3Location?: S3OutputLocationType;
  };

  export type ParameterValuesType = {};

  /**
   * The AWS::SSM::Association resource associates an SSM document in AWS Systems Manager with EC2 instances that contain a configuration agent to process the document.
   */
  export type AssociationResourceType = {
    /**
     * The name of the association.
     */
    AssociationName?: string;

    CalendarNames?: string[];

    /**
     * A Cron or Rate expression that specifies when the association is applied to the target.
     */
    ScheduleExpression?: string;

    MaxErrors?: string;

    /**
     * Parameter values that the SSM document uses at runtime.
     */
    Parameters?: Record<string, any>;

    /**
     * The ID of the instance that the SSM document is associated with.
     */
    InstanceId?: string;

    WaitForSuccessTimeoutSeconds?: number;

    MaxConcurrency?: string;

    ComplianceSeverity?: string;

    /**
     * The targets that the SSM document sends commands to.
     */
    Targets?: TargetType[];

    SyncCompliance?: string;

    OutputLocation?: InstanceAssociationOutputLocationType;

    ScheduleOffset?: number;

    /**
     * The name of the SSM document.
     */
    Name: string;

    ApplyOnlyAtCronInterval?: boolean;

    /**
     * The version of the SSM document to associate with the target.
     */
    DocumentVersion?: string;

    /**
     * Unique identifier of the association.
     * Read-only property
     */
    AssociationId?: string;

    AutomationTargetParameterName?: string;
  };
}
