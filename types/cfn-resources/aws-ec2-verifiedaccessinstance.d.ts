/**
 * TypeScript definitions for AWS::EC2::VerifiedAccessInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::VerifiedAccessInstance resource creates an AWS EC2 Verified Access Instance.
 */
export namespace AWS_EC2_VerifiedAccessInstance {
  /**
   * A Verified Access Trust Provider.
   */
  export type VerifiedAccessTrustProviderType = {
    /**
     * The ID of the trust provider.
     */
    VerifiedAccessTrustProviderId?: string;

    /**
     * The description of trust provider.
     */
    Description?: string;

    /**
     * The type of trust provider (user- or device-based).
     */
    TrustProviderType?: string;

    /**
     * The type of user-based trust provider.
     */
    UserTrustProviderType?: string;

    /**
     * The type of device-based trust provider.
     */
    DeviceTrustProviderType?: string;
  };

  /**
   * The ID of the AWS Verified Access trust provider.
   */
  export type VerifiedAccessTrustProviderIdType = {};

  /**
   * The configuration options for AWS Verified Access instances.
   */
  export type VerifiedAccessLogsType = {
    /**
     * Select log version for Verified Access logs.
     */
    LogVersion?: string;

    /**
     * Include claims from trust providers in Verified Access logs.
     */
    IncludeTrustContext?: boolean;

    /**
     * Sends Verified Access logs to CloudWatch Logs.
     */
    CloudWatchLogs?: Record<string, any>;

    /**
     * Sends Verified Access logs to Kinesis.
     */
    KinesisDataFirehose?: Record<string, any>;

    /**
     * Sends Verified Access logs to Amazon S3.
     */
    S3?: Record<string, any>;
  };

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
   * The value of the name server
   */
  export type NameserverType = {};

  /**
   * The AWS::EC2::VerifiedAccessInstance resource creates an AWS EC2 Verified Access Instance.
   */
  export type VerifiedAccessInstanceResourceType = {
    /**
     * The ID of the AWS Verified Access instance.
     * Read-only property
     */
    VerifiedAccessInstanceId?: string;

    /**
     * AWS Verified Access trust providers.
     */
    VerifiedAccessTrustProviders?: VerifiedAccessTrustProviderType[];

    /**
     * The IDs of the AWS Verified Access trust providers.
     */
    VerifiedAccessTrustProviderIds?: VerifiedAccessTrustProviderIdType[];

    /**
     * Time this Verified Access Instance was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Time this Verified Access Instance was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * A description for the AWS Verified Access instance.
     */
    Description?: string;

    /**
     * The configuration options for AWS Verified Access instances.
     */
    LoggingConfigurations?: VerifiedAccessLogsType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Indicates whether FIPS is enabled
     */
    FipsEnabled?: boolean;

    /**
     * Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com)
     */
    CidrEndpointsCustomSubDomain?: string;

    /**
     * Property to represent the name servers assoicated with the domain that AVA manages (say, ['ns1.amazonaws.com', 'ns2.amazonaws.com', 'ns3.amazonaws.com', 'ns4.amazonaws.com']).
     * Read-only property
     */
    CidrEndpointsCustomSubDomainNameServers?: NameserverType[];
  };
}
