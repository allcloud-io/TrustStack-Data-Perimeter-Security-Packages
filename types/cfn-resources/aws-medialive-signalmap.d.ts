/**
 * TypeScript definitions for AWS::MediaLive::SignalMap
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::SignalMap Resource Type
 */
export namespace AWS_MediaLive_SignalMap {
  /**
   * A map representing an incomplete AWS media workflow as a graph.
   */
  export type FailedMediaResourceMapType = {};

  /**
   * An AWS resource used in media workflows.
   */
  export type MediaResourceType = {
    Destinations?: MediaResourceNeighborType[];

    /**
     * The logical name of an AWS media resource.
     */
    Name?: string;

    Sources?: MediaResourceNeighborType[];
  };

  /**
   * A map representing an AWS media workflow as a graph.
   */
  export type MediaResourceMapType = {};

  /**
   * A direct source or destination neighbor to an AWS media resource.
   */
  export type MediaResourceNeighborType = {
    /**
     * The ARN of a resource used in AWS media workflows.
     */
    Arn: string;

    /**
     * The logical name of an AWS media resource.
     */
    Name?: string;
  };

  /**
   * Represents the latest monitor deployment of a signal map.
   */
  export type MonitorDeploymentType = {
    /**
     * URI associated with a signal map's monitor deployment.
     */
    DetailsUri?: string;

    /**
     * Error message associated with a failed monitor deployment of a signal map.
     */
    ErrorMessage?: string;

    Status: SignalMapMonitorDeploymentStatusType;
  };

  /**
   * A signal map's monitor deployment status.
   */
  export type SignalMapMonitorDeploymentStatusType = {};

  /**
   * A signal map's current status which is dependent on its lifecycle actions or associated jobs.
   */
  export type SignalMapStatusType = {};

  /**
   * Represents the latest successful monitor deployment of a signal map.
   */
  export type SuccessfulMonitorDeploymentType = {
    /**
     * URI associated with a signal map's monitor deployment.
     */
    DetailsUri: string;

    Status: SignalMapMonitorDeploymentStatusType;
  };

  /**
   * Represents the tags associated with a resource.
   */
  export type TagMapType = {};

  export type UnitType = {};

  /**
   * Definition of AWS::MediaLive::SignalMap Resource Type
   */
  export type SignalMapResourceType = {
    /**
     * A signal map's ARN (Amazon Resource Name)
     * Read-only property
     */
    Arn?: string;

    CloudWatchAlarmTemplateGroupIdentifiers?: string[];

    /**
     * Read-only property
     */
    CloudWatchAlarmTemplateGroupIds?: string[];

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * A resource's optional description.
     */
    Description?: string;

    /**
     * A top-level supported AWS resource ARN to discovery a signal map from.
     */
    DiscoveryEntryPointArn: string;

    /**
     * Error message associated with a failed creation or failed update attempt of a signal map.
     * Read-only property
     */
    ErrorMessage?: string;

    EventBridgeRuleTemplateGroupIdentifiers?: string[];

    /**
     * Read-only property
     */
    EventBridgeRuleTemplateGroupIds?: string[];

    /**
     * Read-only property
     */
    FailedMediaResourceMap?: FailedMediaResourceMapType;

    /**
     * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
     * Default: false
     */
    ForceRediscovery?: boolean;

    /**
     * A signal map's id.
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Identifier?: string;

    /**
     * Read-only property
     */
    LastDiscoveredAt?: string;

    /**
     * Read-only property
     */
    LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeploymentType;

    /**
     * Read-only property
     */
    MediaResourceMap?: MediaResourceMapType;

    /**
     * Read-only property
     */
    ModifiedAt?: string;

    /**
     * If true, there are pending monitor changes for this signal map that can be deployed.
     * Default: false
     * Read-only property
     */
    MonitorChangesPendingDeployment?: boolean;

    /**
     * Read-only property
     */
    MonitorDeployment?: MonitorDeploymentType;

    /**
     * A resource's name. Names must be unique within the scope of a resource type in a specific region.
     */
    Name: string;

    /**
     * Read-only property
     */
    Status?: SignalMapStatusType;

    /**
     * Create-only property
     */
    Tags?: TagMapType;
  };
}
