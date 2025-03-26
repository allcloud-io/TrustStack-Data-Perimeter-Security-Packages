/**
 * TypeScript definitions for AWS::AppSync::SourceApiAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::SourceApiAssociation
 */
export namespace AWS_AppSync_SourceApiAssociation {
  export type SourceApiAssociationConfigType = {
    /**
     * Configuration of the merged behavior for the association. For example when it could be auto or has to be manual.
     */
    MergeType?: string;
  };

  /**
   * Resource Type definition for AWS::AppSync::SourceApiAssociation
   */
  export type SourceApiAssociationResourceType = {
    /**
     * Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
     * Create-only property
     */
    SourceApiIdentifier?: string;

    /**
     * Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
     * Create-only property
     */
    MergedApiIdentifier?: string;

    /**
     * Description of the SourceApiAssociation.
     */
    Description?: string;

    /**
     * Customized configuration for SourceApiAssociation.
     */
    SourceApiAssociationConfig?: SourceApiAssociationConfigType;

    /**
     * Id of the SourceApiAssociation.
     * Read-only property
     */
    AssociationId?: string;

    /**
     * ARN of the SourceApiAssociation.
     * Read-only property
     */
    AssociationArn?: string;

    /**
     * GraphQLApiId of the source API in the association.
     * Read-only property
     */
    SourceApiId?: string;

    /**
     * ARN of the source API in the association.
     * Read-only property
     */
    SourceApiArn?: string;

    /**
     * GraphQLApiId of the Merged API in the association.
     * Read-only property
     */
    MergedApiId?: string;

    /**
     * ARN of the Merged API in the association.
     * Read-only property
     */
    MergedApiArn?: string;

    /**
     * Current status of SourceApiAssociation.
     * Read-only property
     */
    SourceApiAssociationStatus?: string;

    /**
     * Current SourceApiAssociation status details.
     * Read-only property
     */
    SourceApiAssociationStatusDetail?: string;

    /**
     * Date of last schema successful merge.
     * Read-only property
     */
    LastSuccessfulMergeDate?: string;
  };
}
