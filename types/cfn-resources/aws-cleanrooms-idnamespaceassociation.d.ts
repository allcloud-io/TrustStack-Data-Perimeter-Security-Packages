/**
 * TypeScript definitions for AWS::CleanRooms::IdNamespaceAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents an association between an ID namespace and a collaboration
 */
export namespace AWS_CleanRooms_IdNamespaceAssociation {
  export type UUIDType = {};

  export type DocumentType = {};

  export type IdNamespaceAssociationInputReferenceConfigType = {
    InputReferenceArn: string;

    ManageResourcePolicies: boolean;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type IdMappingConfigType = {
    AllowUseAsDimensionColumn: boolean;
  };

  export type IdNamespaceAssociationInputReferencePropertiesType = {
    IdNamespaceType?: string;

    IdMappingWorkflowsSupported?: DocumentType[];
  };

  /**
   * Represents an association between an ID namespace and a collaboration
   */
  export type IdNamespaceAssociationResourceType = {
    /**
     * Read-only property
     */
    IdNamespaceAssociationIdentifier?: UUIDType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    MembershipIdentifier: UUIDType;

    /**
     * Read-only property
     */
    MembershipArn?: string;

    /**
     * Read-only property
     */
    CollaborationIdentifier?: UUIDType;

    /**
     * Read-only property
     */
    CollaborationArn?: string;

    /**
     * Create-only property
     */
    InputReferenceConfig: IdNamespaceAssociationInputReferenceConfigType;

    Tags?: TagType[];

    Name: string;

    Description?: string;

    IdMappingConfig?: IdMappingConfigType;

    /**
     * Read-only property
     */
    InputReferenceProperties?: IdNamespaceAssociationInputReferencePropertiesType;
  };
}
