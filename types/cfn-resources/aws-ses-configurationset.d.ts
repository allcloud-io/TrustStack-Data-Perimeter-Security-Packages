/**
 * TypeScript definitions for AWS::SES::ConfigurationSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::SES::ConfigurationSet.
 */
export namespace AWS_SES_ConfigurationSet {
  /**
   * An object that defines the open and click tracking options for emails that you send using the configuration set.
   */
  export type TrackingOptionsType = {
    /**
     * The domain to use for tracking open and click events.
     */
    CustomRedirectDomain?: string;

    /**
     * The https policy to use for tracking open and click events.
     */
    HttpsPolicy?: string;
  };

  /**
   * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
   */
  export type DeliveryOptionsType = {
    /**
     * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.
     */
    TlsPolicy?: string;

    /**
     * The name of the dedicated IP pool to associate with the configuration set.
     */
    SendingPoolName?: string;

    /**
     * Specifies the maximum time until which SES will retry sending emails
     */
    MaxDeliverySeconds?: number;
  };

  /**
   * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
   */
  export type ReputationOptionsType = {
    /**
     * If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set.
     */
    ReputationMetricsEnabled?: boolean;
  };

  /**
   * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
   */
  export type SendingOptionsType = {
    SendingEnabled?: boolean;
  };

  /**
   * An object that contains information about the suppression list preferences for your account.
   */
  export type SuppressionOptionsType = {
    /**
     * A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
     */
    SuppressedReasons?: string[];
  };

  /**
   * Preferences regarding the Dashboard feature.
   */
  export type DashboardOptionsType = {
    /**
     * Whether emails sent with this configuration set have engagement tracking enabled.
     */
    EngagementMetrics: string;
  };

  /**
   * Preferences regarding the Guardian feature.
   */
  export type GuardianOptionsType = {
    /**
     * Whether emails sent with this configuration set have optimized delivery algorithm enabled.
     */
    OptimizedSharedDelivery: string;
  };

  /**
   * An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.
   */
  export type VdmOptionsType = {
    DashboardOptions?: DashboardOptionsType;

    GuardianOptions?: GuardianOptionsType;
  };

  /**
   * Resource schema for AWS::SES::ConfigurationSet.
   */
  export type ConfigurationSetResourceType = {
    /**
     * The name of the configuration set.
     * Create-only property
     */
    Name?: string;

    TrackingOptions?: TrackingOptionsType;

    DeliveryOptions?: DeliveryOptionsType;

    ReputationOptions?: ReputationOptionsType;

    SendingOptions?: SendingOptionsType;

    SuppressionOptions?: SuppressionOptionsType;

    VdmOptions?: VdmOptionsType;
  };
}
