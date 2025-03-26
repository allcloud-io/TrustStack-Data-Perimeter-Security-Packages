/**
 * TypeScript definitions for AWS::IoT::Command
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents the resource definition of AWS IoT Command.
 */
export namespace AWS_IoT_Command {
  export type CommandParameterListType = {};

  export type CommandParameterType = {
    Name: CommandParameterNameType;

    Value?: CommandParameterValueType;

    DefaultValue?: CommandParameterValueType;

    Description?: CommandParameterDescriptionType;
  };

  export type CommandParameterNameType = {};

  export type CommandParameterDescriptionType = {};

  export type CommandParameterValueType = {
    S?: string;

    B?: boolean;

    I?: number;

    L?: string;

    D?: number;

    BIN?: string;

    UL?: string;
  };

  export type MimeTypeType = {};

  export type CommandPayloadContentType = {};

  export type CommandPayloadType = {
    Content?: CommandPayloadContentType;

    ContentType?: MimeTypeType;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * Represents the resource definition of AWS IoT Command.
   */
  export type CommandResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the command.
     * Read-only property
     */
    CommandArn?: string;

    /**
     * The unique identifier for the command.
     * Create-only property
     */
    CommandId: string;

    /**
     * The date and time when the command was created.
     */
    CreatedAt?: string;

    /**
     * A flag indicating whether the command is deprecated.
     */
    Deprecated?: boolean;

    /**
     * The description of the command.
     */
    Description?: string;

    /**
     * The display name for the command.
     */
    DisplayName?: string;

    /**
     * The date and time when the command was last updated.
     */
    LastUpdatedAt?: string;

    /**
     * The list of mandatory parameters for the command.
     */
    MandatoryParameters?: CommandParameterListType;

    /**
     * The namespace to which the command belongs.
     */
    Namespace?: string;

    /**
     * The customer role associated with the command.
     */
    RoleArn?: string;

    /**
     * The payload associated with the command.
     */
    Payload?: CommandPayloadType;

    /**
     * A flag indicating whether the command is pending deletion.
     */
    PendingDeletion?: boolean;

    /**
     * The tags to be associated with the command.
     */
    Tags?: TagType[];
  };
}
