/**
 * TypeScript definitions for AWS::IoT::DomainConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create and manage a Domain Configuration
 */
export namespace AWS_IoT_DomainConfiguration {
  export type AuthorizerConfigType = {
    AllowAuthorizerOverride?: boolean;

    DefaultAuthorizerName?: string;
  };

  export type ServerCertificateConfigType = {
    EnableOCSPCheck?: boolean;

    OcspLambdaArn?: string;

    OcspAuthorizedResponderArn?: string;
  };

  export type ServerCertificateSummaryType = {
    ServerCertificateArn?: string;

    ServerCertificateStatus?: string;

    ServerCertificateStatusDetail?: string;
  };

  export type TlsConfigType = {
    SecurityPolicy?: string;
  };

  export type ClientCertificateConfigType = {
    ClientCertificateCallbackArn?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Create and manage a Domain Configuration
   */
  export type DomainConfigurationResourceType = {
    /**
     * Create-only property
     */
    DomainConfigurationName?: string;

    AuthorizerConfig?: AuthorizerConfigType;

    /**
     * Create-only property
     */
    DomainName?: string;

    /**
     * Create-only property
     */
    ServerCertificateArns?: string[];

    /**
     * Create-only property
     */
    ServiceType?: string;

    /**
     * Create-only property
     */
    ValidationCertificateArn?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    DomainConfigurationStatus?: string;

    /**
     * Read-only property
     */
    DomainType?: string;

    ServerCertificateConfig?: ServerCertificateConfigType;

    /**
     * Read-only property
     */
    ServerCertificates?: ServerCertificateSummaryType[];

    TlsConfig?: TlsConfigType;

    AuthenticationType?: string;

    ApplicationProtocol?: string;

    ClientCertificateConfig?: ClientCertificateConfigType;

    Tags?: TagType[];
  };
}
