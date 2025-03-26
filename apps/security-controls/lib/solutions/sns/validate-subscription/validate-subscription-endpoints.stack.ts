import type { SNSSubscriptionSecuritySolutionConfig } from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as events from "aws-cdk-lib/aws-events";
import * as eventsTargets from "aws-cdk-lib/aws-events-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import * as ssm from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";
import * as path from "node:path";
import {
  CloudFormationLambdaHook,
  createNodejsLambdaFunction,
} from "../../../shared/constructs";
import { type SharedSSMParameterName } from "./shared";

export type SNS_ValidateSubscriptionStackProps = cdk.StackProps &
  Readonly<{
    solutionsDir: string;
    config: SNSSubscriptionSecuritySolutionConfig;
  }>;

/**
 * Stack for the "SNS Subscription Security Solution" security solution.
 */
export class SNS_ValidateSubscriptionStack extends cdk.Stack {
  private readonly props: SNS_ValidateSubscriptionStackProps;

  private readonly securityControlName = "SNSValidateSubscription";
  private readonly hookExecutionRole: iam.IRole;

  constructor(
    scope: Construct,
    id: string,
    props: SNS_ValidateSubscriptionStackProps,
  ) {
    super(scope, id, props);

    this.props = props;

    const hookExecutionRoleARN = ssm.StringParameter.valueForStringParameter(
      this,
      "/trust-stack/cloudformation-hook-execution-role-arn" satisfies SharedSSMParameterName,
    );

    this.hookExecutionRole = iam.Role.fromRoleArn(
      this,
      "HookExecutionRole",
      hookExecutionRoleARN,
    );

    new ssm.StringParameter(this, "SolutionConfigurationSSMParameter", {
      parameterName:
        "/trust-stack/sns/validate-subscription/config" satisfies SharedSSMParameterName,
      stringValue: JSON.stringify(this.props.config),
    });

    this.createProactiveControl();
    this.createDetectiveControl();
  }

  private createProactiveControl() {
    const { solutionsDir } = this.props;

    new CloudFormationLambdaHook(this, "ProactiveControlHandler", {
      securityControlName: this.securityControlName,
      description:
        "CloudFormation hook handler to validate SNS subscription endpoints and protocols",
      hookExecutionRole: this.hookExecutionRole,
      solutionsDir,
      securityControlDir: "sns/validate-subscription",
      targetOperations: ["RESOURCE"],
      targetNames: ["AWS::SNS::Subscription"],
      failureMode: "FAIL",
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
        entry: path.join(__dirname, "detective-control", "handler.ts"),
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
