import type { LambdaLayerPermissionSecurityConfig } from "@trust-stack/schema";
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

export type Lambda_LayerPermissionSecurityStackProps = cdk.StackProps &
  Readonly<{
    securityPackagesDir: string;
    config: LambdaLayerPermissionSecurityConfig;
  }>;

/**
 * Stack for the Lambda Layer Permission Security Package.
 */
export class Lambda_LayerPermissionSecurityStack extends cdk.Stack {
  private readonly props: Lambda_LayerPermissionSecurityStackProps;

  private readonly hookExecutionRole: iam.IRole;
  private readonly assetsBucket: s3.IBucket;
  private readonly packageConfigSSMParameter: ssm.StringParameter;

  constructor(
    scope: Construct,
    id: string,
    props: Lambda_LayerPermissionSecurityStackProps,
  ) {
    super(scope, id, props);

    this.props = props;

    const hookExecutionRoleARN = ssm.StringParameter.valueForStringParameter(
      this,
      "/trust-stack/cloudformation-hook-execution-role-arn" satisfies SharedSSMParameterName,
    );

    const assetsBucketName = ssm.StringParameter.valueForStringParameter(
      this,
      "/trust-stack/assets-bucket/name" satisfies SharedSSMParameterName,
    );

    this.hookExecutionRole = iam.Role.fromRoleArn(
      this,
      "HookExecutionRole",
      hookExecutionRoleARN,
    );

    this.assetsBucket = s3.Bucket.fromBucketName(
      this,
      "AssetsBucket",
      assetsBucketName,
    );

    this.packageConfigSSMParameter = new ssm.StringParameter(
      this,
      "PackageConfigurationSSMParameter",
      {
        parameterName:
          "/trust-stack/lambda/layer-permission-security/config" satisfies SharedSSMParameterName,
        stringValue: JSON.stringify(this.props.config),
      },
    );

    this.createProactiveControl();
    this.createDetectiveControl();
    this.createResponsiveControl();
  }

  private createProactiveControl() {
    return new CloudFormationLambdaHook(this, "ProactiveControl", {
      securityPackageName: SECURITY_PACKAGE_NAME,
      description:
        "CloudFormation hook handler to validate Lambda layer permission configurations",
      hookExecutionRole: this.hookExecutionRole,
      targetOperations: ["RESOURCE"],
      targetNames: ["AWS::Lambda::LayerVersionPermission"],
      failureMode: "FAIL",
      code: lambda.Code.fromBucketV2(
        this.assetsBucket,
        `${BUILD_HASH}/security-packages/${SECURITY_PACKAGE_SLUG}/proactive-control/lambda.zip`,
      ),
      initialPolicy: [
        new iam.PolicyStatement({
          sid: "AllowGetPackageConfiguration",
          effect: iam.Effect.ALLOW,
          actions: ["ssm:GetParameter"],
          resources: [this.packageConfigSSMParameter.parameterArn],
        }),
      ],
    });
  }

  private createDetectiveControl() {
    // Create Lambda function using the shared construct
    const lambdaHandler = createNodejsLambdaFunction(
      this,
      "DetectiveControlHandler",
      {
        functionName: `${SECURITY_PACKAGE_NAME}-MonitorLayerPermissions`,
        description:
          "Monitor CloudTrail events for layer permission changes and validate compliance",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          `${BUILD_HASH}/security-packages/${SECURITY_PACKAGE_SLUG}/detective-control/lambda.zip`,
        ),
        initialPolicy: [
          new iam.PolicyStatement({
            sid: "AllowGetPackageConfiguration",
            effect: iam.Effect.ALLOW,
            actions: ["ssm:GetParameter"],
            resources: [this.packageConfigSSMParameter.parameterArn],
          }),
          new iam.PolicyStatement({
            sid: "AllowImportSecurityHubFindings",
            effect: iam.Effect.ALLOW,
            actions: ["securityhub:BatchImportFindings"],
            resources: ["*"],
          }),
        ],
      },
    );

    // Create EventBridge rule to trigger the Lambda function
    new events.Rule(this, "LayerPermissionEventRule", {
      eventPattern: {
        source: ["aws.lambda"],
        detailType: ["AWS API Call via CloudTrail"],
        detail: {
          eventSource: ["lambda.amazonaws.com"],
          eventName: ["AddLayerVersionPermission20181031"],
        },
      },
      targets: [new eventsTargets.LambdaFunction(lambdaHandler)],
    });
  }

  private createResponsiveControl() {
    // Create Lambda function using the shared construct
    const lambdaHandler = createNodejsLambdaFunction(
      this,
      "ResponsiveControlHandler",
      {
        functionName: `${SECURITY_PACKAGE_NAME}-RemediateLayerPermissions`,
        description: "Automatically remediate non-compliant layer permissions",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          `${BUILD_HASH}/security-packages/${SECURITY_PACKAGE_SLUG}/responsive-control/lambda.zip`,
        ),
        timeout: cdk.Duration.minutes(1),
        initialPolicy: [
          new iam.PolicyStatement({
            sid: "AllowGetPackageConfiguration",
            effect: iam.Effect.ALLOW,
            actions: ["ssm:GetParameter"],
            resources: [this.packageConfigSSMParameter.parameterArn],
          }),
          new iam.PolicyStatement({
            sid: "AllowManageLayerPermissions",
            effect: iam.Effect.ALLOW,
            actions: [
              "lambda:GetLayerVersionPolicy",
              "lambda:RemoveLayerVersionPermission",
            ],
            resources: ["*"],
          }),
          new iam.PolicyStatement({
            sid: "AllowManageSecurityHubFindings",
            effect: iam.Effect.ALLOW,
            actions: [
              "securityhub:GetFindings",
              "securityhub:BatchUpdateFindings",
            ],
            resources: ["*"],
          }),
        ],
      },
    );

    // Create EventBridge rule to trigger the Lambda function on Security Hub findings
    new events.Rule(this, "SecurityHubFindingRule", {
      eventPattern: {
        source: ["aws.securityhub"],
        detailType: ["Security Hub Findings - Imported"],
        detail: {
          findings: {
            GeneratorId: [`${SECURITY_PACKAGE_NAME}DetectiveControl`],
            Workflow: {
              Status: ["NEW"],
            },
          },
        },
      },
      targets: [new eventsTargets.LambdaFunction(lambdaHandler)],
    });
  }
}
