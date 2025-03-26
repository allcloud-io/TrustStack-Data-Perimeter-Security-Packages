/**
 * TypeScript definitions for AWS::SES::EmailIdentity
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::EmailIdentity
 */
export namespace AWS_SES_EmailIdentity {
  /**
   * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.
   */
  export type DkimSigningAttributesType = {
    /**
     * [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
     */
    DomainSigningSelector?: string;

    /**
     * [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
     */
    DomainSigningPrivateKey?: string;

    /**
     * [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
     */
    NextSigningKeyLength?: string;
  };

  /**
   * Used to associate a configuration set with an email identity.
   */
  export type ConfigurationSetAttributesType = {
    /**
     * The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.
     */
    ConfigurationSetName?: string;
  };

  /**
   * Used to enable or disable DKIM authentication for an email identity.
   */
  export type DkimAttributesType = {
    /**
     * Sets the DKIM signing configuration for the identity. When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.
     */
    SigningEnabled?: boolean;
  };

  /**
   * Used to enable or disable the custom Mail-From domain configuration for an email identity.
   */
  export type MailFromAttributesType = {
    /**
     * The custom MAIL FROM domain that you want the verified identity to use
     */
    MailFromDomain?: string;

    /**
     * The action to take if the required MX record isn't found when you send an email. When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.
     */
    BehaviorOnMxFailure?: string;
  };

  /**
   * Used to enable or disable feedback forwarding for an identity.
   */
  export type FeedbackAttributesType = {
    /**
     * If the value is true, you receive email notifications when bounce or complaint events occur
     */
    EmailForwardingEnabled?: boolean;
  };

  /**
   * Resource Type definition for AWS::SES::EmailIdentity
   */
  export type EmailIdentityResourceType = {
    /**
     * The email address or domain to verify.
     * Create-only property
     */
    EmailIdentity: string;

    ConfigurationSetAttributes?: ConfigurationSetAttributesType;

    DkimSigningAttributes?: DkimSigningAttributesType;

    DkimAttributes?: DkimAttributesType;

    MailFromAttributes?: MailFromAttributesType;

    FeedbackAttributes?: FeedbackAttributesType;

    /**
     * Read-only property
     */
    DkimDNSTokenName1?: string;

    /**
     * Read-only property
     */
    DkimDNSTokenName2?: string;

    /**
     * Read-only property
     */
    DkimDNSTokenName3?: string;

    /**
     * Read-only property
     */
    DkimDNSTokenValue1?: string;

    /**
     * Read-only property
     */
    DkimDNSTokenValue2?: string;

    /**
     * Read-only property
     */
    DkimDNSTokenValue3?: string;
  };
}
