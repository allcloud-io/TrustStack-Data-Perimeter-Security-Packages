/**
 * TypeScript definitions for AWS::ManagedBlockchain::Member
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ManagedBlockchain::Member
 */
export namespace AWS_ManagedBlockchain_Member {
  export type MemberConfigurationType = {
    Description?: string;

    MemberFrameworkConfiguration?: MemberFrameworkConfigurationType;

    Name: string;
  };

  export type NetworkFabricConfigurationType = {
    Edition: string;
  };

  export type ApprovalThresholdPolicyType = {
    ThresholdComparator?: string;

    ThresholdPercentage?: number;

    ProposalDurationInHours?: number;
  };

  export type NetworkConfigurationType = {
    Description?: string;

    FrameworkVersion: string;

    VotingPolicy: VotingPolicyType;

    Framework: string;

    Name: string;

    NetworkFrameworkConfiguration?: NetworkFrameworkConfigurationType;
  };

  export type MemberFabricConfigurationType = {
    AdminUsername: string;

    AdminPassword: string;
  };

  export type VotingPolicyType = {
    ApprovalThresholdPolicy?: ApprovalThresholdPolicyType;
  };

  export type MemberFrameworkConfigurationType = {
    MemberFabricConfiguration?: MemberFabricConfigurationType;
  };

  export type NetworkFrameworkConfigurationType = {
    NetworkFabricConfiguration?: NetworkFabricConfigurationType;
  };

  /**
   * Resource Type definition for AWS::ManagedBlockchain::Member
   */
  export type MemberResourceType = {
    /**
     * Read-only property
     */
    MemberId?: string;

    NetworkConfiguration?: NetworkConfigurationType;

    MemberConfiguration: MemberConfigurationType;

    NetworkId?: string;

    InvitationId?: string;
  };
}
