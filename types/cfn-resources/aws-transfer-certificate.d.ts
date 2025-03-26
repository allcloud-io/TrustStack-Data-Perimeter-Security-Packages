/**
 * TypeScript definitions for AWS::Transfer::Certificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Transfer::Certificate
 */
export namespace AWS_Transfer_Certificate {
  /**
   * A key-value pair to associate with a resource.
   */
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
   * Resource Type definition for AWS::Transfer::Certificate
   */
  export type CertificateResourceType = {
    /**
     * Specifies the usage type for the certificate.
     */
    Usage: string;

    /**
     * Specifies the certificate body to be imported.
     * Create-only property
     */
    Certificate: string;

    /**
     * Specifies the certificate chain to be imported.
     * Create-only property
     */
    CertificateChain?: string;

    /**
     * Specifies the private key for the certificate.
     * Create-only property
     */
    PrivateKey?: string;

    /**
     * Specifies the active date for the certificate.
     */
    ActiveDate?: string;

    /**
     * Specifies the inactive date for the certificate.
     */
    InactiveDate?: string;

    /**
     * A textual description for the certificate.
     */
    Description?: string;

    /**
     * Key-value pairs that can be used to group and search for certificates. Tags are metadata attached to certificates for any purpose.
     */
    Tags?: TagType[];

    /**
     * Specifies the unique Amazon Resource Name (ARN) for the agreement.
     * Read-only property
     */
    Arn?: string;

    /**
     * A unique identifier for the certificate.
     * Read-only property
     */
    CertificateId?: string;

    /**
     * A status description for the certificate.
     * Read-only property
     */
    Status?: string;

    /**
     * Describing the type of certificate. With or without a private key.
     * Read-only property
     */
    Type?: string;

    /**
     * Specifies Certificate's serial.
     * Read-only property
     */
    Serial?: string;

    /**
     * Specifies the not before date for the certificate.
     * Read-only property
     */
    NotBeforeDate?: string;

    /**
     * Specifies the not after date for the certificate.
     * Read-only property
     */
    NotAfterDate?: string;
  };
}
