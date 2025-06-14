/**
 * TypeScript definitions for AWS::Lambda::Permission
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Lambda::Permission` resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.
 * To grant permission to another account, specify the account ID as the `Principal`. To grant permission to an organization defined in AOlong, specify the organization ID as the `PrincipalOrgID`. For AWS services, the principal is a domain-style identifier defined by the service, like `s3.amazonaws.com` or `sns.amazonaws.com`. For AWS services, you can also specify the ARN of the associated resource as the `SourceArn`. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.
 * If your function has a function URL, you can specify the `FunctionUrlAuthType` parameter. This adds a condition to your permission that only applies when your function URL's `AuthType` matches the specified `FunctionUrlAuthType`. For more information about the `AuthType` parameter, see Security and auth model for function URLs.
 * This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see Lambda Function Policies.
 */
export namespace AWS_Lambda_Permission {
  /**
   * The `AWS::Lambda::Permission` resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.
   * To grant permission to another account, specify the account ID as the `Principal`. To grant permission to an organization defined in AOlong, specify the organization ID as the `PrincipalOrgID`. For AWS services, the principal is a domain-style identifier defined by the service, like `s3.amazonaws.com` or `sns.amazonaws.com`. For AWS services, you can also specify the ARN of the associated resource as the `SourceArn`. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.
   * If your function has a function URL, you can specify the `FunctionUrlAuthType` parameter. This adds a condition to your permission that only applies when your function URL's `AuthType` matches the specified `FunctionUrlAuthType`. For more information about the `AuthType` parameter, see Security and auth model for function URLs.
   * This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see Lambda Function Policies.
   */
  export type PermissionResourceType = {
    /**
     * The name or ARN of the Lambda function, version, or alias.
     * **Name formats**
     * +   *Function name* – `my-function` (name-only), `my-function:v1` (with alias).
     * +   *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
     * +   *Partial ARN* – `123456789012:function:my-function`.
     * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     * Create-only property
     */
    FunctionName: string;

    /**
     * The action that the principal can use on the function. For example, `lambda:InvokeFunction` or `lambda:GetFunction`.
     * Create-only property
     */
    Action: string;

    /**
     * For Alexa Smart Home functions, a token that the invoker must supply.
     * Create-only property
     */
    EventSourceToken?: string;

    /**
     * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see Security and auth model for Lambda function URLs.
     * Create-only property
     */
    FunctionUrlAuthType?: string;

    /**
     * For AWS-services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
     * Note that Lambda configures the comparison using the `StringLike` operator.
     * Create-only property
     */
    SourceArn?: string;

    /**
     * For AWS-service, the ID of the AWS-account that owns the resource. Use this together with `SourceArn` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
     * Create-only property
     */
    SourceAccount?: string;

    /**
     * The identifier for your organization in AOlong. Use this to grant permissions to all the AWS-accounts under this organization.
     * Create-only property
     */
    PrincipalOrgID?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The AWS-service, AWS-account, IAM user, or IAM role that invokes the function. If you specify a service, use `SourceArn` or `SourceAccount` to limit who can invoke the function through that service.
     * Create-only property
     */
    Principal: string;
  };
}
