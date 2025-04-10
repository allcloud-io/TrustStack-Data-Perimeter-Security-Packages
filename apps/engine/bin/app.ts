#!/usr/bin/env node
import { validateEnvironmentVariables } from "@trust-stack/utils";
import * as cdk from "aws-cdk-lib";
import {
  AssetsBucketStack,
  CloudFormationHookExecutionRoleStack,
} from "../lib";

const env = validateEnvironmentVariables(["SHARED_SERVICES_ACCOUNT_ID"]);

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
    account: env.SHARED_SERVICES_ACCOUNT_ID,
  },
});

// Should be deployed into all accounts
new CloudFormationHookExecutionRoleStack(
  app,
  "CloudFormationHookExecutionRole",
  {
    env: {
      account: env.SHARED_SERVICES_ACCOUNT_ID,
    },
  },
);

cdk.Tags.of(app).add("Project", "TrustStack");
