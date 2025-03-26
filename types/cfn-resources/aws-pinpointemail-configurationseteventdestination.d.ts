/**
 * TypeScript definitions for AWS::PinpointEmail::ConfigurationSetEventDestination
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination
 */
export namespace AWS_PinpointEmail_ConfigurationSetEventDestination {
  export type EventDestinationType = {
    SnsDestination?: SnsDestinationType;

    CloudWatchDestination?: CloudWatchDestinationType;

    Enabled?: boolean;

    MatchingEventTypes: string[];

    PinpointDestination?: PinpointDestinationType;

    KinesisFirehoseDestination?: KinesisFirehoseDestinationType;
  };

  export type SnsDestinationType = {
    TopicArn: string;
  };

  export type PinpointDestinationType = {
    ApplicationArn?: string;
  };

  export type KinesisFirehoseDestinationType = {
    DeliveryStreamArn: string;

    IamRoleArn: string;
  };

  export type CloudWatchDestinationType = {
    DimensionConfigurations?: DimensionConfigurationType[];
  };

  export type DimensionConfigurationType = {
    DimensionValueSource: string;

    DefaultDimensionValue: string;

    DimensionName: string;
  };

  /**
   * Resource Type definition for AWS::PinpointEmail::ConfigurationSetEventDestination
   */
  export type ConfigurationSetEventDestinationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    EventDestinationName: string;

    /**
     * Create-only property
     */
    ConfigurationSetName: string;

    EventDestination?: EventDestinationType;
  };
}
