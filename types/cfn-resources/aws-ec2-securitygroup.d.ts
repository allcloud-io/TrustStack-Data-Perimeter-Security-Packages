/**
 * TypeScript definitions for AWS::EC2::SecurityGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::SecurityGroup
 */
export namespace AWS_EC2_SecurityGroup {
  export type IngressType = {
    CidrIp?: string;

    CidrIpv6?: string;

    Description?: string;

    FromPort?: number;

    SourceSecurityGroupName?: string;

    ToPort?: number;

    SourceSecurityGroupOwnerId?: string;

    IpProtocol: string;

    SourceSecurityGroupId?: string;

    SourcePrefixListId?: string;
  };

  export type EgressType = {
    CidrIp?: string;

    CidrIpv6?: string;

    Description?: string;

    FromPort?: number;

    ToPort?: number;

    IpProtocol: string;

    DestinationSecurityGroupId?: string;

    DestinationPrefixListId?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::SecurityGroup
   */
  export type SecurityGroupResourceType = {
    /**
     * A description for the security group.
     * Create-only property
     */
    GroupDescription: string;

    /**
     * The name of the security group.
     * Create-only property
     */
    GroupName?: string;

    /**
     * The ID of the VPC for the security group.
     * Create-only property
     */
    VpcId?: string;

    /**
     * The group name or group ID depending on whether the SG is created in default or specific VPC
     * Read-only property
     */
    Id?: string;

    /**
     * The inbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.
     */
    SecurityGroupIngress?: IngressType[];

    /**
     * [VPC only] The outbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.
     */
    SecurityGroupEgress?: EgressType[];

    /**
     * Any tags assigned to the security group.
     */
    Tags?: TagType[];

    /**
     * The group ID of the specified security group.
     * Read-only property
     */
    GroupId?: string;
  };
}
