/**
 * TypeScript definitions for AWS::EC2::EnclaveCertificateIamRoleAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate. This association is based on Amazon Resource Names and it enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave.
 */
export namespace AWS_EC2_EnclaveCertificateIamRoleAssociation {
  /**
   * Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate. This association is based on Amazon Resource Names and it enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave.
   */
  export type EnclaveCertificateIamRoleAssociationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role.
     * Create-only property
     */
    CertificateArn: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
     * Create-only property
     */
    RoleArn: string;

    /**
     * The name of the Amazon S3 bucket to which the certificate was uploaded.
     * Read-only property
     */
    CertificateS3BucketName?: string;

    /**
     * The Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored.
     * Read-only property
     */
    CertificateS3ObjectKey?: string;

    /**
     * The ID of the AWS KMS CMK used to encrypt the private key of the certificate.
     * Read-only property
     */
    EncryptionKmsKeyId?: string;
  };
}
