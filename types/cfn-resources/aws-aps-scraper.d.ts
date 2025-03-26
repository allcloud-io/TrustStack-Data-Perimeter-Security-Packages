/**
 * TypeScript definitions for AWS::APS::Scraper
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::APS::Scraper
 */
export namespace AWS_APS_Scraper {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Scraper configuration
   */
  export type ScrapeConfigurationType = {
    /**
     * Prometheus compatible scrape configuration in base64 encoded blob format
     */
    ConfigurationBlob?: string;
  };

  /**
   * Role configuration
   */
  export type RoleConfigurationType = {
    /**
     * IAM Role in source account
     */
    SourceRoleArn?: string;

    /**
     * IAM Role in the target account
     */
    TargetRoleArn?: string;
  };

  /**
   * Scraper metrics source
   */
  export type SourceType = {
    /**
     * Configuration for EKS metrics source
     */
    EksConfiguration?: Record<string, any>;
  };

  /**
   * Scraper metrics destination
   */
  export type DestinationType = {
    /**
     * Configuration for Amazon Managed Prometheus metrics destination
     */
    AmpConfiguration?: Record<string, any>;
  };

  /**
   * ID of a security group
   */
  export type SecurityGroupIdType = {};

  /**
   * ID of a subnet
   */
  export type SubnetIdType = {};

  /**
   * Resource Type definition for AWS::APS::Scraper
   */
  export type ScraperResourceType = {
    /**
     * Required to identify a specific scraper.
     * Read-only property
     */
    ScraperId?: string;

    /**
     * Scraper alias.
     */
    Alias?: string;

    /**
     * Scraper ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * IAM role ARN for the scraper.
     * Read-only property
     */
    RoleArn?: string;

    ScrapeConfiguration: ScrapeConfigurationType;

    RoleConfiguration?: RoleConfigurationType;

    /**
     * Create-only property
     */
    Source: SourceType;

    Destination: DestinationType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
