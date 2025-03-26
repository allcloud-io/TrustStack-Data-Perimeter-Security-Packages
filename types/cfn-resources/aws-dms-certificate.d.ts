/**
 * TypeScript definitions for AWS::DMS::Certificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DMS::Certificate
 */
export namespace AWS_DMS_Certificate {
  /**
   * Resource Type definition for AWS::DMS::Certificate
   */
  export type CertificateResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    CertificateIdentifier?: string;

    /**
     * Create-only property
     */
    CertificatePem?: string;

    /**
     * Create-only property
     */
    CertificateWallet?: string;
  };
}
