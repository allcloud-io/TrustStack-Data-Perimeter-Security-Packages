/**
 * TypeScript definitions for AWS::Events::Endpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Events::Endpoint.
 */
export namespace AWS_Events_Endpoint {
  export type HealthCheckType = {};

  export type PrimaryType = {
    HealthCheck: HealthCheckType;
  };

  export type RouteType = {};

  export type SecondaryType = {
    Route: RouteType;
  };

  export type FailoverConfigType = {
    Primary: PrimaryType;

    Secondary: SecondaryType;
  };

  export type RoutingConfigType = {
    FailoverConfig: FailoverConfigType;
  };

  export type EventBusArnType = {};

  export type EndpointEventBusType = {
    EventBusArn: EventBusArnType;
  };

  export type EventBusesType = {};

  export type ReplicationStateType = {};

  export type ReplicationConfigType = {
    State: ReplicationStateType;
  };

  /**
   * Resource Type definition for AWS::Events::Endpoint.
   */
  export type EndpointResourceType = {
    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    RoleArn?: string;

    Description?: string;

    RoutingConfig: RoutingConfigType;

    ReplicationConfig?: ReplicationConfigType;

    EventBuses: EventBusesType;

    /**
     * Read-only property
     */
    EndpointId?: string;

    /**
     * Read-only property
     */
    EndpointUrl?: string;

    /**
     * Read-only property
     */
    State?: string;

    /**
     * Read-only property
     */
    StateReason?: string;
  };
}
