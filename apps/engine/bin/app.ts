#!/usr/bin/env node
import { ConfigurationSchema, parseManifestFile } from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import {
  AssetsBucketStack,
  CloudFormationHookExecutionRoleStack,
} from "../lib";

const {
  spec: { awsOrganizationARN, awsOrganizationID, sharedServicesAccountID },
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

// Should be deployed into the shared services account
new AssetsBucketStack(app, "AssetsBucket", {
  env: {
    account: sharedServicesAccountID,
  },
  awsOrganizationARN,
  awsOrganizationID,
});

// Should be deployed into all accounts
new CloudFormationHookExecutionRoleStack(
  app,
  "CloudFormationHookExecutionRole",
  {
    env: {
      account: sharedServicesAccountID,
    },
  },
);

cdk.Tags.of(app).add("Project", "TrustStack");
