/**
 * TypeScript definitions for AWS::SecurityHub::FindingAggregator
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SecurityHub::FindingAggregator` resource enables cross-Region aggregation. When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see Cross-Region aggregation in the *User Guide*
 * This resource must be created in the Region that you want to designate as your aggregation Region.
 * Cross-Region aggregation is also a prerequisite for using central configuration in ASH.
 */
export namespace AWS_SecurityHub_FindingAggregator {
  export type RegionType = {};

  /**
   * The `AWS::SecurityHub::FindingAggregator` resource enables cross-Region aggregation. When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see Cross-Region aggregation in the *User Guide*
   * This resource must be created in the Region that you want to designate as your aggregation Region.
   * Cross-Region aggregation is also a prerequisite for using central configuration in ASH.
   */
  export type FindingAggregatorResourceType = {
    /**
     * Read-only property
     */
    FindingAggregatorArn?: string;

    /**
     * Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
     * The selected option also determines how to use the Regions provided in the Regions list.
     * In CFN, the options for this property are as follows:
     * +   `ALL_REGIONS` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
     * +   `ALL_REGIONS_EXCEPT_SPECIFIED` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the `Regions` parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
     * +   `SPECIFIED_REGIONS` - Indicates to aggregate findings only from the Regions listed in the `Regions` parameter. Security Hub does not automatically aggregate findings from new Regions.
     */
    RegionLinkingMode: string;

    /**
     * If `RegionLinkingMode` is `ALL_REGIONS_EXCEPT_SPECIFIED`, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.
     * If `RegionLinkingMode` is `SPECIFIED_REGIONS`, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
     */
    Regions?: RegionType[];

    /**
     * Read-only property
     */
    FindingAggregationRegion?: RegionType;
  };
}
