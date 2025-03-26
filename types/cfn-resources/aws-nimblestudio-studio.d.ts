/**
 * TypeScript definitions for AWS::NimbleStudio::Studio
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a studio that contains other Nimble Studio resources
 */
export namespace AWS_NimbleStudio_Studio {
  /**
   * <p>Configuration of the encryption method that is used for the studio.</p>
   */
  export type StudioEncryptionConfigurationType = {
    KeyType: StudioEncryptionConfigurationKeyTypeType;

    /**
     * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
     */
    KeyArn?: string;
  };

  /**
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   */
  export type StudioEncryptionConfigurationKeyTypeType = {};

  export type TagsType = {};

  /**
   * Represents a studio that contains other Nimble Studio resources
   */
  export type StudioResourceType = {
    /**
     * <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
     */
    AdminRoleArn: string;

    /**
     * <p>A friendly name for the studio.</p>
     */
    DisplayName: string;

    /**
     * <p>The Amazon Web Services Region where the studio resource is located.</p>
     * Read-only property
     */
    HomeRegion?: string;

    /**
     * <p>The Amazon Web Services SSO application client ID used to integrate with Amazon Web Services SSO to enable Amazon Web Services SSO users to log in to Nimble Studio portal.</p>
     * Read-only property
     */
    SsoClientId?: string;

    StudioEncryptionConfiguration?: StudioEncryptionConfigurationType;

    /**
     * Read-only property
     */
    StudioId?: string;

    /**
     * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.</p>
     * Create-only property
     */
    StudioName: string;

    /**
     * <p>The address of the web page for the studio.</p>
     * Read-only property
     */
    StudioUrl?: string;

    /**
     * Create-only property
     */
    Tags?: TagsType;

    /**
     * <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>
     */
    UserRoleArn: string;
  };
}
