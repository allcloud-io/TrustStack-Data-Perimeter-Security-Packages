/**
 * TypeScript definitions for AWS::SSMContacts::Plan
 * Generated from CloudFormation Resource Schema
 */

/**
 * Engagement Plan for a SSM Incident Manager Contact.
 */
export namespace AWS_SSMContacts_Plan {
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
    DurationInMinutes: number;

    /**
     * The contacts or contact methods that the escalation plan or engagement plan is engaging.
     */
    Targets?: TargetsType[];
  };

  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   */
  export type TargetsType = {
    ContactTargetInfo?: ContactTargetInfoType;

    ChannelTargetInfo?: ChannelTargetInfoType;
  };

  /**
   * Engagement Plan for a SSM Incident Manager Contact.
   */
  export type PlanResourceType = {
    /**
     * Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
     * Create-only property
     */
    ContactId?: string;

    /**
     * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
     */
    Stages?: StageType[];

    /**
     * Rotation Ids to associate with Oncall Contact for engagement.
     */
    RotationIds?: string[];

    /**
     * The Amazon Resource Name (ARN) of the contact.
     * Read-only property
     */
    Arn?: string;
  };
}
