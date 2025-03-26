/**
 * TypeScript definitions for AWS::SES::MailManagerIngressPoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerIngressPoint Resource Type
 */
export namespace AWS_SES_MailManagerIngressPoint {
  export type IngressPointConfigurationType = {};

  export type IngressPointStatusType = {};

  export type IngressPointStatusToUpdateType = {};

  export type IngressPointTypeType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerIngressPoint Resource Type
   */
  export type MailManagerIngressPointResourceType = {
    /**
     * Read-only property
     */
    ARecord?: string;

    TrafficPolicyId: string;

    IngressPointConfiguration?: IngressPointConfigurationType;

    /**
     * Read-only property
     */
    IngressPointArn?: string;

    /**
     * Read-only property
     */
    IngressPointId?: string;

    IngressPointName?: string;

    RuleSetId: string;

    /**
     * Read-only property
     */
    Status?: IngressPointStatusType;

    StatusToUpdate?: IngressPointStatusToUpdateType;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Type: IngressPointTypeType;
  };
}
