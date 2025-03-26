/**
 * TypeScript definitions for AWS::WorkSpacesWeb::NetworkSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::NetworkSettings Resource Type
 */
export namespace AWS_WorkSpacesWeb_NetworkSettings {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::NetworkSettings Resource Type
   */
  export type NetworkSettingsResourceType = {
    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    /**
     * Read-only property
     */
    NetworkSettingsArn?: string;

    SecurityGroupIds: string[];

    SubnetIds: string[];

    Tags?: TagType[];

    VpcId: string;
  };
}
