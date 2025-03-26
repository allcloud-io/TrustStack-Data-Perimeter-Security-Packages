/**
 * TypeScript definitions for AWS::Transfer::User
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Transfer::User Resource Type
 */
export namespace AWS_Transfer_User {
  export type HomeDirectoryMapEntryType = {
    Entry: string;

    Target: string;

    Type?: MapTypeType;
  };

  export type HomeDirectoryTypeType = {};

  export type MapTypeType = {};

  export type PosixProfileType = {
    Uid: number;

    Gid: number;

    SecondaryGids?: number[];
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::Transfer::User Resource Type
   */
  export type UserResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    HomeDirectory?: string;

    HomeDirectoryMappings?: HomeDirectoryMapEntryType[];

    HomeDirectoryType?: HomeDirectoryTypeType;

    Policy?: string;

    PosixProfile?: PosixProfileType;

    Role: string;

    /**
     * Create-only property
     */
    ServerId: string;

    /**
     * This represents the SSH User Public Keys for CloudFormation resource
     */
    SshPublicKeys?: string[];

    Tags?: TagType[];

    /**
     * Create-only property
     */
    UserName: string;
  };
}
