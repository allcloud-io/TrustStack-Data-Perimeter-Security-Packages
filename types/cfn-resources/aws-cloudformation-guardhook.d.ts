/**
 * TypeScript definitions for AWS::CloudFormation::GuardHook
 * Generated from CloudFormation Resource Schema
 */

/**
 * This is a CloudFormation resource for activating the first-party AWS::Hooks::GuardHook.
 */
export namespace AWS_CloudFormation_GuardHook {
  /**
   * S3 Source Location for the Guard files.
   */
  export type S3LocationType = {
    /**
     * S3 uri of Guard files.
     */
    Uri: string;

    /**
     * S3 object version
     */
    VersionId?: string;
  };

  /**
   * IAM Role ARN
   */
  export type RoleType = {};

  /**
   * CloudFormation Stack name
   */
  export type StackNameType = {};

  /**
   * Which operations should this Hook run against? Resource changes, stacks or change sets.
   */
  export type TargetOperationType = {};

  /**
   * Type name of hook target. Hook targets are the destination where hooks will be invoked against.
   */
  export type TargetNameType = {};

  /**
   * Target actions are the type of operation hooks will be executed at.
   */
  export type ActionType = {};

  /**
   * Invocation points are the point in provisioning workflow where hooks will be executed.
   */
  export type InvocationPointType = {};

  /**
   * Hook targets are the destination where hooks will be invoked against.
   */
  export type HookTargetType = {
    TargetName: TargetNameType;

    Action: ActionType;

    InvocationPoint: InvocationPointType;
  };

  /**
   * This is a CloudFormation resource for activating the first-party AWS::Hooks::GuardHook.
   */
  export type GuardHookResourceType = {
    RuleLocation: S3LocationType;

    /**
     * S3 Bucket where the guard validate report will be uploaded to
     */
    LogBucket?: string;

    /**
     * Attribute to specify which stacks this hook applies to or should get invoked for
     * Default: "DISABLED"
     */
    HookStatus: string;

    /**
     * Which operations should this Hook run against? Resource changes, stacks or change sets.
     */
    TargetOperations: TargetOperationType[];

    /**
     * Attribute to specify CloudFormation behavior on hook failure.
     * Default: "WARN"
     */
    FailureMode: string;

    /**
     * Attribute to specify which targets should invoke the hook
     */
    TargetFilters?: Record<string, any>;

    /**
     * Filters to allow hooks to target specific stack attributes
     */
    StackFilters?: Record<string, any>;

    /**
     * The typename alias for the hook.
     * Create-only property
     */
    Alias: string;

    /**
     * The Amazon Resource Name (ARN) of the activated hook
     * Read-only property
     */
    HookArn?: string;

    /**
     * The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.
     * Create-only property
     */
    ExecutionRole: RoleType;

    Options?: any;
  };
}
