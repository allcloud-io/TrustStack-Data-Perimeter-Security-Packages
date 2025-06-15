import type { ECRImageLayerAccessPackageConfig } from "@trust-stack/schema";
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
import { createNodejsLambdaFunction } from "../../../shared/constructs/nodejs-lambda-function";
import { SECURITY_PACKAGE_NAME, SECURITY_PACKAGE_SLUG } from "./shared";

export type ECR_ImageLayerAccessStackProps = cdk.StackProps &
  Readonly<{
    securityPackagesDir: string;
    config: ECRImageLayerAccessPackageConfig;
  }>;

/**
 * Stack for the ECR image layer access package
 */
export class ECR_ImageLayerAccessStack extends cdk.Stack {
  private readonly assetsBucket: s3.IBucket;
  private readonly packageConfigSSMParameter: ssm.StringParameter;

  constructor(
    scope: Construct,
    id: string,
    props: ECR_ImageLayerAccessStackProps,
  ) {
    super(scope, id, props);

    const { config } = props;

    const assetsBucketName = ssm.StringParameter.valueForStringParameter(
      this,
      "/trust-stack/assets-bucket/name" satisfies SharedSSMParameterName,
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
          "/trust-stack/ecr/image-layer-access/config" satisfies SharedSSMParameterName,
        stringValue: JSON.stringify(config),
      },
    );

    this.createDetectiveControl();
    this.createResponsiveControl();
  }

  private createDetectiveControl() {
    const lambdaHandler = createNodejsLambdaFunction(
      this,
      "DetectiveControlHandler",
      {
        functionName: `${SECURITY_PACKAGE_NAME}-MonitorECRAPI`,
        description:
          "Monitor CloudTrail events for ECR image layer access and validate " +
          "access is authorized",
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
            sid: "AllowImportSecurityHubFindings",
            effect: iam.Effect.ALLOW,
            actions: ["securityhub:BatchImportFindings"],
            resources: ["*"],
          }),
        ],
      },
    );

    new events.Rule(this, "ECRGetDownloadURLForLayerRule", {
      eventPattern: {
        source: ["aws.ecr"],
        detailType: ["AWS API Call via CloudTrail"],
        detail: {
          eventSource: ["ecr.amazonaws.com"],
          eventName: ["BatchGetImage"],
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
        functionName: `${SECURITY_PACKAGE_NAME}-RevokeECRImageLayerAccess`,
        description:
          "Revokes permissions for unauthorized ECR image layer access " +
          "attempts by attaching a deny-all policy for affected users.",
        code: lambda.Code.fromBucketV2(
          this.assetsBucket,
          `${BUILD_HASH}/trust-stack/security-packages/${SECURITY_PACKAGE_SLUG}/responsive-control/lambda.zip`,
        ),
        initialPolicy: [
          new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ["iam:PutUserPolicy"],
            resources: ["arn:aws:iam::*:user/*"],
          }),
        ],
      },
    );

    // Create an EventBridge rule to trigger the responsive control Lambda
    // when Security Hub findings for unauthorized ECR image layer access are created
    new events.Rule(this, "ECRImageLayerAccessSecurityHubFindingRule", {
      eventPattern: {
        source: ["aws.securityhub"],
        detailType: ["Security Hub Findings - Imported"],
        detail: {
          findings: {
            GeneratorId: ["ECRImageLayerAccessMonitor"],
            Workflow: {
              Status: ["NEW"],
            },
          },
        },
      },
      targets: [new eventsTargets.LambdaFunction(lambdaHandler)],
    });
  }
}
