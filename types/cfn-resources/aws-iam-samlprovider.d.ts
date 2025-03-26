/**
 * TypeScript definitions for AWS::IAM::SAMLProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::SAMLProvider
 */
export namespace AWS_IAM_SAMLProvider {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * The private key metadata for the SAML provider
   */
  export type SAMLPrivateKeyType = {
    /**
     * The unique identifier for the SAML private key.
     */
    KeyId: string;

    /**
     * The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded.
     */
    Timestamp: string;
  };

  /**
   * Resource Type definition for AWS::IAM::SAMLProvider
   */
  export type SAMLProviderResourceType = {
    /**
     * Create-only property
     */
    Name?: string;

    SamlMetadataDocument?: string;

    /**
     * Amazon Resource Name (ARN) of the SAML provider
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];

    /**
     * The encryption setting for the SAML provider
     */
    AssertionEncryptionMode?: string;

    /**
     * The private key from your external identity provider
     * Create-only property
     */
    AddPrivateKey?: string;

    /**
     * The Key ID of the private key to remove
     * Create-only property
     */
    RemovePrivateKey?: string;

    PrivateKeyList?: SAMLPrivateKeyType[];

    /**
     * The unique identifier assigned to the SAML provider
     * Read-only property
     */
    SamlProviderUUID?: string;
  };
}
