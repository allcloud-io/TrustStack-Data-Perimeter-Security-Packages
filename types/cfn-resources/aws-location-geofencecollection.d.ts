/**
 * TypeScript definitions for AWS::Location::GeofenceCollection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Location::GeofenceCollection Resource Type
 */
export namespace AWS_Location_GeofenceCollection {
  export type PricingPlanType = {};

  export type TagMapType = {};

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
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   */
  export type iso8601UTCType = {};

  /**
   * Definition of AWS::Location::GeofenceCollection Resource Type
   */
  export type GeofenceCollectionResourceType = {
    /**
     * Read-only property
     */
    CollectionArn?: string;

    /**
     * Create-only property
     */
    CollectionName: string;

    /**
     * Read-only property
     */
    CreateTime?: iso8601UTCType;

    Description?: string;

    /**
     * Create-only property
     */
    KmsKeyId?: string;

    PricingPlan?: PricingPlanType;

    /**
     * This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.
     */
    PricingPlanDataSource?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    UpdateTime?: iso8601UTCType;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
