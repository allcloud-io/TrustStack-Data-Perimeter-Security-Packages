#!/usr/bin/env node
import {
  ConfigurationSchema,
  E2ETestsOptions,
  parseManifestFile,
} from "@trust-stack/schema";
import * as cdk from "aws-cdk-lib";
import * as path from "node:path";
import { E2ETestingResourcesStack, MockHTTPAPIStack } from "../lib";

const {
  spec: { awsOrganizationID },
} = parseManifestFile(
  ConfigurationSchema,
  path.join(__dirname, "..", "..", "..", "deployment-manifest.yml"),
);

const options = parseManifestFile(
  E2ETestsOptions,
  path.join(__dirname, "..", "..", "..", "e2e-tests-options.yml"),
);

const app = new cdk.App();

new MockHTTPAPIStack(app, "MockHTTPAPI");
new E2ETestingResourcesStack(app, "E2ETestingResources", {
  awsOrganizationID,
  ...options,
});

cdk.Tags.of(app).add("Project", "TrustStack");
cdk.Tags.of(app).add("ts:exclude", "ALL");
