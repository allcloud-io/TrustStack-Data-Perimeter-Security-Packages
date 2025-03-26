/**
 * TypeScript definitions for AWS::ElasticBeanstalk::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ElasticBeanstalk::Environment
 */
export namespace AWS_ElasticBeanstalk_Environment {
  export type TierType = {
    /**
     * The type of this environment tier.
     */
    Type?: string;

    /**
     * The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.
     */
    Version?: string;

    /**
     * The name of this environment tier.
     */
    Name?: string;
  };

  export type OptionSettingType = {
    /**
     * A unique resource name for the option setting. Use it for a time–based scaling configuration option.
     */
    ResourceName?: string;

    /**
     * The current value for the configuration option.
     */
    Value?: string;

    /**
     * A unique namespace that identifies the option's associated AWS resource.
     */
    Namespace: string;

    /**
     * The name of the configuration option.
     */
    OptionName: string;
  };

  export type TagType = {
    /**
     * The value for the tag.
     */
    Value: string;

    /**
     * The key name of the tag.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::ElasticBeanstalk::Environment
   */
  export type EnvironmentResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the custom platform to use with the environment.
     */
    PlatformArn?: string;

    /**
     * The name of the application that is associated with this environment.
     * Create-only property
     */
    ApplicationName: string;

    /**
     * Your description for this environment.
     */
    Description?: string;

    /**
     * A unique name for the environment.
     * Create-only property
     */
    EnvironmentName?: string;

    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
     */
    OperationsRole?: string;

    /**
     * Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
     */
    Tier?: TierType;

    /**
     * The name of the application version to deploy.
     */
    VersionLabel?: string;

    /**
     * Read-only property
     */
    EndpointURL?: string;

    /**
     * Key-value pairs defining configuration options for this environment, such as the instance type.
     */
    OptionSettings?: OptionSettingType[];

    /**
     * The name of the Elastic Beanstalk configuration template to use with the environment.
     */
    TemplateName?: string;

    /**
     * The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.
     * Create-only property
     */
    SolutionStackName?: string;

    /**
     * If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
     * Create-only property
     */
    CNAMEPrefix?: string;

    /**
     * Specifies the tags applied to resources in the environment.
     */
    Tags?: TagType[];
  };
}
