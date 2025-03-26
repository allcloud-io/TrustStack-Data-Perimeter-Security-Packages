/**
 * TypeScript definitions for AWS::Deadline::StorageProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::StorageProfile Resource Type
 */
export namespace AWS_Deadline_StorageProfile {
  export type FileSystemLocationType = {
    Name: string;

    Path: string;

    Type: FileSystemLocationTypeType;
  };

  export type FileSystemLocationTypeType = {};

  export type StorageProfileOperatingSystemFamilyType = {};

  /**
   * Definition of AWS::Deadline::StorageProfile Resource Type
   */
  export type StorageProfileResourceType = {
    DisplayName: string;

    /**
     * Create-only property
     */
    FarmId: string;

    FileSystemLocations?: FileSystemLocationType[];

    OsFamily: StorageProfileOperatingSystemFamilyType;

    /**
     * Read-only property
     */
    StorageProfileId?: string;
  };
}
