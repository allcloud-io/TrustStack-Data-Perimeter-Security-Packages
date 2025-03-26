/**
 * TypeScript definitions for AWS::IAM::ServiceLinkedRole
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::ServiceLinkedRole
 */
export namespace AWS_IAM_ServiceLinkedRole {
  /**
   * Resource Type definition for AWS::IAM::ServiceLinkedRole
   */
  export type ServiceLinkedRoleResourceType = {
    /**
     * The name of the role.
     * Read-only property
     */
    RoleName?: string;

    /**
     * A string that you provide, which is combined with the service-provided prefix to form the complete role name.
     * Create-only property
     */
    CustomSuffix?: string;

    /**
     * The description of the role.
     */
    Description?: string;

    /**
     * The service principal for the AWS service to which this role is attached.
     * Create-only property
     */
    AWSServiceName?: string;
  };
}
