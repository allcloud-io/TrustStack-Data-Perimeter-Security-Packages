/**
 * TypeScript definitions for AWS::GameLift::MatchmakingRuleSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::MatchmakingRuleSet resource creates an Amazon GameLift (GameLift) matchmaking rule set.
 */
export namespace AWS_GameLift_MatchmakingRuleSet {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.
     */
    Value: string;
  };

  /**
   * The AWS::GameLift::MatchmakingRuleSet resource creates an Amazon GameLift (GameLift) matchmaking rule set.
   */
  export type MatchmakingRuleSetResourceType = {
    /**
     * A unique identifier for the matchmaking rule set.
     * Create-only property
     */
    Name: string;

    /**
     * A collection of matchmaking rules, formatted as a JSON string.
     * Create-only property
     */
    RuleSetBody: string;

    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
