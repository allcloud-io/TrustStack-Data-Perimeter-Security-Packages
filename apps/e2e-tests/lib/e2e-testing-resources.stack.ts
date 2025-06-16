import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { MachineImage } from "aws-cdk-lib/aws-ec2";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as sns from "aws-cdk-lib/aws-sns";
import * as ssm from "aws-cdk-lib/aws-ssm";
import type { Construct } from "constructs";
import * as path from "node:path";

type E2ETestingResourcesStackProps = cdk.StackProps &
  Readonly<{
    awsOrganizationID: string;
    untrustedAccountID?: string;
    untrustedOrgID?: string;
    trustedAccountID?: string;
    trustedOrgID?: string;
  }>;

export class E2ETestingResourcesStack extends cdk.Stack {
  private readonly awsOrganizationID: string;

  constructor(
    scope: Construct,
    id: string,
    props: E2ETestingResourcesStackProps,
  ) {
    super(scope, id, props);

    this.awsOrganizationID = props.awsOrganizationID;

    const lambdaRole = iam.Role.fromRoleName(
      this,
      "ExistingLambdaRole",
      "TrustStackE2ETestLambda",
    );

    this.createSNSTopic();
    this.createECRRepository();
    this.createIAMUserWithECRAccess();
    const { authorizedVPC, unauthorizedVPC } = this.createVPC();
    this.createBastionHost(authorizedVPC);
    this.createBasicIAMRoleForLambdaFunctionsInsideVPC();
    this.createSecurityGroupsForLambdaFunctionsInsideVPC(
      authorizedVPC,
      unauthorizedVPC,
    );
    this.createTestLambdaFunctionForPermissionTesting({
      authorizedVPC,
      lambdaRole,
    });
    this.createTestLambdaFunctionForVPCSecurityTesting({
      authorizedVPC,
      lambdaRole,
    });
    this.createTestLambdaLayerVersionForLayerPermissionTesting();

    new ssm.StringParameter(this, "LambdaVPCID", {
      parameterName: "/trust-stack/e2e-tests/lambda-vpc-id",
      stringValue: authorizedVPC.vpcId,
    });

    new ssm.StringParameter(this, "LambdaSubnetID1", {
      parameterName: "/trust-stack/e2e-tests/lambda-subnet-id-1",
      stringValue: authorizedVPC.privateSubnets[0].subnetId,
    });

    new ssm.StringParameter(this, "LambdaSubnetID2", {
      parameterName: "/trust-stack/e2e-tests/lambda-subnet-id-2",
      stringValue: authorizedVPC.privateSubnets[1].subnetId,
    });

    new ssm.StringParameter(this, "UnauthorizedLambdaVPCID", {
      parameterName: "/trust-stack/e2e-tests/unauthorized-lambda-vpc-id",
      stringValue: unauthorizedVPC.vpcId,
    });

    new ssm.StringParameter(this, "UnauthorizedLambdaSubnetID1", {
      parameterName: "/trust-stack/e2e-tests/unauthorized-lambda-subnet-id-1",
      stringValue: unauthorizedVPC.privateSubnets[0].subnetId,
    });

    new ssm.StringParameter(this, "UnauthorizedLambdaSubnetID2", {
      parameterName: "/trust-stack/e2e-tests/unauthorized-lambda-subnet-id-2",
      stringValue: unauthorizedVPC.privateSubnets[1].subnetId,
    });

    // Add SSM parameters for permission testing
    new ssm.StringParameter(this, "TrustedAccountID", {
      parameterName: "/trust-stack/e2e-tests/trusted-account-id",
      stringValue: props.trustedAccountID ?? this.account,
    });

    new ssm.StringParameter(this, "UntrustedAccountID", {
      parameterName: "/trust-stack/e2e-tests/untrusted-account-id",
      stringValue: props.untrustedAccountID ?? "999988887777", // Example untrusted account ID
    });

    new ssm.StringParameter(this, "TrustedOrgID", {
      parameterName: "/trust-stack/e2e-tests/trusted-org-id",
      stringValue: props.trustedOrgID ?? this.awsOrganizationID,
    });

    new ssm.StringParameter(this, "UntrustedOrgID", {
      parameterName: "/trust-stack/e2e-tests/untrusted-org-id",
      stringValue: props.untrustedOrgID ?? "o-untrusted123",
    });
  }

