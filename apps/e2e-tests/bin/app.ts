#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { MockHTTPAPIStack } from "../lib";

const app = new cdk.App();

new MockHTTPAPIStack(app, "MockHTTPAPI");

cdk.Tags.of(app).add("Project", "TrustStack");
