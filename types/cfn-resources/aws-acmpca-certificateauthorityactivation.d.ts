/**
 * TypeScript definitions for AWS::ACMPCA::CertificateAuthorityActivation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Used to install the certificate authority certificate and update the certificate authority status.
 */
export namespace AWS_ACMPCA_CertificateAuthorityActivation {
  /**
   * Used to install the certificate authority certificate and update the certificate authority status.
   */
  export type CertificateAuthorityActivationResourceType = {
    /**
     * Arn of the Certificate Authority.
     * Create-only property
     */
    CertificateAuthorityArn: string;

    /**
     * Certificate Authority certificate that will be installed in the Certificate Authority.
     */
    Certificate: string;

    /**
     * Certificate chain for the Certificate Authority certificate.
     */
    CertificateChain?: string;

    /**
     * The status of the Certificate Authority.
     */
    Status?: string;

    /**
     * The complete certificate chain, including the Certificate Authority certificate.
     * Read-only property
     */
    CompleteCertificateChain?: string;
  };
}
