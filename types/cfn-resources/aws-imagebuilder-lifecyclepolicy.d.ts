/**
 * TypeScript definitions for AWS::ImageBuilder::LifecyclePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::LifecyclePolicy
 */
export namespace AWS_ImageBuilder_LifecyclePolicy {
  /**
   * The policy detail of the lifecycle policy.
   */
  export type PolicyDetailType = {
    Action: ActionType;

    Filter: FilterType;

    ExclusionRules?: ExclusionRulesType;
  };

  /**
   * The action of the policy detail.
   */
  export type ActionType = {
    /**
     * The action type of the policy detail.
     */
    Type: string;

    IncludeResources?: IncludeResourcesType;
  };

  /**
   * The filters to apply of the policy detail.
   */
  export type FilterType = {
    /**
     * The filter type.
     */
    Type: string;

    /**
     * The filter value.
     */
    Value: number;

    /**
     * The value's time unit.
     */
    Unit?: TimeUnitType;

    /**
     * The minimum number of Image Builder resources to retain.
     */
    RetainAtLeast?: number;
  };

  /**
   * The exclusion rules to apply of the policy detail.
   */
  export type ExclusionRulesType = {
    /**
     * The Image Builder tags to filter on.
     */
    TagMap?: Record<string, any>;

    Amis?: AmiExclusionRulesType;
  };

  /**
   * A time unit.
   */
  export type TimeUnitType = {};

  /**
   * The included resources of the policy detail.
   */
  export type IncludeResourcesType = {
    /**
     * Use to configure lifecycle actions on AMIs.
     */
    Amis?: boolean;

    /**
     * Use to configure lifecycle actions on containers.
     */
    Containers?: boolean;

    /**
     * Use to configure lifecycle actions on snapshots.
     */
    Snapshots?: boolean;
  };

  /**
   * The AMI exclusion rules for the policy detail.
   */
  export type AmiExclusionRulesType = {
    /**
     * Use to apply lifecycle policy actions on whether the AMI is public.
     */
    IsPublic?: boolean;

    /**
     * Use to apply lifecycle policy actions on AMIs distributed to a set of regions.
     */
    Regions?: string[];

    /**
     * Use to apply lifecycle policy actions on AMIs shared with a set of regions.
     */
    SharedAccounts?: string[];

    /**
     * Use to apply lifecycle policy actions on AMIs launched before a certain time.
     */
    LastLaunched?: LastLaunchedType;

    /**
     * The AMIs to select by tag.
     */
    TagMap?: Record<string, any>;
  };

  /**
   * The last launched time of a resource.
   */
  export type LastLaunchedType = {
    /**
     * The last launched value.
     */
    Value: number;

    /**
     * The value's time unit.
     */
    Unit: TimeUnitType;
  };

  /**
   * The resource selection for the lifecycle policy.
   */
  export type ResourceSelectionType = {
    /**
     * The recipes to select.
     */
    Recipes?: RecipeSelectionType[];

    /**
     * The Image Builder resources to select by tag.
     */
    TagMap?: Record<string, any>;
  };

  /**
   * The recipe to apply the lifecycle policy for.
   */
  export type RecipeSelectionType = {
    /**
     * The recipe name.
     */
    Name: string;

    /**
     * The recipe version.
     */
    SemanticVersion: string;
  };

  /**
   * Resource schema for AWS::ImageBuilder::LifecyclePolicy
   */
  export type LifecyclePolicyResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the lifecycle policy.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the lifecycle policy.
     * Create-only property
     */
    Name: string;

    /**
     * The description of the lifecycle policy.
     */
    Description?: string;

    /**
     * The status of the lifecycle policy.
     */
    Status?: string;

    /**
     * The execution role of the lifecycle policy.
     */
    ExecutionRole: string;

    /**
     * The resource type of the lifecycle policy.
     */
    ResourceType: string;

    /**
     * The policy details of the lifecycle policy.
     */
    PolicyDetails: PolicyDetailType[];

    /**
     * The resource selection of the lifecycle policy.
     */
    ResourceSelection: ResourceSelectionType;

    /**
     * The tags associated with the lifecycle policy.
     */
    Tags?: Record<string, any>;
  };
}
