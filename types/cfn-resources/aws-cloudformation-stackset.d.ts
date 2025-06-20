/**
 * TypeScript definitions for AWS::CloudFormation::StackSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * StackSet as a resource provides one-click experience for provisioning a StackSet and StackInstances
 */
export namespace AWS_CloudFormation_StackSet {
  /**
   * Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation StackSet.
   */
  export type TagType = {
    /**
     * A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.
     */
    Key: string;

    /**
     * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
     */
    Value: string;
  };

  export type AutoDeploymentType = {
    /**
     * If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
     */
    Enabled?: boolean;

    /**
     * If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True.
     */
    RetainStacksOnAccountRemoval?: boolean;
  };

  /**
   * AWS account that you want to create stack instances in the specified Region(s) for.
   */
  export type AccountType = {};

  export type RegionType = {};

  export type OrganizationalUnitIdType = {};

  export type CapabilityType = {};

  /**
   * The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time
   */
  export type RegionConcurrencyTypeType = {};

  /**
   * Specifies how the concurrency level behaves during the operation execution.
   */
  export type ConcurrencyModeType = {};

  /**
   * When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
   */
  export type ActiveType = {};

  /**
   * The user-specified preferences for how AWS CloudFormation performs a stack set operation.
   */
  export type OperationPreferencesType = {
    FailureToleranceCount?: number;

    FailureTolerancePercentage?: number;

    MaxConcurrentCount?: number;

    MaxConcurrentPercentage?: number;

    RegionOrder?: RegionType[];

    RegionConcurrencyType?: RegionConcurrencyTypeType;

    ConcurrencyMode?: ConcurrencyModeType;
  };

  export type ParameterType = {
    /**
     * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
     */
    ParameterKey: string;

    /**
     * The input value associated with the parameter.
     */
    ParameterValue: string;
  };

  /**
   *  The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
   */
  export type DeploymentTargetsType = {
    /**
     * AWS accounts that you want to create stack instances in the specified Region(s) for.
     */
    Accounts?: AccountType[];

    /**
     * Returns the value of the AccountsUrl property.
     */
    AccountsUrl?: string;

    /**
     * The organization root ID or organizational unit (OU) IDs to which StackSets deploys.
     */
    OrganizationalUnitIds?: OrganizationalUnitIdType[];

    /**
     * The filter type you want to apply on organizational units and accounts.
     */
    AccountFilterType?: string;
  };

  /**
   * Stack instances in some specific accounts and Regions.
   */
  export type StackInstancesType = {
    DeploymentTargets: DeploymentTargetsType;

    /**
     * The names of one or more Regions where you want to create stack instances using the specified AWS account(s).
     */
    Regions: RegionType[];

    /**
     * A list of stack set parameters whose values you want to override in the selected stack instances.
     */
    ParameterOverrides?: ParameterType[];
  };

  /**
   * StackSet as a resource provides one-click experience for provisioning a StackSet and StackInstances
   */
  export type StackSetResourceType = {
    /**
     * The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
     * Create-only property
     */
    StackSetName: string;

    /**
     * The ID of the stack set that you're creating.
     * Read-only property
     */
    StackSetId?: string;

    /**
     * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
     */
    AdministrationRoleARN?: string;

    /**
     * Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED.
     */
    AutoDeployment?: AutoDeploymentType;

    /**
     * In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.
     */
    Capabilities?: CapabilityType[];

    /**
     * A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
     */
    Description?: string;

    /**
     * The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.
     */
    ExecutionRoleName?: string;

    OperationPreferences?: OperationPreferencesType;

    /**
     * A group of stack instances with parameters in some specific accounts and regions.
     */
    StackInstancesGroup?: StackInstancesType[];

    /**
     * The input parameters for the stack set template.
     */
    Parameters?: ParameterType[];

    /**
     * Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
     * Create-only property
     */
    PermissionModel: string;

    /**
     * The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
     */
    Tags?: TagType[];

    /**
     * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
     */
    TemplateBody?: string;

    /**
     * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.
     */
    TemplateURL?: string;

    /**
     * Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
     */
    CallAs?: string;

    /**
     * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
     */
    ManagedExecution?: Record<string, any>;
  };
}
