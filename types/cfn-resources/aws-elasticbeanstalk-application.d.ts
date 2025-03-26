/**
 * TypeScript definitions for AWS::ElasticBeanstalk::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::ElasticBeanstalk::Application resource specifies an Elastic Beanstalk application.
 */
export namespace AWS_ElasticBeanstalk_Application {
  export type ApplicationResourceLifecycleConfigType = {
    /**
     * The ARN of an IAM service role that Elastic Beanstalk has permission to assume. The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.
     */
    ServiceRole?: string;

    /**
     * Defines lifecycle settings for application versions.
     */
    VersionLifecycleConfig?: ApplicationVersionLifecycleConfigType;
  };

  export type ApplicationVersionLifecycleConfigType = {
    /**
     * Specify a max age rule to restrict the length of time that application versions are retained for an application.
     */
    MaxAgeRule?: MaxAgeRuleType;

    /**
     * Specify a max count rule to restrict the number of application versions that are retained for an application.
     */
    MaxCountRule?: MaxCountRuleType;
  };

  export type MaxAgeRuleType = {
    /**
     * Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
     */
    DeleteSourceFromS3?: boolean;

    /**
     * Specify true to apply the rule, or false to disable it.
     */
    Enabled?: boolean;

    /**
     * Specify the number of days to retain an application versions.
     */
    MaxAgeInDays?: number;
  };

  export type MaxCountRuleType = {
    /**
     * Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
     */
    DeleteSourceFromS3?: boolean;

    /**
     * Specify true to apply the rule, or false to disable it.
     */
    Enabled?: boolean;

    /**
     * Specify the maximum number of application versions to retain.
     */
    MaxCount?: number;
  };

  /**
   * The AWS::ElasticBeanstalk::Application resource specifies an Elastic Beanstalk application.
   */
  export type ApplicationResourceType = {
    /**
     * A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
     * Create-only property
     */
    ApplicationName?: string;

    /**
     * Your description of the application.
     */
    Description?: string;

    /**
     * Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
     */
    ResourceLifecycleConfig?: ApplicationResourceLifecycleConfigType;
  };
}
