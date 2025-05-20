#!/usr/bin/env node
import { ConfigurationSchema, parseManifestFile } from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import { E2ETestingResourcesStack, MockHTTPAPIStack } from "../lib";

const {
  spec: { awsOrganizationID },
} = parseManifestFile(
  ConfigurationSchema,
  path.join(__dirname, "..", "..", "..", "deployment-manifest.yml"),
);

const app = new cdk.App();

new MockHTTPAPIStack(app, "MockHTTPAPI");
new E2ETestingResourcesStack(app, "E2ETestingResources", {
  awsOrganizationID,
});

cdk.Tags.of(app).add("Project", "TrustStack");
cdk.Tags.of(app).add("ts:exclude", "*");
