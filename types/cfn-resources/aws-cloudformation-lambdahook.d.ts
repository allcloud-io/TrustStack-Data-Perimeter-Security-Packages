/**
 * TypeScript definitions for AWS::CloudFormation::LambdaHook
 * Generated from CloudFormation Resource Schema
 */

/**
 * This is a CloudFormation resource for the first-party AWS::Hooks::LambdaHook.
 */
export namespace AWS_CloudFormation_LambdaHook {
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
   * This is a CloudFormation resource for the first-party AWS::Hooks::LambdaHook.
   */
  export type LambdaHookResourceType = {
    /**
     * Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.
     */
    LambdaFunction: string;

    /**
     * Attribute to specify which stacks this hook applies to or should get invoked for
     * Default: "ENABLED"
     */
    HookStatus: string;

    /**
     * Which operations should this Hook run against? Resource changes, stacks or change sets.
     */
    TargetOperations: TargetOperationType[];

    /**
     * Attribute to specify CloudFormation behavior on hook failure.
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
     * The execution role ARN assumed by Hooks to invoke Lambda.
     */
    ExecutionRole: RoleType;
  };
}
