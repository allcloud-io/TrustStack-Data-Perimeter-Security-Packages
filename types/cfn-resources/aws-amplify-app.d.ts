/**
 * TypeScript definitions for AWS::Amplify::App
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Amplify::App resource creates Apps in the Amplify Console. An App is a collection of branches.
 */
export namespace AWS_Amplify_App {
  export type AutoBranchCreationConfigType = {
    AutoBranchCreationPatterns?: string[];

    BasicAuthConfig?: BasicAuthConfigType;

    BuildSpec?: string;

    EnableAutoBranchCreation?: boolean;

    EnableAutoBuild?: boolean;

    EnablePerformanceMode?: boolean;

    EnablePullRequestPreview?: boolean;

    EnvironmentVariables?: EnvironmentVariableType[];

    Framework?: string;

    PullRequestEnvironmentName?: string;

    Stage?: string;
  };

  export type BasicAuthConfigType = {
    EnableBasicAuth?: boolean;

    Username?: string;

    Password?: string;
  };

  export type CacheConfigType = {
    Type?: string;
  };

  export type CustomRuleType = {
    Condition?: string;

    Status?: string;

    Target: string;

    Source: string;
  };

  export type EnvironmentVariableType = {
    Name: string;

    Value: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The AWS::Amplify::App resource creates Apps in the Amplify Console. An App is a collection of branches.
   */
  export type AppResourceType = {
    AccessToken?: string;

    /**
     * Read-only property
     */
    AppId?: string;

    /**
     * Read-only property
     */
    AppName?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    AutoBranchCreationConfig?: AutoBranchCreationConfigType;

    BasicAuthConfig?: BasicAuthConfigType;

    BuildSpec?: string;

    CacheConfig?: CacheConfigType;

    CustomHeaders?: string;

    CustomRules?: CustomRuleType[];

    /**
     * Read-only property
     */
    DefaultDomain?: string;

    Description?: string;

    EnableBranchAutoDeletion?: boolean;

    EnvironmentVariables?: EnvironmentVariableType[];

    IAMServiceRole?: string;

    Name: string;

    OauthToken?: string;

    Platform?: string;

    Repository?: string;

    Tags?: TagType[];
  };
}
