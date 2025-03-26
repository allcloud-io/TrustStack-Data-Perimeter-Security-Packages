/**
 * TypeScript definitions for AWS::ECS::CapacityProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ECS::CapacityProvider.
 */
export namespace AWS_ECS_CapacityProvider {
  export type AutoScalingGroupProviderType = {
    ManagedScaling?: ManagedScalingType;

    AutoScalingGroupArn: string;

    ManagedTerminationProtection?: string;

    ManagedDraining?: string;
  };

  /**
   * The managed scaling settings for the Auto Scaling group capacity provider.
   */
  export type ManagedScalingType = {
    Status?: string;

    MinimumScalingStepSize?: number;

    InstanceWarmupPeriod?: number;

    TargetCapacity?: number;

    MaximumScalingStepSize?: number;
  };

  export type TagType = {
    Value?: string;

    Key?: string;
  };

  /**
   * Resource Type definition for AWS::ECS::CapacityProvider.
   */
  export type CapacityProviderResourceType = {
    AutoScalingGroupProvider?: AutoScalingGroupProviderType;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
