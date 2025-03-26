/**
 * TypeScript definitions for AWS::IoT::MitigationAction
 * Generated from CloudFormation Resource Schema
 */

/**
 * Mitigation actions can be used to take actions to mitigate issues that were found in an Audit finding or Detect violation.
 */
export namespace AWS_IoT_MitigationAction {
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
   * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
   */
  export type ActionParamsType = {
    AddThingsToThingGroupParams?: AddThingsToThingGroupParamsType;

    EnableIoTLoggingParams?: EnableIoTLoggingParamsType;

    PublishFindingToSnsParams?: PublishFindingToSnsParamsType;

    ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParamsType;

    UpdateCACertificateParams?: UpdateCACertificateParamsType;

    UpdateDeviceCertificateParams?: UpdateDeviceCertificateParamsType;
  };

  /**
   * Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.
   */
  export type AddThingsToThingGroupParamsType = {
    /**
     * Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.
     */
    OverrideDynamicGroups?: boolean;

    /**
     * The list of groups to which you want to add the things that triggered the mitigation action.
     */
    ThingGroupNames: string[];
  };

  /**
   * Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.
   */
  export type EnableIoTLoggingParamsType = {
    /**
     *  Specifies which types of information are logged.
     */
    LogLevel: string;

    /**
     *  The ARN of the IAM role used for logging.
     */
    RoleArnForLogging: string;
  };

  /**
   * Parameters, to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
   */
  export type PublishFindingToSnsParamsType = {
    /**
     * The ARN of the topic to which you want to publish the findings.
     */
    TopicArn: string;
  };

  /**
   * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
   */
  export type ReplaceDefaultPolicyVersionParamsType = {
    TemplateName: string;
  };

  /**
   * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
   */
  export type UpdateCACertificateParamsType = {
    Action: string;
  };

  /**
   * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
   */
  export type UpdateDeviceCertificateParamsType = {
    Action: string;
  };

  /**
   * Mitigation actions can be used to take actions to mitigate issues that were found in an Audit finding or Detect violation.
   */
  export type MitigationActionResourceType = {
    /**
     * A unique identifier for the mitigation action.
     * Create-only property
     */
    ActionName?: string;

    RoleArn: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    ActionParams: ActionParamsType;

    /**
     * Read-only property
     */
    MitigationActionArn?: string;

    /**
     * Read-only property
     */
    MitigationActionId?: string;
  };
}
