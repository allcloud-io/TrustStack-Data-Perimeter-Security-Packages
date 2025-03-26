/**
 * TypeScript definitions for AWS::CE::AnomalyMonitor
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. You can use Cost Anomaly Detection by creating monitor.
 */
export namespace AWS_CE_AnomalyMonitor {
  /**
   * Monitor ARN
   */
  export type ArnType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type ResourceTagType = {
    /**
     * The key name for the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * AWS Cost Anomaly Detection leverages advanced Machine Learning technologies to identify anomalous spend and root causes, so you can quickly take action. You can use Cost Anomaly Detection by creating monitor.
   */
  export type AnomalyMonitorResourceType = {
    /**
     * Read-only property
     */
    MonitorArn?: ArnType;

    /**
     * Create-only property
     */
    MonitorType: string;

    /**
     * The name of the monitor.
     */
    MonitorName: string;

    /**
     * The date when the monitor was created.
     * Read-only property
     */
    CreationDate?: string;

    /**
     * The date when the monitor last evaluated for anomalies.
     * Read-only property
     */
    LastEvaluatedDate?: string;

    /**
     * The date when the monitor was last updated.
     * Read-only property
     */
    LastUpdatedDate?: string;

    /**
     * The dimensions to evaluate
     * Create-only property
     */
    MonitorDimension?: string;

    /**
     * Create-only property
     */
    MonitorSpecification?: string;

    /**
     * The value for evaluated dimensions.
     * Read-only property
     */
    DimensionalValueCount?: number;

    /**
     * Tags to assign to monitor.
     * Create-only property
     */
    ResourceTags?: ResourceTagType[];
  };
}
