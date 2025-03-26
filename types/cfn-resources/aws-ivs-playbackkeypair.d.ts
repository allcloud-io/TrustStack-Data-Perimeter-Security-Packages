/**
 * TypeScript definitions for AWS::IVS::PlaybackKeyPair
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::PlaybackKeyPair
 */
export namespace AWS_IVS_PlaybackKeyPair {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::IVS::PlaybackKeyPair
   */
  export type PlaybackKeyPairResourceType = {
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
     * Create-only property
     */
    Name?: string;

    /**
     * The public portion of a customer-generated key pair. This field is required to create the AWS::IVS::PlaybackKeyPair resource.
     * Create-only property
     */
    PublicKeyMaterial?: string;

    /**
     * Key-pair identifier.
     * Read-only property
     */
    Fingerprint?: string;

    /**
     * Key-pair identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];
  };
}
