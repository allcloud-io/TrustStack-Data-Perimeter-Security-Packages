/**
 * TypeScript definitions for AWS::NetworkFirewall::LoggingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::NetworkFirewall::LoggingConfiguration
 */
export namespace AWS_NetworkFirewall_LoggingConfiguration {
  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  export type LoggingConfigurationType = {
    LogDestinationConfigs: LogDestinationConfigType[];
  };

  export type LogDestinationConfigType = {
    LogType: string;

    LogDestinationType: string;

    /**
     * A key-value pair to configure the logDestinations.
     */
    LogDestination: Record<string, any>;
  };

  /**
   * Resource type definition for AWS::NetworkFirewall::LoggingConfiguration
   */
  export type LoggingConfigurationResourceType = {
    /**
     * Create-only property
     */
    FirewallName?: string;

    /**
     * Create-only property
     */
    FirewallArn: ResourceArnType;

    LoggingConfiguration: LoggingConfigurationType;
  };
}
