/**
 * TypeScript definitions for AWS::SageMaker::Endpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Endpoint
 */
export namespace AWS_SageMaker_Endpoint {
  export type CapacitySizeType = {
    Value: number;

    Type: string;
  };

  export type RollingUpdatePolicyType = {
    MaximumExecutionTimeoutInSeconds?: number;

    MaximumBatchSize: CapacitySizeType;

    WaitIntervalInSeconds: number;

    RollbackMaximumBatchSize?: CapacitySizeType;
  };

  export type AlarmType = {
    AlarmName: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type AutoRollbackConfigType = {
    Alarms: AlarmType[];
  };

  export type DeploymentConfigType = {
    AutoRollbackConfiguration?: AutoRollbackConfigType;

    RollingUpdatePolicy?: RollingUpdatePolicyType;

    BlueGreenUpdatePolicy?: BlueGreenUpdatePolicyType;
  };

  export type BlueGreenUpdatePolicyType = {
    MaximumExecutionTimeoutInSeconds?: number;

    TerminationWaitInSeconds?: number;

    TrafficRoutingConfiguration: TrafficRoutingConfigType;
  };

  export type TrafficRoutingConfigType = {
    Type: string;

    LinearStepSize?: CapacitySizeType;

    CanarySize?: CapacitySizeType;

    WaitIntervalInSeconds?: number;
  };

  export type VariantPropertyType = {
    VariantPropertyType?: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::Endpoint
   */
  export type EndpointResourceType = {
    RetainAllVariantProperties?: boolean;

    /**
     * Create-only property
     */
    EndpointName?: string;

    ExcludeRetainedVariantProperties?: VariantPropertyType[];

    EndpointConfigName: string;

    /**
     * Read-only property
     */
    Id?: string;

    DeploymentConfig?: DeploymentConfigType;

    RetainDeploymentConfig?: boolean;

    Tags?: TagType[];
  };
}
