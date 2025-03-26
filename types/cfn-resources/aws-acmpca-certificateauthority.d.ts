/**
 * TypeScript definitions for AWS::ACMPCA::CertificateAuthority
 * Generated from CloudFormation Resource Schema
 */

/**
 * Private certificate authority.
 */
export namespace AWS_ACMPCA_CertificateAuthority {
  export type ArnType = {};

  export type TagType = {
    Key: string;

    Value?: string;
  };

  /**
   * Structure that contains X.500 distinguished name information for your CA.
   */
  export type SubjectType = {
    Country?: string;

    Organization?: string;

    OrganizationalUnit?: string;

    DistinguishedNameQualifier?: string;

    State?: string;

    CommonName?: string;

    SerialNumber?: string;

    Locality?: string;

    Title?: string;

    Surname?: string;

    GivenName?: string;

    Initials?: string;

    Pseudonym?: string;

    GenerationQualifier?: string;

    CustomAttributes?: CustomAttributeListType;
  };

  /**
   * Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.
   */
  export type CustomAttributeListType = {};

  /**
   * Structure that contains X.500 attribute type and value.
   */
  export type CustomAttributeType = {
    ObjectIdentifier: CustomObjectIdentifierType;

    Value: string;
  };

  /**
   * Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority
   */
  export type CrlDistributionPointExtensionConfigurationType = {
    OmitExtension: boolean;
  };

  /**
   * Your certificate authority can create and maintain a certificate revocation list (CRL). A CRL contains information about certificates that have been revoked.
   */
  export type CrlConfigurationType = {
    Enabled: boolean;

    ExpirationInDays?: number;

    CustomCname?: string;

    S3BucketName?: string;

    S3ObjectAcl?: string;

    CrlDistributionPointExtensionConfiguration?: CrlDistributionPointExtensionConfigurationType;

    CrlType?: string;

    CustomPath?: string;
  };

  /**
   * Helps to configure online certificate status protocol (OCSP) responder for your certificate authority
   */
  export type OcspConfigurationType = {
    Enabled: boolean;

    OcspCustomCname?: string;
  };

  /**
   * Certificate Authority revocation information.
   */
  export type RevocationConfigurationType = {
    CrlConfiguration?: CrlConfigurationType;

    OcspConfiguration?: OcspConfigurationType;
  };

  /**
   * Structure that contains X.509 KeyUsage information.
   */
  export type KeyUsageType = {
    DigitalSignature?: boolean;

    NonRepudiation?: boolean;

    KeyEncipherment?: boolean;

    DataEncipherment?: boolean;

    KeyAgreement?: boolean;

    KeyCertSign?: boolean;

    CRLSign?: boolean;

    EncipherOnly?: boolean;

    DecipherOnly?: boolean;
  };

  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  export type CustomObjectIdentifierType = {};

  /**
   * Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.
   */
  export type AccessMethodTypeType = {};

  /**
   * Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.
   */
  export type AccessMethodType = {
    CustomObjectIdentifier?: CustomObjectIdentifierType;

    AccessMethodType?: AccessMethodTypeType;
  };

  /**
   * Structure that contains X.509 OtherName information.
   */
  export type OtherNameType = {
    TypeId: CustomObjectIdentifierType;

    Value: string;
  };

  /**
   * String that contains X.509 Rfc822Name information.
   */
  export type Rfc822NameType = {};

  /**
   * String that contains X.509 DnsName information.
   */
  export type DnsNameType = {};

  /**
   * Structure that contains X.509 EdiPartyName information.
   */
  export type EdiPartyNameType = {
    PartyName: string;

    NameAssigner?: string;
  };

  /**
   * String that contains X.509 UniformResourceIdentifier information.
   */
  export type UniformResourceIdentifierType = {};

  /**
   * String that contains X.509 IpAddress information.
   */
  export type IpAddressType = {};

  /**
   * Structure that contains X.509 GeneralName information. Assign one and ONLY one field.
   */
  export type GeneralNameType = {
    OtherName?: OtherNameType;

    Rfc822Name?: Rfc822NameType;

    DnsName?: DnsNameType;

    DirectoryName?: SubjectType;

    EdiPartyName?: EdiPartyNameType;

    UniformResourceIdentifier?: UniformResourceIdentifierType;

    IpAddress?: IpAddressType;

    RegisteredId?: CustomObjectIdentifierType;
  };

  /**
   * Structure that contains X.509 AccessDescription information.
   */
  export type AccessDescriptionType = {
    AccessMethod: AccessMethodType;

    AccessLocation: GeneralNameType;
  };

  /**
   * Array of X.509 AccessDescription.
   */
  export type SubjectInformationAccessType = {};

  /**
   * Structure that contains CSR pass though extensions information.
   */
  export type CsrExtensionsType = {
    KeyUsage?: KeyUsageType;

    SubjectInformationAccess?: SubjectInformationAccessType;
  };

  /**
   * Private certificate authority.
   */
  export type CertificateAuthorityResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the certificate authority.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The type of the certificate authority.
     * Create-only property
     */
    Type: string;

    /**
     * Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
     * Create-only property
     */
    KeyAlgorithm: string;

    /**
     * Algorithm your CA uses to sign certificate requests.
     * Create-only property
     */
    SigningAlgorithm: string;

    /**
     * Structure that contains X.500 distinguished name information for your CA.
     * Create-only property
     */
    Subject: SubjectType;

    /**
     * Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.
     */
    RevocationConfiguration?: RevocationConfigurationType;

    Tags?: TagType[];

    /**
     * The base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate.
     * Read-only property
     */
    CertificateSigningRequest?: string;

    /**
     * Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.
     * Create-only property
     */
    CsrExtensions?: CsrExtensionsType;

    /**
     * KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
     * Create-only property
     */
    KeyStorageSecurityStandard?: string;

    /**
     * Usage mode of the ceritificate authority.
     * Create-only property
     */
    UsageMode?: string;
  };
}
