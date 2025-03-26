/**
 * TypeScript definitions for AWS::ElasticLoadBalancingV2::TrustStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStore
 */
export namespace AWS_ElasticLoadBalancingV2_TrustStore {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStore
   */
  export type TrustStoreResourceType = {
    /**
     * The name of the trust store.
     * Create-only property
     */
    Name?: string;

    /**
     * The name of the S3 bucket to fetch the CA certificate bundle from.
     */
    CaCertificatesBundleS3Bucket?: string;

    /**
     * The name of the S3 object to fetch the CA certificate bundle from.
     */
    CaCertificatesBundleS3Key?: string;

    /**
     * The version of the S3 bucket that contains the CA certificate bundle.
     */
    CaCertificatesBundleS3ObjectVersion?: string;

    /**
     * The status of the trust store, could be either of ACTIVE or CREATING.
     * Read-only property
     */
    Status?: string;

    /**
     * The number of certificates associated with the trust store.
     * Read-only property
     */
    NumberOfCaCertificates?: number;

    /**
     * The tags to assign to the trust store.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the trust store.
     * Read-only property
     */
    TrustStoreArn?: string;
  };
}
