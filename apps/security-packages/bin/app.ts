#!/usr/bin/env node
import { ConfigurationSchema, parseManifestFile } from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import {
  CloudFormationHookExecutionRoleStack,
  ECR_ImageLayerAccessStack,
  Lambda_LayerPermissionSecurityStack,
  Lambda_PermissionSecurityStack,
  Lambda_VPCSecurityStack,
  SNS_SubscriptionSecurityStack,
} from "../lib";

const securityPackagesDir = path.join(
  __dirname,
  "..",
  "lib",
  "security-packages",
);

const {
  spec: { deploymentAccountID, securityPackages },
} = parseManifestFile(
  ConfigurationSchema,
  path.join(__dirname, "..", "..", "..", "deployment-manifest.yml"),
);

const app = new cdk.App({
  analyticsReporting: false,
  treeMetadata: false,
  stackTraces: false,
  // Use the BootstraplessSynthesizer to exclude AWS-specific metadata (such as "aws:cdk:path") from the synthesized templates.
  defaultStackSynthesizer: new cdk.BootstraplessSynthesizer(),
});

// Should be deployed into all accounts
new CloudFormationHookExecutionRoleStack(
  app,
  "CloudFormationHookExecutionRole",
  {
    stackName: "TrustStack-CloudFormationHookExecutionRole",
    env: {
      account: deploymentAccountID,
    },
  },
);

if (securityPackages.ecrImageLayerAccess?.enabled) {
  new ECR_ImageLayerAccessStack(app, "ECRImageLayerAccess", {
    stackName: "TrustStack-ECRImageLayerAccess",
    securityPackagesDir: securityPackagesDir,
    config: securityPackages.ecrImageLayerAccess.configuration,
    tags: {
      "TrustStack:SecurityPackage": "ECRImageLayerAccess",
    },
  });
}

if (securityPackages.lambdaLayerPermissionSecurity?.enabled) {
  new Lambda_LayerPermissionSecurityStack(
    app,
    "LambdaLayerPermissionSecurity",
    {
      stackName: "TrustStack-LambdaLayerPermissionSecurity",
      securityPackagesDir: securityPackagesDir,
      config: securityPackages.lambdaLayerPermissionSecurity.configuration,
      tags: {
        "TrustStack:SecurityPackage": "LambdaLayerPermissionSecurity",
      },
    },
  );
}

if (securityPackages.lambdaPermissionSecurity?.enabled) {
  new Lambda_PermissionSecurityStack(app, "LambdaPermissionSecurity", {
    stackName: "TrustStack-LambdaPermissionSecurity",
    securityPackagesDir: securityPackagesDir,
    config: securityPackages.lambdaPermissionSecurity.configuration ?? {},
    tags: {
      "TrustStack:SecurityPackage": "LambdaPermissionSecurity",
    },
  });
}

if (securityPackages.lambdaVPCSecurity?.enabled) {
  new Lambda_VPCSecurityStack(app, "LambdaVPCSecurity", {
    stackName: "TrustStack-LambdaVPCSecurity",
    securityPackagesDir: securityPackagesDir,
    tags: {
      "TrustStack:SecurityPackage": "LambdaVPCSecurity",
    },
  });
}

if (securityPackages.snsSubscriptionSecurity?.enabled) {
  new SNS_SubscriptionSecurityStack(app, "SNSSubscriptionSecurity", {
    stackName: "TrustStack-SNSSubscriptionSecurity",
    securityPackagesDir: securityPackagesDir,
    config: securityPackages.snsSubscriptionSecurity.configuration,
    tags: {
      "TrustStack:SecurityPackage": "SNSSubscriptionSecurity",
    },
  });
}

cdk.Tags.of(app).add("Project", "TrustStack");
