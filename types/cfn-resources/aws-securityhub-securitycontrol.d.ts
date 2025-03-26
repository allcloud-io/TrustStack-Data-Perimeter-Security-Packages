/**
 * TypeScript definitions for AWS::SecurityHub::SecurityControl
 * Generated from CloudFormation Resource Schema
 */

/**
 * A security control in Security Hub describes a security best practice related to a specific resource.
 */
export namespace AWS_SecurityHub_SecurityControl {
  export type NonEmptyStringType = {};

  export type NonEmptyStringListType = {};

  export type IntegerListType = {};

  export type ParametersType = {};

  export type ParameterConfigurationType = {
    ValueType: string;

    Value?: ParameterValueType;
  };

  export type ParameterValueType = {
    /**
     * A control parameter that is a boolean.
     */
    Boolean?: boolean;

    /**
     * A control parameter that is a double.
     */
    Double?: number;

    /**
     * A control parameter that is a enum.
     */
    Enum?: NonEmptyStringType;

    /**
     * A control parameter that is a list of enums.
     */
    EnumList?: NonEmptyStringListType;

    /**
     * A control parameter that is a integer.
     */
    Integer?: number;

    /**
     * A control parameter that is a list of integers.
     */
    IntegerList?: IntegerListType;

    /**
     * A control parameter that is a string.
     */
    String?: NonEmptyStringType;

    /**
     * A control parameter that is a list of strings.
     */
    StringList?: NonEmptyStringListType;
  };

  /**
   * A security control in Security Hub describes a security best practice related to a specific resource.
   */
  export type SecurityControlResourceType = {
    /**
     * The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.
     * Create-only property
     */
    SecurityControlId?: NonEmptyStringType;

    /**
     * The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
     */
    SecurityControlArn?: NonEmptyStringType;

    /**
     * The most recent reason for updating the customizable properties of a security control. This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
     */
    LastUpdateReason?: string;

    /**
     * An object that identifies the name of a control parameter, its current value, and whether it has been customized.
     */
    Parameters: ParametersType;
  };
}
