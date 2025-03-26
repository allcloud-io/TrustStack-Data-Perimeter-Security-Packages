/**
 * TypeScript definitions for AWS::IoT::CACertificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Registers a CA Certificate in IoT.
 */
export namespace AWS_IoT_CACertificate {
  export type RegistrationConfigType = {
    TemplateBody?: string;

    RoleArn?: string;

    TemplateName?: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Registers a CA Certificate in IoT.
   */
  export type CACertificateResourceType = {
    /**
     * Create-only property
     */
    CACertificatePem: string;

    /**
     * The private key verification certificate.
     * Create-only property
     */
    VerificationCertificatePem?: string;

    Status: string;

    /**
     * Create-only property
     */
    CertificateMode?: string;

    AutoRegistrationStatus?: string;

    RemoveAutoRegistration?: boolean;

    RegistrationConfig?: RegistrationConfigType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
