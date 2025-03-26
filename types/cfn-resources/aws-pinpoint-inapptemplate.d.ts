/**
 * TypeScript definitions for AWS::Pinpoint::InAppTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::InAppTemplate
 */
export namespace AWS_Pinpoint_InAppTemplate {
  export type AlignmentType = {};

  export type BodyConfigType = {
    Alignment?: AlignmentType;

    Body?: string;

    TextColor?: string;
  };

  export type ButtonActionType = {};

  export type ButtonConfigType = {
    Android?: OverrideButtonConfigurationType;

    DefaultConfig?: DefaultButtonConfigurationType;

    IOS?: OverrideButtonConfigurationType;

    Web?: OverrideButtonConfigurationType;
  };

  export type DefaultButtonConfigurationType = {
    BackgroundColor?: string;

    BorderRadius?: number;

    ButtonAction?: ButtonActionType;

    Link?: string;

    Text?: string;

    TextColor?: string;
  };

  export type HeaderConfigType = {
    Alignment?: AlignmentType;

    Header?: string;

    TextColor?: string;
  };

  export type InAppMessageContentType = {
    BackgroundColor?: string;

    BodyConfig?: BodyConfigType;

    HeaderConfig?: HeaderConfigType;

    ImageUrl?: string;

    PrimaryBtn?: ButtonConfigType;

    SecondaryBtn?: ButtonConfigType;
  };

  export type OverrideButtonConfigurationType = {
    ButtonAction?: ButtonActionType;

    Link?: string;
  };

  /**
   * Resource Type definition for AWS::Pinpoint::InAppTemplate
   */
  export type InAppTemplateResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    Content?: InAppMessageContentType[];

    CustomConfig?: Record<string, any>;

    Layout?: string;

    Tags?: Record<string, any>;

    TemplateDescription?: string;

    /**
     * Create-only property
     */
    TemplateName: string;
  };
}
