/**
 * TypeScript definitions for AWS::PCAConnectorAD::DirectoryRegistration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::PCAConnectorAD::DirectoryRegistration Resource Type
 */
export namespace AWS_PCAConnectorAD_DirectoryRegistration {
  export type TagsType = {};

  /**
   * Definition of AWS::PCAConnectorAD::DirectoryRegistration Resource Type
   */
  export type DirectoryRegistrationResourceType = {
    /**
     * Create-only property
     */
    DirectoryId: string;

    /**
     * Read-only property
     */
    DirectoryRegistrationArn?: string;

    Tags?: TagsType;
  };
}
