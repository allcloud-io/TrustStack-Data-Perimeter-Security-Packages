/**
 * TypeScript definitions for AWS::CloudFormation::Publisher
 * Generated from CloudFormation Resource Schema
 */

/**
 * Register as a publisher in the CloudFormation Registry.
 */
export namespace AWS_CloudFormation_Publisher {
  /**
   * Register as a publisher in the CloudFormation Registry.
   */
  export type PublisherResourceType = {
    /**
     * Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
     * Create-only property
     */
    AcceptTermsAndConditions: boolean;

    /**
     * The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
     * Read-only property
     */
    PublisherId?: string;

    /**
     * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
     * Create-only property
     */
    ConnectionArn?: string;

    /**
     * Whether the publisher is verified.
     * Read-only property
     */
    PublisherStatus?: string;

    /**
     * The URL to the publisher's profile with the identity provider.
     * Read-only property
     */
    PublisherProfile?: string;

    /**
     * The type of account used as the identity provider when registering this publisher with CloudFormation.
     * Read-only property
     */
    IdentityProvider?: string;
  };
}
