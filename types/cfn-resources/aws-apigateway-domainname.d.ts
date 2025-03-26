/**
 * TypeScript definitions for AWS::ApiGateway::DomainName
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApiGateway::DomainName.
 */
export namespace AWS_ApiGateway_DomainName {
  export type MutualTlsAuthenticationType = {
    TruststoreVersion?: string;

    TruststoreUri?: string;
  };

  export type EndpointConfigurationType = {
    Types?: string[];
  };

  export type TagType = {
    Value?: string;

    Key?: string;
  };

  /**
   * Resource Type definition for AWS::ApiGateway::DomainName.
   */
  export type DomainNameResourceType = {
    MutualTlsAuthentication?: MutualTlsAuthenticationType;

    OwnershipVerificationCertificateArn?: string;

    /**
     * Read-only property
     */
    RegionalHostedZoneId?: string;

    /**
     * Read-only property
     */
    RegionalDomainName?: string;

    /**
     * Create-only property
     */
    DomainName?: string;

    SecurityPolicy?: string;

    /**
     * Read-only property
     */
    DistributionHostedZoneId?: string;

    EndpointConfiguration?: EndpointConfigurationType;

    /**
     * Read-only property
     */
    DistributionDomainName?: string;

    RegionalCertificateArn?: string;

    Tags?: TagType[];

    CertificateArn?: string;
  };
}
