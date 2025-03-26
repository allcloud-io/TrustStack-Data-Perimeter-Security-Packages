/**
 * TypeScript definitions for AWS::DevOpsGuru::NotificationChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource schema represents the NotificationChannel resource in the Amazon DevOps Guru.
 */
export namespace AWS_DevOpsGuru_NotificationChannel {
  /**
   * Information about notification channels you have configured with DevOps Guru.
   */
  export type NotificationChannelConfigType = {
    Sns?: SnsChannelConfigType;

    Filters?: NotificationFilterConfigType;
  };

  /**
   * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
   */
  export type SnsChannelConfigType = {
    TopicArn?: string;
  };

  /**
   * Information about filters of a notification channel configured in DevOpsGuru to filter for insights.
   */
  export type NotificationFilterConfigType = {
    Severities?: InsightSeveritiesFilterListType;

    MessageTypes?: NotificationMessageTypesFilterListType;
  };

  /**
   * DevOps Guru Insight Severity Enum
   */
  export type InsightSeverityType = {};

  /**
   * DevOps Guru NotificationMessageType Enum
   */
  export type NotificationMessageTypeType = {};

  /**
   * DevOps Guru insight severities to filter for
   */
  export type InsightSeveritiesFilterListType = {};

  /**
   * DevOps Guru message types to filter for
   */
  export type NotificationMessageTypesFilterListType = {};

  /**
   * This resource schema represents the NotificationChannel resource in the Amazon DevOps Guru.
   */
  export type NotificationChannelResourceType = {
    /**
     * Create-only property
     */
    Config: NotificationChannelConfigType;

    /**
     * The ID of a notification channel.
     * Read-only property
     */
    Id?: string;
  };
}
