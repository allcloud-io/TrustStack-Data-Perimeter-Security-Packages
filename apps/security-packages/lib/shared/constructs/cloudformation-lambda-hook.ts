import * as cdk from "aws-cdk-lib";
import * as cloudformation from "aws-cdk-lib/aws-cloudformation";
import type * as iam from "aws-cdk-lib/aws-iam";
import type * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import type { HookFailureMode, HookTargetOperation } from "../cfn-lambda-hooks";
import { createNodejsLambdaFunction } from "./nodejs-lambda-function";

type CloudFormationLambdaHookProps = Readonly<{
  securityPackageName: string;
  description: string;
  hookExecutionRole: iam.IRole;
  targetOperations: HookTargetOperation[];
  targetNames: string[];
  failureMode: HookFailureMode;
  code: lambda.Code;
  initialPolicy?: iam.PolicyStatement[];
}>;

/**
 * A construct that creates a CloudFormation hook for a security control.
 */
export class CloudFormationLambdaHook extends Construct {
  readonly lambdaFunction: lambda.Function;

  private readonly props: CloudFormationLambdaHookProps;
  private readonly currentStack: cdk.Stack;

  constructor(
    scope: Construct,
    id: string,
    props: CloudFormationLambdaHookProps,
  ) {
    super(scope, id);

    this.currentStack = cdk.Stack.of(this);

    this.props = props;

    const {
      securityPackageName,
      hookExecutionRole,
      targetOperations,
      targetNames,
      failureMode,
      code,
    } = props;

    this.lambdaFunction = this.createHookHandler(code);

    const hook = new cloudformation.CfnLambdaHook(this, "Hook", {
      alias: `AllCloud::TrustStack::${securityPackageName}`,
      lambdaFunction: this.lambdaFunction.functionArn,
      hookStatus: "ENABLED",
      targetOperations,
      targetFilters: {
        targets: targetNames.map((targetName) => ({
          targetName,
          action: "CREATE",
          invocationPoint: "PRE_PROVISION",
        })),
      },
      stackFilters: {
        filteringCriteria: "ALL",
        stackNames: {
          exclude: [this.currentStack.stackName],
        },
      },
      failureMode,
      executionRole: hookExecutionRole.roleArn,
    });

    // Output the hook ARN
    new cdk.CfnOutput(this, "HookARN", {
      key: `${securityPackageName}HookARN`,
      value: hook.attrHookArn,
      description: `ARN of the "${hook.alias}" CloudFormation hook`,
    });

    // Output the Lambda function ARN
    new cdk.CfnOutput(this, "LambdaARN", {
      key: `${securityPackageName}LambdaARN`,
      value: this.lambdaFunction.functionArn,
      description: `ARN of the Lambda function for the "${hook.alias}" CloudFormation hook`,
    });
  }

  private createHookHandler(code: lambda.Code): lambda.Function {
    const {
      securityPackageName,
      description,
      hookExecutionRole,
      initialPolicy,
    } = this.props;

    // Create the Lambda function for the CloudFormation hook
    const hookHandler = createNodejsLambdaFunction(this, "HookHandler", {
      functionName: `${securityPackageName}-HookHandler`,
      description,
      code,
      timeout: cdk.Duration.seconds(30),
      initialPolicy,
    });

    // Grant the hook execution role permission to invoke the Lambda function
    hookHandler.grantInvoke(hookExecutionRole);

    return hookHandler;
  }
}
