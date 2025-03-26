/**
 * TypeScript definitions for AWS::PCAConnectorSCEP::Challenge
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a SCEP Challenge that is used for certificate enrollment
 */
export namespace AWS_PCAConnectorSCEP_Challenge {
  export type TagsType = {};

  export type UnitType = {};

  /**
   * Represents a SCEP Challenge that is used for certificate enrollment
   */
  export type ChallengeResourceType = {
    /**
     * Read-only property
     */
    ChallengeArn?: string;

    /**
     * Create-only property
     */
    ConnectorArn: string;

    Tags?: TagsType;
  };
}
