/**
 * TypeScript definitions for AWS::Pinpoint::Campaign
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::Campaign
 */
export namespace AWS_Pinpoint_Campaign {
  export type QuietTimeType = {
    Start: string;

    End: string;
  };

  export type SetDimensionType = {
    Values?: string[];

    DimensionType?: string;
  };

  export type MessageType = {
    Action?: string;

    MediaUrl?: string;

    TimeToLive?: number;

    ImageSmallIconUrl?: string;

    ImageUrl?: string;

    Title?: string;

    Url?: string;

    JsonBody?: string;

    ImageIconUrl?: string;

    SilentPush?: boolean;

    Body?: string;

    RawContent?: string;
  };

  export type InAppMessageContentType = {
    BodyConfig?: InAppMessageBodyConfigType;

    SecondaryBtn?: InAppMessageButtonType;

    ImageUrl?: string;

    PrimaryBtn?: InAppMessageButtonType;

    HeaderConfig?: InAppMessageHeaderConfigType;

    BackgroundColor?: string;
  };

  export type InAppMessageBodyConfigType = {
    Alignment?: string;

    TextColor?: string;

    Body?: string;
  };

  export type CampaignEventFilterType = {
    Dimensions?: EventDimensionsType;

    FilterType?: string;
  };

  export type TemplateConfigurationType = {
    SMSTemplate?: TemplateType;

    EmailTemplate?: TemplateType;

    PushTemplate?: TemplateType;

    VoiceTemplate?: TemplateType;
  };

  export type CampaignCustomMessageType = {
    Data?: string;
  };

  export type EventDimensionsType = {
    Attributes?: Record<string, any>;

    Metrics?: Record<string, any>;

    EventType?: SetDimensionType;
  };

  export type TemplateType = {
    Version?: string;

    Name?: string;
  };

  export type MessageConfigurationType = {
    APNSMessage?: MessageType;

    BaiduMessage?: MessageType;

    DefaultMessage?: MessageType;

    InAppMessage?: CampaignInAppMessageType;

    EmailMessage?: CampaignEmailMessageType;

    GCMMessage?: MessageType;

    SMSMessage?: CampaignSmsMessageType;

    CustomMessage?: CampaignCustomMessageType;

    ADMMessage?: MessageType;
  };

  export type LimitsType = {
    MessagesPerSecond?: number;

    Daily?: number;

    MaximumDuration?: number;

    Total?: number;

    Session?: number;
  };

  export type WriteTreatmentResourceType = {
    TreatmentDescription?: string;

    MessageConfiguration?: MessageConfigurationType;

    Schedule?: ScheduleType;

    TemplateConfiguration?: TemplateConfigurationType;

    CustomDeliveryConfiguration?: CustomDeliveryConfigurationType;

    SizePercent?: number;

    TreatmentName?: string;
  };

  export type CampaignInAppMessageType = {
    CustomConfig?: Record<string, any>;

    Layout?: string;

    Content?: InAppMessageContentType[];
  };

  export type CampaignEmailMessageType = {
    Title?: string;

    FromAddress?: string;

    HtmlBody?: string;

    Body?: string;
  };

  export type CampaignSmsMessageType = {
    EntityId?: string;

    OriginationNumber?: string;

    SenderId?: string;

    Body?: string;

    MessageType?: string;

    TemplateId?: string;
  };

  export type ScheduleType = {
    TimeZone?: string;

    QuietTime?: QuietTimeType;

    EndTime?: string;

    StartTime?: string;

    Frequency?: string;

    EventFilter?: CampaignEventFilterType;

    IsLocalTime?: boolean;
  };

  export type DefaultButtonConfigurationType = {
    ButtonAction?: string;

    BorderRadius?: number;

    Text?: string;

    TextColor?: string;

    Link?: string;

    BackgroundColor?: string;
  };

  export type CustomDeliveryConfigurationType = {
    EndpointTypes?: string[];

    DeliveryUri?: string;
  };

  export type CampaignHookType = {
    WebUrl?: string;

    LambdaFunctionName?: string;

    Mode?: string;
  };

  export type InAppMessageButtonType = {
    IOS?: OverrideButtonConfigurationType;

    Web?: OverrideButtonConfigurationType;

    DefaultConfig?: DefaultButtonConfigurationType;

    Android?: OverrideButtonConfigurationType;
  };

  export type InAppMessageHeaderConfigType = {
    Alignment?: string;

    TextColor?: string;

    Header?: string;
  };

  export type OverrideButtonConfigurationType = {
    ButtonAction?: string;

    Link?: string;
  };

  /**
   * Resource Type definition for AWS::Pinpoint::Campaign
   */
  export type CampaignResourceType = {
    Description?: string;

    SegmentId: string;

    Priority?: number;

    TemplateConfiguration?: TemplateConfigurationType;

    IsPaused?: boolean;

    AdditionalTreatments?: WriteTreatmentResourceType[];

    Name: string;

    SegmentVersion?: number;

    TreatmentDescription?: string;

    MessageConfiguration?: MessageConfigurationType;

    Limits?: LimitsType;

    /**
     * Read-only property
     */
    CampaignId?: string;

    HoldoutPercent?: number;

    Schedule: ScheduleType;

    CustomDeliveryConfiguration?: CustomDeliveryConfigurationType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ApplicationId: string;

    CampaignHook?: CampaignHookType;

    Tags?: Record<string, any>;

    TreatmentName?: string;
  };
}
