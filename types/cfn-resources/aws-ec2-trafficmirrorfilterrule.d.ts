/**
 * TypeScript definitions for AWS::EC2::TrafficMirrorFilterRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilterRule
 */
export namespace AWS_EC2_TrafficMirrorFilterRule {
  export type TrafficMirrorPortRangeType = {
    ToPort: number;

    FromPort: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TrafficMirrorFilterRule
   */
  export type TrafficMirrorFilterRuleResourceType = {
    DestinationPortRange?: TrafficMirrorPortRangeType;

    Description?: string;

    SourcePortRange?: TrafficMirrorPortRangeType;

    RuleAction: string;

    SourceCidrBlock: string;

    RuleNumber: number;

    DestinationCidrBlock: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    TrafficMirrorFilterId: string;

    TrafficDirection: string;

    Protocol?: number;

    Tags?: TagType[];
  };
}
