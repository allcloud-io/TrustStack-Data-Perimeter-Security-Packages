/**
 * TypeScript definitions for AWS::MediaPackage::Asset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaPackage::Asset
 */
export namespace AWS_MediaPackage_Asset {
  /**
   * The endpoint URL used to access an Asset using one PackagingConfiguration.
   */
  export type EgressEndpointType = {
    /**
     * The ID of the PackagingConfiguration being applied to the Asset.
     */
    PackagingConfigurationId: string;

    /**
     * The URL of the parent manifest for the repackaged Asset.
     */
    Url: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::MediaPackage::Asset
   */
  export type AssetResourceType = {
    /**
     * The ARN of the Asset.
     * Read-only property
     */
    Arn?: string;

    /**
     * The time the Asset was initially submitted for Ingest.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The list of egress endpoints available for the Asset.
     */
    EgressEndpoints?: EgressEndpointType[];

    /**
     * The unique identifier for the Asset.
     */
    Id: string;

    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId: string;

    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: string;

    /**
     * ARN of the source object in S3.
     */
    SourceArn: string;

    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    SourceRoleArn: string;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
