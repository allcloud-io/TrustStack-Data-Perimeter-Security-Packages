/**
 * TypeScript definitions for AWS::CertificateManager::Certificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CertificateManager::Certificate
 */
export namespace AWS_CertificateManager_Certificate {
  export type DomainValidationOptionType = {
    DomainName: string;

    ValidationDomain?: string;

    HostedZoneId?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::CertificateManager::Certificate
   */
  export type CertificateResourceType = {
    /**
     * Create-only property
     */
    CertificateAuthorityArn?: string;

    /**
     * Create-only property
     */
    DomainValidationOptions?: DomainValidationOptionType[];

    CertificateTransparencyLoggingPreference?: string;

    /**
     * Create-only property
     */
    DomainName: string;

    /**
     * Create-only property
     */
    ValidationMethod?: string;

    /**
     * Create-only property
     */
    SubjectAlternativeNames?: string[];

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    KeyAlgorithm?: string;
  };
}
