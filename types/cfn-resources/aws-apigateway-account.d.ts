/**
 * TypeScript definitions for AWS::ApiGateway::Account
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::Account` resource specifies the IAM role that Amazon API Gateway uses to write API logs to Amazon CloudWatch Logs. To avoid overwriting other roles, you should only have one `AWS::ApiGateway::Account` resource per region per account.
 */
export namespace AWS_ApiGateway_Account {
  /**
   * The `AWS::ApiGateway::Account` resource specifies the IAM role that Amazon API Gateway uses to write API logs to Amazon CloudWatch Logs. To avoid overwriting other roles, you should only have one `AWS::ApiGateway::Account` resource per region per account.
   */
  export type AccountResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    CloudWatchRoleArn?: string;
  };
}
