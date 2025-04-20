#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { E2ETestingResourcesStack, MockHTTPAPIStack } from "../lib";

const app = new cdk.App();

new MockHTTPAPIStack(app, "MockHTTPAPI");
new E2ETestingResourcesStack(app, "E2ETestingResources");

cdk.Tags.of(app).add("Project", "TrustStack");
