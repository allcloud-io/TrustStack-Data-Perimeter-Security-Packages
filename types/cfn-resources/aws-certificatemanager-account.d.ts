/**
 * TypeScript definitions for AWS::CertificateManager::Account
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::CertificateManager::Account.
 */
export namespace AWS_CertificateManager_Account {
  export type ExpiryEventsConfigurationType = {
    DaysBeforeExpiry?: number;
  };

  export type AccountIdType = {};

  /**
   * Resource schema for AWS::CertificateManager::Account.
   */
  export type AccountResourceType = {
    ExpiryEventsConfiguration: ExpiryEventsConfigurationType;

    /**
     * Read-only property
     */
    AccountId?: AccountIdType;
  };
}
