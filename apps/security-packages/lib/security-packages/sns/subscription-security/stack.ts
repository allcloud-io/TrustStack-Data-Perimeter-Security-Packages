import type { SNSSubscriptionSecurityPackageConfig } from "@trust-stack/schema";
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

export type SNS_SubscriptionSecurityStackProps = cdk.StackProps &
  Readonly<{
    securityPackagesDir: string;
    config: SNSSubscriptionSecurityPackageConfig;
  }>;

/**
 * Stack for the SNS Subscription Security Package.
 */
export class SNS_SubscriptionSecurityStack extends cdk.Stack {
  private readonly props: SNS_SubscriptionSecurityStackProps;

  private readonly hookExecutionRole: iam.IRole;
  private readonly assetsBucket: s3.IBucket;
  private readonly packageConfigSSMParameter: ssm.StringParameter;

  constructor(
    scope: Construct,
    id: string,
    props: SNS_SubscriptionSecurityStackProps,
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
          "/trust-stack/sns/subscription-security/config" satisfies SharedSSMParameterName,
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
        "CloudFormation hook handler to validate SNS subscription endpoints and protocols",
      hookExecutionRole: this.hookExecutionRole,
      targetOperations: ["RESOURCE"],
      targetNames: ["AWS::SNS::Subscription"],
      failureMode: "FAIL",
      code: lambda.Code.fromBucketV2(
        this.assetsBucket,
        `${BUILD_HASH}/trust-stack/security-packages/${SECURITY_PACKAGE_SLUG}/proactive-control/lambda.zip`,
      ),
      initialPolicy: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ["ssm:GetParameter"],
          resources: [this.packageConfigSSMParameter.parameterArn],
        }),
      ],
    });
  }

  private createDetectiveControl() {
    const lambdaHandler = createNodejsLambdaFunction(
      this,
      "DetectiveControlHandler",
      {
        functionName: `${SECURITY_PACKAGE_NAME}-MonitorSNSAPI`,
        description:
          "Monitor CloudTrail events for SNS subscription creation and validate " +
          "SNS subscription endpoints and protocols",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          `${BUILD_HASH}/trust-stack/security-packages/${SECURITY_PACKAGE_SLUG}/detective-control/lambda.zip`,
        ),
        initialPolicy: [
          new iam.PolicyStatement({
            sid: "AllowGetPackageConfiguration",
            effect: iam.Effect.ALLOW,
            actions: ["ssm:GetParameter"],
            resources: [this.packageConfigSSMParameter.parameterArn],
          }),
          new iam.PolicyStatement({
            sid: "AllowGetSNSSubscriptionAttributes",
            effect: iam.Effect.ALLOW,
            actions: ["sns:GetSubscriptionAttributes"],
            resources: ["*"],
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

    new events.Rule(this, "SNSAPISubscribeRule", {
      eventPattern: {
        source: ["aws.sns"],
        detailType: ["AWS API Call via CloudTrail"],
        detail: {
          eventSource: ["sns.amazonaws.com"],
          eventName: ["Subscribe"],
        },
      },
      targets: [new eventsTargets.LambdaFunction(lambdaHandler)],
    });
  }

  private createResponsiveControl() {
    const lambdaHandler = createNodejsLambdaFunction(
      this,
      "ResponsiveControlHandler",
      {
        functionName: `${SECURITY_PACKAGE_NAME}-CancelUnauthorizedSNS`,
        description:
          "Cancel any subscriptions that bypass preventative and detective controls",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          `${BUILD_HASH}/trust-stack/security-packages/${SECURITY_PACKAGE_SLUG}/responsive-control/lambda.zip`,
        ),
        timeout: cdk.Duration.minutes(1),
        initialPolicy: [
          new iam.PolicyStatement({
            sid: "AllowGetSNSSubscriptionAttributesAndUnsubscribe",
            effect: iam.Effect.ALLOW,
            actions: ["sns:GetSubscriptionAttributes", "sns:Unsubscribe"],
            resources: ["*"],
          }),
          new iam.PolicyStatement({
            sid: "AllowGetAndUpdateSecurityHubFindings",
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

    const eventTarget = new eventsTargets.LambdaFunction(lambdaHandler);

    // Create an EventBridge rule to trigger the responsive control Lambda
    // when Security Hub findings for unauthorized SNS subscriptions are created
    new events.Rule(this, "SNSUnauthorizedSubscriptionRule", {
      eventPattern: {
        source: ["aws.securityhub"],
        detailType: ["Security Hub Findings - Imported"],
        detail: {
          findings: {
            GeneratorId: ["SNSSubscriptionEndpointValidator"],
            Workflow: {
              Status: ["NEW"],
            },
          },
        },
      },
      targets: [eventTarget],
    });

    new events.Rule(this, "SNSSubscriptionConfirmationRule", {
      eventPattern: {
        source: ["aws.sns"],
        detailType: ["AWS API Call via CloudTrail"],
        detail: {
          eventSource: ["sns.amazonaws.com"],
          eventName: ["ConfirmSubscription"],
        },
      },
      targets: [eventTarget],
    });
  }
}
