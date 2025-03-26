/**
 * TypeScript definitions for AWS::AppStream::ApplicationFleetAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::ApplicationFleetAssociation
 */
export namespace AWS_AppStream_ApplicationFleetAssociation {
  export type ArnType = {};

  /**
   * Resource Type definition for AWS::AppStream::ApplicationFleetAssociation
   */
  export type ApplicationFleetAssociationResourceType = {
    /**
     * Create-only property
     */
    FleetName: string;

    /**
     * Create-only property
     */
    ApplicationArn: ArnType;
  };
}
