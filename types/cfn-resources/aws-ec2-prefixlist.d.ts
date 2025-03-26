/**
 * TypeScript definitions for AWS::EC2::PrefixList
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema of AWS::EC2::PrefixList Type
 */
export namespace AWS_EC2_PrefixList {
  export type TagType = {
    Key: string;

    Value?: string;
  };

  export type EntryType = {
    Cidr: string;

    Description?: string;
  };

  /**
   * Resource schema of AWS::EC2::PrefixList Type
   */
  export type PrefixListResourceType = {
    /**
     * Name of Prefix List.
     */
    PrefixListName: string;

    /**
     * Id of Prefix List.
     * Read-only property
     */
    PrefixListId?: string;

    /**
     * Owner Id of Prefix List.
     * Read-only property
     */
    OwnerId?: string;

    /**
     * Ip Version of Prefix List.
     */
    AddressFamily: string;

    /**
     * Max Entries of Prefix List.
     */
    MaxEntries?: number;

    /**
     * Version of Prefix List.
     * Read-only property
     */
    Version?: number;

    /**
     * Tags for Prefix List
     */
    Tags?: TagType[];

    /**
     * Entries of Prefix List.
     */
    Entries?: EntryType[];

    /**
     * The Amazon Resource Name (ARN) of the Prefix List.
     * Read-only property
     */
    Arn?: string;
  };
}
