/**
 * TypeScript definitions for AWS::Glue::CustomEntityType
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::CustomEntityType
 */
export namespace AWS_Glue_CustomEntityType {
  /**
   * Resource Type definition for AWS::Glue::CustomEntityType
   */
  export type CustomEntityTypeResourceType = {
    RegexString?: string;

    ContextWords?: string[];

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: Record<string, any>;

    Name?: string;
  };
}
