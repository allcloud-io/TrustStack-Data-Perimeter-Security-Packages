import type { SecurityPackageSlug } from "@trust-stack/schema";
import { validateEnvironmentVariables } from "@trust-stack/utils";
import * as path from "node:path";

export const manifestFilePath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "deployment-manifest.yml",
);

export const projectDirectory = path.join(__dirname, "..", "..");

export const securityPackagesDirectoryPath = path.join(
  "lib",
  "security-packages",
);

export const distDirectory = "dist";

export const cdkOutDirectory = "cdk.out";

export const lzaOrganizationConfigFileName = "organization-config.yaml";

export const lzaCustomizationsConfigFileName = "customizations-config.yaml";

export const buildConfiguration = {
  ["ecr-image-layer-access" satisfies SecurityPackageSlug]: {
    packageDirectoryPath: path.join(
      securityPackagesDirectoryPath,
      "ecr",
      "image-layer-access",
    ),
    generatedCloudFormationTemplateFilePath: path.join(
      cdkOutDirectory,
      "ECRImageLayerAccess.template.json",
    ),
  },
  ["sns-subscription-security" satisfies SecurityPackageSlug]: {
    packageDirectoryPath: path.join(
      securityPackagesDirectoryPath,
      "sns",
      "subscription-security",
    ),
    generatedCloudFormationTemplateFilePath: path.join(
      cdkOutDirectory,
      "SNSSubscriptionSecurity.template.json",
    ),
  },
} satisfies Record<
  SecurityPackageSlug,
  {
    packageDirectoryPath: string;
    generatedCloudFormationTemplateFilePath: string;
  }
>;

export const { BUILD_HASH } = validateEnvironmentVariables(["BUILD_HASH"]);
