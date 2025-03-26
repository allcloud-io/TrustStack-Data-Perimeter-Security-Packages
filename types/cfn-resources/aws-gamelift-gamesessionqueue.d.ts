/**
 * TypeScript definitions for AWS::GameLift::GameSessionQueue
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::GameSessionQueue resource creates an Amazon GameLift (GameLift) game session queue.
 */
export namespace AWS_GameLift_GameSessionQueue {
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
   * A fleet or alias designated in a game session queue.
   */
  export type GameSessionQueueDestinationType = {
    DestinationArn?: string;
  };

  /**
   * Sets a latency cap for individual players when placing a game session.
   */
  export type PlayerLatencyPolicyType = {
    /**
     * The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
     */
    MaximumIndividualPlayerLatencyMilliseconds?: number;

    /**
     * The length of time, in seconds, that the policy is enforced while placing a new game session.
     */
    PolicyDurationSeconds?: number;
  };

  /**
   * A list of locations to allow game session placement in, in the form of AWS Region codes such as us-west-2.
   */
  export type AllowedLocationsType = {};

  export type FilterConfigurationType = {
    AllowedLocations?: AllowedLocationsType;
  };

  /**
   * The prioritization order to use for fleet locations, when the PriorityOrder property includes LOCATION.
   */
  export type LocationOrderType = {};

  /**
   * The recommended sequence to use when prioritizing where to place new game sessions.
   */
  export type PriorityOrderType = {};

  export type PriorityConfigurationType = {
    LocationOrder?: LocationOrderType;

    PriorityOrder?: PriorityOrderType;
  };

  /**
   * The AWS::GameLift::GameSessionQueue resource creates an Amazon GameLift (GameLift) game session queue.
   */
  export type GameSessionQueueResourceType = {
    /**
     * A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
     * Create-only property
     */
    Name: string;

    /**
     * The maximum time, in seconds, that a new game session placement request remains in the queue.
     */
    TimeoutInSeconds?: number;

    /**
     * A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
     */
    Destinations?: GameSessionQueueDestinationType[];

    /**
     * A set of policies that act as a sliding cap on player latency.
     */
    PlayerLatencyPolicies?: PlayerLatencyPolicyType[];

    /**
     * Information that is added to all events that are related to this game session queue.
     */
    CustomEventData?: string;

    /**
     * An SNS topic ARN that is set up to receive game session placement notifications.
     */
    NotificationTarget?: string;

    /**
     * A list of locations where a queue is allowed to place new game sessions.
     */
    FilterConfiguration?: FilterConfigurationType;

    /**
     * Custom settings to use when prioritizing destinations and locations for game session placements.
     */
    PriorityConfiguration?: PriorityConfigurationType;

    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
