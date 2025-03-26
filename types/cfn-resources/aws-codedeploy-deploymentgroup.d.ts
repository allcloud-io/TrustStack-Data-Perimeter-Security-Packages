/**
 * TypeScript definitions for AWS::CodeDeploy::DeploymentGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentGroup
 */
export namespace AWS_CodeDeploy_DeploymentGroup {
  export type OnPremisesTagSetType = {
    OnPremisesTagSetList?: OnPremisesTagSetListObjectType[];
  };

  export type DeploymentStyleType = {
    DeploymentOption?: string;

    DeploymentType?: string;
  };

  export type BlueGreenDeploymentConfigurationType = {
    GreenFleetProvisioningOption?: GreenFleetProvisioningOptionType;

    DeploymentReadyOption?: DeploymentReadyOptionType;

    TerminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOptionType;
  };

  export type TagFilterType = {
    Value?: string;

    Type?: string;

    Key?: string;
  };

  export type TriggerConfigType = {
    TriggerTargetArn?: string;

    TriggerName?: string;

    TriggerEvents?: string[];
  };

  export type GitHubLocationType = {
    Repository: string;

    CommitId: string;
  };

  export type DeploymentType = {
    Description?: string;

    Revision: RevisionLocationType;

    IgnoreApplicationStopFailures?: boolean;
  };

  export type ELBInfoType = {
    Name?: string;
  };

  export type EC2TagSetListObjectType = {
    Ec2TagGroup?: EC2TagFilterType[];
  };

  export type S3LocationType = {
    BundleType?: string;

    Bucket: string;

    ETag?: string;

    Version?: string;

    Key: string;
  };

  export type AutoRollbackConfigurationType = {
    Events?: string[];

    Enabled?: boolean;
  };

  export type DeploymentReadyOptionType = {
    WaitTimeInMinutes?: number;

    ActionOnTimeout?: string;
  };

  export type EC2TagFilterType = {
    Value?: string;

    Type?: string;

    Key?: string;
  };

  export type RevisionLocationType = {
    S3Location?: S3LocationType;

    GitHubLocation?: GitHubLocationType;

    RevisionType?: string;
  };

  export type GreenFleetProvisioningOptionType = {
    Action?: string;
  };

  export type LoadBalancerInfoType = {
    TargetGroupInfoList?: TargetGroupInfoType[];

    ElbInfoList?: ELBInfoType[];

    TargetGroupPairInfoList?: TargetGroupPairInfoType[];
  };

  export type AlarmConfigurationType = {
    Alarms?: AlarmType[];

    IgnorePollAlarmFailure?: boolean;

    Enabled?: boolean;
  };

  export type EC2TagSetType = {
    Ec2TagSetList?: EC2TagSetListObjectType[];
  };

  export type TrafficRouteType = {
    ListenerArns?: string[];
  };

  export type ECSServiceType = {
    ServiceName: string;

    ClusterName: string;
  };

  export type TargetGroupPairInfoType = {
    ProdTrafficRoute?: TrafficRouteType;

    TestTrafficRoute?: TrafficRouteType;

    TargetGroups?: TargetGroupInfoType[];
  };

  export type AlarmType = {
    Name?: string;
  };

  export type TargetGroupInfoType = {
    Name?: string;
  };

  export type OnPremisesTagSetListObjectType = {
    OnPremisesTagGroup?: TagFilterType[];
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type BlueInstanceTerminationOptionType = {
    TerminationWaitTimeInMinutes?: number;

    Action?: string;
  };

  /**
   * Resource Type definition for AWS::CodeDeploy::DeploymentGroup
   */
  export type DeploymentGroupResourceType = {
    OnPremisesTagSet?: OnPremisesTagSetType;

    /**
     * Create-only property
     */
    ApplicationName: string;

    DeploymentStyle?: DeploymentStyleType;

    ServiceRoleArn: string;

    BlueGreenDeploymentConfiguration?: BlueGreenDeploymentConfigurationType;

    AutoScalingGroups?: string[];

    Ec2TagSet?: EC2TagSetType;

    OutdatedInstancesStrategy?: string;

    TriggerConfigurations?: TriggerConfigType[];

    Deployment?: DeploymentType;

    DeploymentConfigName?: string;

    AlarmConfiguration?: AlarmConfigurationType;

    Ec2TagFilters?: EC2TagFilterType[];

    TerminationHookEnabled?: boolean;

    ECSServices?: ECSServiceType[];

    AutoRollbackConfiguration?: AutoRollbackConfigurationType;

    LoadBalancerInfo?: LoadBalancerInfoType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    DeploymentGroupName?: string;

    Tags?: TagType[];

    OnPremisesInstanceTagFilters?: TagFilterType[];
  };
}
