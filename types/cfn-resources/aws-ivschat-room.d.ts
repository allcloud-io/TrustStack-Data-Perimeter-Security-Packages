/**
 * TypeScript definitions for AWS::IVSChat::Room
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::IVSChat::Room.
 */
export namespace AWS_IVSChat_Room {
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
   * Configuration information for optional review of messages.
   */
  export type MessageReviewHandlerType = {
    /**
     * Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out.
     */
    FallbackResult?: string;

    /**
     * Identifier of the message review handler.
     */
    Uri?: string;
  };

  /**
   * Resource type definition for AWS::IVSChat::Room.
   */
  export type RoomResourceType = {
    /**
     * Room ARN is automatically generated on creation and assigned as the unique identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * The system-generated ID of the room.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the room. The value does not need to be unique.
     */
    Name?: string;

    /**
     * Array of logging configuration identifiers attached to the room.
     */
    LoggingConfigurationIdentifiers?: string[];

    /**
     * The maximum number of characters in a single message.
     * Default: 500
     */
    MaximumMessageLength?: number;

    /**
     * The maximum number of messages per second that can be sent to the room.
     * Default: 10
     */
    MaximumMessageRatePerSecond?: number;

    MessageReviewHandler?: MessageReviewHandlerType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
