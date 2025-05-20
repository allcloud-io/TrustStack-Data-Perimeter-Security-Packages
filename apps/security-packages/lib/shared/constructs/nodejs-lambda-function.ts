import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import type { Construct } from "constructs";
import { SECURITY_PACKAGE_NAME as LAMBDA_VPC_SECURITY_PACKAGE_NAME } from "../../security-packages/lambda/vpc-security/shared";

export type CreateNodejsLambdaFunctionProps = Omit<
  lambda.FunctionProps,
  "runtime" | "memorySize" | "handler"
>;

export function createNodejsLambdaFunction(
  scope: Construct,
  id: string,
  props: CreateNodejsLambdaFunctionProps,
) {
  const lambdaFunction = new lambda.Function(scope, id, {
    ...props,
    runtime: lambda.Runtime.NODEJS_22_X,
    memorySize: 128,
    environment: {
      ...props.environment,
      NODE_OPTIONS: "--enable-source-maps",
    },
    handler: "handler.handler",
  });

  cdk.Tags.of(lambdaFunction).add(
    "ts:exclude",
    LAMBDA_VPC_SECURITY_PACKAGE_NAME,
  );

  return lambdaFunction;
}
