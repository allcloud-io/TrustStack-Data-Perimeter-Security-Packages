/**
 * TypeScript definitions for AWS::APS::Workspace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::APS::Workspace
 */
export namespace AWS_APS_Workspace {
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
   * Logging configuration
   */
  export type LoggingConfigurationType = {
    /**
     * CloudWatch log group ARN
     */
    LogGroupArn?: string;
  };

  /**
   * Resource Type definition for AWS::APS::Workspace
   */
  export type WorkspaceResourceType = {
    /**
     * Required to identify a specific APS Workspace.
     * Read-only property
     */
    WorkspaceId?: string;

    /**
     * AMP Workspace alias.
     */
    Alias?: string;

    /**
     * Workspace arn.
     * Read-only property
     */
    Arn?: string;

    /**
     * The AMP Workspace alert manager definition data
     */
    AlertManagerDefinition?: string;

    /**
     * AMP Workspace prometheus endpoint
     * Read-only property
     */
    PrometheusEndpoint?: string;

    LoggingConfiguration?: LoggingConfigurationType;

    /**
     * KMS Key ARN used to encrypt and decrypt AMP workspace data.
     * Create-only property
     */
    KmsKeyArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
