/**
 * TypeScript definitions for AWS::SecretsManager::SecretTargetAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SecretsManager::SecretTargetAttachment
 */
export namespace AWS_SecretsManager_SecretTargetAttachment {
  /**
   * Resource Type definition for AWS::SecretsManager::SecretTargetAttachment
   */
  export type SecretTargetAttachmentResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    SecretId: string;

    TargetType: string;

    TargetId: string;
  };
}
