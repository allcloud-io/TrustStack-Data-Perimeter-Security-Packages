/**
 * TypeScript definitions for AWS::ElasticBeanstalk::ApplicationVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 */
export namespace AWS_ElasticBeanstalk_ApplicationVersion {
  export type SourceBundleType = {
    /**
     * The Amazon S3 bucket where the data is located.
     */
    S3Bucket: string;

    /**
     * The Amazon S3 key where the data is located.
     */
    S3Key: string;
  };

  /**
   * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
   */
  export type ApplicationVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the Elastic Beanstalk application that is associated with this application version.
     * Create-only property
     */
    ApplicationName: string;

    /**
     * A description of this application version.
     */
    Description?: string;

    /**
     * The Amazon S3 bucket and key that identify the location of the source bundle for this version.
     * Create-only property
     */
    SourceBundle: SourceBundleType;
  };
}
