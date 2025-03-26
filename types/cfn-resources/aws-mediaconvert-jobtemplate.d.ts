/**
 * TypeScript definitions for AWS::MediaConvert::JobTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaConvert::JobTemplate
 */
export namespace AWS_MediaConvert_JobTemplate {
  export type AccelerationSettingsType = {
    Mode: string;
  };

  export type HopDestinationType = {
    WaitMinutes?: number;

    Queue?: string;

    Priority?: number;
  };

  /**
   * Resource Type definition for AWS::MediaConvert::JobTemplate
   */
  export type JobTemplateResourceType = {
    Category?: string;

    Description?: string;

    AccelerationSettings?: AccelerationSettingsType;

    Priority?: number;

    StatusUpdateInterval?: string;

    SettingsJson: Record<string, any>;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Queue?: string;

    HopDestinations?: HopDestinationType[];

    Tags?: Record<string, any>;

    /**
     * Create-only property
     */
    Name?: string;
  };
}
