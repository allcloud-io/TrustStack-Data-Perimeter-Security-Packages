import * as lambda from "aws-cdk-lib/aws-lambda";
import type { Construct } from "constructs";

export type CreateNodejsLambdaFunctionProps = Omit<
  lambda.FunctionProps,
  "runtime" | "memorySize" | "handler"
>;

export function createNodejsLambdaFunction(
  scope: Construct,
  id: string,
  props: CreateNodejsLambdaFunctionProps,
) {
  return new lambda.Function(scope, id, {
    ...props,
    runtime: lambda.Runtime.NODEJS_22_X,
    memorySize: 128,
    environment: {
      ...props.environment,
      NODE_OPTIONS: "--enable-source-maps",
    },
    handler: "handler.handler",
  });
}
