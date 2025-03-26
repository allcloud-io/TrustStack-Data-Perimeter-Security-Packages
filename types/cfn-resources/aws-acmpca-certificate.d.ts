/**
 * TypeScript definitions for AWS::ACMPCA::Certificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ACMPCA::Certificate` resource is used to issue a certificate using your private certificate authority. For more information, see the IssueCertificate action.
 */
export namespace AWS_ACMPCA_Certificate {
  /**
   * Contains X.509 certificate information to be placed in an issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
   * If conflicting or duplicate certificate information is supplied from other sources, AWS Private CA applies order of operation rules to determine what information is used.
   */
  export type ApiPassthroughType = {
    /**
     * Specifies X.509 extension information for a certificate.
     */
    Extensions?: ExtensionsType;

    /**
     * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
     */
    Subject?: SubjectType;
  };

  export type ArnType = {};

  export type CertificatePolicyListType = {};

  /**
   * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
   */
  export type ExtendedKeyUsageType = {
    /**
     * Specifies a standard `ExtendedKeyUsage` as defined as in RFC 5280.
     */
    ExtendedKeyUsageType?: string;

    /**
     * Specifies a custom `ExtendedKeyUsage` with an object identifier (OID).
     */
    ExtendedKeyUsageObjectIdentifier?: CustomObjectIdentifierType;
  };

  export type ExtendedKeyUsageListType = {};

  /**
   * Contains X.509 extension information for a certificate.
   */
  export type ExtensionsType = {
    /**
     * Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of Object Identifier (OID).
     * In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
     */
    CertificatePolicies?: CertificatePolicyListType;

    /**
     * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
     */
    ExtendedKeyUsage?: ExtendedKeyUsageListType;

    /**
     * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
     */
    KeyUsage?: KeyUsageType;

    /**
     * The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.
     */
    SubjectAlternativeNames?: GeneralNameListType;

    /**
     * Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the Global OID reference database.
     */
    CustomExtensions?: CustomExtensionListType;
  };

  /**
   * Array of X.509 extensions for a certificate.
   */
  export type CustomExtensionListType = {};

  /**
   * Specifies the X.509 extension information for a certificate.
   * Extensions present in `CustomExtensions` follow the `ApiPassthrough` template rules.
   */
  export type CustomExtensionType = {
    /**
     * Specifies the critical flag of the X.509 extension.
     */
    Critical?: boolean;

    /**
     * Specifies the object identifier (OID) of the X.509 extension. For more information, see the Global OID reference database.
     */
    ObjectIdentifier: CustomObjectIdentifierType;

    /**
     * Specifies the base64-encoded value of the X.509 extension.
     */
    Value: string;
  };

  export type GeneralNameListType = {};

  /**
   * Describes an ASN.1 X.400 `GeneralName` as defined in RFC 5280. Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
   */
  export type GeneralNameType = {
    /**
     * Represents `GeneralName` using an `OtherName` object.
     */
    OtherName?: OtherNameType;

    /**
     * Represents `GeneralName` as an RFC 822 email address.
     */
    Rfc822Name?: Rfc822NameType;

    /**
     * Represents `GeneralName` as a DNS name.
     */
    DnsName?: DnsNameType;

    /**
     * Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
     */
    DirectoryName?: SubjectType;

    /**
     * Represents `GeneralName` as an `EdiPartyName` object.
     */
    EdiPartyName?: EdiPartyNameType;

    /**
     * Represents `GeneralName` as a URI.
     */
    UniformResourceIdentifier?: UniformResourceIdentifierType;

    /**
     * Represents `GeneralName` as an IPv4 or IPv6 address.
     */
    IpAddress?: IpAddressType;

    /**
     * Represents `GeneralName` as an object identifier (OID).
     */
    RegisteredId?: CustomObjectIdentifierType;
  };

  /**
   * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
   */
  export type KeyUsageType = {
    /**
     * Key can be used for digital signing.
     */
    DigitalSignature?: boolean;

    /**
     * Key can be used for non-repudiation.
     */
    NonRepudiation?: boolean;

    /**
     * Key can be used to encipher data.
     */
    KeyEncipherment?: boolean;

    /**
     * Key can be used to decipher data.
     */
    DataEncipherment?: boolean;

    /**
     * Key can be used in a key-agreement protocol.
     */
    KeyAgreement?: boolean;

    /**
     * Key can be used to sign certificates.
     */
    KeyCertSign?: boolean;

    /**
     * Key can be used to sign CRLs.
     */
    CRLSign?: boolean;

    /**
     * Key can be used only to encipher data.
     */
    EncipherOnly?: boolean;

    /**
     * Key can be used only to decipher data.
     */
    DecipherOnly?: boolean;
  };

  /**
   * Defines the X.509 `CertificatePolicies` extension.
   */
  export type PolicyInformationType = {
    /**
     * Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of Object Identifier (OID).
     */
    CertPolicyId: CustomObjectIdentifierType;

    /**
     * Modifies the given `CertPolicyId` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
     */
    PolicyQualifiers?: PolicyQualifierInfoListType;
  };

