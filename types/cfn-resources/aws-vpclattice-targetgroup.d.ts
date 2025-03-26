/**
 * TypeScript definitions for AWS::VpcLattice::TargetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
 */
export namespace AWS_VpcLattice_TargetGroup {
  export type HealthCheckConfigType = {
    Enabled?: boolean;

    Protocol?: string;

    ProtocolVersion?: string;

    Port?: number;

    Path?: string;

    HealthCheckIntervalSeconds?: number;

    HealthCheckTimeoutSeconds?: number;

    HealthyThresholdCount?: number;

    UnhealthyThresholdCount?: number;

    Matcher?: MatcherType;
  };

  export type MatcherType = {
    HttpCode: string;
  };

  export type TargetGroupConfigType = {
    Port?: number;

    Protocol?: string;

    ProtocolVersion?: string;

    IpAddressType?: string;

    LambdaEventStructureVersion?: string;

    VpcIdentifier?: string;

    HealthCheck?: HealthCheckConfigType;
  };

  export type TargetType = {
    Id: string;

    Port?: number;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
   */
  export type TargetGroupResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    Config?: TargetGroupConfigType;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LastUpdatedAt?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Read-only property
     */
    Status?: string;

    /**
     * Create-only property
     */
    Type: string;

    /**
     * Default: []
     */
    Targets?: TargetType[];

    Tags?: TagType[];
  };
}
