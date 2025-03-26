/**
 * TypeScript definitions for AWS::GuardDuty::Detector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GuardDuty::Detector
 */
export namespace AWS_GuardDuty_Detector {
  export type TagItemType = {
    Key: string;

    Value: string;
  };

  export type CFNS3LogsConfigurationType = {
    Enable: boolean;
  };

  export type CFNKubernetesAuditLogsConfigurationType = {
    Enable: boolean;
  };

  export type CFNKubernetesConfigurationType = {
    AuditLogs: CFNKubernetesAuditLogsConfigurationType;
  };

  export type CFNDataSourceConfigurationsType = {
    S3Logs?: CFNS3LogsConfigurationType;

    Kubernetes?: CFNKubernetesConfigurationType;

    MalwareProtection?: CFNMalwareProtectionConfigurationType;
  };

  export type CFNMalwareProtectionConfigurationType = {
    ScanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfigurationType;
  };

  export type CFNScanEc2InstanceWithFindingsConfigurationType = {
    EbsVolumes?: boolean;
  };

  export type CFNFeatureConfigurationType = {
    Name: string;

    Status: string;

    AdditionalConfiguration?: CFNFeatureAdditionalConfigurationType[];
  };

  export type CFNFeatureAdditionalConfigurationType = {
    Name?: string;

    Status?: string;
  };

  /**
   * Resource Type definition for AWS::GuardDuty::Detector
   */
  export type DetectorResourceType = {
    FindingPublishingFrequency?: string;

    Enable: boolean;

    DataSources?: CFNDataSourceConfigurationsType;

    Features?: CFNFeatureConfigurationType[];

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagItemType[];
  };
}
