/**
 * TypeScript definitions for AWS::CloudTrail::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * A channel receives events from a specific source (such as an on-premises storage solution or application, or a partner event data source), and delivers the events to one or more event data stores. You use channels to ingest events into CloudTrail from sources outside AWS.
 */
export namespace AWS_CloudTrail_Channel {
  /**
   * The resource that receives events arriving from a channel.
   */
  export type DestinationType = {
    /**
     * The type of destination for events arriving from a channel.
     */
    Type: string;

    /**
     * The ARN of a resource that receives events from a channel.
     */
    Location: string;
  };

  export type UUIDType = {};

  export type TimestampType = {};

  /**
   * The Amazon Resource Name (ARN) of a channel.
   */
  export type ChannelArnType = {};

  /**
   * The name of the channel.
   */
  export type ChannelNameType = {};

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
   * A channel receives events from a specific source (such as an on-premises storage solution or application, or a partner event data source), and delivers the events to one or more event data stores. You use channels to ingest events into CloudTrail from sources outside AWS.
   */
  export type ChannelResourceType = {
    Name?: ChannelNameType;

    /**
     * The ARN of an on-premises storage solution or application, or a partner event source.
     * Create-only property
     */
    Source?: string;

    /**
     * One or more resources to which events arriving through a channel are logged and stored.
     */
    Destinations?: DestinationType[];

    /**
     * Read-only property
     */
    ChannelArn?: ChannelArnType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
