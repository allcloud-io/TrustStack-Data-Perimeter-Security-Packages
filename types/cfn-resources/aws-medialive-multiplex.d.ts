/**
 * TypeScript definitions for AWS::MediaLive::Multiplex
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaLive::Multiplex
 */
export namespace AWS_MediaLive_Multiplex {
  /**
   * Multiplex MediaConnect output destination settings.
   */
  export type MultiplexOutputDestinationType = {
    /**
     * Multiplex MediaConnect output destination settings.
     */
    MultiplexMediaConnectOutputDestinationSettings?: any;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type MultiplexSettingsType = {
    /**
     * Maximum video buffer delay in milliseconds.
     */
    MaximumVideoBufferDelayMilliseconds?: number;

    /**
     * Transport stream bit rate.
     */
    TransportStreamBitrate: number;

    /**
     * Transport stream ID.
     */
    TransportStreamId: number;

    /**
     * Transport stream reserved bit rate.
     */
    TransportStreamReservedBitrate?: number;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource schema for AWS::MediaLive::Multiplex
   */
  export type MultiplexResourceType = {
    /**
     * The unique arn of the multiplex.
     * Read-only property
     */
    Arn?: string;

    /**
     * A list of availability zones for the multiplex.
     * Create-only property
     */
    AvailabilityZones: string[];

    /**
     * A list of the multiplex output destinations.
     */
    Destinations?: MultiplexOutputDestinationType[];

    /**
     * The unique id of the multiplex.
     * Read-only property
     */
    Id?: string;

    /**
     * Configuration for a multiplex event.
     */
    MultiplexSettings: MultiplexSettingsType;

    /**
     * Name of multiplex.
     */
    Name: string;

    /**
     * The number of currently healthy pipelines.
     * Read-only property
     */
    PipelinesRunningCount?: number;

    /**
     * The number of programs in the multiplex.
     * Read-only property
     */
    ProgramCount?: number;

    /**
     * Read-only property
     */
    State?: string;

    /**
     * A collection of key-value pairs.
     */
    Tags?: TagsType[];
  };
}
