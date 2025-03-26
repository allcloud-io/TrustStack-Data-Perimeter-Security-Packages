/**
 * TypeScript definitions for AWS::GroundStation::MissionProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS Ground Station Mission Profile resource type for CloudFormation.
 */
export namespace AWS_GroundStation_MissionProfile {
  export type DataflowEdgeType = {
    Source?: string;

    Destination?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type StreamsKmsKeyType = {
    KmsKeyArn?: string;

    KmsAliasArn?: string;

    KmsAliasName?: string;
  };

  /**
   * AWS Ground Station Mission Profile resource type for CloudFormation.
   */
  export type MissionProfileResourceType = {
    /**
     * A name used to identify a mission profile.
     */
    Name: string;

    /**
     * Pre-pass time needed before the contact.
     */
    ContactPrePassDurationSeconds?: number;

    /**
     * Post-pass time needed after the contact.
     */
    ContactPostPassDurationSeconds?: number;

    /**
     * Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
     */
    MinimumViableContactDurationSeconds: number;

    /**
     * The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.
     */
    StreamsKmsKey?: StreamsKmsKeyType;

    /**
     * The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.
     */
    StreamsKmsRole?: string;

    DataflowEdges: DataflowEdgeType[];

    TrackingConfigArn: string;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Region?: string;
  };
}
