/**
 * TypeScript definitions for AWS::IVS::Stage
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Definition for type AWS::IVS::Stage.
 */
export namespace AWS_IVS_Stage {
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Configuration object for individual participant recording, to attach to the new stage.
   */
  export type AutoParticipantRecordingConfigurationType = {
    /**
     * ARN of the StorageConfiguration resource to use for individual participant recording.
     */
    StorageConfigurationArn: string;

    /**
     * Types of media to be recorded. Default: AUDIO_VIDEO.
     */
    MediaTypes?: string[];
  };

  /**
   * Resource Definition for type AWS::IVS::Stage.
   */
  export type StageResourceType = {
    /**
     * Stage ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * Stage name
     */
    Name?: string;

    AutoParticipantRecordingConfiguration?: AutoParticipantRecordingConfigurationType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * ID of the active session within the stage.
     * Default: ""
     * Read-only property
     */
    ActiveSessionId?: string;
  };
}
