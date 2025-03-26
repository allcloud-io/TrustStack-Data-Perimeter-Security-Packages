/**
 * TypeScript definitions for AWS::IoTWireless::NetworkAnalyzerConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Create and manage NetworkAnalyzerConfiguration resource.
 */
export namespace AWS_IoTWireless_NetworkAnalyzerConfiguration {
  export type WirelessDeviceFrameInfoType = {};

  export type LogLevelType = {};

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
   * Create and manage NetworkAnalyzerConfiguration resource.
   */
  export type NetworkAnalyzerConfigurationResourceType = {
    /**
     * Name of the network analyzer configuration
     * Create-only property
     */
    Name: string;

    /**
     * The description of the new resource
     */
    Description?: string;

    /**
     * Trace content for your wireless gateway and wireless device resources
     */
    TraceContent?: Record<string, any>;

    /**
     * List of wireless gateway resources that have been added to the network analyzer configuration
     */
    WirelessDevices?: string[];

    /**
     * List of wireless gateway resources that have been added to the network analyzer configuration
     */
    WirelessGateways?: string[];

    /**
     * Arn for network analyzer configuration, Returned upon successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
