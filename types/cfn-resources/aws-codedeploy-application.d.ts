/**
 * TypeScript definitions for AWS::CodeDeploy::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application
 */
export namespace AWS_CodeDeploy_Application {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * The AWS::CodeDeploy::Application resource creates an AWS CodeDeploy application
   */
  export type ApplicationResourceType = {
    /**
     * A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
     * Create-only property
     */
    ApplicationName?: string;

    /**
     * The compute platform that CodeDeploy deploys the application to.
     * Create-only property
     */
    ComputePlatform?: string;

    /**
     * The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
     */
    Tags?: TagType[];
  };
}
