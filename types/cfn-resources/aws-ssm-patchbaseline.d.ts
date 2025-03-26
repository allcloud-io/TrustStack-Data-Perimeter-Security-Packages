/**
 * TypeScript definitions for AWS::SSM::PatchBaseline
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SSM::PatchBaseline
 */
export namespace AWS_SSM_PatchBaseline {
  /**
   * The patch filter group that defines the criteria for the rule.
   */
  export type PatchFilterGroupType = {
    PatchFilters?: PatchFilterType[];
  };

  /**
   * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
   */
  export type PatchSourceType = {
    Products?: string[];

    Configuration?: string;

    Name?: string;
  };

  /**
   * Metadata that you assign to your AWS resources.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A set of rules defining the approval rules for a patch baseline.
   */
  export type RuleGroupType = {
    PatchRules?: RuleType[];
  };

  /**
   * Defines an approval rule for a patch baseline.
   */
  export type RuleType = {
    ApproveUntilDate?: string;

    EnableNonSecurity?: boolean;

    PatchFilterGroup?: PatchFilterGroupType;

    ApproveAfterDays?: number;

    ComplianceLevel?: string;
  };

  /**
   * Defines which patches should be included in a patch baseline.
   */
  export type PatchFilterType = {
    Values?: string[];

    Key?: string;
  };

  /**
   * Resource Type definition for AWS::SSM::PatchBaseline
   */
  export type PatchBaselineResourceType = {
    /**
     * The ID of the patch baseline.
     * Read-only property
     */
    Id?: string;

    /**
     * Set the baseline as default baseline. Only registering to default patch baseline is allowed.
     * Default: false
     */
    DefaultBaseline?: boolean;

    /**
     * Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
     * Default: "WINDOWS"
     * Create-only property
     */
    OperatingSystem?: string;

    /**
     * The description of the patch baseline.
     */
    Description?: string;

    ApprovalRules?: RuleGroupType;

    /**
     * Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
     */
    Sources?: PatchSourceType[];

    /**
     * The name of the patch baseline.
     */
    Name: string;

    /**
     * A list of explicitly rejected patches for the baseline.
     */
    RejectedPatches?: string[];

    /**
     * A list of explicitly approved patches for the baseline.
     */
    ApprovedPatches?: string[];

    /**
     * The action for Patch Manager to take on patches included in the RejectedPackages list.
     * Default: "ALLOW_AS_DEPENDENCY"
     */
    RejectedPatchesAction?: string;

    /**
     * PatchGroups is used to associate instances with a specific patch baseline
     */
    PatchGroups?: string[];

    /**
     * Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.
     * Default: "UNSPECIFIED"
     */
    ApprovedPatchesComplianceLevel?: string;

    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
     * Default: false
     */
    ApprovedPatchesEnableNonSecurity?: boolean;

    /**
     * A set of global filters used to include patches in the baseline.
     */
    GlobalFilters?: PatchFilterGroupType;

    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.
     */
    Tags?: TagType[];
  };
}
