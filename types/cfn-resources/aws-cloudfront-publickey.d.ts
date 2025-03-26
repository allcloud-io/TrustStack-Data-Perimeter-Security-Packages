/**
 * TypeScript definitions for AWS::CloudFront::PublicKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * A public key that you can use with signed URLs and signed cookies, or with field-level encryption.
 */
export namespace AWS_CloudFront_PublicKey {
  /**
   * Configuration information about a public key that you can use with signed URLs and signed cookies, or with field-level encryption.
   */
  export type PublicKeyConfigType = {
    /**
     * A string included in the request to help make sure that the request can't be replayed.
     */
    CallerReference: string;

    /**
     * A comment to describe the public key. The comment cannot be longer than 128 characters.
     */
    Comment?: string;

    /**
     * The public key that you can use with signed URLs and signed cookies, or with field-level encryption.
     */
    EncodedKey: string;

    /**
     * A name to help identify the public key.
     */
    Name: string;
  };

  /**
   * A public key that you can use with signed URLs and signed cookies, or with field-level encryption.
   */
  export type PublicKeyResourceType = {
    /**
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Configuration information about a public key that you can use with signed URLs and signed cookies, or with field-level encryption.
     */
    PublicKeyConfig: PublicKeyConfigType;
  };
}
