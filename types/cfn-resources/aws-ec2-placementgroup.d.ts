/**
 * TypeScript definitions for AWS::EC2::PlacementGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::PlacementGroup
 */
export namespace AWS_EC2_PlacementGroup {
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
   * Resource Type definition for AWS::EC2::PlacementGroup
   */
  export type PlacementGroupResourceType = {
    /**
     * The placement strategy.
     * Create-only property
     */
    Strategy?: string;

    /**
     * The Group Name of Placement Group.
     * Read-only property
     */
    GroupName?: string;

    /**
     * The Spread Level of Placement Group is an enum where it accepts either host or rack when strategy is spread
     * Create-only property
     */
    SpreadLevel?: string;

    /**
     * The number of partitions. Valid only when **Strategy** is set to `partition`
     * Create-only property
     */
    PartitionCount?: number;

    /**
     * An array of key-value pairs to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
