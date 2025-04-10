import type { SharedSSMParameterName } from "@trust-stack/utils";
import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as ssm from "aws-cdk-lib/aws-ssm";
import type { Construct } from "constructs";

export class CloudFormationHookExecutionRoleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const hookExecutionRole = new iam.Role(this, "HookExecutionRole", {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal("hooks.cloudformation.amazonaws.com"),
        new iam.ServicePrincipal("resources.cloudformation.amazonaws.com"),
      ),
      description: "Role for CloudFormation hook execution",
      maxSessionDuration: cdk.Duration.hours(2),
      path: "/",
    });

    new ssm.StringParameter(
      this,
      "CloudFormationHookExecutionRoleARNParameter",
      {
        parameterName:
          "/trust-stack/cloudformation-hook-execution-role-arn" satisfies SharedSSMParameterName,
        stringValue: hookExecutionRole.roleArn,
      },
    );
  }
}
