/**
 * TypeScript definitions for AWS::Route53::KeySigningKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a key signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.
 */
export namespace AWS_Route53_KeySigningKey {
  /**
   * Represents a key signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.
   */
  export type KeySigningKeyResourceType = {
    /**
     * The unique string (ID) used to identify a hosted zone.
     * Create-only property
     */
    HostedZoneId: string;

    /**
     * A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.
     */
    Status: string;

    /**
     * An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
     * Create-only property
     */
    KeyManagementServiceArn: string;
  };
}
