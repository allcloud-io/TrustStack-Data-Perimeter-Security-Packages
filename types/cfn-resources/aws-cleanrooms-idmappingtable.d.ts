/**
 * TypeScript definitions for AWS::CleanRooms::IdMappingTable
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents an association between an ID mapping workflow and a collaboration
 */
export namespace AWS_CleanRooms_IdMappingTable {
  export type UUIDType = {};

  export type IdMappingTableInputReferenceConfigType = {
    InputReferenceArn: string;

    ManageResourcePolicies: boolean;
  };

  export type IdMappingTableInputSourceType = {
    IdNamespaceAssociationId: string;

    Type: string;
  };

  export type IdMappingTableInputReferencePropertiesType = {
    IdMappingTableInputSource: IdMappingTableInputSourceType[];
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Represents an association between an ID mapping workflow and a collaboration
   */
  export type IdMappingTableResourceType = {
    /**
     * Read-only property
     */
    IdMappingTableIdentifier?: UUIDType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    InputReferenceConfig: IdMappingTableInputReferenceConfigType;

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

    Description?: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    InputReferenceProperties?: IdMappingTableInputReferencePropertiesType;

    KmsKeyArn?: string;

    Tags?: TagType[];
  };
}
