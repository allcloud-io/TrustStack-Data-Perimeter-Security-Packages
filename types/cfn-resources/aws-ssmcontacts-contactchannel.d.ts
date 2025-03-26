/**
 * TypeScript definitions for AWS::SSMContacts::ContactChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSMContacts::ContactChannel
 */
export namespace AWS_SSMContacts_ContactChannel {
  /**
   * Resource Type definition for AWS::SSMContacts::ContactChannel
   */
  export type ContactChannelResourceType = {
    /**
     * ARN of the contact resource
     * Create-only property
     */
    ContactId?: string;

    /**
     * The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.
     */
    ChannelName?: string;

    /**
     * Device type, which specify notification channel. Currently supported values: “SMS”, “VOICE”, “EMAIL”, “CHATBOT.
     * Create-only property
     */
    ChannelType?: string;

    /**
     * If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.
     */
    DeferActivation?: boolean;

    /**
     * The details that SSM Incident Manager uses when trying to engage the contact channel.
     */
    ChannelAddress?: string;

    /**
     * The Amazon Resource Name (ARN) of the engagement to a contact channel.
     * Read-only property
     */
    Arn?: string;
  };
}
