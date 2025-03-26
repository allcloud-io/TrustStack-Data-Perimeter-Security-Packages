/**
 * TypeScript definitions for AWS::AppMesh::VirtualService
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualService
 */
export namespace AWS_AppMesh_VirtualService {
  export type VirtualNodeServiceProviderType = {
    VirtualNodeName: string;
  };

  export type VirtualServiceProviderType = {
    VirtualNode?: VirtualNodeServiceProviderType;

    VirtualRouter?: VirtualRouterServiceProviderType;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type VirtualServiceSpecType = {
    Provider?: VirtualServiceProviderType;
  };

  export type VirtualRouterServiceProviderType = {
    VirtualRouterName: string;
  };

  /**
   * Resource Type definition for AWS::AppMesh::VirtualService
   */
  export type VirtualServiceResourceType = {
    /**
     * Read-only property
     */
    Uid?: string;

    /**
     * Create-only property
     */
    MeshName: string;

    /**
     * Create-only property
     */
    MeshOwner?: string;

    /**
     * Read-only property
     */
    ResourceOwner?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    VirtualServiceName: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Spec: VirtualServiceSpecType;

    Tags?: TagType[];
  };
}