  /**
   * Modifies the `CertPolicyId` of a `PolicyInformation` object with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
   */
  export type PolicyQualifierInfoType = {
    /**
     * Identifies the qualifier modifying a `CertPolicyId`.
     */
    PolicyQualifierId: string;

    /**
     * Defines the qualifier type. AWS Private CA supports the use of a URI for a CPS qualifier in this field.
     */
    Qualifier: QualifierType;
  };

  export type PolicyQualifierInfoListType = {};

  /**
   * Defines a `PolicyInformation` qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier defined in RFC 5280.
   */
  export type QualifierType = {
    /**
     * Contains a pointer to a certification practice statement (CPS) published by the CA.
     */
    CpsUri: string;
  };

  /**
   * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject`must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
   */
  export type SubjectType = {
    /**
     * Two-digit code that specifies the country in which the certificate subject located.
     */
    Country?: string;

    /**
     * Legal name of the organization with which the certificate subject is affiliated.
     */
    Organization?: string;

    /**
     * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
     */
    OrganizationalUnit?: string;

    /**
     * Disambiguating information for the certificate subject.
     */
    DistinguishedNameQualifier?: string;

    /**
     * State in which the subject of the certificate is located.
     */
    State?: string;

    /**
     * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
     * Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
     */
    CommonName?: string;

    /**
     * The certificate serial number.
     */
    SerialNumber?: string;

    /**
     * The locality (such as a city or town) in which the certificate subject is located.
     */
    Locality?: string;

    /**
     * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
     */
    Title?: string;

    /**
     * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
     */
    Surname?: string;

    /**
     * First name.
     */
    GivenName?: string;

    /**
     * Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.
     */
    Initials?: string;

    /**
     * Typically a shortened version of a longer *GivenName*. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
     */
    Pseudonym?: string;

    /**
     * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
     */
    GenerationQualifier?: string;

    /**
     * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of Object Identifier (OID).
     * Custom attributes cannot be used in combination with standard attributes.
     */
    CustomAttributes?: CustomAttributeListType;
  };

  /**
   * Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.
   */
  export type CustomAttributeListType = {};

  /**
   * Defines the X.500 relative distinguished name (RDN).
   */
  export type CustomAttributeType = {
    /**
     * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
     */
    ObjectIdentifier: CustomObjectIdentifierType;

    /**
     * Specifies the attribute value of relative distinguished name (RDN).
     */
    Value: string;
  };

  /**
   * Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the `IssueCertificate` operation.
   */
  export type ValidityType = {
    /**
     * A long integer interpreted according to the value of `Type`, below.
     */
    Value: number;

    /**
     * Specifies whether the `Value` parameter represents days, months, or years.
     */
    Type: string;
  };

  /**
   * String that contains X.509 ObjectIdentifier information.
   */
  export type CustomObjectIdentifierType = {};

  /**
   * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of Object Identifier (OID).
   */
  export type OtherNameType = {
    /**
     * Specifies an OID.
     */
    TypeId: CustomObjectIdentifierType;

    /**
     * Specifies an OID value.
     */
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
   * Describes an Electronic Data Interchange (EDI) entity as described in as defined in Subject Alternative Name in RFC 5280.
   */
  export type EdiPartyNameType = {
    /**
     * Specifies the party name.
     */
    PartyName: string;

    /**
     * Specifies the name assigner.
     */
    NameAssigner: string;
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
   * The `AWS::ACMPCA::Certificate` resource is used to issue a certificate using your private certificate authority. For more information, see the IssueCertificate action.
   */
  export type CertificateResourceType = {
    /**
     * Specifies X.509 certificate information to be included in the issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
     * Create-only property
     */
    ApiPassthrough?: ApiPassthroughType;

    /**
     * The Amazon Resource Name (ARN) for the private CA issues the certificate.
     * Create-only property
     */
    CertificateAuthorityArn: ArnType;

    /**
     * The certificate signing request (CSR) for the certificate.
     * Create-only property
     */
    CertificateSigningRequest: string;

    /**
     * The name of the algorithm that will be used to sign the certificate to be issued.
     * This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
     * The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
     * Create-only property
     */
    SigningAlgorithm: string;

    /**
     * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, PCAshort defaults to the `EndEntityCertificate/V1` template. For more information about PCAshort templates, see Using Templates.
     * Create-only property
     */
    TemplateArn?: ArnType;

    /**
     * The period of time during which the certificate will be valid.
     * Create-only property
     */
    Validity: ValidityType;

    /**
     * Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.
     * By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the “Not Before” value.
     * Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
     * The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE`.
     * Create-only property
     */
    ValidityNotBefore?: ValidityType;

    /**
     * Read-only property
     */
    Certificate?: string;

    /**
     * Read-only property
     */
    Arn?: ArnType;
  };
}
