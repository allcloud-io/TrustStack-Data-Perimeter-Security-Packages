/**
 * TypeScript definitions for AWS::Amplify::Branch
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Amplify::Branch resource creates a new branch within an app.
 */
export namespace AWS_Amplify_Branch {
  export type BackendType = {
    StackArn?: string;
  };

  export type EnvironmentVariableType = {
    Name: string;

    Value: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type BasicAuthConfigType = {
    EnableBasicAuth?: boolean;

    Username: string;

    Password: string;
  };

  /**
   * The AWS::Amplify::Branch resource creates a new branch within an app.
   */
  export type BranchResourceType = {
    /**
     * Create-only property
     */
    AppId: string;

    /**
     * Read-only property
     */
    Arn?: string;

    BasicAuthConfig?: BasicAuthConfigType;

    Backend?: BackendType;

    /**
     * Create-only property
     */
    BranchName: string;

    BuildSpec?: string;

    Description?: string;

    EnableAutoBuild?: boolean;

    EnablePerformanceMode?: boolean;

    EnablePullRequestPreview?: boolean;

    EnvironmentVariables?: EnvironmentVariableType[];

    Framework?: string;

    PullRequestEnvironmentName?: string;

    Stage?: string;

    Tags?: TagType[];
  };
}
