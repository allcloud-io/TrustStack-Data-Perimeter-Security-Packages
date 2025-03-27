#!/usr/bin/env node
import { validateEnvironmentVariables } from "@trust-stack/utils";
import * as cdk from "aws-cdk-lib";
import {
  AssetsBucketStack,
  CloudFormationHookExecutionRoleStack,
} from "../lib";

const env = validateEnvironmentVariables(["SHARED_SERVICES_ACCOUNT_ID"]);

const app = new cdk.App();

new AssetsBucketStack(app, "AssetsBucket", {
  env: {
    account: env.SHARED_SERVICES_ACCOUNT_ID,
  },
});

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
