import * as cdk from "aws-cdk-lib";
import * as apigatewayv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as apigatewayv2Integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "node:path";

export class MockHTTPAPIStack extends cdk.Stack {
  public readonly httpApi: apigatewayv2.HttpApi;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.httpApi = new apigatewayv2.HttpApi(this, "MockHTTPAPI");

    const snsSubscriptionConfirmationLambda = new lambdaNodejs.NodejsFunction(
      this,
      "SNSSubscriptionConfirmationLambda",
      {
        runtime: lambda.Runtime.NODEJS_22_X,
        memorySize: 128,
        environment: {
          NODE_OPTIONS: "--enable-source-maps",
        },
        bundling: {
          minify: true,
          sourceMap: true,
        },
        entry: path.join(
          __dirname,
          "lambdas",
          "sns-subscription-confirmation",
          "handler.ts",
        ),
      },
    );

    this.httpApi.addRoutes({
      path: "/sns-subscription-confirmation",
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new apigatewayv2Integrations.HttpLambdaIntegration(
        "SNSSubscriptionConfirmationLambdaIntegration",
        snsSubscriptionConfirmationLambda,
      ),
    });
  }
}
