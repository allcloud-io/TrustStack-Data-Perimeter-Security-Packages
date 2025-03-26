/**
 * TypeScript definitions for AWS::AppStream::AppBlockBuilder
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::AppBlockBuilder.
 */
export namespace AWS_AppStream_AppBlockBuilder {
  export type PlatformTypeType = {};

  export type ArnType = {};

  export type AccessEndpointType = {
    EndpointType: string;

    VpceId: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type VpcConfigType = {
    SecurityGroupIds?: string[];

    SubnetIds?: string[];
  };

  /**
   * Resource Type definition for AWS::AppStream::AppBlockBuilder.
   */
  export type AppBlockBuilderResourceType = {
    /**
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    Description?: string;

    DisplayName?: string;

    Platform: PlatformTypeType;

    AccessEndpoints?: AccessEndpointType[];

    Tags?: TagType[];

    VpcConfig: VpcConfigType;

    EnableDefaultInternetAccess?: boolean;

    IamRoleArn?: string;

    /**
     * Read-only property
     */
    CreatedTime?: string;

    InstanceType: string;

    AppBlockArns?: ArnType[];
  };
}
