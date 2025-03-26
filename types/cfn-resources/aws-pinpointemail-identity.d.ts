/**
 * TypeScript definitions for AWS::PinpointEmail::Identity
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::PinpointEmail::Identity
 */
export namespace AWS_PinpointEmail_Identity {
  export type TagsType = {
    Value?: string;

    Key?: string;
  };

  export type MailFromAttributesType = {
    MailFromDomain?: string;

    BehaviorOnMxFailure?: string;
  };

  /**
   * Resource Type definition for AWS::PinpointEmail::Identity
   */
  export type IdentityResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    IdentityDNSRecordName3?: string;

    /**
     * Read-only property
     */
    IdentityDNSRecordName1?: string;

    /**
     * Read-only property
     */
    IdentityDNSRecordName2?: string;

    /**
     * Read-only property
     */
    IdentityDNSRecordValue3?: string;

    /**
     * Read-only property
     */
    IdentityDNSRecordValue2?: string;

    /**
     * Read-only property
     */
    IdentityDNSRecordValue1?: string;

    FeedbackForwardingEnabled?: boolean;

    DkimSigningEnabled?: boolean;

    Tags?: TagsType[];

    /**
     * Create-only property
     */
    Name: string;

    MailFromAttributes?: MailFromAttributesType;
  };
}
