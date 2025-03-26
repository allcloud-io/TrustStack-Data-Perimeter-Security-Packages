/**
 * TypeScript definitions for AWS::IAM::ServerCertificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::ServerCertificate
 */
export namespace AWS_IAM_ServerCertificate {
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
   * Resource Type definition for AWS::IAM::ServerCertificate
   */
  export type ServerCertificateResourceType = {
    /**
     * Create-only property
     */
    CertificateBody?: string;

    /**
     * Create-only property
     */
    CertificateChain?: string;

    /**
     * Create-only property
     */
    ServerCertificateName?: string;

    Path?: string;

    /**
     * Create-only property
     */
    PrivateKey?: string;

    /**
     * Amazon Resource Name (ARN) of the server certificate
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];
  };
}
