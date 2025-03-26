/**
 * TypeScript definitions for AWS::AppMesh::VirtualGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppMesh::VirtualGateway
 */
export namespace AWS_AppMesh_VirtualGateway {
  export type VirtualGatewayListenerType = {
    ConnectionPool?: VirtualGatewayConnectionPoolType;

    HealthCheck?: VirtualGatewayHealthCheckPolicyType;

    TLS?: VirtualGatewayListenerTlsType;

    PortMapping: VirtualGatewayPortMappingType;
  };

  export type VirtualGatewayListenerTlsValidationContextTrustType = {
    File?: VirtualGatewayTlsValidationContextFileTrustType;

    SDS?: VirtualGatewayTlsValidationContextSdsTrustType;
  };

  export type VirtualGatewayAccessLogType = {
    File?: VirtualGatewayFileAccessLogType;
  };

  export type VirtualGatewaySpecType = {
    Logging?: VirtualGatewayLoggingType;

    Listeners: VirtualGatewayListenerType[];

    BackendDefaults?: VirtualGatewayBackendDefaultsType;
  };

  export type VirtualGatewayClientPolicyType = {
    TLS?: VirtualGatewayClientPolicyTlsType;
  };

  export type VirtualGatewayHttpConnectionPoolType = {
    MaxConnections: number;

    MaxPendingRequests?: number;
  };

  export type VirtualGatewayClientPolicyTlsType = {
    Validation: VirtualGatewayTlsValidationContextType;

    Ports?: number[];

    Enforce?: boolean;

    Certificate?: VirtualGatewayClientTlsCertificateType;
  };

  export type VirtualGatewayListenerTlsCertificateType = {
    SDS?: VirtualGatewayListenerTlsSdsCertificateType;

    ACM?: VirtualGatewayListenerTlsAcmCertificateType;

    File?: VirtualGatewayListenerTlsFileCertificateType;
  };

  export type VirtualGatewayTlsValidationContextSdsTrustType = {
    SecretName: string;
  };

  export type VirtualGatewayFileAccessLogType = {
    Path: string;

    Format?: LoggingFormatType;
  };

  export type LoggingFormatType = {
    Text?: string;

    Json?: JsonFormatRefType[];
  };

  export type VirtualGatewayTlsValidationContextType = {
    SubjectAlternativeNames?: SubjectAlternativeNamesType;

    Trust: VirtualGatewayTlsValidationContextTrustType;
  };

  export type VirtualGatewayListenerTlsValidationContextType = {
    SubjectAlternativeNames?: SubjectAlternativeNamesType;

    Trust: VirtualGatewayListenerTlsValidationContextTrustType;
  };

  export type VirtualGatewayTlsValidationContextFileTrustType = {
    CertificateChain: string;
  };

  export type JsonFormatRefType = {
    Value: string;

    Key: string;
  };

  export type VirtualGatewayHealthCheckPolicyType = {
    Path?: string;

    UnhealthyThreshold: number;

    Port?: number;

    HealthyThreshold: number;

    TimeoutMillis: number;

    Protocol: string;

    IntervalMillis: number;
  };

  export type SubjectAlternativeNameMatchersType = {
    Exact?: string[];
  };

  export type VirtualGatewayTlsValidationContextTrustType = {
    SDS?: VirtualGatewayTlsValidationContextSdsTrustType;

    ACM?: VirtualGatewayTlsValidationContextAcmTrustType;

    File?: VirtualGatewayTlsValidationContextFileTrustType;
  };

  export type VirtualGatewayListenerTlsAcmCertificateType = {
    CertificateArn: string;
  };

  export type VirtualGatewayConnectionPoolType = {
    HTTP?: VirtualGatewayHttpConnectionPoolType;

    HTTP2?: VirtualGatewayHttp2ConnectionPoolType;

    GRPC?: VirtualGatewayGrpcConnectionPoolType;
  };

  export type SubjectAlternativeNamesType = {
    Match: SubjectAlternativeNameMatchersType;
  };

  export type VirtualGatewayClientTlsCertificateType = {
    File?: VirtualGatewayListenerTlsFileCertificateType;

    SDS?: VirtualGatewayListenerTlsSdsCertificateType;
  };

  export type VirtualGatewayBackendDefaultsType = {
    ClientPolicy?: VirtualGatewayClientPolicyType;
  };

  export type VirtualGatewayLoggingType = {
    AccessLog?: VirtualGatewayAccessLogType;
  };

  export type VirtualGatewayGrpcConnectionPoolType = {
    MaxRequests: number;
  };

  export type VirtualGatewayListenerTlsSdsCertificateType = {
    SecretName: string;
  };

  export type VirtualGatewayListenerTlsFileCertificateType = {
    CertificateChain: string;

    PrivateKey: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type VirtualGatewayPortMappingType = {
    Protocol: string;

    Port: number;
  };

  export type VirtualGatewayHttp2ConnectionPoolType = {
    MaxRequests: number;
  };

  export type VirtualGatewayTlsValidationContextAcmTrustType = {
    CertificateAuthorityArns: string[];
  };

  export type VirtualGatewayListenerTlsType = {
    Validation?: VirtualGatewayListenerTlsValidationContextType;

    Mode: string;

    Certificate: VirtualGatewayListenerTlsCertificateType;
  };

  /**
   * Resource Type definition for AWS::AppMesh::VirtualGateway
   */
  export type VirtualGatewayResourceType = {
    /**
     * Read-only property
     */
    Uid?: string;

    /**
     * Create-only property
     */
    VirtualGatewayName?: string;

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

    Spec: VirtualGatewaySpecType;

    Tags?: TagType[];
  };
}
