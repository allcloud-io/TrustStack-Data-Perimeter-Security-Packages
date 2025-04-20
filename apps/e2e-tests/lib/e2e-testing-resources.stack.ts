import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { MachineImage } from "aws-cdk-lib/aws-ec2";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as iam from "aws-cdk-lib/aws-iam";
import * as sns from "aws-cdk-lib/aws-sns";
import type { Construct } from "constructs";

export class E2ETestingResourcesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new sns.Topic(this, "SNSTopic", {
      topicName: "TrustStack-E2E-Test-Topic",
    });

    new ecr.Repository(this, "ECRRepository", {
      repositoryName: "truststack-e2e-test-repository",
    });

    const ecrUser = new iam.User(this, "ECRUser", {
      userName: "truststack-e2e-test-ecr-user",
    });

    ecrUser.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "AmazonEC2ContainerRegistryPowerUser",
      ),
    );

    const vpc = new ec2.Vpc(this, "VPC", {
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/16"),
      maxAzs: 3,
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
    new ec2.InterfaceVpcEndpoint(this, "ECRDockerInterfaceVPCEndpoint", {
      vpc: vpc,
      service: ec2.InterfaceVpcEndpointAwsService.ECR_DOCKER,
      open: true,
      subnets: {
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
    });

    // Create S3 Gateway endpoint for ECR storage access
    new ec2.GatewayVpcEndpoint(this, "S3GatewayEndpoint", {
      vpc: vpc,
      service: ec2.GatewayVpcEndpointAwsService.S3,
    });

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
}
