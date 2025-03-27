import type { SecuritySolutionSlug } from "@trust-stack/schema";
import * as path from "node:path";

export const manifestFilePath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "trust-stack.yml",
);

export const projectDirectory = path.join(__dirname, "..", "..");

export const solutionsDirectoryPath = path.join("lib", "solutions");

export const distDirectory = "dist";

export const cdkOutDirectory = "cdk.out";

export const buildConfiguration = {
  ["ecr-image-layer-access" satisfies SecuritySolutionSlug]: {
    solutionDirectoryPath: path.join(
      solutionsDirectoryPath,
      "ecr",
      "image-layer-access",
    ),
    // TODO: Add the path to the generated CloudFormation template
    generatedCloudFormationTemplateFilePath: "",
  },
  ["sns-subscription-security" satisfies SecuritySolutionSlug]: {
    solutionDirectoryPath: path.join(
      solutionsDirectoryPath,
      "sns",
      "subscription-security",
    ),
    generatedCloudFormationTemplateFilePath: path.join(
      cdkOutDirectory,
      "SNSSubscriptionSecurity.template.json",
    ),
  },
} satisfies Record<
  SecuritySolutionSlug,
  {
    solutionDirectoryPath: string;
    generatedCloudFormationTemplateFilePath: string;
  }
>;
