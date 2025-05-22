import * as cdk from "aws-cdk-lib";
import * as apigatewayv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as apigatewayv2Integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs";
import * as ssm from "aws-cdk-lib/aws-ssm";
import type { Construct } from "constructs";
import * as path from "node:path";

export class MockHTTPAPIStack extends cdk.Stack {
  public readonly httpApi: apigatewayv2.HttpApi;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.httpApi = new apigatewayv2.HttpApi(this, "MockHTTPAPI");

    const lambdaFunctionProps: Omit<lambdaNodejs.NodejsFunctionProps, "entry"> =
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

        timeout: cdk.Duration.minutes(2),
        initialPolicy: [
          new iam.PolicyStatement({
            actions: ["sns:ConfirmSubscription"],
            resources: ["*"],
          }),
        ],
      };

    const snsSubscriptionConfirmationLambda = new lambdaNodejs.NodejsFunction(
      this,
      "SNSSubscriptionConfirmationLambda",
      {
        ...lambdaFunctionProps,
        entry: path.join(
          __dirname,
          "lambdas",
          "sns-subscription-confirmation",
          "handler.ts",
        ),
      },
    );

    const snsSubscriptionConfirmationDelayedLambda =
      new lambdaNodejs.NodejsFunction(
        this,
        "SNSSubscriptionConfirmationDelayedLambda",
        {
          ...lambdaFunctionProps,
          entry: path.join(
            __dirname,
            "lambdas",
            "sns-subscription-confirmation-delayed",
            "handler.ts",
          ),
        },
      );

    const snsSubscriptionConfirmationWithSubscribeURLLambda =
      new lambdaNodejs.NodejsFunction(
        this,
        "SNSSubscriptionConfirmationWithSubscribeURLLambda",
        {
          ...lambdaFunctionProps,
          entry: path.join(
            __dirname,
            "lambdas",
            "sns-subscription-confirmation-with-subscribe-url",
            "handler.ts",
          ),
        },
      );

    const snsSubscriptionConfirmationWithSubscribeURLLambdaDelayed =
      new lambdaNodejs.NodejsFunction(
        this,
        "SNSSubscriptionConfirmationWithSubscribeURLLambdaDelayed",
        {
          ...lambdaFunctionProps,
          entry: path.join(
            __dirname,
            "lambdas",
            "sns-subscription-confirmation-with-subscribe-url-delayed",
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

    this.httpApi.addRoutes({
      path: "/sns-subscription-confirmation-delayed",
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new apigatewayv2Integrations.HttpLambdaIntegration(
        "SNSSubscriptionConfirmationDelayedLambdaIntegration",
        snsSubscriptionConfirmationDelayedLambda,
      ),
    });

    this.httpApi.addRoutes({
      path: "/sns-subscription-confirmation-with-subscribe-url",
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new apigatewayv2Integrations.HttpLambdaIntegration(
        "SNSSubscriptionConfirmationWithSubscribeURLLambdaIntegration",
        snsSubscriptionConfirmationWithSubscribeURLLambda,
      ),
    });

    this.httpApi.addRoutes({
      path: "/sns-subscription-confirmation-with-subscribe-url-delayed",
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new apigatewayv2Integrations.HttpLambdaIntegration(
        "SNSSubscriptionConfirmationWithSubscribeURLLambdaDelayedIntegration",
        snsSubscriptionConfirmationWithSubscribeURLLambdaDelayed,
      ),
    });

    new ssm.StringParameter(this, "MockHTTPAPIEndpoint", {
      parameterName: "/trust-stack/e2e-tests/mock-http-api/endpoint",
      description:
        "The endpoint of the mock HTTP API used in the SNS subscription security e2e tests",
      stringValue: this.httpApi.apiEndpoint,
    });
  }
}
