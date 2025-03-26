/**
 * TypeScript definitions for AWS::PinpointEmail::ConfigurationSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::PinpointEmail::ConfigurationSet
 */
export namespace AWS_PinpointEmail_ConfigurationSet {
  export type SendingOptionsType = {
    SendingEnabled?: boolean;
  };

  export type TrackingOptionsType = {
    CustomRedirectDomain?: string;
  };

  export type ReputationOptionsType = {
    ReputationMetricsEnabled?: boolean;
  };

  export type DeliveryOptionsType = {
    SendingPoolName?: string;
  };

  export type TagsType = {
    Value?: string;

    Key?: string;
  };

  /**
   * Resource Type definition for AWS::PinpointEmail::ConfigurationSet
   */
  export type ConfigurationSetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    SendingOptions?: SendingOptionsType;

    TrackingOptions?: TrackingOptionsType;

    ReputationOptions?: ReputationOptionsType;

    DeliveryOptions?: DeliveryOptionsType;

    Tags?: TagsType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
