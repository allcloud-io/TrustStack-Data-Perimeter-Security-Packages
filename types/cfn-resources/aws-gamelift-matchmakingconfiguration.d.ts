/**
 * TypeScript definitions for AWS::GameLift::MatchmakingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::MatchmakingConfiguration resource creates an Amazon GameLift (GameLift) matchmaking configuration.
 */
export namespace AWS_GameLift_MatchmakingConfiguration {
  /**
   * A key-value pair that contains information about a game session.
   */
  export type GamePropertyType = {
    /**
     * The game property identifier.
     */
    Key: string;

    /**
     * The game property value.
     */
    Value: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
     */
    Value: string;
  };

  /**
   * The AWS::GameLift::MatchmakingConfiguration resource creates an Amazon GameLift (GameLift) matchmaking configuration.
   */
  export type MatchmakingConfigurationResourceType = {
    /**
     * A flag that indicates whether a match that was created with this configuration must be accepted by the matched players
     */
    AcceptanceRequired: boolean;

    /**
     * The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
     */
    AcceptanceTimeoutSeconds?: number;

    /**
     * The number of player slots in a match to keep open for future players.
     */
    AdditionalPlayerCount?: number;

    /**
     * The method used to backfill game sessions created with this matchmaking configuration.
     */
    BackfillMode?: string;

    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking configuration resource and uniquely identifies it.
     * Read-only property
     */
    Arn?: string;

    /**
     * A time stamp indicating when this data object was created.
     */
    CreationTime?: string;

    /**
     * Information to attach to all events related to the matchmaking configuration.
     */
    CustomEventData?: string;

    /**
     * A descriptive label that is associated with matchmaking configuration.
     */
    Description?: string;

    /**
     * Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.
     */
    FlexMatchMode?: string;

    /**
     * A set of custom properties for a game session, formatted as key:value pairs.
     */
    GameProperties?: GamePropertyType[];

    /**
     * A set of custom game session properties, formatted as a single string value.
     */
    GameSessionData?: string;

    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.
     */
    GameSessionQueueArns?: string[];

    /**
     * A unique identifier for the matchmaking configuration.
     * Create-only property
     */
    Name: string;

    /**
     * An SNS topic ARN that is set up to receive matchmaking notifications.
     */
    NotificationTarget?: string;

    /**
     * The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
     */
    RequestTimeoutSeconds: number;

    /**
     * The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.
     */
    RuleSetArn?: string;

    /**
     * A unique identifier for the matchmaking rule set to use with this configuration.
     */
    RuleSetName: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
