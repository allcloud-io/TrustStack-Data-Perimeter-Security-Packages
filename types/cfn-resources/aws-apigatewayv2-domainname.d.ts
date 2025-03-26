/**
 * TypeScript definitions for AWS::ApiGatewayV2::DomainName
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::DomainName` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
 * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see Set up Custom Domain Name for an API in API Gateway in the *API Gateway Developer Guide*.
 */
export namespace AWS_ApiGatewayV2_DomainName {
  /**
   * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
   */
  export type MutualTlsAuthenticationType = {
    /**
     * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
     */
    TruststoreVersion?: string;

    /**
     * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
     */
    TruststoreUri?: string;
  };

  /**
   * The `DomainNameConfiguration` property type specifies the configuration for an API's domain name.
   * `DomainNameConfiguration` is a property of the AWS::ApiGatewayV2::DomainName resource.
   */
  export type DomainNameConfigurationType = {
    /**
     * The Amazon resource name (ARN) for the public certificate issued by ACMlong. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
     */
    OwnershipVerificationCertificateArn?: string;

    /**
     * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are `TLS_1_0` and `TLS_1_2`.
     */
    SecurityPolicy?: string;

    /**
     * The endpoint type.
     */
    EndpointType?: string;

    /**
     * The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
     */
    CertificateName?: string;

    /**
     * An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
     */
    CertificateArn?: string;
  };

  /**
   * The `AWS::ApiGatewayV2::DomainName` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
   * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see Set up Custom Domain Name for an API in API Gateway in the *API Gateway Developer Guide*.
   */
  export type DomainNameResourceType = {
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     */
    MutualTlsAuthentication?: MutualTlsAuthenticationType;

    /**
     * Read-only property
     */
    RegionalHostedZoneId?: string;

    /**
     * Read-only property
     */
    RegionalDomainName?: string;

    /**
     * The custom domain name for your API in Amazon API Gateway. Uppercase letters and the underscore (`_`) character are not supported.
     * Create-only property
     */
    DomainName: string;

    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurationType[];

    /**
     * The collection of tags associated with a domain name.
     */
    Tags?: Record<string, any>;
  };
}
