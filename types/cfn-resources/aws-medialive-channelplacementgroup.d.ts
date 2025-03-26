/**
 * TypeScript definitions for AWS::MediaLive::ChannelPlacementGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::ChannelPlacementGroup Resource Type
 */
export namespace AWS_MediaLive_ChannelPlacementGroup {
  /**
   * The current state of the ChannelPlacementGroupState
   */
  export type ChannelPlacementGroupStateType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Definition of AWS::MediaLive::ChannelPlacementGroup Resource Type
   */
  export type ChannelPlacementGroupResourceType = {
    /**
     * The ARN of the channel placement group.
     * Read-only property
     */
    Arn?: string;

    /**
     * List of channel IDs added to the channel placement group.
     * Read-only property
     */
    Channels?: string[];

    /**
     * The ID of the cluster the node is on.
     * Create-only property
     */
    ClusterId?: string;

    /**
     * Unique internal identifier.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the channel placement group.
     */
    Name?: string;

    /**
     * List of nodes added to the channel placement group
     */
    Nodes?: string[];

    /**
     * Read-only property
     */
    State?: ChannelPlacementGroupStateType;

    /**
     * A collection of key-value pairs.
     */
    Tags?: TagsType[];
  };
}
