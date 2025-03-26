#!/usr/bin/env node
import { ConfigurationSchema, parseManifestFile } from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import { SecurityControlsStack, SNS_ValidateSubscriptionStack } from "../lib";

const app = new cdk.App();

const solutionsDir = path.join(__dirname, "..", "lib", "solutions");

const {
  spec: { solutions },
} = parseManifestFile(
  ConfigurationSchema,
  path.join(__dirname, "..", "..", "..", "trust-stack.yml"),
);

const securityControlsStack = new SecurityControlsStack(
  app,
  "SecurityControls",
  {
    solutionsDir,
  },
);

if (solutions.snsSubscriptionSecurity.enabled) {
  const snsValidateSubscriptionStack = new SNS_ValidateSubscriptionStack(
    app,
    "SNSValidateSubscription",
    {
      solutionsDir,
      config: solutions.snsSubscriptionSecurity.configuration,
    },
  );

  snsValidateSubscriptionStack.addDependency(securityControlsStack);
}

cdk.Tags.of(app).add("Project", "TrustStack");
