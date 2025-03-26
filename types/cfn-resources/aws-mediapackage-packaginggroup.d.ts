/**
 * TypeScript definitions for AWS::MediaPackage::PackagingGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaPackage::PackagingGroup
 */
export namespace AWS_MediaPackage_PackagingGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type AuthorizationType = {
    /**
     * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
     */
    CdnIdentifierSecret: string;

    /**
     * The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.
     */
    SecretsRoleArn: string;
  };

  export type LogConfigurationType = {
    /**
     * Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.
     */
    LogGroupName?: string;
  };

  /**
   * Resource schema for AWS::MediaPackage::PackagingGroup
   */
  export type PackagingGroupResourceType = {
    /**
     * The ID of the PackagingGroup.
     * Create-only property
     */
    Id: string;

    /**
     * The ARN of the PackagingGroup.
     * Read-only property
     */
    Arn?: string;

    /**
     * The fully qualified domain name for Assets in the PackagingGroup.
     * Read-only property
     */
    DomainName?: string;

    /**
     * CDN Authorization
     */
    Authorization?: AuthorizationType;

    /**
     * A collection of tags associated with a resource
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The configuration parameters for egress access logging.
     */
    EgressAccessLogs?: LogConfigurationType;
  };
}
