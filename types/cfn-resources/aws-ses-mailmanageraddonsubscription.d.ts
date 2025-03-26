/**
 * TypeScript definitions for AWS::SES::MailManagerAddonSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerAddonSubscription Resource Type
 */
export namespace AWS_SES_MailManagerAddonSubscription {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerAddonSubscription Resource Type
   */
  export type MailManagerAddonSubscriptionResourceType = {
    /**
     * Create-only property
     */
    AddonName: string;

    /**
     * Read-only property
     */
    AddonSubscriptionArn?: string;

    /**
     * Read-only property
     */
    AddonSubscriptionId?: string;

    Tags?: TagType[];
  };
}
