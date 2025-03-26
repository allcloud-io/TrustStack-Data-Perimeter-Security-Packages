/**
 * TypeScript definitions for AWS::AppStream::ImageBuilder
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::ImageBuilder
 */
export namespace AWS_AppStream_ImageBuilder {
  export type VpcConfigType = {
    SecurityGroupIds?: string[];

    SubnetIds?: string[];
  };

  export type DomainJoinInfoType = {
    OrganizationalUnitDistinguishedName?: string;

    DirectoryName?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type AccessEndpointType = {
    EndpointType: string;

    VpceId: string;
  };

  /**
   * Resource Type definition for AWS::AppStream::ImageBuilder
   */
  export type ImageBuilderResourceType = {
    Description?: string;

    VpcConfig?: VpcConfigType;

    EnableDefaultInternetAccess?: boolean;

    DomainJoinInfo?: DomainJoinInfoType;

    AppstreamAgentVersion?: string;

    Name: string;

    ImageName?: string;

    DisplayName?: string;

    IamRoleArn?: string;

    InstanceType: string;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    StreamingUrl?: string;

    ImageArn?: string;

    AccessEndpoints?: AccessEndpointType[];
  };
}
