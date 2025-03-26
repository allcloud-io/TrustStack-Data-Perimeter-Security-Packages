/**
 * TypeScript definitions for AWS::ManagedBlockchain::Accessor
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ManagedBlockchain::com.amazonaws.taiga.webservice.api#Accessor Resource Type
 */
export namespace AWS_ManagedBlockchain_Accessor {
  export type AccessorStatusType = {};

  export type AccessorTypeType = {};

  export type NetworkAccessorTypeType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Definition of AWS::ManagedBlockchain::com.amazonaws.taiga.webservice.api#Accessor Resource Type
   */
  export type AccessorResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    BillingToken?: string;

    /**
     * Read-only property
     */
    CreationDate?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Status?: AccessorStatusType;

    /**
     * Create-only property
     */
    AccessorType: AccessorTypeType;

    /**
     * Create-only property
     */
    NetworkType?: NetworkAccessorTypeType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
