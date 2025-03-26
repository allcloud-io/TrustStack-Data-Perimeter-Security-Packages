/**
 * TypeScript definitions for AWS::ACMPCA::Permission
 * Generated from CloudFormation Resource Schema
 */

/**
 * Permission set on private certificate authority
 */
export namespace AWS_ACMPCA_Permission {
  /**
   * Permission set on private certificate authority
   */
  export type PermissionResourceType = {
    /**
     * The actions that the specified AWS service principal can use. Actions IssueCertificate, GetCertificate and ListPermissions must be provided.
     * Create-only property
     */
    Actions: string[];

    /**
     * The Amazon Resource Name (ARN) of the Private Certificate Authority that grants the permission.
     * Create-only property
     */
    CertificateAuthorityArn: string;

    /**
     * The AWS service or identity that receives the permission. At this time, the only valid principal is acm.amazonaws.com.
     * Create-only property
     */
    Principal: string;

    /**
     * The ID of the calling account.
     * Create-only property
     */
    SourceAccount?: string;
  };
}
