/**
 * TypeScript definitions for AWS::S3::StorageLensGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3::StorageLensGroup resource is an Amazon S3 resource type that you can use to create Storage Lens Group.
 */
export namespace AWS_S3_StorageLensGroup {
  /**
   * The name that identifies the Amazon S3 Storage Lens Group.
   */
  export type NameType = {};

  /**
   * Filter to match any of the specified prefixes.
   */
  export type MatchAnyPrefixType = {};

  /**
   * Filter to match any of the specified suffixes.
   */
  export type MatchAnySuffixType = {};

  /**
   * Filter to match any of the specified object tags.
   */
  export type MatchAnyTagType = {};

  /**
   * Filter to match all of the specified values for the minimum and maximum object age.
   */
  export type MatchObjectAgeType = {
    /**
     * Minimum object age to which the rule applies.
     */
    DaysGreaterThan?: number;

    /**
     * Maximum object age to which the rule applies.
     */
    DaysLessThan?: number;
  };

  /**
   * Filter to match all of the specified values for the minimum and maximum object size.
   */
  export type MatchObjectSizeType = {
    /**
     * Minimum object size to which the rule applies.
     */
    BytesGreaterThan?: number;

    /**
     * Maximum object size to which the rule applies.
     */
    BytesLessThan?: number;
  };

  /**
   * The Storage Lens group will include objects that match all of the specified filter values.
   */
  export type AndType = {
    MatchAnyPrefix?: MatchAnyPrefixType;

    MatchAnySuffix?: MatchAnySuffixType;

    MatchAnyTag?: MatchAnyTagType;

    MatchObjectSize?: MatchObjectSizeType;

    MatchObjectAge?: MatchObjectAgeType;
  };

  /**
   * The Storage Lens group will include objects that match any of the specified filter values.
   */
  export type OrType = {
    MatchAnyPrefix?: MatchAnyPrefixType;

    MatchAnySuffix?: MatchAnySuffixType;

    MatchAnyTag?: MatchAnyTagType;

    MatchObjectSize?: MatchObjectSizeType;

    MatchObjectAge?: MatchObjectAgeType;
  };

  /**
   * Sets the Storage Lens Group filter.
   */
  export type FilterType = {
    MatchAnyPrefix?: MatchAnyPrefixType;

    MatchAnySuffix?: MatchAnySuffixType;

    MatchAnyTag?: MatchAnyTagType;

    MatchObjectSize?: MatchObjectSizeType;

    MatchObjectAge?: MatchObjectAgeType;

    And?: AndType;

    Or?: OrType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The AWS::S3::StorageLensGroup resource is an Amazon S3 resource type that you can use to create Storage Lens Group.
   */
  export type StorageLensGroupResourceType = {
    /**
     * Create-only property
     */
    Name: NameType;

    Filter: FilterType;

    /**
     * The ARN for the Amazon S3 Storage Lens Group.
     * Read-only property
     */
    StorageLensGroupArn?: string;

    /**
     * A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.
     */
    Tags?: TagType[];
  };
}
