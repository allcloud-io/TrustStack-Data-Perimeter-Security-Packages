/**
 * TypeScript type definitions for AWS Service Control Policies
 * Based on documentation: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_syntax.html
 */

/**
 * Represents a complete AWS Service Control Policy document
 */
export type ServiceControlPolicy = {
  /**
   * The version of the policy language. Must be "2012-10-17".
   */
  Version: "2012-10-17";

  /**
   * A container for the policy's statements. Consists of one or more Statement elements.
   */
  Statement: SCPStatement | SCPStatement[];
};

/**
 * Represents a single statement within a Service Control Policy
 */
export type SCPStatement = {
  /**
   * Optional identifier provided for the policy statement
   */
  Sid?: string;

  /**
   * Defines whether the statement allows or denies access
   */
  Effect: "Allow" | "Deny";

  /**
   * AWS service and actions that the SCP allows or denies
   * Only one of Action or NotAction should be specified
   */
  Action?: string | string[];

  /**
   * AWS service and actions that are exempt from the SCP
   * Only applicable in Deny statements
   * Only one of Action or NotAction should be specified
   */
  NotAction?: string | string[];

  /**
   * The AWS resources that the SCP applies to
   * In Allow statements, this must be "*"
   * In Deny statements, specific ARNs can be specified
   */
  Resource?: string | string[];

  /**
   * Conditions for when the statement is in effect
   * Only applicable in Deny statements
   */
  Condition?: SCPCondition;
};

/**
 * Represents a condition in a Service Control Policy statement
 */
export type SCPCondition = {
  [operator: string]: {
    [key: string]: string | string[] | number | number[] | boolean;
  };
};

/**
 * Common condition operators used in SCPs
 */
export enum SCPConditionOperator {
  StringEquals = "StringEquals",
  StringNotEquals = "StringNotEquals",
  StringEqualsIgnoreCase = "StringEqualsIgnoreCase",
  StringNotEqualsIgnoreCase = "StringNotEqualsIgnoreCase",
  StringLike = "StringLike",
  StringNotLike = "StringNotLike",
  NumericEquals = "NumericEquals",
  NumericNotEquals = "NumericNotEquals",
  NumericLessThan = "NumericLessThan",
  NumericLessThanEquals = "NumericLessThanEquals",
  NumericGreaterThan = "NumericGreaterThan",
  NumericGreaterThanEquals = "NumericGreaterThanEquals",
  DateEquals = "DateEquals",
  DateNotEquals = "DateNotEquals",
  DateLessThan = "DateLessThan",
  DateLessThanEquals = "DateLessThanEquals",
  DateGreaterThan = "DateGreaterThan",
  DateGreaterThanEquals = "DateGreaterThanEquals",
  Bool = "Bool",
  IpAddress = "IpAddress",
  NotIpAddress = "NotIpAddress",
  ArnEquals = "ArnEquals",
  ArnNotEquals = "ArnNotEquals",
  ArnLike = "ArnLike",
  ArnNotLike = "ArnNotLike",
}

/**
 * Common condition keys used in SCPs
 */
export enum SCPConditionKey {
  AwsRequestedRegion = "aws:RequestedRegion",
  AwsServiceName = "aws:ServiceName",
  AwsResourceTag = "aws:ResourceTag/",
  AwsTagKeys = "aws:TagKeys",
  AwsUserID = "aws:userid",
  AwsSourceIP = "aws:SourceIp",
  AwsPrincipalOrgID = "aws:PrincipalOrgID",
  AwsPrincipalTag = "aws:PrincipalTag/",
  AwsViaAWSService = "aws:ViaAWSService",
  AwsSourceVPC = "aws:SourceVpc",
  AwsSourceVPCEndpoint = "aws:SourceVpce",
}

/**
 * Example usage:
 *
 * ```typescript
 * const denyEC2OutsideRegionPolicy: ServiceControlPolicy = {
 *   Version: "2012-10-17",
 *   Statement: {
 *     Sid: "DenyEC2OutsideUSWest1",
 *     Effect: "Deny",
 *     Action: "ec2:*",
 *     Resource: "*",
 *     Condition: {
 *       StringNotEquals: {
 *         "aws:RequestedRegion": "us-west-1"
 *       }
 *     }
 *   }
 * };
 * ```
 */
