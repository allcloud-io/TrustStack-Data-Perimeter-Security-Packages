import * as cdk from "aws-cdk-lib";
import * as cloudformation from "aws-cdk-lib/aws-cloudformation";
import type * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import * as path from "node:path";
import type {
  HookFailureMode,
  HookTargetOperation,
  LambdaHookSchema,
  LambdaHookTypeConfiguration,
} from "../types";
import { createNodejsLambdaFunction } from "./nodejs-lambda-function";
type CloudFormationLambdaHookProps = Readonly<{
  securityControlName: string;
  description: string;
  hookExecutionRole: iam.IRole;
  // assetsBucket: s3.Bucket;
  solutionsDir: string;
  securityControlDir: string;
  targetOperations: HookTargetOperation[];
  targetNames: string[];
  failureMode: HookFailureMode;
}>;

/**
 * A construct that creates a CloudFormation hook for a security control.
 */
export class CloudFormationLambdaHook extends Construct {
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
      securityControlName,
      securityControlDir,
      hookExecutionRole,
      solutionsDir,
      targetOperations,
      targetNames,
      failureMode,
    } = props;

    const hookHandler = this.createHookHandler({
      solutionsDir,
      securityControlDir,
    });

    // TODO: Figure out how to get the hook version to work. Not sure if it is required to upload the schema to S3.
    // const hookSchemaS3ObjectURL = this.uploadHookSchema();

    const hook = new cloudformation.CfnLambdaHook(this, "Hook", {
      alias: `AllCloud::TrustStack::${securityControlName}`,
      lambdaFunction: hookHandler.functionArn,
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

    const hookTypeConfig = new cloudformation.CfnHookTypeConfig(
      this,
      "HookTypeConfig",
      {
        typeName: hook.alias,
        configuration: JSON.stringify({
          CloudFormationConfiguration: {
            HookConfiguration: {
              HookInvocationStatus: "ENABLED",
              TargetOperations: targetOperations,
              FailureMode: failureMode,
              Properties: {
                LambdaFunction: hookHandler.functionArn,
              },
            },
          },
        } satisfies LambdaHookTypeConfiguration),
      },
    );

    hookTypeConfig.addDependency(hook);

    // TODO: Figure out how to get the hook version to work
    // const hookVersion = new cloudformation.CfnHookVersion(this, "HookVersion", {
    //   typeName: hook.alias,
    //   executionRoleArn: hookExecutionRole.roleArn,
    //   schemaHandlerPackage: hookSchemaS3ObjectURL,
    // });

    // hookVersion.addDependency(hookTypeConfig);

    // Output the hook ARN
    new cdk.CfnOutput(this, "HookARN", {
      key: `${securityControlName}HookARN`,
      value: hook.alias,
      description: `ARN of the "${hook.alias}" CloudFormation hook`,
    });

    // Output the Lambda function ARN
    new cdk.CfnOutput(this, "LambdaARN", {
      key: `${securityControlName}LambdaARN`,
      value: hookHandler.functionArn,
      description: `ARN of the Lambda function for the "${hook.alias}" CloudFormation hook`,
    });
  }

  private createHookHandler({
    solutionsDir,
    securityControlDir,
  }: Readonly<{
    solutionsDir: string;
    securityControlDir: string;
  }>): lambda.Function {
    const handlerFilePath = path.join(
      solutionsDir,
      securityControlDir,
      "lambda-hook",
      "handler.ts",
    );

    const { securityControlName, description, hookExecutionRole } = this.props;

    // Create the Lambda function for the CloudFormation hook
    const hookHandler = createNodejsLambdaFunction(
      this,
      `${securityControlName}-HookHandler`,
      {
        functionName: `${securityControlName}-HookHandler`,
        description,
        entry: handlerFilePath,
        timeout: cdk.Duration.seconds(30),
      },
    );

    // Grant the hook execution role permission to invoke the Lambda function
    hookHandler.grantInvoke(hookExecutionRole);

    return hookHandler;
  }

  // TODO: Figure out how to get the hook version to work. Not sure if it is required to upload the schema to S3.
  // private uploadHookSchema(): string {
  //   const { assetsBucket, securityControlDir, solutionsDir, targetNames } =
  //     this.props;

  //   // Generate the hook schema using the handler ARN, failureMode, and target operations
  //   const hookSchema = this.generateHookSchema({
  //     targetNames,
  //   });

  //   const hookSchemaS3ObjectKey = path.relative(
  //     solutionsDir,
  //     path.join(securityControlDir, "lambda-hook/hook-schema.json"),
  //   );

  //   const hookSchemaDeployment = new s3deploy.BucketDeployment(
  //     this,
  //     "HookSchemaDeployment",
  //     {
  //       sources: [
  //         s3deploy.Source.data(
  //           hookSchemaS3ObjectKey,
  //           JSON.stringify(hookSchema, null, 2),
  //         ),
  //       ],
  //       destinationBucket: assetsBucket,
  //       retainOnDelete: false,
  //     },
  //   );

  //   const s3ObjectKey = cdk.Fn.select(0, hookSchemaDeployment.objectKeys);
  //   const s3ObjectURL = assetsBucket.s3UrlForObject(s3ObjectKey);

  //   return s3ObjectURL;
  // }

  private generateHookSchema({
    targetNames,
  }: Readonly<{
    targetNames: string[];
  }>): LambdaHookSchema {
    const { securityControlName, description } = this.props;

    return {
      typeName: `AllCloud::TrustStack::${securityControlName}`,
      description: description,
      documentationUrl: "https://github.com/allcloud/trust-stack",
      sourceUrl: "https://github.com/allcloud/trust-stack",
      typeConfiguration: {
        properties: {},
        required: [],
        additionalProperties: false,
      },
      handlers: {
        preCreate: {
          targetNames,
          permissions: ["lambda:InvokeFunction"],
        },
        preUpdate: {
          targetNames,
          permissions: ["lambda:InvokeFunction"],
        },
        preDelete: {
          targetNames,
          permissions: ["lambda:InvokeFunction"],
        },
      },
      additionalProperties: false,
    };
  }
}