  private createSNSTopic(): sns.Topic {
    const topic = new sns.Topic(this, "SNSTopic", {
      topicName: "TrustStack-E2E-Test-Topic",
    });

    new ssm.StringParameter(this, "SNSTopicARN", {
      parameterName: "/trust-stack/e2e-tests/sns-topic-arn",
      stringValue: topic.topicArn,
    });

    return topic;
  }

  private createECRRepository() {
    new ecr.Repository(this, "ECRRepository", {
      repositoryName: "truststack-e2e-test-repository",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }

  private createIAMUserWithECRAccess() {
    const ecrUser = new iam.User(this, "ECRUser", {
      userName: "truststack-e2e-test-ecr-user",
    });

    ecrUser.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "AmazonEC2ContainerRegistryPowerUser",
      ),
    );
  }

  private createVPC(): { authorizedVPC: ec2.Vpc; unauthorizedVPC: ec2.Vpc } {
    const authorizedVPC = new ec2.Vpc(this, "VPC", {
      vpcName: "TrustStackE2ETestAuthorizedVPC",
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/16"),
      maxAzs: 3,
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: [
        { cidrMask: 24, name: "Public", subnetType: ec2.SubnetType.PUBLIC },
        {
          cidrMask: 24,
          name: "Private",
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });

    // Create ECR Docker API VPC endpoint
    const ecrDockerInterfaceVPCEndpoint = new ec2.InterfaceVpcEndpoint(
      this,
      "ECRDockerInterfaceVPCEndpoint",
      {
        vpc: authorizedVPC,
        service: ec2.InterfaceVpcEndpointAwsService.ECR_DOCKER,
        open: true,
        subnets: {
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      },
    );

    cdk.Tags.of(ecrDockerInterfaceVPCEndpoint).add(
      "Name",
      "truststack-e2e-test-ecr-docker-interface-vpc-endpoint",
    );

    // Create SNS Interface endpoint
    const snsInterfaceVPCEndpoint = new ec2.InterfaceVpcEndpoint(
      this,
      "SNSInterfaceVPCEndpoint",
      {
        vpc: authorizedVPC,
        service: ec2.InterfaceVpcEndpointAwsService.SNS,
        open: true,
        subnets: {
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      },
    );

    cdk.Tags.of(snsInterfaceVPCEndpoint).add(
      "Name",
      "truststack-e2e-test-sns-interface-vpc-endpoint",
    );

    // Create S3 Gateway endpoint for ECR storage access
    const s3GatewayEndpoint = new ec2.GatewayVpcEndpoint(
      this,
      "S3GatewayEndpoint",
      {
        vpc: authorizedVPC,
        service: ec2.GatewayVpcEndpointAwsService.S3,
      },
    );

    cdk.Tags.of(s3GatewayEndpoint).add(
      "Name",
      "truststack-e2e-test-s3-gateway-endpoint",
    );

    const unauthorizedVPC = new ec2.Vpc(this, "UnauthorizedVPC", {
      vpcName: "TrustStackE2ETestUnauthorizedVPC",
      ipAddresses: ec2.IpAddresses.cidr("10.1.0.0/16"),
      maxAzs: 3,
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: [
        { cidrMask: 24, name: "Public", subnetType: ec2.SubnetType.PUBLIC },
        {
          cidrMask: 24,
          name: "Private",
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });

    return { authorizedVPC, unauthorizedVPC };
  }

  private createBastionHost(vpc: ec2.Vpc) {
    // Create a role for the bastion host
    const bastionHostRole = new iam.Role(this, "BastionHostRole", {
      roleName: "truststack-e2e-test-bastion-host-role",
      assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
    });

    // Attach SSM Managed Instance Core policy to allow Session Manager access
    bastionHostRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "AmazonSSMManagedInstanceCore",
      ),
    );

    bastionHostRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "AmazonEC2ContainerRegistryPowerUser",
      ),
    );

    bastionHostRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonSNSFullAccess"),
    );

    // Create a security group for the bastion host
    const bastionHostSG = new ec2.SecurityGroup(this, "BastionHostSG", {
      vpc,
      description: "Security group for bastion host",
      securityGroupName: "truststack-e2e-test-bastion-host-sg",
      allowAllOutbound: true,
    });

    // Select private subnet for the bastion host (similar to the terraform configuration)
    const privateSubnet = vpc.selectSubnets({
      subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
    }).subnets[0];

    // Create the bastion host instance
    const bastionHost = new ec2.Instance(this, "BastionHost", {
      instanceName: "truststack-e2e-test-bastion-host",
      vpc,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.MICRO,
      ),
      machineImage: MachineImage.latestAmazonLinux2(),
      securityGroup: bastionHostSG,
      role: bastionHostRole,
      vpcSubnets: {
        subnets: [privateSubnet],
      },
      associatePublicIpAddress: false,
      blockDevices: [
        {
          deviceName: "/dev/xvda",
          volume: ec2.BlockDeviceVolume.ebs(8, {
            encrypted: true,
          }),
        },
      ],
      // Configure instance metadata options (IMDSv2 required)
      requireImdsv2: true,
    });

    // Add tags similar to terraform
    cdk.Tags.of(bastionHost).add("Name", "truststack-e2e-test-bastion-host");

    // Add outputs similar to Terraform's outputs.tf
    new cdk.CfnOutput(this, "BastionInstanceID", {
      description: "The ID of the bastion host instance",
      value: bastionHost.instanceId,
    });

    new cdk.CfnOutput(this, "BastionSecurityGroupID", {
      description: "The ID of the bastion host security group",
      value: bastionHostSG.securityGroupId,
    });

    new cdk.CfnOutput(this, "BastionIAMRoleName", {
      description: "The name of the IAM role attached to the bastion host",
      value: bastionHostRole.roleName,
    });

    new cdk.CfnOutput(this, "BastionPrivateIP", {
      description: "The private IP address of the bastion host",
      value: bastionHost.instancePrivateIp,
    });
  }

