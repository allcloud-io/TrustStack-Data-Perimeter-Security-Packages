/**
 * TypeScript definitions for AWS::IAM::AccessKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::AccessKey
 */
export namespace AWS_IAM_AccessKey {
  /**
   * Resource Type definition for AWS::IAM::AccessKey
   */
  export type AccessKeyResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    SecretAccessKey?: string;

    /**
     * Create-only property
     */
    Serial?: number;

    Status?: string;

    /**
     * Create-only property
     */
    UserName: string;
  };
}
