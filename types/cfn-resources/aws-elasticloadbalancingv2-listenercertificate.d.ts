/**
 * TypeScript definitions for AWS::ElasticLoadBalancingV2::ListenerCertificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::ListenerCertificate
 */
export namespace AWS_ElasticLoadBalancingV2_ListenerCertificate {
  export type CertificateType = {
    CertificateArn?: string;
  };

  /**
   * Resource Type definition for AWS::ElasticLoadBalancingV2::ListenerCertificate
   */
  export type ListenerCertificateResourceType = {
    /**
     * Create-only property
     */
    ListenerArn: string;

    Certificates: CertificateType[];

    /**
     * Read-only property
     */
    Id?: string;
  };
}
