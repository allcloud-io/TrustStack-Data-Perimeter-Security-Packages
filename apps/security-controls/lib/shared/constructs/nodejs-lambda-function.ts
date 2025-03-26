import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export type CreateNodejsLambdaFunctionProps = Omit<
  lambdaNodejs.NodejsFunctionProps,
  "runtime" | "memorySize"
>;

export function createNodejsLambdaFunction(
  scope: Construct,
  id: string,
  props: CreateNodejsLambdaFunctionProps,
) {
  return new lambdaNodejs.NodejsFunction(scope, id, {
    ...props,
    runtime: lambda.Runtime.NODEJS_22_X,
    memorySize: 128,
    environment: {
      ...props.environment,
      NODE_OPTIONS: "--enable-source-maps",
    },
    bundling: {
      ...props.bundling,
      minify: true,
      sourceMap: true,
    },
  });
}
