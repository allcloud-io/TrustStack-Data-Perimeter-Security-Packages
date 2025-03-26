/**
 * TypeScript definitions for AWS::SSO::InstanceAccessControlAttributeConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for SSO InstanceAccessControlAttributeConfiguration
 */
export namespace AWS_SSO_InstanceAccessControlAttributeConfiguration {
  export type AccessControlAttributeValueSourceType = {};

  export type AccessControlAttributeValueSourceListType = {};

  export type AccessControlAttributeValueType = {
    Source: AccessControlAttributeValueSourceListType;
  };

  export type AccessControlAttributeType = {
    Key: string;

    Value: AccessControlAttributeValueType;
  };

  export type AccessControlAttributeListType = {};

  /**
   * Resource Type definition for SSO InstanceAccessControlAttributeConfiguration
   */
  export type InstanceAccessControlAttributeConfigurationResourceType = {
    /**
     * The ARN of the AWS SSO instance under which the operation will be executed.
     * Create-only property
     */
    InstanceArn: string;

    /**
     * The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
     */
    InstanceAccessControlAttributeConfiguration?: Record<string, any>;

    AccessControlAttributes?: AccessControlAttributeListType;
  };
}
