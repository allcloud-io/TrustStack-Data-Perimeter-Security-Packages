/**
 * TypeScript definitions for AWS::Greengrass::FunctionDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::FunctionDefinitionVersion
 */
export namespace AWS_Greengrass_FunctionDefinitionVersion {
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
   * Resource Type definition for AWS::Greengrass::FunctionDefinitionVersion
   */
  export type FunctionDefinitionVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    DefaultConfig?: DefaultConfigType;

    /**
     * Create-only property
     */
    Functions: FunctionType[];

    /**
     * Create-only property
     */
    FunctionDefinitionId: string;
  };
}
