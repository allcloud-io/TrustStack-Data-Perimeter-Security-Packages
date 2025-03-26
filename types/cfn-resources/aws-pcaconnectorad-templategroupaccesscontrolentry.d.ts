/**
 * TypeScript definitions for AWS::PCAConnectorAD::TemplateGroupAccessControlEntry
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::PCAConnectorAD::TemplateGroupAccessControlEntry Resource Type
 */
export namespace AWS_PCAConnectorAD_TemplateGroupAccessControlEntry {
  export type AccessRightType = {};

  export type AccessRightsType = {
    Enroll?: AccessRightType;

    AutoEnroll?: AccessRightType;
  };

  /**
   * Definition of AWS::PCAConnectorAD::TemplateGroupAccessControlEntry Resource Type
   */
  export type TemplateGroupAccessControlEntryResourceType = {
    AccessRights: AccessRightsType;

    GroupDisplayName: string;

    /**
     * Create-only property
     */
    GroupSecurityIdentifier?: string;

    /**
     * Create-only property
     */
    TemplateArn?: string;
  };
}
