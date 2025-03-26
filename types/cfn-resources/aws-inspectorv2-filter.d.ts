/**
 * TypeScript definitions for AWS::InspectorV2::Filter
 * Generated from CloudFormation Resource Schema
 */

/**
 * Inspector Filter resource schema
 */
export namespace AWS_InspectorV2_Filter {
  export type StringComparisonType = {};

  export type StringInputType = {};

  export type StringFilterType = {
    Comparison: StringComparisonType;

    Value: StringInputType;
  };

  export type StringFilterListType = {};

  export type TimestampType = {};

  export type DateFilterType = {
    EndInclusive?: TimestampType;

    StartInclusive?: TimestampType;
  };

  export type DateFilterListType = {};

  export type PortType = {};

  export type PortRangeFilterType = {
    BeginInclusive?: PortType;

    EndInclusive?: PortType;
  };

  export type PortRangeFilterListType = {};

  export type NumberFilterType = {
    LowerInclusive?: number;

    UpperInclusive?: number;
  };

  export type NumberFilterListType = {};

  export type MapComparisonType = {};

  export type MapFilterType = {
    Comparison: MapComparisonType;

    Key?: MapKeyType;

    Value?: MapValueType;
  };

  export type MapFilterListType = {};

  export type PackageFilterType = {
    Architecture?: StringFilterType;

    Epoch?: NumberFilterType;

    Name?: StringFilterType;

    Release?: StringFilterType;

    SourceLayerHash?: StringFilterType;

    Version?: StringFilterType;
  };

  export type PackageFilterListType = {};

  export type FilterCriteriaType = {
    AwsAccountId?: StringFilterListType;

    ComponentId?: StringFilterListType;

    ComponentType?: StringFilterListType;

    Ec2InstanceImageId?: StringFilterListType;

    Ec2InstanceSubnetId?: StringFilterListType;

    Ec2InstanceVpcId?: StringFilterListType;

    EcrImageArchitecture?: StringFilterListType;

    EcrImageHash?: StringFilterListType;

    EcrImageTags?: StringFilterListType;

    EcrImagePushedAt?: DateFilterListType;

    EcrImageRegistry?: StringFilterListType;

    EcrImageRepositoryName?: StringFilterListType;

    FindingArn?: StringFilterListType;

    FindingStatus?: StringFilterListType;

    FindingType?: StringFilterListType;

    FirstObservedAt?: DateFilterListType;

    InspectorScore?: NumberFilterListType;

    LastObservedAt?: DateFilterListType;

    NetworkProtocol?: StringFilterListType;

    PortRange?: PortRangeFilterListType;

    RelatedVulnerabilities?: StringFilterListType;

    ResourceId?: StringFilterListType;

    ResourceTags?: MapFilterListType;

    ResourceType?: StringFilterListType;

    Severity?: StringFilterListType;

    Title?: StringFilterListType;

    UpdatedAt?: DateFilterListType;

    VendorSeverity?: StringFilterListType;

    VulnerabilityId?: StringFilterListType;

    VulnerabilitySource?: StringFilterListType;

    VulnerablePackages?: PackageFilterListType;
  };

  export type FilterActionType = {};

  export type MapKeyType = {};

  export type MapValueType = {};

  /**
   * Inspector Filter resource schema
   */
  export type FilterResourceType = {
    /**
     * Findings filter name.
     */
    Name: string;

    /**
     * Findings filter description.
     */
    Description?: string;

    /**
     * Findings filter criteria.
     */
    FilterCriteria: FilterCriteriaType;

    /**
     * Findings filter action.
     */
    FilterAction: FilterActionType;

    /**
     * Findings filter ARN.
     * Read-only property
     */
    Arn?: string;
  };
}
