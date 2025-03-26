/**
 * TypeScript definitions for AWS::ElasticLoadBalancingV2::TrustStoreRevocation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStoreRevocation
 */
export namespace AWS_ElasticLoadBalancingV2_TrustStoreRevocation {
  export type RevocationIdType = {};

  export type RevocationContentType = {
    S3Bucket?: string;

    S3Key?: string;

    S3ObjectVersion?: string;

    RevocationType?: string;
  };

  export type TrustStoreRevocationType = {
    TrustStoreArn?: string;

    RevocationId?: string;

    RevocationType?: string;

    NumberOfRevokedEntries?: number;
  };

  /**
   * Resource Type definition for AWS::ElasticLoadBalancingV2::TrustStoreRevocation
   */
  export type TrustStoreRevocationResourceType = {
    /**
     * The attributes required to create a trust store revocation.
     * Create-only property
     */
    RevocationContents?: RevocationContentType[];

    /**
     * The Amazon Resource Name (ARN) of the trust store.
     * Create-only property
     */
    TrustStoreArn?: string;

    /**
     * The ID associated with the revocation.
     * Read-only property
     */
    RevocationId?: number;

    /**
     * The data associated with a trust store revocation
     * Read-only property
     */
    TrustStoreRevocations?: TrustStoreRevocationType[];
  };
}
