/**
 * TypeScript definitions for AWS::Chatbot::CustomAction
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Chatbot::CustomAction Resource Type
 */
export namespace AWS_Chatbot_CustomAction {
  export type CustomActionAttachmentType = {
    NotificationType?: string;

    ButtonText?: string;

    Criteria?: CustomActionAttachmentCriteriaType[];

    Variables?: CustomActionAttachmentVariablesType;
  };

  export type CustomActionAttachmentCriteriaType = {
    Operator: CustomActionAttachmentCriteriaOperatorType;

    VariableName: string;

    Value?: string;
  };

  export type CustomActionAttachmentCriteriaOperatorType = {};

  export type CustomActionAttachmentVariablesType = {};

  export type CustomActionDefinitionType = {
    CommandText: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::Chatbot::CustomAction Resource Type
   */
  export type CustomActionResourceType = {
    /**
     * Create-only property
     */
    ActionName: string;

    AliasName?: string;

    Attachments?: CustomActionAttachmentType[];

    /**
     * Read-only property
     */
    CustomActionArn?: string;

    Definition: CustomActionDefinitionType;

    Tags?: TagType[];
  };
}
