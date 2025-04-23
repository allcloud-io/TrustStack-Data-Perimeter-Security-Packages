import type { SharedSSMParameterName } from "@trust-stack/utils";
import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as ram from "aws-cdk-lib/aws-ram";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as ssm from "aws-cdk-lib/aws-ssm";
import type { Construct } from "constructs";

export type AssetsBucketStackProps = cdk.StackProps &
  Readonly<{
    awsOrganizationARN: string;
    awsOrganizationID: string;
  }>;

export class AssetsBucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AssetsBucketStackProps) {
    super(scope, id, props);

    const { awsOrganizationARN, awsOrganizationID } = props;

    const assetsBucket = new s3.Bucket(this, "AssetsBucket", {
      bucketName: `trust-stack-assets-${this.account}-${this.region}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });

    assetsBucket.grantRead(new iam.OrganizationPrincipal(awsOrganizationID));

    const assetsBucketNameParameter = new ssm.StringParameter(
      this,
      "AssetsBucketNameParameter",
      {
        parameterName:
          "/trust-stack/assets-bucket/name" satisfies SharedSSMParameterName,
        stringValue: assetsBucket.bucketName,
        tier: ssm.ParameterTier.ADVANCED,
      },
    );

    new ram.CfnResourceShare(
      this,
      "AssetsBucketNameSSMParameterResourceShare",
      {
        name: "AssetsBucketNameSSMParameter",
        resourceArns: [assetsBucketNameParameter.parameterArn],
        principals: [awsOrganizationARN],
      },
    );
  }
}
