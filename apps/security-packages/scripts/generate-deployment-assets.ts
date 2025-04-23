/**
 * Script for generating deployment assets for TrustStack security packages.
 *
 * This script synthesizes the CDK application and produces deployment artifacts for
 * enabled security packages defined in the deployment-manifest.yml manifest file.
 *
 * Output artifacts:
 * - CloudFormation templates: Generated as cloudformation-template.json in each security package's
 *   directory within the dist folder.
 * - Lambda handler archives: Packaged as lambda.zip files in their respective directories
 *   after being bundled with esbuild.
 * - Service Control Policies: Generated as preventative-controls/service-control-policy.json in the security package's
 *   directory for security packages that implement SCPs.
 *
 * File naming conventions and constraints:
 * - Lambda handlers must be named either handler.ts or end with .handler.ts
 * - Lambda handlers can have up to 2 levels of directory nesting within their security package's directory
 * - All output artifacts are organized in the dist directory by security package slug (e.g. dist/sns-subscription-security)
 */

import {
  ConfigurationSchema,
  parseManifestFile,
  type SecurityPackageSlug,
} from "@trust-stack/schema";
import dedent from "dedent";
import * as esbuild from "esbuild";
import * as childProcess from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { generateSCP as generateECRImageLayerAccessSCP } from "../lib/security-packages/ecr/image-layer-access/preventative-controls/generate-scp";
import { generateSCP as generateSNSSubscriptionSecuritySCP } from "../lib/security-packages/sns/subscription-security/preventative-controls/generate-scp";
import {
  buildConfiguration,
  distDirectory,
  lzaCustomizationsConfigFileName,
  lzaOrganizationConfigFileName,
  manifestFilePath,
  projectDirectory,
} from "../lib/shared/build-configuration";

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
  securityPackage: SecurityPackageSlug,
): Promise<string> {
  const { generatedCloudFormationTemplateFilePath } =
    buildConfiguration[securityPackage];

  const securityPackageDistDir = path.join(distDirectory, securityPackage);

  let generatedCloudFormationTemplate: string;
  try {
    generatedCloudFormationTemplate = await fs.readFile(
      generatedCloudFormationTemplateFilePath,
      "utf-8",
    );
  } catch (error) {
    console.error(
      `Failed to read generated CloudFormation template for security package "${securityPackage}"`,
    );
    throw error;
  }

  const distFilePath = path.join(
    securityPackageDistDir,
    "cloudformation-template.json",
  );

  await fs.mkdir(securityPackageDistDir, { recursive: true });

  try {
    await fs.writeFile(distFilePath, generatedCloudFormationTemplate);
  } catch (error) {
    console.error(
      `Failed to add CloudFormation template for security package "${securityPackage}"`,
    );
    throw error;
  }

  return distFilePath;
}

