/**
 * TypeScript definitions for AWS::VerifiedPermissions::PolicyStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a policy store that you can place schema, policies, and policy templates in to validate authorization requests
 */
export namespace AWS_VerifiedPermissions_PolicyStore {
  export type ValidationModeType = {};

  export type ValidationSettingsType = {
    Mode: ValidationModeType;
  };

  export type SchemaJsonType = {};

  export type SchemaDefinitionType = {
    CedarJson?: SchemaJsonType;
  };

  /**
   * Represents a policy store that you can place schema, policies, and policy templates in to validate authorization requests
   */
  export type PolicyStoreResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    Description?: string;

    /**
     * Read-only property
     */
    PolicyStoreId?: string;

    ValidationSettings: ValidationSettingsType;

    Schema?: SchemaDefinitionType;
  };
}
