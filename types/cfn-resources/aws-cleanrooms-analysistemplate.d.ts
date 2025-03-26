/**
 * TypeScript definitions for AWS::CleanRooms::AnalysisTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a stored analysis within a collaboration
 */
export namespace AWS_CleanRooms_AnalysisTemplate {
  export type AnalysisParameterType = {
    DefaultValue?: string;

    Name: string;

    Type: string;
  };

  export type TableNameType = {};

  export type ReferencedTablesType = {};

  export type AnalysisSchemaType = {
    ReferencedTables: ReferencedTablesType;
  };

  export type AnalysisSourceType = {
    Text: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Represents a stored analysis within a collaboration
   */
  export type AnalysisTemplateResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CollaborationArn?: string;

    /**
     * Read-only property
     */
    CollaborationIdentifier?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.
     */
    Tags?: TagType[];

    /**
     * The member who can query can provide this placeholder for a literal data value in an analysis template
     * Create-only property
     */
    AnalysisParameters?: AnalysisParameterType[];

    /**
     * Read-only property
     */
    AnalysisTemplateIdentifier?: string;

    Description?: string;

    /**
     * Read-only property
     */
    MembershipArn?: string;

    /**
     * Create-only property
     */
    MembershipIdentifier: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    Schema?: AnalysisSchemaType;

    /**
     * Create-only property
     */
    Source: AnalysisSourceType;

    /**
     * Create-only property
     */
    Format: string;
  };
}
