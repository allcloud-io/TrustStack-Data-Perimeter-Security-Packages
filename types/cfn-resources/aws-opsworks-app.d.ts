/**
 * TypeScript definitions for AWS::OpsWorks::App
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorks::App
 */
export namespace AWS_OpsWorks_App {
  export type SourceType = {
    Password?: string;

    Revision?: string;

    SshKey?: string;

    Type?: string;

    Url?: string;

    Username?: string;
  };

  export type EnvironmentVariableType = {
    Key: string;

    Secure?: boolean;

    Value: string;
  };

  export type DataSourceType = {
    Arn?: string;

    DatabaseName?: string;

    Type?: string;
  };

  export type SslConfigurationType = {
    Certificate?: string;

    Chain?: string;

    PrivateKey?: string;
  };

  /**
   * Resource Type definition for AWS::OpsWorks::App
   */
  export type AppResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    AppSource?: SourceType;

    Attributes?: Record<string, any>;

    DataSources?: DataSourceType[];

    Description?: string;

    Domains?: string[];

    EnableSsl?: boolean;

    Environment?: EnvironmentVariableType[];

    Name: string;

    /**
     * Create-only property
     */
    Shortname?: string;

    SslConfiguration?: SslConfigurationType;

    /**
     * Create-only property
     */
    StackId: string;

    Type: string;
  };
}
