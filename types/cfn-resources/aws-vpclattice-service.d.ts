/**
 * TypeScript definitions for AWS::VpcLattice::Service
 * Generated from CloudFormation Resource Schema
 */

/**
 * A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
 */
export namespace AWS_VpcLattice_Service {
  export type DnsEntryType = {
    DomainName?: string;

    HostedZoneId?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
   */
  export type ServiceResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Default: "NONE"
     */
    AuthType?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    DnsEntry?: DnsEntryType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LastUpdatedAt?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    Status?: string;

    CertificateArn?: string;

    /**
     * Create-only property
     */
    CustomDomainName?: string;

    Tags?: TagType[];
  };
}
