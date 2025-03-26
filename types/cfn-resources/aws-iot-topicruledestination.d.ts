/**
 * TypeScript definitions for AWS::IoT::TopicRuleDestination
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::TopicRuleDestination
 */
export namespace AWS_IoT_TopicRuleDestination {
  export type TopicRuleDestinationStatusType = {};

  export type HttpUrlDestinationSummaryType = {
    ConfirmationUrl?: string;
  };

  export type VpcDestinationPropertiesType = {
    SubnetIds?: string[];

    SecurityGroups?: string[];

    VpcId?: string;

    RoleArn?: string;
  };

  /**
   * Resource Type definition for AWS::IoT::TopicRuleDestination
   */
  export type TopicRuleDestinationResourceType = {
    /**
     * Amazon Resource Name (ARN).
     * Read-only property
     */
    Arn?: string;

    /**
     * The status of the TopicRuleDestination.
     */
    Status?: TopicRuleDestinationStatusType;

    /**
     * HTTP URL destination properties.
     * Create-only property
     */
    HttpUrlProperties?: HttpUrlDestinationSummaryType;

    /**
     * The reasoning for the current status of the TopicRuleDestination.
     * Read-only property
     */
    StatusReason?: string;

    /**
     * VPC destination properties.
     * Create-only property
     */
    VpcProperties?: VpcDestinationPropertiesType;
  };
}
