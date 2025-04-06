import type { SecuritySolutionSlug } from "@trust-stack/schema";
import { validateEnvironmentVariables } from "@trust-stack/utils";
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

export const lzaOrganizationConfigFileName = "organization-config.yaml";

export const buildConfiguration = {
  ["ecr-image-layer-access" satisfies SecuritySolutionSlug]: {
    solutionDirectoryPath: path.join(
      solutionsDirectoryPath,
      "ecr",
      "image-layer-access",
    ),
    generatedCloudFormationTemplateFilePath: path.join(
      cdkOutDirectory,
      "ECRImageLayerAccess.template.json",
    ),
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

export const { BUILD_HASH } = validateEnvironmentVariables(["BUILD_HASH"]);
