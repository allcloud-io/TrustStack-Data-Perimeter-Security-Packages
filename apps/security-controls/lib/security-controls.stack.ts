import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as ssm from "aws-cdk-lib/aws-ssm";
import type { Construct } from "constructs";
import type { SharedSSMParameterName } from "./solutions/sns/validate-subscription/shared";

export type SecurityControlsStackProps = cdk.StackProps &
  Readonly<{
    solutionsDir: string;
  }>;

export class SecurityControlsStack extends cdk.Stack {
  readonly hookExecutionRole: iam.Role;
  readonly assetsBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: SecurityControlsStackProps) {
    super(scope, id, props);

    const { solutionsDir } = props;

    // Create IAM role for the CloudFormation hooks
    this.hookExecutionRole = new iam.Role(this, "HookExecutionRole", {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal("hooks.cloudformation.amazonaws.com"),
        new iam.ServicePrincipal("resources.cloudformation.amazonaws.com"),
      ),
      description: "Role for CloudFormation hook execution",
      maxSessionDuration: cdk.Duration.hours(2),
      path: "/",
    });

    this.assetsBucket = new s3.Bucket(this, "AssetsBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    new ssm.StringParameter(this, "CloudFormationHookExecutionRoleParameter", {
      parameterName:
        "/trust-stack/cloudformation-hook-execution-role-arn" satisfies SharedSSMParameterName,
      stringValue: this.hookExecutionRole.roleArn,
    });

    // new CloudFormationLambdaHook(this, "S3BlockPublicAccessHook", {
    //   securityControlName: "S3BlockPublicAccess",
    //   description: "Block public access to S3 buckets",
    //   hookExecutionRole: this.hookExecutionRole,
    //   assetsBucket: this.assetsBucket,
    //   solutionsDir,
    //   securityControlDir: "s3/block-public-access",
    //   targetOperations: ["RESOURCE"],
    //   targetNames: ["AWS::S3::Bucket"],
    //   failureMode: "FAIL",
    // });
  }
}
