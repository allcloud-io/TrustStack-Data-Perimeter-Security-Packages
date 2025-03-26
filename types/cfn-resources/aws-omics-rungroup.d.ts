/**
 * TypeScript definitions for AWS::Omics::RunGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Omics::RunGroup Resource Type
 */
export namespace AWS_Omics_RunGroup {
  /**
   * A map of resource tags
   */
  export type TagMapType = {};

  /**
   * Definition of AWS::Omics::RunGroup Resource Type
   */
  export type RunGroupResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Read-only property
     */
    Id?: string;

    MaxCpus?: number;

    MaxGpus?: number;

    MaxDuration?: number;

    MaxRuns?: number;

    Name?: string;

    Tags?: TagMapType;
  };
}
