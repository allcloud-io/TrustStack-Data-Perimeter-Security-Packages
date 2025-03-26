/**
 * TypeScript definitions for AWS::Lightsail::Certificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::Certificate.
 */
export namespace AWS_Lightsail_Certificate {
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
    Value?: string;
  };

  /**
   * Resource Type definition for AWS::Lightsail::Certificate.
   */
  export type CertificateResourceType = {
    /**
     * The name for the certificate.
     * Create-only property
     */
    CertificateName: string;

    /**
     * The domain name (e.g., example.com ) for the certificate.
     * Create-only property
     */
    DomainName: string;

    /**
     * An array of strings that specify the alternate domains (e.g., example2.com) and subdomains (e.g., blog.example.com) for the certificate.
     * Create-only property
     */
    SubjectAlternativeNames?: string[];

    /**
     * Read-only property
     */
    CertificateArn?: string;

    /**
     * The validation status of the certificate.
     * Read-only property
     */
    Status?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
