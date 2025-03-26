/**
 * TypeScript definitions for AWS::ResourceExplorer2::DefaultViewAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ResourceExplorer2::DefaultViewAssociation Resource Type
 */
export namespace AWS_ResourceExplorer2_DefaultViewAssociation {
  /**
   * Definition of AWS::ResourceExplorer2::DefaultViewAssociation Resource Type
   */
  export type DefaultViewAssociationResourceType = {
    ViewArn: string;

    /**
     * The AWS principal that the default view is associated with, used as the unique identifier for this resource.
     * Read-only property
     */
    AssociatedAwsPrincipal?: string;
  };
}
