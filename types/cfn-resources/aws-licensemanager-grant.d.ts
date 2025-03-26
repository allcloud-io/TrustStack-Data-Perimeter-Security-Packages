/**
 * TypeScript definitions for AWS::LicenseManager::Grant
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_LicenseManager_Grant {
  export type ArnType = {};

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type GrantResourceType = {
    /**
     * Arn of the grant.
     * Read-only property
     */
    GrantArn?: ArnType;

    /**
     * Name for the created Grant.
     */
    GrantName?: string;

    /**
     * License Arn for the grant.
     */
    LicenseArn?: ArnType;

    /**
     * Home region for the created grant.
     */
    HomeRegion?: string;

    /**
     * The version of the grant.
     * Read-only property
     */
    Version?: string;

    AllowedOperations?: string[];

    Principals?: ArnType[];

    Status?: string;
  };
}
