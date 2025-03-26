/**
 * TypeScript definitions for AWS::GameLift::Alias
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet destination.
 */
export namespace AWS_GameLift_Alias {
  export type RoutingStrategyType = {
    /**
     * The message text to be used with a terminal routing strategy. If you specify TERMINAL for the Type property, you must specify this property.
     */
    Message?: string;

    /**
     * A unique identifier for a fleet that the alias points to. If you specify SIMPLE for the Type property, you must specify this property.
     */
    FleetId?: string;

    /**
     * Simple routing strategy. The alias resolves to one specific fleet. Use this type when routing to active fleets.
     */
    Type: string;
  };

  /**
   * The AWS::GameLift::Alias resource creates an alias for an Amazon GameLift (GameLift) fleet destination.
   */
  export type AliasResourceType = {
    /**
     * A human-readable description of the alias.
     */
    Description?: string;

    /**
     * A descriptive label that is associated with an alias. Alias names do not need to be unique.
     */
    Name: string;

    /**
     * A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.
     */
    RoutingStrategy: RoutingStrategyType;

    /**
     * Unique alias ID
     * Read-only property
     */
    AliasId?: string;
  };
}
