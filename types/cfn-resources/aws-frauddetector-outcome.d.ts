/**
 * TypeScript definitions for AWS::FraudDetector::Outcome
 * Generated from CloudFormation Resource Schema
 */

/**
 * An outcome for rule evaluation.
 */
export namespace AWS_FraudDetector_Outcome {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * An outcome for rule evaluation.
   */
  export type OutcomeResourceType = {
    /**
     * The name of the outcome.
     * Create-only property
     */
    Name: string;

    /**
     * Tags associated with this outcome.
     */
    Tags?: TagType[];

    /**
     * The outcome description.
     */
    Description?: string;

    /**
     * The outcome ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * The timestamp when the outcome was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The timestamp when the outcome was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;
  };
}
