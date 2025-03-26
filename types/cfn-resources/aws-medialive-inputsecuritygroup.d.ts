/**
 * TypeScript definitions for AWS::MediaLive::InputSecurityGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaLive::InputSecurityGroup
 */
export namespace AWS_MediaLive_InputSecurityGroup {
  export type InputWhitelistRuleCidrType = {
    Cidr?: string;
  };

  /**
   * Resource Type definition for AWS::MediaLive::InputSecurityGroup
   */
  export type InputSecurityGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    WhitelistRules?: InputWhitelistRuleCidrType[];

    /**
     * Create-only property
     */
    Tags?: Record<string, any>;
  };
}
