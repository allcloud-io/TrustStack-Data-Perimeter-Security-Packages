/**
 * TypeScript definitions for AWS::Greengrass::FunctionDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::FunctionDefinition
 */
export namespace AWS_Greengrass_FunctionDefinition {
  export type FunctionDefinitionVersionType = {
    DefaultConfig?: DefaultConfigType;

    Functions: FunctionType[];
  };

  export type DefaultConfigType = {
    Execution: ExecutionType;
  };

  export type FunctionType = {
    FunctionArn: string;

    FunctionConfiguration: FunctionConfigurationType;

    Id: string;
  };

  export type ExecutionType = {
    IsolationMode?: string;

    RunAs?: RunAsType;
  };

  export type FunctionConfigurationType = {
    MemorySize?: number;

    Pinned?: boolean;

    ExecArgs?: string;

    Timeout?: number;

    EncodingType?: string;

    Environment?: EnvironmentType;

    Executable?: string;
  };

  export type RunAsType = {
    Uid?: number;

    Gid?: number;
  };

  export type EnvironmentType = {
    Variables?: Record<string, any>;

    Execution?: ExecutionType;

    ResourceAccessPolicies?: ResourceAccessPolicyType[];

    AccessSysfs?: boolean;
  };

  export type ResourceAccessPolicyType = {
    ResourceId: string;

    Permission?: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::FunctionDefinition
   */
  export type FunctionDefinitionResourceType = {
    /**
     * Read-only property
     */
    LatestVersionArn?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Name: string;

    /**
     * Create-only property
     */
    InitialVersion?: FunctionDefinitionVersionType;

    Tags?: Record<string, any>;
  };
}
