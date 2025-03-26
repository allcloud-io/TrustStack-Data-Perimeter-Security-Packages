/**
 * TypeScript definitions for AWS::WorkSpacesThinClient::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::WorkSpacesThinClient::Environment.
 */
export namespace AWS_WorkSpacesThinClient_Environment {
  export type HourType = {};

  export type MinuteType = {};

  export type DayOfWeekType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type MaintenanceWindowType = {
    /**
     * The type of maintenance window.
     */
    Type: string;

    /**
     * The hour start time of maintenance window.
     */
    StartTimeHour?: HourType;

    /**
     * The minute start time of maintenance window.
     */
    StartTimeMinute?: MinuteType;

    /**
     * The hour end time of maintenance window.
     */
    EndTimeHour?: HourType;

    /**
     * The minute end time of maintenance window.
     */
    EndTimeMinute?: MinuteType;

    /**
     * The date of maintenance window.
     */
    DaysOfTheWeek?: DayOfWeekType[];

    /**
     * The desired time zone maintenance window.
     */
    ApplyTimeOf?: string;
  };

  /**
   * Resource type definition for AWS::WorkSpacesThinClient::Environment.
   */
  export type EnvironmentResourceType = {
    /**
     * Unique identifier of the environment.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the environment.
     */
    Name?: string;

    /**
     * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
     * Create-only property
     */
    DesktopArn: string;

    /**
     * The URL for the identity provider login (only for environments that use AppStream 2.0).
     */
    DesktopEndpoint?: string;

    /**
     * The type of VDI.
     * Read-only property
     */
    DesktopType?: string;

    /**
     * Activation code for devices associated with environment.
     * Read-only property
     */
    ActivationCode?: string;

    /**
     * Number of devices registered to the environment.
     * Read-only property
     */
    RegisteredDevicesCount?: number;

    /**
     * An option to define if software updates should be applied within a maintenance window.
     */
    SoftwareSetUpdateSchedule?: string;

    /**
     * A specification for a time window to apply software updates.
     */
    MaintenanceWindow?: MaintenanceWindowType;

    /**
     * An option to define which software updates to apply.
     */
    SoftwareSetUpdateMode?: string;

    /**
     * The ID of the software set to apply.
     */
    DesiredSoftwareSetId?: string;

    /**
     * The ID of the software set that is pending to be installed.
     * Read-only property
     */
    PendingSoftwareSetId?: string;

    /**
     * The version of the software set that is pending to be installed.
     * Read-only property
     */
    PendingSoftwareSetVersion?: string;

    /**
     * Describes if the software currently installed on all devices in the environment is a supported version.
     * Read-only property
     */
    SoftwareSetComplianceStatus?: string;

    /**
     * The timestamp in unix epoch format when environment was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The timestamp in unix epoch format when environment was last updated.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * The environment ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.
     * Create-only property
     */
    KmsKeyArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * An array of key-value pairs to apply to the newly created devices for this environment.
     */
    DeviceCreationTags?: TagType[];
  };
}
