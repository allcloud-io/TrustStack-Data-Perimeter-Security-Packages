/**
 * TypeScript definitions for AWS::SES::MailManagerAddonInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerAddonInstance Resource Type
 */
export namespace AWS_SES_MailManagerAddonInstance {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerAddonInstance Resource Type
   */
  export type MailManagerAddonInstanceResourceType = {
    /**
     * Read-only property
     */
    AddonInstanceArn?: string;

    /**
     * Read-only property
     */
    AddonInstanceId?: string;

    /**
     * Read-only property
     */
    AddonName?: string;

    /**
     * Create-only property
     */
    AddonSubscriptionId: string;

    Tags?: TagType[];
  };
}
