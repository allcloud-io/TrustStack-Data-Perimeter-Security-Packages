/**
 * TypeScript definitions for AWS::CleanRooms::PrivacyBudgetTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a privacy budget within a collaboration
 */
export namespace AWS_CleanRooms_PrivacyBudgetTemplate {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Represents a privacy budget within a collaboration
   */
  export type PrivacyBudgetTemplateResourceType = {
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
     * Read-only property
     */
    PrivacyBudgetTemplateIdentifier?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    AutoRefresh: string;

    /**
     * Create-only property
     */
    PrivacyBudgetType: string;

    Parameters: Record<string, any>;

    /**
     * Read-only property
     */
    MembershipArn?: string;

    /**
     * Create-only property
     */
    MembershipIdentifier: string;
  };
}
