/**
 * TypeScript definitions for AWS::Lightsail::LoadBalancerTlsCertificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate
 */
export namespace AWS_Lightsail_LoadBalancerTlsCertificate {
  /**
   * Resource Type definition for AWS::Lightsail::LoadBalancerTlsCertificate
   */
  export type LoadBalancerTlsCertificateResourceType = {
    /**
     * The name of your load balancer.
     * Create-only property
     */
    LoadBalancerName: string;

    /**
     * The SSL/TLS certificate name.
     * Create-only property
     */
    CertificateName: string;

    /**
     * The domain name (e.g., example.com ) for your SSL/TLS certificate.
     * Create-only property
     */
    CertificateDomainName: string;

    /**
     * An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.
     * Create-only property
     */
    CertificateAlternativeNames?: string[];

    /**
     * Read-only property
     */
    LoadBalancerTlsCertificateArn?: string;

    /**
     * When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
     */
    IsAttached?: boolean;

    /**
     * A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.
     */
    HttpsRedirectionEnabled?: boolean;

    /**
     * The validation status of the SSL/TLS certificate.
     * Read-only property
     */
    Status?: string;
  };
}