async function buildLambdaHandlerArchives(
  securityPackage: SecurityPackageSlug,
): Promise<string[]> {
  const { packageDirectoryPath } = buildConfiguration[securityPackage];

  console.log(
    `Packaging security package: ${securityPackage} from directory: ${packageDirectoryPath}`,
  );

  // Find all handler files in the security package directory
  const lambdaHandlerFiles: string[] = [];

  const findLambdaHandlerFiles = async (dir: string) => {
    const files = await fs.readdir(dir, {
      withFileTypes: true,
    });

    for (const file of files) {
      const filePath = path.join(file.parentPath, file.name);

      if (file.isDirectory()) {
        await findLambdaHandlerFiles(filePath);
      } else if (
        file.name === "handler.ts" ||
        file.name.endsWith(".handler.ts")
      ) {
        lambdaHandlerFiles.push(filePath);
      }
    }
  };

  await findLambdaHandlerFiles(packageDirectoryPath);

  if (lambdaHandlerFiles.length === 0) {
    console.log(`No lambda handler files found in ${packageDirectoryPath}`);
    return [];
  }

  console.log("Found lambda handler files:");
  lambdaHandlerFiles.forEach((file) => {
    console.log(`- ${path.relative(packageDirectoryPath, file)}`);
  });

  // Create dist directory if it doesn't exist
  const securityPackageDistDir = path.join(distDirectory, securityPackage);
  await fs.mkdir(securityPackageDistDir, { recursive: true });

  console.log(`Building Lambda handlers to ${securityPackageDistDir}`);

  const transformedFilePaths: string[] = [];

  // Build each handler file
  for (const handlerFile of lambdaHandlerFiles) {
    const relativePath = path.relative(packageDirectoryPath, handlerFile);

    const relativeJSPath = relativePath.replace(/\.ts$/, ".js");
    const relativeMapPath = relativePath.replace(/\.ts$/, ".js.map");

    const outputDir = path.join(
      securityPackageDistDir,
      path.dirname(relativeJSPath),
    );

    // Create the directory structure for the output file
    await fs.mkdir(outputDir, { recursive: true });

    console.log(
      `Building ${relativePath} to ${path.relative(process.cwd(), outputDir)}`,
    );

    const jsFilePath = path.join(outputDir, path.basename(relativeJSPath));
    const mapFilePath = path.join(outputDir, path.basename(relativeMapPath));

    await esbuild.build({
      entryPoints: [handlerFile],
      bundle: true,
      outfile: jsFilePath,
      platform: "node",
      target: "node22",
      minify: true,
      sourcemap: true,
      format: "cjs",
    });

    transformedFilePaths.push(jsFilePath, mapFilePath);
  }

  const lambdaHandlerFilesByDirectory: Record<
    string,
    string | Record<string, string>
  > = {};

  // Group Lambda handler files by their subdirectories (up to 2 levels)
  for (const filePath of transformedFilePaths) {
    // Get the relative path from the security package directory
    const relativePath = path.relative(securityPackageDistDir, filePath);
    const pathParts = relativePath.split(path.sep);

    // Skip source map files
    if (relativePath.endsWith(".map")) {
      continue;
    }

    // Check nesting level
    if (pathParts.length > 3) {
      // file.js would be 1, dir/file.js would be 2, dir1/dir2/file.js would be 3
      throw new Error(
        `Lambda handler file has more than 2 levels of nesting: ${relativePath}. ` +
          `Maximum supported nesting is 2 levels.`,
      );
    }

    if (pathParts.length === 1) {
      // No subdirectory, file is at the root
      lambdaHandlerFilesByDirectory[pathParts[0]] = filePath;
    } else if (pathParts.length === 2) {
      // One level of nesting
      const [dir, file] = pathParts;
      if (!lambdaHandlerFilesByDirectory[dir]) {
        lambdaHandlerFilesByDirectory[dir] = {};
      }
      if (typeof lambdaHandlerFilesByDirectory[dir] === "string") {
        throw new Error(
          `Cannot mix files and directories at the same level: ${dir}`,
        );
      }
      lambdaHandlerFilesByDirectory[dir][file] = filePath;
    } else if (pathParts.length === 3) {
      // Two levels of nesting
      const [dir1, dir2, file] = pathParts;
      const nestedDir = `${dir1}/${dir2}`;

      if (!lambdaHandlerFilesByDirectory[nestedDir]) {
        lambdaHandlerFilesByDirectory[nestedDir] = {};
      }
      if (typeof lambdaHandlerFilesByDirectory[nestedDir] === "string") {
        throw new Error(
          `Cannot mix files and directories at the same level: ${nestedDir}`,
        );
      }
      lambdaHandlerFilesByDirectory[nestedDir][file] = filePath;
    }
  }

  const archiveFilePaths: string[] = [];

  // Generate a ZIP file for each Lambda function based on its directory
  for (const [dirPath, value] of Object.entries(
    lambdaHandlerFilesByDirectory,
  )) {
    // Skip if this is not a directory with an handler.js file
    if (
      typeof value === "string" ||
      !Object.values(value).some((file) => path.basename(file) === "handler.js")
    ) {
      continue;
    }

    const outputDirectoryPath = path.join(securityPackageDistDir, dirPath);
    const zipFilePath = path.join(outputDirectoryPath, "lambda.zip");

    console.log(`Creating ZIP file for Lambda in directory: ${dirPath}`);

    // Create a zip file containing all files in the Lambda directory
    const zipCommand = "zip -r lambda.zip .";

    try {
      childProcess.execSync(zipCommand, {
        cwd: outputDirectoryPath,
        stdio: "inherit",
      });
      console.log(`Successfully created ZIP file: ${zipFilePath}`);

      // Add the generated ZIP file path to the list of generated files
      archiveFilePaths.push(path.relative(projectDirectory, zipFilePath));
    } catch (error) {
      console.error(
        `Failed to create ZIP file for Lambda in directory: ${dirPath}`,
      );
      console.error(error);
    }
  }

  console.log(
    `Successfully built ${lambdaHandlerFiles.length.toString()} Lambda handlers to ${securityPackageDistDir}`,
  );

  // Clean up the generated JS and map files after zipping
  console.log("Cleaning up generated Lambda handler files");

  for (const filePath of transformedFilePaths) {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.warn(
        `Failed to remove generated file: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }

  console.log("Cleanup of generated Lambda handler files complete");

  return archiveFilePaths;
}

async function generateLZAOrganizationConfigFile(
  securityPackage: SecurityPackageSlug,
  description: string,
) {
  const organizationConfigFilePath = path.join(
    distDirectory,
    securityPackage,
    lzaOrganizationConfigFileName,
  );

  const securityPackageDistDir = path.join(distDirectory, securityPackage);

  await fs.mkdir(securityPackageDistDir, { recursive: true });

  const organizationConfig = dedent`
  serviceControlPolicies:
    - name: trust-stack-${securityPackage}
      description: ${description}
      policy: ./trust-stack/${securityPackage}/preventative-controls/service-control-policy.json
      strategy: deny-list
      type: customerManaged
      # Uncomment and edit the following section to customize the deployment targets
      # deploymentTargets:
      #   accounts:
      #     - <ACCOUNT_1>
      #     - <ACCOUNT_2>
      #   organizationalUnits:
      #     - <ORGANIZATIONAL_UNIT_1>
      #     - <ORGANIZATIONAL_UNIT_2>
      #   excludedAccounts:
      #     - <EXCLUDED_ACCOUNT_1>
      #     - <EXCLUDED_ACCOUNT_2>
      #   excludedRegions:
      #     - <EXCLUDED_REGION_1>
      #     - <EXCLUDED_REGION_2>
  `;

  await fs.writeFile(organizationConfigFilePath, organizationConfig);

  return organizationConfigFilePath;
}

async function generateLZACustomizationsConfigFile(
  securityPackage: SecurityPackageSlug,
  description: string,
) {
  const lzaCustomizationsConfigFilePath = path.join(
    distDirectory,
    securityPackage,
    lzaCustomizationsConfigFileName,
  );

  const securityPackageDistDir = path.join(distDirectory, securityPackage);

  await fs.mkdir(securityPackageDistDir, { recursive: true });

  const lzaCustomizationsConfig = dedent`
    customizations:
      cloudFormationStackSets:
        - name: trust-stack-${securityPackage}
          description: ${description}
          template: ./trust-stack/${securityPackage}/cloudformation-template.json
          capabilities:
            - "CAPABILITY_IAM"
            - "CAPABILITY_NAMED_IAM"
          # Uncomment and edit the following section to customize the deployment targets and regions
          # regions:
          #   - <REGION_1>
          #   - <REGION_2>
          # deploymentTargets:
          #   accounts:
          #     - <ACCOUNT_1>
          #     - <ACCOUNT_2>
          #   organizationalUnits:
          #     - <ORGANIZATIONAL_UNIT_1>
          #     - <ORGANIZATIONAL_UNIT_2>
          #   excludedAccounts:
          #     - <EXCLUDED_ACCOUNT_1>
          #     - <EXCLUDED_ACCOUNT_2>
          #   excludedRegions:
          #     - <EXCLUDED_REGION_1>
          #     - <EXCLUDED_REGION_2>
  `;

  await fs.writeFile(lzaCustomizationsConfigFilePath, lzaCustomizationsConfig);

  return lzaCustomizationsConfigFilePath;
}

async function main() {
  synthesizeCDKApplication();

  const config = parseManifestFile(ConfigurationSchema, manifestFilePath);
  const {
    spec: { securityPackages },
  } = config;

  const generatedFilePaths: string[] = [];

  if (securityPackages.ecrImageLayerAccess?.enabled) {
    console.log("ECR Image Layer Access is enabled");

    const securityPackageSlug = "ecr-image-layer-access";
    const description =
      "Deny ECR image layer access to untrusted roles and networks";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplate(securityPackageSlug);

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const config = securityPackages.ecrImageLayerAccess.configuration;
    const scp = generateECRImageLayerAccessSCP(config);

    const scpFilePath = path.join(
      distDirectory,
      securityPackageSlug,
      "preventative-controls",
      "service-control-policy.json",
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    generatedFilePaths.push(path.relative(projectDirectory, scpFilePath));

    const lzaOrganizationConfigFilePath =
      await generateLZAOrganizationConfigFile(securityPackageSlug, description);

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFile(
        securityPackageSlug,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchives(securityPackageSlug);

    const relativeFilePaths = [
      scpFilePath,
      lzaOrganizationConfigFilePath,
      lzaCustomizationsConfigFilePath,
      ...lambdaHandlerArchiveFilePaths,
    ].map((filePath) => path.relative(projectDirectory, filePath));

    generatedFilePaths.push(...relativeFilePaths);
  } else {
    console.log("ECR Image Layer Access is disabled.");
  }

  if (securityPackages.snsSubscriptionSecurity?.enabled) {
    console.log("SNS Subscription Security is enabled");

    const securityPackageSlug = "sns-subscription-security";
    const description =
      "Deny SNS subscriptions to untrusted endpoints and protocols";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplate(securityPackageSlug);

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const config = securityPackages.snsSubscriptionSecurity.configuration;
    const scp = generateSNSSubscriptionSecuritySCP(config);

    const scpFilePath = path.join(
      distDirectory,
      securityPackageSlug,
      "preventative-controls",
      "service-control-policy.json",
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    const lzaOrganizationConfigFilePath =
      await generateLZAOrganizationConfigFile(securityPackageSlug, description);

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFile(
        securityPackageSlug,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchives(securityPackageSlug);

    const relativeFilePaths = [
      scpFilePath,
      lzaOrganizationConfigFilePath,
      lzaCustomizationsConfigFilePath,
      ...lambdaHandlerArchiveFilePaths,
    ].map((filePath) => path.relative(projectDirectory, filePath));

    generatedFilePaths.push(...relativeFilePaths);
  } else {
    console.log("SNS Subscription Security is disabled.");
  }
}

if (require.main === module) {
  main()
    .then(() => {
      console.log("Successfully packaged all security packages");
    })
    .catch((error: unknown) => {
      console.error("Failed to package security packages", error);
      process.exit(1);
    });
}
