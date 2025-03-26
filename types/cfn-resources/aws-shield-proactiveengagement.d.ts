/**
 * TypeScript definitions for AWS::Shield::ProactiveEngagement
 * Generated from CloudFormation Resource Schema
 */

/**
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 */
export namespace AWS_Shield_ProactiveEngagement {
  /**
   * An emergency contact is used by Shield Response Team (SRT) to contact you for escalations to the SRT and to initiate proactive customer support. An emergency contact requires an email address.
   */
  export type EmergencyContactType = {
    /**
     * Additional notes regarding the contact.
     */
    ContactNotes?: string;

    /**
     * The email address for the contact.
     */
    EmailAddress: string;

    /**
     * The phone number for the contact
     */
    PhoneNumber?: string;
  };

  /**
   * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
   */
  export type ProactiveEngagementResourceType = {
    /**
     * Read-only property
     */
    AccountId?: string;

    /**
     * If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
     * If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.
     */
    ProactiveEngagementStatus: string;

    /**
     * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.
     * To enable proactive engagement, the contact list must include at least one phone number.
     */
    EmergencyContactList: EmergencyContactType[];
  };
}
