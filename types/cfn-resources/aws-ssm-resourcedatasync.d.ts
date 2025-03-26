/**
 * TypeScript definitions for AWS::SSM::ResourceDataSync
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSM::ResourceDataSync
 */
export namespace AWS_SSM_ResourceDataSync {
  export type S3DestinationType = {
    KMSKeyArn?: string;

    BucketPrefix?: string;

    BucketName: string;

    BucketRegion: string;

    SyncFormat: string;
  };

  export type SyncSourceType = {
    IncludeFutureRegions?: boolean;

    SourceRegions: string[];

    SourceType: string;

    AwsOrganizationsSource?: AwsOrganizationsSourceType;
  };

  export type AwsOrganizationsSourceType = {
    OrganizationalUnits?: string[];

    OrganizationSourceType: string;
  };

  /**
   * Resource Type definition for AWS::SSM::ResourceDataSync
   */
  export type ResourceDataSyncResourceType = {
    /**
     * Create-only property
     */
    S3Destination?: S3DestinationType;

    /**
     * Create-only property
     */
    KMSKeyArn?: string;

    SyncSource?: SyncSourceType;

    /**
     * Create-only property
     */
    BucketName?: string;

    /**
     * Create-only property
     */
    BucketRegion?: string;

    /**
     * Create-only property
     */
    SyncFormat?: string;

    /**
     * Create-only property
     */
    SyncName: string;

    /**
     * Create-only property
     */
    SyncType?: string;

    /**
     * Create-only property
     */
    BucketPrefix?: string;
  };
}
