#!/usr/bin/env node
import { ConfigurationSchema, parseManifestFile } from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import { SNS_SubscriptionSecurityStack } from "../lib";

const app = new cdk.App({
  analyticsReporting: false,
  treeMetadata: false,
  stackTraces: false,
  // Use the BootstraplessSynthesizer to exclude AWS-specific metadata (such as "aws:cdk:path") from the synthesized templates.
  defaultStackSynthesizer: new cdk.BootstraplessSynthesizer(),
});

const solutionsDir = path.join(__dirname, "..", "lib", "solutions");

const {
  spec: { solutions },
} = parseManifestFile(
  ConfigurationSchema,
  path.join(__dirname, "..", "..", "..", "trust-stack.yml"),
);

if (solutions.snsSubscriptionSecurity.enabled) {
  new SNS_SubscriptionSecurityStack(app, "SNSSubscriptionSecurity", {
    solutionsDir,
    config: solutions.snsSubscriptionSecurity.configuration,
  });
}

cdk.Tags.of(app).add("Project", "TrustStack");
