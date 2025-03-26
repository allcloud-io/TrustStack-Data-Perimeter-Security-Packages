/**
 * TypeScript definitions for AWS::AppMesh::VirtualNode
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualNode
 */
export namespace AWS_AppMesh_VirtualNode {
  export type AccessLogType = {
    File?: FileAccessLogType;
  };

  export type ListenerTimeoutType = {
    TCP?: TcpTimeoutType;

    HTTP?: HttpTimeoutType;

    HTTP2?: HttpTimeoutType;

    GRPC?: GrpcTimeoutType;
  };

  export type TlsValidationContextAcmTrustType = {
    CertificateAuthorityArns: string[];
  };

  export type ClientPolicyType = {
    TLS?: ClientPolicyTlsType;
  };

  export type FileAccessLogType = {
    Path: string;

    Format?: LoggingFormatType;
  };

  export type ListenerType = {
    ConnectionPool?: VirtualNodeConnectionPoolType;

    Timeout?: ListenerTimeoutType;

    HealthCheck?: HealthCheckType;

    TLS?: ListenerTlsType;

    PortMapping: PortMappingType;

    OutlierDetection?: OutlierDetectionType;
  };

  export type TlsValidationContextTrustType = {
    SDS?: TlsValidationContextSdsTrustType;

    ACM?: TlsValidationContextAcmTrustType;

    File?: TlsValidationContextFileTrustType;
  };

  export type HealthCheckType = {
    Path?: string;

    UnhealthyThreshold: number;

    Port?: number;

    HealthyThreshold: number;

    TimeoutMillis: number;

    Protocol: string;

    IntervalMillis: number;
  };

  export type GrpcTimeoutType = {
    PerRequest?: DurationType;

    Idle?: DurationType;
  };

  export type VirtualNodeConnectionPoolType = {
    TCP?: VirtualNodeTcpConnectionPoolType;

    HTTP?: VirtualNodeHttpConnectionPoolType;

    HTTP2?: VirtualNodeHttp2ConnectionPoolType;

    GRPC?: VirtualNodeGrpcConnectionPoolType;
  };

  export type TlsValidationContextFileTrustType = {
    CertificateChain: string;
  };

  export type ListenerTlsFileCertificateType = {
    CertificateChain: string;

    PrivateKey: string;
  };

  export type ListenerTlsValidationContextTrustType = {
    File?: TlsValidationContextFileTrustType;

    SDS?: TlsValidationContextSdsTrustType;
  };

  export type ListenerTlsCertificateType = {
    SDS?: ListenerTlsSdsCertificateType;

    ACM?: ListenerTlsAcmCertificateType;

    File?: ListenerTlsFileCertificateType;
  };

  export type PortMappingType = {
    Protocol: string;

    Port: number;
  };

  export type TcpTimeoutType = {
    Idle?: DurationType;
  };

  export type ListenerTlsType = {
    Validation?: ListenerTlsValidationContextType;

    Mode: string;

    Certificate: ListenerTlsCertificateType;
  };

  export type HttpTimeoutType = {
    PerRequest?: DurationType;

    Idle?: DurationType;
  };

  export type VirtualNodeTcpConnectionPoolType = {
    MaxConnections: number;
  };

  export type ServiceDiscoveryType = {
    DNS?: DnsServiceDiscoveryType;

    AWSCloudMap?: AwsCloudMapServiceDiscoveryType;
  };

  export type ListenerTlsAcmCertificateType = {
    CertificateArn: string;
  };

  export type VirtualNodeSpecType = {
    Logging?: LoggingType;

    Backends?: BackendType[];

    Listeners?: ListenerType[];

    BackendDefaults?: BackendDefaultsType;

    ServiceDiscovery?: ServiceDiscoveryType;
  };

  export type LoggingType = {
    AccessLog?: AccessLogType;
  };

  export type DnsServiceDiscoveryType = {
    Hostname: string;

    IpPreference?: string;

    ResponseType?: string;
  };

  export type LoggingFormatType = {
    Text?: string;

    Json?: JsonFormatRefType[];
  };

  export type VirtualNodeHttp2ConnectionPoolType = {
    MaxRequests: number;
  };

  export type ClientPolicyTlsType = {
    Validation: TlsValidationContextType;

    Ports?: number[];

    Enforce?: boolean;

    Certificate?: ClientTlsCertificateType;
  };

  export type VirtualServiceBackendType = {
    VirtualServiceName: string;

    ClientPolicy?: ClientPolicyType;
  };

  export type AwsCloudMapServiceDiscoveryType = {
    Attributes?: AwsCloudMapInstanceAttributeType[];

    NamespaceName: string;

    ServiceName: string;

    IpPreference?: string;
  };

  export type TlsValidationContextType = {
    SubjectAlternativeNames?: SubjectAlternativeNamesType;

    Trust: TlsValidationContextTrustType;
  };

  export type JsonFormatRefType = {
    Value: string;

    Key: string;
  };

  export type SubjectAlternativeNameMatchersType = {
    Exact?: string[];
  };

  export type AwsCloudMapInstanceAttributeType = {
    Value: string;

    Key: string;
  };

  export type SubjectAlternativeNamesType = {
    Match: SubjectAlternativeNameMatchersType;
  };

  export type BackendDefaultsType = {
    ClientPolicy?: ClientPolicyType;
  };

  export type DurationType = {
    Value: number;

    Unit: string;
  };

  export type ListenerTlsSdsCertificateType = {
    SecretName: string;
  };

  export type TlsValidationContextSdsTrustType = {
    SecretName: string;
  };

  export type BackendType = {
    VirtualService?: VirtualServiceBackendType;
  };

  export type ListenerTlsValidationContextType = {
    SubjectAlternativeNames?: SubjectAlternativeNamesType;

    Trust: ListenerTlsValidationContextTrustType;
  };

  export type ClientTlsCertificateType = {
    File?: ListenerTlsFileCertificateType;

    SDS?: ListenerTlsSdsCertificateType;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type OutlierDetectionType = {
    MaxEjectionPercent: number;

    BaseEjectionDuration: DurationType;

    MaxServerErrors: number;

    Interval: DurationType;
  };

  export type VirtualNodeGrpcConnectionPoolType = {
    MaxRequests: number;
  };

  export type VirtualNodeHttpConnectionPoolType = {
    MaxConnections: number;

    MaxPendingRequests?: number;
  };

  /**
   * Resource Type definition for AWS::AppMesh::VirtualNode
   */
  export type VirtualNodeResourceType = {
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
     * Read-only property
     */
    Arn?: string;

    Spec: VirtualNodeSpecType;

    /**
     * Create-only property
     */
    VirtualNodeName?: string;

    Tags?: TagType[];
  };
}
