/**
 * TypeScript definitions for AWS::SecurityHub::Standard
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SecurityHub::Standard` resource specifies the enablement of a security standard. The standard is identified by the `StandardsArn` property. To view a list of ASH standards and their Amazon Resource Names (ARNs), use the DescribeStandards API operation.
 * You must create a separate `AWS::SecurityHub::Standard` resource for each standard that you want to enable.
 * For more information about ASH standards, see standards reference in the *User Guide*.
 */
export namespace AWS_SecurityHub_Standard {
  /**
   * Provides details about an individual security control. For a list of ASH controls, see controls reference in the *User Guide*.
   */
  export type StandardsControlType = {
    /**
     * The Amazon Resource Name (ARN) of the control.
     */
    StandardsControlArn: string;

    /**
     * A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required.
     */
    Reason?: string;
  };

  /**
   * The `AWS::SecurityHub::Standard` resource specifies the enablement of a security standard. The standard is identified by the `StandardsArn` property. To view a list of ASH standards and their Amazon Resource Names (ARNs), use the DescribeStandards API operation.
   * You must create a separate `AWS::SecurityHub::Standard` resource for each standard that you want to enable.
   * For more information about ASH standards, see standards reference in the *User Guide*.
   */
  export type StandardResourceType = {
    /**
     * Read-only property
     */
    StandardsSubscriptionArn?: string;

    /**
     * The ARN of the standard that you want to enable. To view a list of available ASH standards and their ARNs, use the DescribeStandards API operation.
     * Create-only property
     */
    StandardsArn: string;

    /**
     * Specifies which controls are to be disabled in a standard.
     * *Maximum*: `100`
     */
    DisabledStandardsControls?: StandardsControlType[];
  };
}
