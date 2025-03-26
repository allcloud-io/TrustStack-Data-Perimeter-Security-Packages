/**
 * TypeScript definitions for AWS::AppMesh::Mesh
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::Mesh
 */
export namespace AWS_AppMesh_Mesh {
  export type MeshSpecType = {
    EgressFilter?: EgressFilterType;

    ServiceDiscovery?: MeshServiceDiscoveryType;
  };

  export type EgressFilterType = {
    Type: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type MeshServiceDiscoveryType = {
    IpPreference?: string;
  };

  /**
   * Resource Type definition for AWS::AppMesh::Mesh
   */
  export type MeshResourceType = {
    /**
     * Read-only property
     */
    Uid?: string;

    /**
     * Create-only property
     */
    MeshName?: string;

    /**
     * Read-only property
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

    Spec?: MeshSpecType;

    Tags?: TagType[];
  };
}
