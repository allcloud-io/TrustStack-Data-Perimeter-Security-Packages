/**
 * TypeScript definitions for AWS::AppStream::DirectoryConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::DirectoryConfig
 */
export namespace AWS_AppStream_DirectoryConfig {
  export type ServiceAccountCredentialsType = {
    AccountName: string;

    AccountPassword: string;
  };

  export type CertificateBasedAuthPropertiesType = {
    Status?: string;

    CertificateAuthorityArn?: string;
  };

  /**
   * Resource Type definition for AWS::AppStream::DirectoryConfig
   */
  export type DirectoryConfigResourceType = {
    OrganizationalUnitDistinguishedNames: string[];

    ServiceAccountCredentials: ServiceAccountCredentialsType;

    /**
     * Create-only property
     */
    DirectoryName: string;

    CertificateBasedAuthProperties?: CertificateBasedAuthPropertiesType;
  };
}
