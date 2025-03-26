/**
 * TypeScript definitions for AWS::SES::ContactList
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::SES::ContactList.
 */
export namespace AWS_SES_ContactList {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TopicType = {
    /**
     * The name of the topic.
     */
    TopicName: string;

    /**
     * The display name of the topic.
     */
    DisplayName: string;

    /**
     * The description of the topic.
     */
    Description?: string;

    DefaultSubscriptionStatus: string;
  };

  /**
   * Resource schema for AWS::SES::ContactList.
   */
  export type ContactListResourceType = {
    /**
     * The name of the contact list.
     * Create-only property
     */
    ContactListName?: string;

    /**
     * The description of the contact list.
     */
    Description?: string;

    /**
     * The topics associated with the contact list.
     */
    Topics?: TopicType[];

    /**
     * The tags (keys and values) associated with the contact list.
     */
    Tags?: TagType[];
  };
}
