/**
 * TypeScript definitions for AWS::AppMesh::VirtualRouter
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualRouter
 */
export namespace AWS_AppMesh_VirtualRouter {
  export type VirtualRouterSpecType = {
    Listeners: VirtualRouterListenerType[];
  };

  export type VirtualRouterListenerType = {
    PortMapping: PortMappingType;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type PortMappingType = {
    Protocol: string;

    Port: number;
  };

  /**
   * Resource Type definition for AWS::AppMesh::VirtualRouter
   */
  export type VirtualRouterResourceType = {
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
    VirtualRouterName?: string;

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
     * Read-only property
     */
    Arn?: string;

    Spec: VirtualRouterSpecType;

    Tags?: TagType[];
  };
}
