import type { SharedSSMParameterName } from "@trust-stack/utils";
import * as cdk from "aws-cdk-lib";
import * as events from "aws-cdk-lib/aws-events";
import * as eventsTargets from "aws-cdk-lib/aws-events-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as ssm from "aws-cdk-lib/aws-ssm";
import type { Construct } from "constructs";
import { BUILD_HASH } from "../../../shared/build-configuration";
import {
  CloudFormationLambdaHook,
  createNodejsLambdaFunction,
} from "../../../shared/constructs";
import { SECURITY_PACKAGE_NAME, SECURITY_PACKAGE_SLUG } from "./shared";

export type Lambda_VPCSecurityStackProps = cdk.StackProps &
  Readonly<{
    securityPackagesDir: string;
  }>;

/**
 * Stack for the Lambda VPC Security package
 *
 * This stack deploys the necessary resources to enforce Lambda functions
 * to be deployed within VPCs.
 */
export class Lambda_VPCSecurityStack extends cdk.Stack {
  private readonly assetsBucket: s3.IBucket;
  private readonly hookExecutionRole: iam.IRole;

  constructor(
    scope: Construct,
    id: string,
    props: Lambda_VPCSecurityStackProps,
  ) {
    super(scope, id, props);

    // Get assets bucket from SSM parameter
    const assetsBucketName = ssm.StringParameter.valueForStringParameter(
      this,
      "/trust-stack/assets-bucket/name" satisfies SharedSSMParameterName,
    );

    this.assetsBucket = s3.Bucket.fromBucketName(
      this,
      "AssetsBucket",
      assetsBucketName,
    );

    // Get hook execution role from SSM
    const hookExecutionRoleARN = ssm.StringParameter.valueForStringParameter(
      this,
      "/trust-stack/cloudformation-hook-execution-role-arn" satisfies SharedSSMParameterName,
    );

    this.hookExecutionRole = iam.Role.fromRoleArn(
      this,
      "HookExecutionRole",
      hookExecutionRoleARN,
    );

    // Create each control type
    this.createProactiveControl();
    this.createDetectiveControl();
  }

  private createProactiveControl() {
    return new CloudFormationLambdaHook(this, "ProactiveControl", {
      securityPackageName: SECURITY_PACKAGE_NAME,
      description:
        "CloudFormation hook handler to validate Lambda functions have VPC configurations",
      hookExecutionRole: this.hookExecutionRole,
      targetOperations: ["RESOURCE"],
      targetNames: ["AWS::Lambda::Function"],
      failureMode: "FAIL",
      code: lambda.Code.fromBucketV2(
        this.assetsBucket,
        `${BUILD_HASH}/trust-stack/security-packages/${SECURITY_PACKAGE_SLUG}/proactive-control/lambda.zip`,
      ),
    });
  }

  private createDetectiveControl() {
    // Create Lambda function for detective control
    const lambdaHandler = createNodejsLambdaFunction(
      this,
      "DetectiveControlHandler",
      {
        functionName: `${SECURITY_PACKAGE_NAME}-MonitorLambdaAPI`,
        description:
          "Monitor CloudTrail events for Lambda function creation/update and validate VPC configuration",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          `${BUILD_HASH}/trust-stack/security-packages/${SECURITY_PACKAGE_SLUG}/detective-control/lambda.zip`,
        ),
        initialPolicy: [
          new iam.PolicyStatement({
            sid: "AllowLambdaFunctionInspection",
            effect: iam.Effect.ALLOW,
            actions: ["lambda:GetFunctionConfiguration", "lambda:ListTags"],
            resources: ["*"],
          }),
          new iam.PolicyStatement({
            sid: "AllowImportSecurityHubFindings",
            effect: iam.Effect.ALLOW,
            actions: [
              "securityhub:BatchImportFindings",
              "securityhub:BatchUpdateFindings",
              "securityhub:GetFindings",
            ],
            resources: ["*"],
          }),
        ],
      },
    );

    // Create EventBridge rule to trigger on Lambda function creation/updates
    // See https://docs.aws.amazon.com/lambda/latest/dg/logging-using-cloudtrail.html
    new events.Rule(this, "LambdaCreationUpdateRule", {
      eventPattern: {
        source: ["aws.lambda"],
        detailType: ["AWS API Call via CloudTrail"],
        detail: {
          eventSource: ["lambda.amazonaws.com"],
          eventName: [
            "CreateFunction20150331",
            "UpdateFunctionConfiguration20150331v2",
          ],
          errorCode: [{ exists: false }],
        },
      },
      targets: [new eventsTargets.LambdaFunction(lambdaHandler)],
    });
  }
}
