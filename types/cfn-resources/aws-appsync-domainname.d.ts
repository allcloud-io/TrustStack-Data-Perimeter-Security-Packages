/**
 * TypeScript definitions for AWS::AppSync::DomainName
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::DomainName
 */
export namespace AWS_AppSync_DomainName {
  /**
   * Resource Type definition for AWS::AppSync::DomainName
   */
  export type DomainNameResourceType = {
    /**
     * Create-only property
     */
    DomainName: string;

    Description?: string;

    /**
     * Create-only property
     */
    CertificateArn: string;

    /**
     * Read-only property
     */
    AppSyncDomainName?: string;

    /**
     * Read-only property
     */
    HostedZoneId?: string;
  };
}
