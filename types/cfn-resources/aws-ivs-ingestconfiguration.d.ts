/**
 * TypeScript definitions for AWS::IVS::IngestConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::IngestConfiguration
 */
export namespace AWS_IVS_IngestConfiguration {
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
   * Resource Type definition for AWS::IVS::IngestConfiguration
   */
  export type IngestConfigurationResourceType = {
    /**
     * IngestConfiguration ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * IngestConfiguration
     * Default: "-"
     * Create-only property
     */
    Name?: string;

    /**
     * Stage ARN. A value other than an empty string indicates that stage is linked to IngestConfiguration. Default: "" (recording is disabled).
     * Default: ""
     */
    StageArn?: string;

    /**
     * Participant Id is automatically generated on creation and assigned.
     * Read-only property
     */
    ParticipantId?: string;

    /**
     * Ingest Protocol.
     * Default: "RTMPS"
     * Create-only property
     */
    IngestProtocol?: string;

    /**
     * Whether ingest configuration allows insecure ingest.
     * Default: false
     * Create-only property
     */
    InsecureIngest?: boolean;

    /**
     * State of IngestConfiguration which determines whether IngestConfiguration is in use or not.
     * Default: "INACTIVE"
     * Read-only property
     */
    State?: string;

    /**
     * Stream-key value.
     * Read-only property
     */
    StreamKey?: string;

    /**
     * User defined indentifier for participant associated with IngestConfiguration.
     * Create-only property
     */
    UserId?: string;

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];
  };
}
