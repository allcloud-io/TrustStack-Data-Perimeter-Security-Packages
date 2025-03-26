/**
 * TypeScript definitions for AWS::FraudDetector::EntityType
 * Generated from CloudFormation Resource Schema
 */

/**
 * An entity type for fraud detector.
 */
export namespace AWS_FraudDetector_EntityType {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * An entity type for fraud detector.
   */
  export type EntityTypeResourceType = {
    /**
     * The name of the entity type.
     * Create-only property
     */
    Name: string;

    /**
     * Tags associated with this entity type.
     */
    Tags?: TagType[];

    /**
     * The entity type description.
     */
    Description?: string;

    /**
     * The entity type ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * The timestamp when the entity type was created.
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * The timestamp when the entity type was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;
  };
}
