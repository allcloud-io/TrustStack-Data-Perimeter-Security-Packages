/**
 * TypeScript definitions for AWS::Backup::Framework
 * Generated from CloudFormation Resource Schema
 */

/**
 * Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.
 */
export namespace AWS_Backup_Framework {
  export type FrameworkControlType = {
    /**
     * The name of a control. This name is between 1 and 256 characters.
     */
    ControlName: string;

    /**
     * A list of ParameterName and ParameterValue pairs.
     */
    ControlInputParameters?: ControlInputParameterType[];

    /**
     * The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.
     */
    ControlScope?: Record<string, any>;
  };

  export type ControlInputParameterType = {
    ParameterName: string;

    ParameterValue: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key?: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * Contains detailed information about a framework. Frameworks contain controls, which evaluate and report on your backup events and resources. Frameworks generate daily compliance results.
   */
  export type FrameworkResourceType = {
    /**
     * The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
     * Create-only property
     */
    FrameworkName?: string;

    /**
     * An optional description of the framework with a maximum 1,024 characters.
     */
    FrameworkDescription?: string;

    /**
     * An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource
     * Read-only property
     */
    FrameworkArn?: string;

    /**
     * The deployment status of a framework. The statuses are: `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`
     * Read-only property
     */
    DeploymentStatus?: string;

    /**
     * The date and time that a framework is created, in ISO 8601 representation. The value of CreationTime is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
     */
    FrameworkControls: FrameworkControlType[];

    /**
     * A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. The statuses are:
     * `ACTIVE` when recording is turned on for all resources governed by the framework.
     * `PARTIALLY_ACTIVE` when recording is turned off for at least one resource governed by the framework.
     * `INACTIVE` when recording is turned off for all resources governed by the framework.
     * `UNAVAILABLE` when AWS Backup is unable to validate recording status at this time.
     * Read-only property
     */
    FrameworkStatus?: string;

    /**
     * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
     */
    FrameworkTags?: TagType[];
  };
}
