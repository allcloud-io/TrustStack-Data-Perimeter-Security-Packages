/**
 * Script for generating deployment assets for the TrustStack engine.
 *
 * This script synthesizes the CDK application and produces deployment artifacts for
 * the engine component of the TrustStack framework.
 *
 * - CloudFormation templates:
 *   - `AssetsBucket.template.json`: The CloudFormation template for the assets bucket.
 *   - `CloudFormationHookExecutionRole.template.json`: The CloudFormation template for the CloudFormation hook execution role.
 */

import * as childProcess from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";

const projectDirectory = path.join(__dirname, "..");

const distDirectory = "dist";

const cdkOutDirectory = "cdk.out";

const cloudformationStacksFileNames = {
  assetsBucket: {
    generatedFileName: "AssetsBucket.template.json",
    distFileName: "assets-bucket.template.json",
  },
  cloudFormationHookExecutionRole: {
    generatedFileName: "CloudFormationHookExecutionRole.template.json",
    distFileName: "cloudformation-hook-execution-role.template.json",
  },
} as const;

function synthesizeCDKApplication() {
  console.log("Synthesizing CDK application");

  childProcess.execSync(
    "pnpm cdk synth --version-reporting=false --path-metadata=false --asset-metadata=false --ci",
    {
      cwd: projectDirectory,
      stdio: "inherit",
    },
  );

  console.log("CDK application synthesized");
}

async function addCloudFormationTemplate(
  stack: keyof typeof cloudformationStacksFileNames,
): Promise<string> {
  const { generatedFileName, distFileName } =
    cloudformationStacksFileNames[stack];

  const generatedTemplateFilePath = path.join(
    cdkOutDirectory,
    generatedFileName,
  );

  let generatedCloudFormationTemplate: string;
  try {
    generatedCloudFormationTemplate = await fs.readFile(
      generatedTemplateFilePath,
      "utf-8",
    );
  } catch (error) {
    console.error(
      `Failed to read generated CloudFormation template ${generatedTemplateFilePath}`,
    );
    throw error;
  }

  await fs.mkdir(distDirectory, { recursive: true });

  const distFilePath = path.join(distDirectory, distFileName);

  try {
    await fs.writeFile(distFilePath, generatedCloudFormationTemplate);
  } catch (error) {
    console.error(
      `Failed to add CloudFormation template ${generatedTemplateFilePath}`,
    );
    throw error;
  }

  return distFilePath;
}

async function main() {
  synthesizeCDKApplication();

  await addCloudFormationTemplate("assetsBucket");
  await addCloudFormationTemplate("cloudFormationHookExecutionRole");
}

if (require.main === module) {
  main()
    .then(() => {
      console.log(
        "Successfully generated deployment assets for the TrustStack engine",
      );
    })
    .catch((error: unknown) => {
      console.error(
        "Failed to generate deployment assets for the TrustStack engine",
        error,
      );
      process.exit(1);
    });
}
