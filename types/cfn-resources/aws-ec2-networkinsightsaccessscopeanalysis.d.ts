/**
 * TypeScript definitions for AWS::EC2::NetworkInsightsAccessScopeAnalysis
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EC2::NetworkInsightsAccessScopeAnalysis
 */
export namespace AWS_EC2_NetworkInsightsAccessScopeAnalysis {
  export type TagType = {
    Key: string;

    Value?: string;
  };

  /**
   * Resource schema for AWS::EC2::NetworkInsightsAccessScopeAnalysis
   */
  export type NetworkInsightsAccessScopeAnalysisResourceType = {
    /**
     * Read-only property
     */
    NetworkInsightsAccessScopeAnalysisId?: string;

    /**
     * Read-only property
     */
    NetworkInsightsAccessScopeAnalysisArn?: string;

    /**
     * Create-only property
     */
    NetworkInsightsAccessScopeId: string;

    /**
     * Read-only property
     */
    Status?: string;

    /**
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * Read-only property
     */
    StartDate?: string;

    /**
     * Read-only property
     */
    EndDate?: string;

    /**
     * Read-only property
     */
    FindingsFound?: string;

    /**
     * Read-only property
     */
    AnalyzedEniCount?: number;

    Tags?: TagType[];
  };
}
