/**
 * TypeScript definitions for AWS::S3::MultiRegionAccessPoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that dynamically routes S3 requests to easily satisfy geographic compliance requirements based on customer-defined routing policies.
 */
export namespace AWS_S3_MultiRegionAccessPoint {
  export type PublicAccessBlockConfigurationType = {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
     * - PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
     * - PUT Object calls fail if the request includes a public ACL.
     * . - PUT Bucket calls fail if the request includes a public ACL.
     * Enabling this setting doesn't affect existing policies or ACLs.
     */
    BlockPublicAcls?: boolean;

    /**
     * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     */
    IgnorePublicAcls?: boolean;

    /**
     * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
     */
    BlockPublicPolicy?: boolean;

    /**
     * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
     * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     */
    RestrictPublicBuckets?: boolean;
  };

  export type RegionType = {
    Bucket: string;

    BucketAccountId?: string;
  };

  /**
   * AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that dynamically routes S3 requests to easily satisfy geographic compliance requirements based on customer-defined routing policies.
   */
  export type MultiRegionAccessPointResourceType = {
    /**
     * The name you want to assign to this Multi Region Access Point.
     * Create-only property
     */
    Name?: string;

    /**
     * The alias is a unique identifier to, and is part of the public DNS name for this Multi Region Access Point
     * Read-only property
     */
    Alias?: string;

    /**
     * The timestamp of the when the Multi Region Access Point is created
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
     * Create-only property
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfigurationType;

    /**
     * The list of buckets that you want to associate this Multi Region Access Point with.
     * Create-only property
     */
    Regions: RegionType[];
  };
}
