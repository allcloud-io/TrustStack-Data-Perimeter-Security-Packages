/**
 * TypeScript definitions for AWS::SecurityLake::AwsLogSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SecurityLake::AwsLogSource
 */
export namespace AWS_SecurityLake_AwsLogSource {
  /**
   * Resource Type definition for AWS::SecurityLake::AwsLogSource
   */
  export type AwsLogSourceResourceType = {
    /**
     * AWS account where you want to collect logs from.
     */
    Accounts?: string[];

    /**
     * The ARN for the data lake.
     * Create-only property
     */
    DataLakeArn: string;

    /**
     * The name for a AWS source. This must be a Regionally unique value.
     * Create-only property
     */
    SourceName: string;

    /**
     * The version for a AWS source. This must be a Regionally unique value.
     * Create-only property
     */
    SourceVersion: string;
  };
}
