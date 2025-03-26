/**
 * TypeScript definitions for AWS::IoT::AccountAuditConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Configures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
 */
export namespace AWS_IoT_AccountAuditConfiguration {
  /**
   * Specifies which audit checks are enabled and disabled for this account.
   */
  export type AuditCheckConfigurationsType = {
    AuthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfigurationType;

    CaCertificateExpiringCheck?: AuditCheckConfigurationType;

    CaCertificateKeyQualityCheck?: AuditCheckConfigurationType;

    ConflictingClientIdsCheck?: AuditCheckConfigurationType;

    DeviceCertificateExpiringCheck?: DeviceCertExpirationAuditCheckConfigurationType;

    DeviceCertificateKeyQualityCheck?: AuditCheckConfigurationType;

    DeviceCertificateSharedCheck?: AuditCheckConfigurationType;

    IotPolicyOverlyPermissiveCheck?: AuditCheckConfigurationType;

    IotRoleAliasAllowsAccessToUnusedServicesCheck?: AuditCheckConfigurationType;

    IotRoleAliasOverlyPermissiveCheck?: AuditCheckConfigurationType;

    LoggingDisabledCheck?: AuditCheckConfigurationType;

    RevokedCaCertificateStillActiveCheck?: AuditCheckConfigurationType;

    RevokedDeviceCertificateStillActiveCheck?: AuditCheckConfigurationType;

    UnauthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfigurationType;

    IntermediateCaRevokedForActiveDeviceCertificatesCheck?: AuditCheckConfigurationType;

    IoTPolicyPotentialMisConfigurationCheck?: AuditCheckConfigurationType;

    DeviceCertificateAgeCheck?: DeviceCertAgeAuditCheckConfigurationType;
  };

  /**
   * Information about the targets to which audit notifications are sent.
   */
  export type AuditNotificationTargetConfigurationsType = {
    Sns?: AuditNotificationTargetType;
  };

  /**
   * The configuration for a specific audit check.
   */
  export type AuditCheckConfigurationType = {
    /**
     * True if the check is enabled.
     */
    Enabled?: boolean;
  };

  /**
   * A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.
   */
  export type DeviceCertAgeAuditCheckConfigurationType = {
    /**
     * True if the check is enabled.
     */
    Enabled?: boolean;

    Configuration?: CertAgeCheckCustomConfigurationType;
  };

  /**
   * A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.
   */
  export type DeviceCertExpirationAuditCheckConfigurationType = {
    /**
     * True if the check is enabled.
     */
    Enabled?: boolean;

    Configuration?: CertExpirationCheckCustomConfigurationType;
  };

  export type AuditNotificationTargetType = {
    /**
     * The ARN of the target (SNS topic) to which audit notifications are sent.
     */
    TargetArn?: string;

    /**
     * The ARN of the role that grants permission to send notifications to the target.
     */
    RoleArn?: string;

    /**
     * True if notifications to the target are enabled.
     */
    Enabled?: boolean;
  };

  /**
   * The configValue for configuring audit checks.
   */
  export type ConfigValueType = {};

  /**
   * A structure containing the configName and corresponding configValue for configuring audit checks.
   */
  export type CertAgeCheckCustomConfigurationType = {
    CertAgeThresholdInDays?: ConfigValueType;
  };

  /**
   * A structure containing the configName and corresponding configValue for configuring audit checks.
   */
  export type CertExpirationCheckCustomConfigurationType = {
    CertExpirationThresholdInDays?: ConfigValueType;
  };

  /**
   * Configures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
   */
  export type AccountAuditConfigurationResourceType = {
    /**
     * Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
     * Create-only property
     */
    AccountId: string;

    AuditCheckConfigurations: AuditCheckConfigurationsType;

    AuditNotificationTargetConfigurations?: AuditNotificationTargetConfigurationsType;

    /**
     * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
     */
    RoleArn: string;
  };
}
