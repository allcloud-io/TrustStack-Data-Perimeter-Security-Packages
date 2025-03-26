/**
 * TypeScript definitions for AWS::ApplicationInsights::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ApplicationInsights::Application
 */
export namespace AWS_ApplicationInsights_Application {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * The custom grouped component.
   */
  export type CustomComponentType = {
    /**
     * The name of the component.
     */
    ComponentName: string;

    /**
     * The list of resource ARNs that belong to the component.
     */
    ResourceList: string[];
  };

  /**
   * The log pattern set.
   */
  export type LogPatternSetType = {
    /**
     * The name of the log pattern set.
     */
    PatternSetName: string;

    /**
     * The log patterns of a set.
     */
    LogPatterns: LogPatternType[];
  };

  /**
   * The log pattern.
   */
  export type LogPatternType = {
    /**
     * The name of the log pattern.
     */
    PatternName: string;

    /**
     * The log pattern.
     */
    Pattern: string;

    /**
     * Rank of the log pattern.
     */
    Rank: number;
  };

  /**
   * The monitoring setting of the component.
   */
  export type ComponentMonitoringSettingType = {
    /**
     * The name of the component.
     */
    ComponentName?: string;

    /**
     * The ARN of the compnonent.
     */
    ComponentARN?: string;

    /**
     * The tier of the application component.
     */
    Tier: string;

    /**
     * The component monitoring configuration mode.
     */
    ComponentConfigurationMode: string;

    /**
     * The overwritten settings on default component monitoring configuration.
     */
    DefaultOverwriteComponentConfiguration?: ComponentConfigurationType;

    /**
     * The monitoring configuration of the component.
     */
    CustomComponentConfiguration?: ComponentConfigurationType;
  };

  /**
   * The configuration settings of the component.
   */
  export type ComponentConfigurationType = {
    /**
     * The configuration settings
     */
    ConfigurationDetails?: ConfigurationDetailsType;

    /**
     * Sub component configurations of the component.
     */
    SubComponentTypeConfigurations?: SubComponentTypeConfigurationType[];
  };

  /**
   * The configuration settings.
   */
  export type ConfigurationDetailsType = {
    /**
     * A list of metrics to monitor for the component.
     */
    AlarmMetrics?: AlarmMetricType[];

    /**
     * A list of logs to monitor for the component.
     */
    Logs?: LogType[];

    /**
     * A list of Windows Events to log.
     */
    WindowsEvents?: WindowsEventType[];

    /**
     * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
     */
    Processes?: ProcessType[];

    /**
     * A list of alarms to monitor for the component.
     */
    Alarms?: AlarmType[];

    /**
     * The JMX Prometheus Exporter settings.
     */
    JMXPrometheusExporter?: JMXPrometheusExporterType;

    /**
     * The HANA DB Prometheus Exporter settings.
     */
    HANAPrometheusExporter?: HANAPrometheusExporterType;

    /**
     * The HA cluster Prometheus Exporter settings.
     */
    HAClusterPrometheusExporter?: HAClusterPrometheusExporterType;

    /**
     * The NetWeaver Prometheus Exporter settings.
     */
    NetWeaverPrometheusExporter?: NetWeaverPrometheusExporterType;

    /**
     * The SQL Prometheus Exporter settings.
     */
    SQLServerPrometheusExporter?: SQLServerPrometheusExporterType;
  };

  /**
   * The configuration settings of sub components.
   */
  export type SubComponentConfigurationDetailsType = {
    /**
     * A list of metrics to monitor for the component.
     */
    AlarmMetrics?: AlarmMetricType[];

    /**
     * A list of logs to monitor for the component.
     */
    Logs?: LogType[];

    /**
     * A list of Windows Events to log.
     */
    WindowsEvents?: WindowsEventType[];

    /**
     * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
     */
    Processes?: ProcessType[];
  };

  /**
   * The JMX Prometheus Exporter settings.
   */
  export type JMXPrometheusExporterType = {
    /**
     * JMX service URL.
     */
    JMXURL?: string;

    /**
     * Java agent host port
     */
    HostPort?: string;

    /**
     * Prometheus exporter port.
     */
    PrometheusPort?: string;
  };

  /**
   * The HANA DB Prometheus Exporter settings.
   */
  export type HANAPrometheusExporterType = {
    /**
     * HANA DB SID.
     */
    HANASID: string;

    /**
     * The HANA DB port.
     */
    HANAPort: string;

    /**
     * The secret name which manages the HANA DB credentials e.g. {
     * "username": "<>",
     * "password": "<>"
     * }.
     */
    HANASecretName: string;

    /**
     * A flag which indicates agreeing to install SAP HANA DB client.
     */
    AgreeToInstallHANADBClient: boolean;

    /**
     * Prometheus exporter port.
     */
    PrometheusPort?: string;
  };

