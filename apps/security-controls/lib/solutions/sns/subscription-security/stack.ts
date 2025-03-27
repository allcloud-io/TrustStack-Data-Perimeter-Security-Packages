import type { SNSSubscriptionSecuritySolutionConfig } from "@trust-stack/schema";
import type { SharedSSMParameterName } from "@trust-stack/utils";
import * as cdk from "aws-cdk-lib";
import * as events from "aws-cdk-lib/aws-events";
import * as eventsTargets from "aws-cdk-lib/aws-events-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as ssm from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";
import {
  CloudFormationLambdaHook,
  createNodejsLambdaFunction,
} from "../../../shared/constructs";

export type SNS_SubscriptionSecurityStackProps = cdk.StackProps &
  Readonly<{
    solutionsDir: string;
    config: SNSSubscriptionSecuritySolutionConfig;
  }>;

/**
 * Stack for the "SNS Subscription Security Solution" security solution.
 */
export class SNS_SubscriptionSecurityStack extends cdk.Stack {
  private readonly props: SNS_SubscriptionSecurityStackProps;

  private readonly securityControlName = "SNSSubscriptionSecurity";
  private readonly hookExecutionRole: iam.IRole;
  private readonly assetsBucket: s3.IBucket;
  private readonly solutionConfigSSMParameter: ssm.StringParameter;

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
      "/trust-stack/security-controls/assets-bucket/name" satisfies SharedSSMParameterName,
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

    this.solutionConfigSSMParameter = new ssm.StringParameter(
      this,
      "SolutionConfigurationSSMParameter",
      {
        parameterName:
          "/trust-stack/sns/subscription-security/config" satisfies SharedSSMParameterName,
        stringValue: JSON.stringify(this.props.config),
      },
    );

    this.createProactiveControl();
    this.createDetectiveControl();
  }

  private createProactiveControl() {
    return new CloudFormationLambdaHook(this, "ProactiveControl", {
      securityControlName: this.securityControlName,
      description:
        "CloudFormation hook handler to validate SNS subscription endpoints and protocols",
      hookExecutionRole: this.hookExecutionRole,
      targetOperations: ["RESOURCE"],
      targetNames: ["AWS::SNS::Subscription"],
      failureMode: "FAIL",
      code: lambda.Code.fromBucketV2(
        this.assetsBucket,
        "sns-subscription-security/lambda-hook/lambda.zip",
      ),
      initialPolicy: [
        new iam.PolicyStatement({
          actions: ["ssm:GetParameter"],
          resources: [this.solutionConfigSSMParameter.parameterArn],
        }),
      ],
    });
  }

  private createDetectiveControl() {
    const snsSubscriptionValidationLambda = createNodejsLambdaFunction(
      this,
      "DetectiveControlHandler",
      {
        functionName: `${this.securityControlName}-MonitorSNSAPI`,
        description:
          "Monitor CloudTrail events for SNS subscription creation and validate " +
          "SNS subscription endpoints and protocols",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          "sns-subscription-security/detective-control/lambda.zip",
        ),
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
      targets: [
        new eventsTargets.LambdaFunction(snsSubscriptionValidationLambda),
      ],
    });
  }
}
