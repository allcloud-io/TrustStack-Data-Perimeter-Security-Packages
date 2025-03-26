/**
 * TypeScript definitions for AWS::WorkSpaces::ConnectionAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::WorkSpaces::ConnectionAlias
 */
export namespace AWS_WorkSpaces_ConnectionAlias {
  export type ConnectionAliasAssociationType = {
    AssociationStatus?: string;

    AssociatedAccountId?: string;

    ResourceId?: string;

    ConnectionIdentifier?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::WorkSpaces::ConnectionAlias
   */
  export type ConnectionAliasResourceType = {
    /**
     * Read-only property
     */
    Associations?: ConnectionAliasAssociationType[];

    /**
     * Read-only property
     */
    AliasId?: string;

    /**
     * Create-only property
     */
    ConnectionString: string;

    /**
     * Read-only property
     */
    ConnectionAliasState?: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
