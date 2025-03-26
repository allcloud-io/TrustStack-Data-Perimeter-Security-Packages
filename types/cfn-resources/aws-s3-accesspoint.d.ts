/**
 * TypeScript definitions for AWS::S3::AccessPoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3::AccessPoint resource is an Amazon S3 resource type that you can use to access buckets.
 */
export namespace AWS_S3_AccessPoint {
  /**
   * The Virtual Private Cloud (VPC) configuration for a bucket access point.
   */
  export type VpcConfigurationType = {
    /**
     * If this field is specified, this access point will only allow connections from the specified VPC ID.
     */
    VpcId?: string;
  };

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

  /**
   * the Amazon Resource Name (ARN) of the specified accesspoint.
   */
  export type ArnType = {};

  /**
   * The AWS::S3::AccessPoint resource is an Amazon S3 resource type that you can use to access buckets.
   */
  export type AccessPointResourceType = {
    /**
     * The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.
     * Create-only property
     */
    Name?: string;

    /**
     * The alias of this Access Point. This alias can be used for compatibility purposes with other AWS services and third-party applications.
     * Read-only property
     */
    Alias?: string;

    /**
     * The name of the bucket that you want to associate this Access Point with.
     * Create-only property
     */
    Bucket: string;

    /**
     * The AWS account ID associated with the S3 bucket associated with this access point.
     * Create-only property
     */
    BucketAccountId?: string;

    /**
     * If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).
     * Create-only property
     */
    VpcConfiguration?: VpcConfigurationType;

    /**
     * The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfigurationType;

    /**
     * The Access Point Policy you want to apply to this access point.
     */
    Policy?: Record<string, any>;

    /**
     * Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.
     * Read-only property
     */
    NetworkOrigin?: string;

    /**
     * The Amazon Resource Name (ARN) of the specified accesspoint.
     * Read-only property
     */
    Arn?: ArnType;
  };
}
