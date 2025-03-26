/**
 * TypeScript definitions for AWS::AppMesh::Route
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::Route
 */
export namespace AWS_AppMesh_Route {
  export type QueryParameterType = {
    Name: string;

    Match?: HttpQueryParameterMatchType;
  };

  export type HttpRetryPolicyType = {
    MaxRetries: number;

    TcpRetryEvents?: string[];

    PerRetryTimeout: DurationType;

    HttpRetryEvents?: string[];
  };

  export type HttpQueryParameterMatchType = {
    Exact?: string;
  };

  export type GrpcRouteType = {
    Action: GrpcRouteActionType;

    RetryPolicy?: GrpcRetryPolicyType;

    Timeout?: GrpcTimeoutType;

    Match: GrpcRouteMatchType;
  };

  export type HttpRouteActionType = {
    WeightedTargets: WeightedTargetType[];
  };

  export type TcpRouteType = {
    Action: TcpRouteActionType;

    Timeout?: TcpTimeoutType;

    Match?: TcpRouteMatchType;
  };

  export type HttpRouteHeaderType = {
    Invert?: boolean;

    Name: string;

    Match?: HeaderMatchMethodType;
  };

  export type GrpcTimeoutType = {
    PerRequest?: DurationType;

    Idle?: DurationType;
  };

  export type GrpcRouteMetadataMatchMethodType = {
    Suffix?: string;

    Exact?: string;

    Prefix?: string;

    Regex?: string;

    Range?: MatchRangeType;
  };

  export type GrpcRouteMetadataType = {
    Invert?: boolean;

    Name: string;

    Match?: GrpcRouteMetadataMatchMethodType;
  };

  export type HeaderMatchMethodType = {
    Suffix?: string;

    Exact?: string;

    Prefix?: string;

    Regex?: string;

    Range?: MatchRangeType;
  };

  export type GrpcRetryPolicyType = {
    MaxRetries: number;

    TcpRetryEvents?: string[];

    PerRetryTimeout: DurationType;

    GrpcRetryEvents?: string[];

    HttpRetryEvents?: string[];
  };

  export type TcpTimeoutType = {
    Idle?: DurationType;
  };

  export type WeightedTargetType = {
    VirtualNode: string;

    Weight: number;

    Port?: number;
  };

  export type HttpPathMatchType = {
    Regex?: string;

    Exact?: string;
  };

  export type HttpTimeoutType = {
    PerRequest?: DurationType;

    Idle?: DurationType;
  };

  export type TcpRouteActionType = {
    WeightedTargets: WeightedTargetType[];
  };

  export type GrpcRouteMatchType = {
    Metadata?: GrpcRouteMetadataType[];

    MethodName?: string;

    ServiceName?: string;

    Port?: number;
  };

  export type MatchRangeType = {
    Start: number;

    End: number;
  };

  export type DurationType = {
    Value: number;

    Unit: string;
  };

  export type RouteSpecType = {
    HttpRoute?: HttpRouteType;

    Http2Route?: HttpRouteType;

    GrpcRoute?: GrpcRouteType;

    TcpRoute?: TcpRouteType;

    Priority?: number;
  };

  export type TcpRouteMatchType = {
    Port?: number;
  };

  export type HttpRouteType = {
    Action: HttpRouteActionType;

    RetryPolicy?: HttpRetryPolicyType;

    Timeout?: HttpTimeoutType;

    Match: HttpRouteMatchType;
  };

  export type GrpcRouteActionType = {
    WeightedTargets: WeightedTargetType[];
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type HttpRouteMatchType = {
    Path?: HttpPathMatchType;

    Scheme?: string;

    Headers?: HttpRouteHeaderType[];

    Port?: number;

    Prefix?: string;

    Method?: string;

    QueryParameters?: QueryParameterType[];
  };

  /**
   * Resource Type definition for AWS::AppMesh::Route
   */
  export type RouteResourceType = {
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
    VirtualRouterName: string;

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
    RouteName?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Spec: RouteSpecType;

    Tags?: TagType[];
  };
}
