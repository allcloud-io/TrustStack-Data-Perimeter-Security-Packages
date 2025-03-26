/**
 * TypeScript definitions for AWS::SSMContacts::Contact
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSMContacts::Contact
 */
export namespace AWS_SSMContacts_Contact {
  /**
   * The contact that SSM Incident Manager is engaging during an incident.
   */
  export type ContactTargetInfoType = {
    /**
     * The Amazon Resource Name (ARN) of the contact.
     */
    ContactId: string;

    /**
     * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
     */
    IsEssential: boolean;
  };

  /**
   * Information about the contact channel that SSM Incident Manager uses to engage the contact.
   */
  export type ChannelTargetInfoType = {
    /**
     * The Amazon Resource Name (ARN) of the contact channel.
     */
    ChannelId: string;

    /**
     * The number of minutes to wait to retry sending engagement in the case the engagement initially fails.
     */
    RetryIntervalInMinutes: number;
  };

  /**
   * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
   */
  export type StageType = {
    /**
     * The time to wait until beginning the next stage.
     */
    DurationInMinutes?: number;

    /**
     * The contacts or contact methods that the escalation plan or engagement plan is engaging.
     */
    Targets?: TargetsType[];

    /**
     * List of Rotation Ids to associate with Contact
     */
    RotationIds?: string[];
  };

  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   */
  export type TargetsType = {
    ContactTargetInfo?: ContactTargetInfoType;

    ChannelTargetInfo?: ChannelTargetInfoType;
  };

  /**
   * Resource Type definition for AWS::SSMContacts::Contact
   */
  export type ContactResourceType = {
    /**
     * Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
     * Create-only property
     */
    Alias: string;

    /**
     * Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
     */
    DisplayName: string;

    /**
     * Contact type, which specify type of contact. Currently supported values: “PERSONAL”, “SHARED”, “OTHER“.
     * Create-only property
     */
    Type: string;

    /**
     * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
     */
    Plan?: StageType[];

    /**
     * The Amazon Resource Name (ARN) of the contact.
     * Read-only property
     */
    Arn?: string;
  };
}
