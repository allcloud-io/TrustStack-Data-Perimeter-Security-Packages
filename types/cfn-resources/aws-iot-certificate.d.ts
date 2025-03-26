/**
 * TypeScript definitions for AWS::IoT::Certificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Use the AWS::IoT::Certificate resource to declare an AWS IoT X.509 certificate.
 */
export namespace AWS_IoT_Certificate {
  /**
   * Use the AWS::IoT::Certificate resource to declare an AWS IoT X.509 certificate.
   */
  export type CertificateResourceType = {
    /**
     * Create-only property
     */
    CACertificatePem?: string;

    /**
     * Create-only property
     */
    CertificatePem?: string;

    /**
     * Create-only property
     */
    CertificateSigningRequest?: string;

    /**
     * Create-only property
     */
    CertificateMode?: string;

    Status: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
