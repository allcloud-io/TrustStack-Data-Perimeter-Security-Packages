/**
 * TypeScript definitions for AWS::Macie::CustomDataIdentifier
 * Generated from CloudFormation Resource Schema
 */

/**
 * Macie CustomDataIdentifier resource schema
 */
export namespace AWS_Macie_CustomDataIdentifier {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * Macie CustomDataIdentifier resource schema
   */
  export type CustomDataIdentifierResourceType = {
    /**
     * Name of custom data identifier.
     * Create-only property
     */
    Name: string;

    /**
     * Description of custom data identifier.
     * Create-only property
     */
    Description?: string;

    /**
     * Regular expression for custom data identifier.
     * Create-only property
     */
    Regex: string;

    /**
     * Maximum match distance.
     * Create-only property
     */
    MaximumMatchDistance?: number;

    /**
     * Keywords to be matched against.
     * Create-only property
     */
    Keywords?: string[];

    /**
     * Words to be ignored.
     * Create-only property
     */
    IgnoreWords?: string[];

    /**
     * Custom data identifier ID.
     * Read-only property
     */
    Id?: string;

    /**
     * Custom data identifier ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