  private createBasicIAMRoleForLambdaFunctionsInsideVPC() {
    const lambdaRole = new iam.Role(this, "LambdaRole", {
      roleName: "TrustStackE2ETestLambda",
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });

    lambdaRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "service-role/AWSLambdaVPCAccessExecutionRole",
      ),
    );

    new ssm.StringParameter(this, "LambdaRoleARN", {
      parameterName: "/trust-stack/e2e-tests/lambda-role-arn",
      stringValue: lambdaRole.roleArn,
    });
  }

  private createSecurityGroupsForLambdaFunctionsInsideVPC(
    authorizedVPC: ec2.Vpc,
    unauthorizedVPC: ec2.Vpc,
  ) {
    const securityGroup = new ec2.SecurityGroup(this, "LambdaSecurityGroup", {
      vpc: authorizedVPC,
      description: "Security group for Lambda functions inside VPC",
    });

    cdk.Tags.of(securityGroup).add(
      "Name",
      "TrustStackE2ETestLambdaSecurityGroup",
    );

    const secondarySecurityGroup = new ec2.SecurityGroup(
      this,
      "SecondaryLambdaSecurityGroup",
      {
        vpc: authorizedVPC,
        description: "Secondary security group for Lambda functions inside VPC",
      },
    );

    cdk.Tags.of(secondarySecurityGroup).add(
      "Name",
      "TrustStackE2ETestLambdaSecondarySecurityGroup",
    );

    new ssm.StringParameter(this, "LambdaSecurityGroupID", {
      parameterName: "/trust-stack/e2e-tests/lambda-security-group-id",
      stringValue: securityGroup.securityGroupId,
    });

    new ssm.StringParameter(this, "SecondaryLambdaSecurityGroupID", {
      parameterName:
        "/trust-stack/e2e-tests/lambda-secondary-security-group-id",
      stringValue: secondarySecurityGroup.securityGroupId,
    });

    const unauthorizedSecurityGroup = new ec2.SecurityGroup(
      this,
      "UnauthorizedLambdaSecurityGroup",
      {
        vpc: unauthorizedVPC,
        description:
          "Security group for Lambda functions inside an unauthorized VPC",
      },
    );

    cdk.Tags.of(unauthorizedSecurityGroup).add(
      "Name",
      "TrustStackE2ETestUnauthorizedLambdaSecurityGroup",
    );

    new ssm.StringParameter(this, "UnauthorizedLambdaSecurityGroupID", {
      parameterName:
        "/trust-stack/e2e-tests/unauthorized-lambda-security-group-id",
      stringValue: unauthorizedSecurityGroup.securityGroupId,
    });
  }

  private createTestLambdaFunctionForPermissionTesting({
    authorizedVPC,
    lambdaRole,
  }: Readonly<{ authorizedVPC: ec2.Vpc; lambdaRole: iam.IRole }>) {
    // Create a basic Lambda function for permission testing
    const testLambda = new lambda.Function(this, "TestPermissionLambda", {
      functionName: "truststack-e2e-test-permission-function",
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "index.handler",
      vpc: authorizedVPC,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          console.log('Event:', JSON.stringify(event, null, 2));
          return {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
          };
        };
      `),
      timeout: cdk.Duration.seconds(30),
      role: lambdaRole,
    });

    // Store the Lambda function ARN in SSM Parameter Store
    new ssm.StringParameter(this, "PermissionTestingLambdaFunctionARN", {
      parameterName:
        "/trust-stack/e2e-tests/security-packages/lambda-permission-security/lambda-function-arn",
      stringValue: testLambda.functionArn,
    });
  }

  private createTestLambdaFunctionForVPCSecurityTesting({
    authorizedVPC,
    lambdaRole,
  }: Readonly<{ authorizedVPC: ec2.Vpc; lambdaRole: iam.IRole }>) {
    // Create a basic Lambda function for permission testing
    const testLambda = new lambda.Function(this, "TestVPCLambda", {
      functionName: "truststack-e2e-test-vpc-function",
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "index.handler",
      vpc: authorizedVPC,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          console.log('Event:', JSON.stringify(event, null, 2));
          return {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
          };
        };
      `),
      timeout: cdk.Duration.seconds(30),
      role: lambdaRole,
    });

    // Store the Lambda function ARN in SSM Parameter Store
    new ssm.StringParameter(this, "VPCSecurityLambdaFunctionARN", {
      parameterName:
        "/trust-stack/e2e-tests/security-packages/lambda-vpc-security/lambda-function-arn",
      stringValue: testLambda.functionArn,
    });
  }

  private createTestLambdaLayerVersionForLayerPermissionTesting() {
    const testLambdaLayer = new lambda.LayerVersion(this, "TestLayer", {
      layerVersionName: "TrustStackE2ETestLayer",
      code: lambda.Code.fromAsset(path.join(__dirname, "sample-lambda-layer")),
      compatibleRuntimes: [lambda.Runtime.NODEJS_22_X],
      description: "Test Lambda layer for layer permission testing",
    });

    new ssm.StringParameter(
      this,
      "LayerPermissionTestingLambdaLayerVersionARN",
      {
        parameterName:
          "/trust-stack/e2e-tests/security-packages/lambda-layer-permission/lambda-layer-version-arn",
        stringValue: testLambdaLayer.layerVersionArn,
      },
    );
  }
}
