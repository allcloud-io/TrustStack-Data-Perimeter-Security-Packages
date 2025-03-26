/**
 * TypeScript definitions for AWS::EMR::SecurityConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Use a SecurityConfiguration resource to configure data encryption, Kerberos authentication, and Amazon S3 authorization for EMRFS.
 */
export namespace AWS_EMR_SecurityConfiguration {
  /**
   * Use a SecurityConfiguration resource to configure data encryption, Kerberos authentication, and Amazon S3 authorization for EMRFS.
   */
  export type SecurityConfigurationResourceType = {
    /**
     * The name of the security configuration.
     * Create-only property
     */
    Name?: string;

    /**
     * The security configuration details in JSON format.
     * Create-only property
     */
    SecurityConfiguration: Record<string, any> | string;
  };
}