  /**
   * The HA cluster Prometheus Exporter settings.
   */
  export type HAClusterPrometheusExporterType = {
    /**
     * Prometheus exporter port.
     */
    PrometheusPort?: string;
  };

  /**
   * The NetWeaver Prometheus Exporter Settings.
   */
  export type NetWeaverPrometheusExporterType = {
    /**
     * SAP NetWeaver SID.
     */
    SAPSID: string;

    /**
     * SAP instance numbers for ASCS, ERS, and App Servers.
     */
    InstanceNumbers: string[];

    /**
     * Prometheus exporter port.
     */
    PrometheusPort?: string;
  };

  /**
   * The SQL prometheus exporter settings.
   */
  export type SQLServerPrometheusExporterType = {
    /**
     * Prometheus exporter port.
     */
    PrometheusPort: string;

    /**
     * Secret name which managers SQL exporter connection. e.g. {"data_source_name": "sqlserver://<USERNAME>:<PASSWORD>@localhost:1433"}
     */
    SQLSecretName: string;
  };

  /**
   * A metric to be monitored for the component.
   */
  export type AlarmMetricType = {
    /**
     * The name of the metric to be monitored for the component.
     */
    AlarmMetricName: string;
  };

  /**
   * A log to be monitored for the component.
   */
  export type LogType = {
    /**
     * The CloudWatch log group name to be associated to the monitored log.
     */
    LogGroupName?: string;

    /**
     * The path of the logs to be monitored.
     */
    LogPath?: string;

    /**
     * The log type decides the log patterns against which Application Insights analyzes the log.
     */
    LogType: string;

    /**
     * The type of encoding of the logs to be monitored.
     */
    Encoding?: string;

    /**
     * The name of the log pattern set.
     */
    PatternSet?: string;
  };

  /**
   * A Windows Event to be monitored for the component.
   */
  export type WindowsEventType = {
    /**
     * The CloudWatch log group name to be associated to the monitored log.
     */
    LogGroupName: string;

    /**
     * The type of Windows Events to log.
     */
    EventName: string;

    /**
     * The levels of event to log.
     */
    EventLevels: EventLevelType[];

    /**
     * The name of the log pattern set.
     */
    PatternSet?: string;
  };

  /**
   * A process to be monitored for the component.
   */
  export type ProcessType = {
    /**
     * The name of the process to be monitored for the component.
     */
    ProcessName: string;

    /**
     * A list of metrics to monitor for the component.
     */
    AlarmMetrics: AlarmMetricType[];
  };

  /**
   * The level of event to log.
   */
  export type EventLevelType = {};

  /**
   * A CloudWatch alarm to be monitored for the component.
   */
  export type AlarmType = {
    /**
     * The name of the CloudWatch alarm to be monitored for the component.
     */
    AlarmName: string;

    /**
     * Indicates the degree of outage when the alarm goes off.
     */
    Severity?: string;
  };

  /**
   * One type sub component configurations for the component.
   */
  export type SubComponentTypeConfigurationType = {
    /**
     * The sub component type.
     */
    SubComponentType: string;

    /**
     * The configuration settings of sub components.
     */
    SubComponentConfigurationDetails: SubComponentConfigurationDetailsType;
  };

  /**
   * Resource schema for AWS::ApplicationInsights::Application
   */
  export type ApplicationResourceType = {
    /**
     * The name of the resource group.
     * Create-only property
     */
    ResourceGroupName: string;

    /**
     * The ARN of the ApplicationInsights application.
     * Read-only property
     */
    ApplicationARN?: string;

    /**
     * Indicates whether Application Insights can listen to CloudWatch events for the application resources.
     */
    CWEMonitorEnabled?: boolean;

    /**
     * When set to true, creates opsItems for any problems detected on an application.
     */
    OpsCenterEnabled?: boolean;

    /**
     * The SNS topic provided to Application Insights that is associated to the created opsItem.
     */
    OpsItemSNSTopicArn?: string;

    /**
     * Application Insights sends notifications to this SNS topic whenever there is a problem update in the associated application.
     */
    SNSNotificationArn?: string;

    /**
     * The tags of Application Insights application.
     */
    Tags?: TagType[];

    /**
     * The custom grouped components.
     */
    CustomComponents?: CustomComponentType[];

    /**
     * The log pattern sets.
     */
    LogPatternSets?: LogPatternSetType[];

    /**
     * If set to true, application will be configured with recommended monitoring configuration.
     */
    AutoConfigurationEnabled?: boolean;

    /**
     * The monitoring settings of the components.
     */
    ComponentMonitoringSettings?: ComponentMonitoringSettingType[];

    /**
     * The grouping type of the application
     * Create-only property
     */
    GroupingType?: string;

    /**
     * If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing
     */
    AttachMissingPermission?: boolean;
  };
}
