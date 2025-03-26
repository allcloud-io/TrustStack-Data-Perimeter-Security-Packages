/**
 * TypeScript definitions for AWS::FraudDetector::Variable
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema for a Variable in Amazon Fraud Detector.
 */
export namespace AWS_FraudDetector_Variable {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A resource schema for a Variable in Amazon Fraud Detector.
   */
  export type VariableResourceType = {
    /**
     * The name of the variable.
     * Create-only property
     */
    Name: string;

    /**
     * The source of the data.
     */
    DataSource: string;

    /**
     * The data type.
     */
    DataType: string;

    /**
     * The default value for the variable when no value is received.
     */
    DefaultValue: string;

    /**
     * The description.
     */
    Description?: string;

    /**
     * Tags associated with this variable.
     */
    Tags?: TagType[];

    /**
     * The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types
     */
    VariableType?: string;

    /**
     * The ARN of the variable.
     * Read-only property
     */
    Arn?: string;

    /**
     * The time when the variable was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The time when the variable was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;
  };
}
