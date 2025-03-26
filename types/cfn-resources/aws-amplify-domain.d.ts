/**
 * TypeScript definitions for AWS::Amplify::Domain
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Amplify::Domain resource allows you to connect a custom domain to your app.
 */
export namespace AWS_Amplify_Domain {
  export type CertificateSettingsType = {
    CertificateType?: string;

    CustomCertificateArn?: string;
  };

  export type CertificateType = {
    CertificateType?: string;

    CertificateArn?: string;

    CertificateVerificationDNSRecord?: string;
  };

  export type SubDomainSettingType = {
    Prefix: string;

    BranchName: string;
  };

  /**
   * The AWS::Amplify::Domain resource allows you to connect a custom domain to your app.
   */
  export type DomainResourceType = {
    /**
     * Create-only property
     */
    AppId: string;

    /**
     * Read-only property
     */
    Arn?: string;

    AutoSubDomainCreationPatterns?: string[];

    AutoSubDomainIAMRole?: string;

    /**
     * Read-only property
     */
    CertificateRecord?: string;

    /**
     * Read-only property
     */
    Certificate?: CertificateType;

    CertificateSettings?: CertificateSettingsType;

    /**
     * Create-only property
     */
    DomainName: string;

    /**
     * Read-only property
     */
    DomainStatus?: string;

    /**
     * Read-only property
     */
    UpdateStatus?: string;

    EnableAutoSubDomain?: boolean;

    /**
     * Read-only property
     */
    StatusReason?: string;

    SubDomainSettings: SubDomainSettingType[];
  };
}
