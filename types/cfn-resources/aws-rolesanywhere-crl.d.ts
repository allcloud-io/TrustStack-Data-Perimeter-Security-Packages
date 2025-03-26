/**
 * TypeScript definitions for AWS::RolesAnywhere::CRL
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RolesAnywhere::CRL Resource Type
 */
export namespace AWS_RolesAnywhere_CRL {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::RolesAnywhere::CRL Resource Type
   */
  export type CRLResourceType = {
    CrlData: string;

    /**
     * Read-only property
     */
    CrlId?: string;

    Enabled?: boolean;

    Name: string;

    TrustAnchorArn?: string;

    Tags?: TagType[];
  };
}
