/**
 * TypeScript definitions for AWS::SSMIncidents::ResponsePlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::SSMIncidents::ResponsePlan
 */
export namespace AWS_SSMIncidents_ResponsePlan {
  /**
   * The ARN of the contact.
   */
  export type SSMContactType = {};

  /**
   * The ARN of the Chatbot SNS topic.
   */
  export type SnsArnType = {};

  /**
   * A notification target.
   */
  export type NotificationTargetItemType = {
    SnsTopicArn?: SnsArnType;
  };

  /**
   * The automation configuration to launch.
   */
  export type ActionType = {
    SsmAutomation?: SsmAutomationType;
  };

  /**
   * The configuration to use when starting the SSM automation document.
   */
  export type SsmAutomationType = {
    /**
     * The role ARN to use when starting the SSM automation document.
     */
    RoleArn: string;

    /**
     * The document name to use when starting the SSM automation document.
     */
    DocumentName: string;

    /**
     * The version of the document to use when starting the SSM automation document.
     */
    DocumentVersion?: string;

    /**
     * The account type to use when starting the SSM automation document.
     */
    TargetAccount?: string;

    /**
     * The parameters to set when starting the SSM automation document.
     */
    Parameters?: SsmParameterType[];

    /**
     * The parameters with dynamic values to set when starting the SSM automation document.
     */
    DynamicParameters?: DynamicSsmParameterType[];
  };

  /**
   * A parameter to set when starting the SSM automation document.
   */
  export type SsmParameterType = {
    Key: string;

    Values: SsmParameterValueType[];
  };

  /**
   * A value of the parameter to set when starting the SSM automation document.
   */
  export type SsmParameterValueType = {};

  /**
   * A parameter with a dynamic value to set when starting the SSM automation document.
   */
  export type DynamicSsmParameterType = {
    Key: string;

    Value: DynamicSsmParameterValueType;
  };

  /**
   * Value of the dynamic parameter to set when starting the SSM automation document.
   */
  export type DynamicSsmParameterValueType = {
    Variable?: VariableTypeType;
  };

  /**
   * The variable types used as dynamic parameter value when starting the SSM automation document.
   */
  export type VariableTypeType = {};

  export type IntegrationType = {
    PagerDutyConfiguration?: PagerDutyConfigurationType;
  };

  /**
   * The pagerDuty configuration to use when starting the incident.
   */
  export type PagerDutyConfigurationType = {
    /**
     * The name of the pagerDuty configuration.
     */
    Name: string;

    /**
     * The AWS secrets manager secretId storing the pagerDuty token.
     */
    SecretId: string;

    PagerDutyIncidentConfiguration: PagerDutyIncidentConfigurationType;
  };

  /**
   * The pagerDuty incident configuration.
   */
  export type PagerDutyIncidentConfigurationType = {
    /**
     * The pagerDuty serviceId.
     */
    ServiceId: string;
  };

  /**
   * A key-value pair to tag a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The incident template configuration.
   */
  export type IncidentTemplateType = {
    /**
     * The deduplication string.
     */
    DedupeString?: string;

    /**
     * The impact value.
     */
    Impact: number;

    /**
     * The list of notification targets.
     */
    NotificationTargets?: NotificationTargetItemType[];

    /**
     * The summary string.
     */
    Summary?: string;

    /**
     * The title string.
     */
    Title: string;

    /**
     * Tags that get applied to incidents created by the StartIncident API action.
     */
    IncidentTags?: TagType[];
  };

  export type ChatbotSnsType = {};

  /**
   * The chat channel configuration.
   */
  export type ChatChannelType = {
    ChatbotSns?: ChatbotSnsType;
  };

  /**
   * Resource type definition for AWS::SSMIncidents::ResponsePlan
   */
  export type ResponsePlanResourceType = {
    /**
     * The ARN of the response plan.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the response plan.
     * Create-only property
     */
    Name: string;

    /**
     * The display name of the response plan.
     */
    DisplayName?: string;

    ChatChannel?: ChatChannelType;

    /**
     * The list of engagements to use.
     * Default: []
     */
    Engagements?: SSMContactType[];

    /**
     * The list of actions.
     * Default: []
     */
    Actions?: ActionType[];

    /**
     * The list of integrations.
     * Default: []
     */
    Integrations?: IntegrationType[];

    /**
     * The tags to apply to the response plan.
     * Default: []
     */
    Tags?: TagType[];

    IncidentTemplate: IncidentTemplateType;
  };
}
