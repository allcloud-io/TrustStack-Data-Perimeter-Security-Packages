/**
 * TypeScript definitions for AWS::PCAConnectorAD::Template
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a template that defines certificate configurations, both for issuance and client handling
 */
export namespace AWS_PCAConnectorAD_Template {
  export type ApplicationPoliciesType = {
    Critical?: boolean;

    Policies: ApplicationPolicyType[];
  };

  export type ApplicationPolicyType = {};

  export type ApplicationPolicyTypeType = {};

  export type CertificateValidityType = {
    ValidityPeriod: ValidityPeriodType;

    RenewalPeriod: ValidityPeriodType;
  };

  export type ClientCompatibilityV2Type = {};

  export type ClientCompatibilityV3Type = {};

  export type ClientCompatibilityV4Type = {};

  export type EnrollmentFlagsV2Type = {
    IncludeSymmetricAlgorithms?: boolean;

    UserInteractionRequired?: boolean;

    RemoveInvalidCertificateFromPersonalStore?: boolean;

    NoSecurityExtension?: boolean;

    EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  };

  export type EnrollmentFlagsV3Type = {
    IncludeSymmetricAlgorithms?: boolean;

    UserInteractionRequired?: boolean;

    RemoveInvalidCertificateFromPersonalStore?: boolean;

    NoSecurityExtension?: boolean;

    EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  };

  export type EnrollmentFlagsV4Type = {
    IncludeSymmetricAlgorithms?: boolean;

    UserInteractionRequired?: boolean;

    RemoveInvalidCertificateFromPersonalStore?: boolean;

    NoSecurityExtension?: boolean;

    EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
  };

  export type ExtensionsV2Type = {
    KeyUsage: KeyUsageType;

    ApplicationPolicies?: ApplicationPoliciesType;
  };

  export type ExtensionsV3Type = {
    KeyUsage: KeyUsageType;

    ApplicationPolicies?: ApplicationPoliciesType;
  };

  export type ExtensionsV4Type = {
    KeyUsage: KeyUsageType;

    ApplicationPolicies?: ApplicationPoliciesType;
  };

  export type GeneralFlagsV2Type = {
    AutoEnrollment?: boolean;

    MachineType?: boolean;
  };

  export type GeneralFlagsV3Type = {
    AutoEnrollment?: boolean;

    MachineType?: boolean;
  };

  export type GeneralFlagsV4Type = {
    AutoEnrollment?: boolean;

    MachineType?: boolean;
  };

  export type HashAlgorithmType = {};

  export type KeySpecType = {};

  export type KeyUsageType = {
    Critical?: boolean;

    UsageFlags: KeyUsageFlagsType;
  };

  export type KeyUsageFlagsType = {
    DigitalSignature?: boolean;

    NonRepudiation?: boolean;

    KeyEncipherment?: boolean;

    DataEncipherment?: boolean;

    KeyAgreement?: boolean;
  };

  export type KeyUsagePropertyType = {};

  export type KeyUsagePropertyFlagsType = {
    Decrypt?: boolean;

    KeyAgreement?: boolean;

    Sign?: boolean;
  };

  export type KeyUsagePropertyTypeType = {};

  export type PrivateKeyAlgorithmType = {};

  export type PrivateKeyAttributesV2Type = {
    MinimalKeyLength: number;

    KeySpec: KeySpecType;

    CryptoProviders?: string[];
  };

  export type PrivateKeyAttributesV3Type = {
    MinimalKeyLength: number;

    KeySpec: KeySpecType;

    CryptoProviders?: string[];

    KeyUsageProperty: KeyUsagePropertyType;

    Algorithm: PrivateKeyAlgorithmType;
  };

  export type PrivateKeyAttributesV4Type = {
    MinimalKeyLength: number;

    KeySpec: KeySpecType;

    CryptoProviders?: string[];

    KeyUsageProperty?: KeyUsagePropertyType;

    Algorithm?: PrivateKeyAlgorithmType;
  };

  export type PrivateKeyFlagsV2Type = {
    ExportableKey?: boolean;

    StrongKeyProtectionRequired?: boolean;

    ClientVersion: ClientCompatibilityV2Type;
  };

