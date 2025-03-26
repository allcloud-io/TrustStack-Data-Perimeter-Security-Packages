/**
 * TypeScript definitions for AWS::ControlTower::EnabledControl
 * Generated from CloudFormation Resource Schema
 */

/**
 * Enables a control on a specified target.
 */
export namespace AWS_ControlTower_EnabledControl {
  export type EnabledControlParameterType = {
    Value: any;

    Key: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.
     */
    Value: string;
  };

  /**
   * Enables a control on a specified target.
   */
  export type EnabledControlResourceType = {
    /**
     * Arn of the control.
     * Create-only property
     */
    ControlIdentifier: string;

    /**
     * Arn for Organizational unit to which the control needs to be applied
     * Create-only property
     */
    TargetIdentifier: string;

    /**
     * Parameters to configure the enabled control behavior.
     */
    Parameters?: EnabledControlParameterType[];

    /**
     * A set of tags to assign to the enabled control.
     */
    Tags?: TagType[];
  };
}
