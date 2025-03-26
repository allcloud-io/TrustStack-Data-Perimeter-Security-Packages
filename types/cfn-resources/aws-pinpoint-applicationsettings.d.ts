/**
 * TypeScript definitions for AWS::Pinpoint::ApplicationSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::ApplicationSettings
 */
export namespace AWS_Pinpoint_ApplicationSettings {
  export type CampaignHookType = {
    Mode?: string;

    WebUrl?: string;

    LambdaFunctionName?: string;
  };

  export type QuietTimeType = {
    Start: string;

    End: string;
  };

  export type LimitsType = {
    Daily?: number;

    MaximumDuration?: number;

    Total?: number;

    MessagesPerSecond?: number;
  };

  /**
   * Resource Type definition for AWS::Pinpoint::ApplicationSettings
   */
  export type ApplicationSettingsResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    QuietTime?: QuietTimeType;

    Limits?: LimitsType;

    /**
     * Create-only property
     */
    ApplicationId: string;

    CampaignHook?: CampaignHookType;

    CloudWatchMetricsEnabled?: boolean;
  };
}
