/**
 * TypeScript definitions for AWS::FraudDetector::List
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema for a List in Amazon Fraud Detector.
 */
export namespace AWS_FraudDetector_List {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * An element in a list.
   */
  export type ElementType = {};

  /**
   * A resource schema for a List in Amazon Fraud Detector.
   */
  export type ListResourceType = {
    /**
     * The list ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the list.
     * Create-only property
     */
    Name: string;

    /**
     * The description of the list.
     */
    Description?: string;

    /**
     * The variable type of the list.
     */
    VariableType?: string;

    /**
     * The time when the list was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The time when the list was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * Tags associated with this list.
     */
    Tags?: TagType[];

    /**
     * The elements in this list.
     */
    Elements?: ElementType[];
  };
}