  export type PrivateKeyFlagsV3Type = {
    ExportableKey?: boolean;

    StrongKeyProtectionRequired?: boolean;

    RequireAlternateSignatureAlgorithm?: boolean;

    ClientVersion: ClientCompatibilityV3Type;
  };

  export type PrivateKeyFlagsV4Type = {
    ExportableKey?: boolean;

    StrongKeyProtectionRequired?: boolean;

    RequireAlternateSignatureAlgorithm?: boolean;

    RequireSameKeyRenewal?: boolean;

    UseLegacyProvider?: boolean;

    ClientVersion: ClientCompatibilityV4Type;
  };

  export type SubjectNameFlagsV2Type = {
    SanRequireDomainDns?: boolean;

    SanRequireSpn?: boolean;

    SanRequireDirectoryGuid?: boolean;

    SanRequireUpn?: boolean;

    SanRequireEmail?: boolean;

    SanRequireDns?: boolean;

    RequireDnsAsCn?: boolean;

    RequireEmail?: boolean;

    RequireCommonName?: boolean;

    RequireDirectoryPath?: boolean;
  };

  export type SubjectNameFlagsV3Type = {
    SanRequireDomainDns?: boolean;

    SanRequireSpn?: boolean;

    SanRequireDirectoryGuid?: boolean;

    SanRequireUpn?: boolean;

    SanRequireEmail?: boolean;

    SanRequireDns?: boolean;

    RequireDnsAsCn?: boolean;

    RequireEmail?: boolean;

    RequireCommonName?: boolean;

    RequireDirectoryPath?: boolean;
  };

  export type SubjectNameFlagsV4Type = {
    SanRequireDomainDns?: boolean;

    SanRequireSpn?: boolean;

    SanRequireDirectoryGuid?: boolean;

    SanRequireUpn?: boolean;

    SanRequireEmail?: boolean;

    SanRequireDns?: boolean;

    RequireDnsAsCn?: boolean;

    RequireEmail?: boolean;

    RequireCommonName?: boolean;

    RequireDirectoryPath?: boolean;
  };

  export type TagsType = {};

  export type TemplateDefinitionType = {};

  export type TemplateV2Type = {
    CertificateValidity: CertificateValidityType;

    SupersededTemplates?: string[];

    PrivateKeyAttributes: PrivateKeyAttributesV2Type;

    PrivateKeyFlags: PrivateKeyFlagsV2Type;

    EnrollmentFlags: EnrollmentFlagsV2Type;

    SubjectNameFlags: SubjectNameFlagsV2Type;

    GeneralFlags: GeneralFlagsV2Type;

    Extensions: ExtensionsV2Type;
  };

  export type TemplateV3Type = {
    CertificateValidity: CertificateValidityType;

    SupersededTemplates?: string[];

    PrivateKeyAttributes: PrivateKeyAttributesV3Type;

    PrivateKeyFlags: PrivateKeyFlagsV3Type;

    EnrollmentFlags: EnrollmentFlagsV3Type;

    SubjectNameFlags: SubjectNameFlagsV3Type;

    GeneralFlags: GeneralFlagsV3Type;

    HashAlgorithm: HashAlgorithmType;

    Extensions: ExtensionsV3Type;
  };

  export type TemplateV4Type = {
    CertificateValidity: CertificateValidityType;

    SupersededTemplates?: string[];

    PrivateKeyAttributes: PrivateKeyAttributesV4Type;

    PrivateKeyFlags: PrivateKeyFlagsV4Type;

    EnrollmentFlags: EnrollmentFlagsV4Type;

    SubjectNameFlags: SubjectNameFlagsV4Type;

    GeneralFlags: GeneralFlagsV4Type;

    HashAlgorithm?: HashAlgorithmType;

    Extensions: ExtensionsV4Type;
  };

  export type ValidityPeriodType = {
    PeriodType: ValidityPeriodTypeType;

    Period: number;
  };

  export type ValidityPeriodTypeType = {};

  /**
   * Represents a template that defines certificate configurations, both for issuance and client handling
   */
  export type TemplateResourceType = {
    /**
     * Create-only property
     */
    ConnectorArn: string;

    Definition: TemplateDefinitionType;

    /**
     * Create-only property
     */
    Name: string;

    ReenrollAllCertificateHolders?: boolean;

    Tags?: TagsType;

    /**
     * Read-only property
     */
    TemplateArn?: string;
  };
}
