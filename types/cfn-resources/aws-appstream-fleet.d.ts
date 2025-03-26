/**
 * TypeScript definitions for AWS::AppStream::Fleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::Fleet
 */
export namespace AWS_AppStream_Fleet {
  export type ComputeCapacityType = {
    DesiredInstances?: number;

    DesiredSessions?: number;
  };

  export type VpcConfigType = {
    SubnetIds?: string[];

    SecurityGroupIds?: string[];
  };

  export type DomainJoinInfoType = {
    OrganizationalUnitDistinguishedName?: string;

    DirectoryName?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type S3LocationType = {
    S3Bucket: string;

    S3Key: string;
  };

  /**
   * Resource Type definition for AWS::AppStream::Fleet
   */
  export type FleetResourceType = {
    Description?: string;

    ComputeCapacity?: ComputeCapacityType;

    Platform?: string;

    VpcConfig?: VpcConfigType;

    /**
     * Create-only property
     */
    FleetType?: string;

    EnableDefaultInternetAccess?: boolean;

    DomainJoinInfo?: DomainJoinInfoType;

    SessionScriptS3Location?: S3LocationType;

    /**
     * Create-only property
     */
    Name: string;

    ImageName?: string;

    MaxUserDurationInSeconds?: number;

    IdleDisconnectTimeoutInSeconds?: number;

    UsbDeviceFilterStrings?: string[];

    DisconnectTimeoutInSeconds?: number;

    DisplayName?: string;

    StreamView?: string;

    IamRoleArn?: string;

    MaxSessionsPerInstance?: number;

    /**
     * Read-only property
     */
    Id?: string;

    InstanceType: string;

    MaxConcurrentSessions?: number;

    Tags?: TagType[];

    ImageArn?: string;
  };
}
