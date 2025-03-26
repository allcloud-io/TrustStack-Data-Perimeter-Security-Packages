/**
 * TypeScript definitions for AWS::FraudDetector::Label
 * Generated from CloudFormation Resource Schema
 */

/**
 * An label for fraud detector.
 */
export namespace AWS_FraudDetector_Label {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * An label for fraud detector.
   */
  export type LabelResourceType = {
    /**
     * The name of the label.
     * Create-only property
     */
    Name: string;

    /**
     * Tags associated with this label.
     */
    Tags?: TagType[];

    /**
     * The label description.
     */
    Description?: string;

    /**
     * The label ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * The timestamp when the label was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The timestamp when the label was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;
  };
}
