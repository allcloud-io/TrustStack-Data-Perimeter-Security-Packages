/**
 * TypeScript definitions for AWS::IVS::PublicKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::PublicKey
 */
export namespace AWS_IVS_PublicKey {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::IVS::PublicKey
   */
  export type PublicKeyResourceType = {
    /**
     * Name of the public key to be imported. The value does not need to be unique.
     * Create-only property
     */
    Name?: string;

    /**
     * The public portion of a customer-generated key pair. This field is required to create the AWS::IVS::PublicKey resource.
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
