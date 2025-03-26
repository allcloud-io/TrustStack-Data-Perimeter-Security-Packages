/**
 * TypeScript definitions for AWS::Transfer::Agreement
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Transfer::Agreement
 */
export namespace AWS_Transfer_Agreement {
  /**
   * Creates a key-value pair for a specific resource.
   */
  export type TagType = {
    /**
     * The name assigned to the tag that you create.
     */
    Key: string;

    /**
     * Contains one or more values that you assigned to the key name you create.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Transfer::Agreement
   */
  export type AgreementResourceType = {
    /**
     * A textual description for the agreement.
     */
    Description?: string;

    /**
     * A unique identifier for the server.
     * Create-only property
     */
    ServerId: string;

    /**
     * A unique identifier for the local profile.
     */
    LocalProfileId: string;

    /**
     * A unique identifier for the partner profile.
     */
    PartnerProfileId: string;

    /**
     * Specifies the base directory for the agreement.
     */
    BaseDirectory?: string;

    /**
     * Specifies the access role for the agreement.
     */
    AccessRole: string;

    /**
     * Specifies the status of the agreement.
     */
    Status?: string;

    /**
     * Key-value pairs that can be used to group and search for agreements. Tags are metadata attached to agreements for any purpose.
     */
    Tags?: TagType[];

    /**
     * A unique identifier for the agreement.
     * Read-only property
     */
    AgreementId?: string;

    /**
     * Specifies the unique Amazon Resource Name (ARN) for the agreement.
     * Read-only property
     */
    Arn?: string;

    /**
     * Specifies whether to preserve the filename received for this agreement.
     */
    PreserveFilename?: string;

    /**
     * Specifies whether to enforce an AS2 message is signed for this agreement.
     */
    EnforceMessageSigning?: string;

    /**
     * Specifies a separate directory for each type of file to store for an AS2 message.
     */
    CustomDirectories?: Record<string, any>;
  };
}
