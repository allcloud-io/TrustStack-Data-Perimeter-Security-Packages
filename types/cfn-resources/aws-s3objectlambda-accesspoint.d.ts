/**
 * TypeScript definitions for AWS::S3ObjectLambda::AccessPoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3ObjectLambda::AccessPoint resource is an Amazon S3ObjectLambda resource type that you can use to add computation to S3 actions
 */
export namespace AWS_S3ObjectLambda_AccessPoint {
  /**
   * The Public Access Block Configuration is used to block policies that would allow public access to this Object lambda Access Point. All public access to Object lambda Access Points are blocked by default, and any policy that would give public access to them will be also blocked. This behavior cannot be changed for Object lambda Access Points.
   */
  export type PublicAccessBlockConfigurationType = {
    /**
     * Specifies whether Amazon S3 should block public access control lists (ACLs) to this object lambda access point. Setting this element to TRUE causes the following behavior:
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
   * Configuration to be applied to this Object lambda Access Point. It specifies Supporting Access Point, Transformation Configurations. Customers can also set if they like to enable Cloudwatch metrics for accesses to this Object lambda Access Point. Default setting for Cloudwatch metrics is disable.
   */
  export type ObjectLambdaConfigurationType = {
    SupportingAccessPoint: string;

    AllowedFeatures?: string[];

    CloudWatchMetricsEnabled?: boolean;

    TransformationConfigurations: TransformationConfigurationType[];
  };

  /**
   * Configuration to define what content transformation will be applied on which S3 Action.
   */
  export type TransformationConfigurationType = {
    Actions: ActionType[];

    ContentTransformation: Record<string, any>;
  };

  export type AwsLambdaType = {
    FunctionArn: string;

    FunctionPayload?: string;
  };

  export type ActionType = {};

  export type AliasType = {
    /**
     * The status of the Object Lambda alias.
     */
    Status?: string;

    /**
     * The value of the Object Lambda alias.
     */
    Value: string;
  };

  export type PolicyStatusType = {
    /**
     * Specifies whether the Object lambda Access Point Policy is Public or not. Object lambda Access Points are private by default.
     */
    IsPublic?: boolean;
  };

  /**
   * The AWS::S3ObjectLambda::AccessPoint resource is an Amazon S3ObjectLambda resource type that you can use to add computation to S3 actions
   */
  export type AccessPointResourceType = {
    /**
     * The name you want to assign to this Object lambda Access Point.
     * Create-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    Alias?: AliasType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The date and time when the Object lambda Access Point was created.
     * Read-only property
     */
    CreationDate?: string;

    /**
     * The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
     * Read-only property
     */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfigurationType;

    /**
     * Read-only property
     */
    PolicyStatus?: PolicyStatusType;

    /**
     * The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions
     */
    ObjectLambdaConfiguration: ObjectLambdaConfigurationType;
  };
}
