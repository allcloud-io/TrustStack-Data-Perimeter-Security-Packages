/**
 * TypeScript definitions for AWS::MediaConvert::Preset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaConvert::Preset
 */
export namespace AWS_MediaConvert_Preset {
  /**
   * Resource Type definition for AWS::MediaConvert::Preset
   */
  export type PresetResourceType = {
    Category?: string;

    Description?: string;

    SettingsJson: Record<string, any>;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: Record<string, any>;

    /**
     * Create-only property
     */
    Name?: string;
  };
}
