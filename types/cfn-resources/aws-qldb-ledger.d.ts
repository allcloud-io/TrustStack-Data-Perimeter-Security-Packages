/**
 * TypeScript definitions for AWS::QLDB::Ledger
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::QLDB::Ledger
 */
export namespace AWS_QLDB_Ledger {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::QLDB::Ledger
   */
  export type LedgerResourceType = {
    PermissionsMode: string;

    DeletionProtection?: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    KmsKey?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
