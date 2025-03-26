/**
 * TypeScript definitions for AWS::InternetMonitor::Monitor
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a monitor, which defines the monitoring boundaries for measurements that Internet Monitor publishes information about for an application
 */
export namespace AWS_InternetMonitor_Monitor {
  export type MonitorConfigStateType = {};

  export type MonitorProcessingStatusCodeType = {};

  /**
   * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   */
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * The date value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ssZ)
   */
  export type iso8601UTCType = {};

  export type InternetMeasurementsLogDeliveryType = {
    S3Config?: S3ConfigType;
  };

  export type S3ConfigType = {
    BucketName?: string;

    BucketPrefix?: string;

    LogDeliveryStatus?: string;
  };

  export type HealthEventsConfigType = {
    AvailabilityScoreThreshold?: number;

    PerformanceScoreThreshold?: number;

    AvailabilityLocalHealthEventsConfig?: LocalHealthEventsConfigType;

    PerformanceLocalHealthEventsConfig?: LocalHealthEventsConfigType;
  };

  export type LocalHealthEventsConfigType = {
    Status?: string;

    HealthScoreThreshold?: number;

    MinTrafficImpact?: number;
  };

  /**
   * Represents a monitor, which defines the monitoring boundaries for measurements that Internet Monitor publishes information about for an application
   */
  export type MonitorResourceType = {
    /**
     * Read-only property
     */
    CreatedAt?: iso8601UTCType;

    /**
     * Read-only property
     */
    ModifiedAt?: iso8601UTCType;

    /**
     * Read-only property
     */
    MonitorArn?: string;

    /**
     * Create-only property
     */
    MonitorName: string;

    LinkedAccountId?: string;

    IncludeLinkedAccounts?: boolean;

    /**
     * Read-only property
     */
    ProcessingStatus?: MonitorProcessingStatusCodeType;

    /**
     * Read-only property
     */
    ProcessingStatusInfo?: string;

    Resources?: string[];

    ResourcesToAdd?: string[];

    ResourcesToRemove?: string[];

    Status?: MonitorConfigStateType;

    Tags?: TagType[];

    MaxCityNetworksToMonitor?: number;

    TrafficPercentageToMonitor?: number;

    InternetMeasurementsLogDelivery?: InternetMeasurementsLogDeliveryType;

    HealthEventsConfig?: HealthEventsConfigType;
  };
}
