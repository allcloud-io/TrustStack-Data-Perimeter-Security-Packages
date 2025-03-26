/**
 * TypeScript definitions for AWS::AppMesh::GatewayRoute
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::GatewayRoute
 */
export namespace AWS_AppMesh_GatewayRoute {
  export type GatewayRouteHostnameMatchType = {
    Suffix?: string;

    Exact?: string;
  };

  export type QueryParameterType = {
    Name: string;

    Match?: HttpQueryParameterMatchType;
  };

  export type GatewayRouteVirtualServiceType = {
    VirtualServiceName: string;
  };

  export type GatewayRouteTargetType = {
    VirtualService: GatewayRouteVirtualServiceType;

    Port?: number;
  };

  export type GrpcGatewayRouteMetadataType = {
    Invert?: boolean;

    Name: string;

    Match?: GatewayRouteMetadataMatchType;
  };

  export type GrpcGatewayRouteMatchType = {
    Hostname?: GatewayRouteHostnameMatchType;

    Metadata?: GrpcGatewayRouteMetadataType[];

    ServiceName?: string;

    Port?: number;
  };

  export type HttpQueryParameterMatchType = {
    Exact?: string;
  };

  export type HttpGatewayRoutePrefixRewriteType = {
    Value?: string;

    DefaultPrefix?: string;
  };

  export type GrpcGatewayRouteType = {
    Action: GrpcGatewayRouteActionType;

    Match: GrpcGatewayRouteMatchType;
  };

  export type GatewayRouteSpecType = {
    HttpRoute?: HttpGatewayRouteType;

    Http2Route?: HttpGatewayRouteType;

    GrpcRoute?: GrpcGatewayRouteType;

    Priority?: number;
  };

  export type HttpGatewayRouteMatchType = {
    Path?: HttpPathMatchType;

    Headers?: HttpGatewayRouteHeaderType[];

    Port?: number;

    Hostname?: GatewayRouteHostnameMatchType;

    Prefix?: string;

    Method?: string;

    QueryParameters?: QueryParameterType[];
  };

  export type HttpGatewayRouteActionType = {
    Target: GatewayRouteTargetType;

    Rewrite?: HttpGatewayRouteRewriteType;
  };

  export type GrpcGatewayRouteRewriteType = {
    Hostname?: GatewayRouteHostnameRewriteType;
  };

  export type HttpGatewayRouteHeaderType = {
    Invert?: boolean;

    Name: string;

    Match?: HttpGatewayRouteHeaderMatchType;
  };

  export type GatewayRouteRangeMatchType = {
    Start: number;

    End: number;
  };

  export type GrpcGatewayRouteActionType = {
    Target: GatewayRouteTargetType;

    Rewrite?: GrpcGatewayRouteRewriteType;
  };

  export type HttpGatewayRouteHeaderMatchType = {
    Suffix?: string;

    Exact?: string;

    Prefix?: string;

    Regex?: string;

    Range?: GatewayRouteRangeMatchType;
  };

  export type HttpGatewayRoutePathRewriteType = {
    Exact?: string;
  };

  export type GatewayRouteMetadataMatchType = {
    Suffix?: string;

    Exact?: string;

    Prefix?: string;

    Regex?: string;

    Range?: GatewayRouteRangeMatchType;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type HttpPathMatchType = {
    Regex?: string;

    Exact?: string;
  };

  export type HttpGatewayRouteType = {
    Action: HttpGatewayRouteActionType;

    Match: HttpGatewayRouteMatchType;
  };

  export type HttpGatewayRouteRewriteType = {
    Path?: HttpGatewayRoutePathRewriteType;

    Hostname?: GatewayRouteHostnameRewriteType;

    Prefix?: HttpGatewayRoutePrefixRewriteType;
  };

  export type GatewayRouteHostnameRewriteType = {
    DefaultTargetHostname?: string;
  };

  /**
   * Resource Type definition for AWS::AppMesh::GatewayRoute
   */
  export type GatewayRouteResourceType = {
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
    VirtualGatewayName: string;

    /**
     * Create-only property
     */
    MeshOwner?: string;

    /**
     * Read-only property
     */
    ResourceOwner?: string;

    /**
     * Create-only property
     */
    GatewayRouteName?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Spec: GatewayRouteSpecType;

    Tags?: TagType[];
  };
}
