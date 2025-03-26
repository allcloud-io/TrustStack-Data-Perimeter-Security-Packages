/**
 * TypeScript definitions for AWS::Pinpoint::PushTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::PushTemplate
 */
export namespace AWS_Pinpoint_PushTemplate {
  export type AndroidPushNotificationTemplateType = {
    Action?: string;

    ImageUrl?: string;

    SmallImageIconUrl?: string;

    Title?: string;

    ImageIconUrl?: string;

    Sound?: string;

    Body?: string;

    Url?: string;
  };

  export type APNSPushNotificationTemplateType = {
    Action?: string;

    MediaUrl?: string;

    Title?: string;

    Sound?: string;

    Body?: string;

    Url?: string;
  };

  export type DefaultPushNotificationTemplateType = {
    Title?: string;

    Action?: string;

    Sound?: string;

    Body?: string;

    Url?: string;
  };

  /**
   * Resource Type definition for AWS::Pinpoint::PushTemplate
   */
  export type PushTemplateResourceType = {
    GCM?: AndroidPushNotificationTemplateType;

    Baidu?: AndroidPushNotificationTemplateType;

    /**
     * Create-only property
     */
    TemplateName: string;

    ADM?: AndroidPushNotificationTemplateType;

    APNS?: APNSPushNotificationTemplateType;

    TemplateDescription?: string;

    DefaultSubstitutions?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Default?: DefaultPushNotificationTemplateType;

    Tags?: Record<string, any>;
  };
}
