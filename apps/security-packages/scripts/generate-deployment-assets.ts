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
import { resolveErrorMessage } from "@trust-stack/utils";
import dedent from "dedent";
import * as esbuild from "esbuild";
import * as yaml from "js-yaml";
import mergeWith from "lodash.mergewith";
import * as childProcess from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { generateSCP as generateECRImageLayerAccessSCP } from "../lib/security-packages/ecr/image-layer-access/preventative-controls/generate-scp";
import { SECURITY_PACKAGE_SLUG as ECR_IMAGE_LAYER_ACCESS_SECURITY_PACKAGE_SLUG } from "../lib/security-packages/ecr/image-layer-access/shared/index";
import { SECURITY_PACKAGE_SLUG as LAMBDA_LAYER_PERMISSION_SECURITY_PACKAGE_SLUG } from "../lib/security-packages/lambda/layer-permission/shared/index";
import { SECURITY_PACKAGE_SLUG as LAMBDA_PERMISSION_SECURITY_PACKAGE_SLUG } from "../lib/security-packages/lambda/permission-security/shared/index";
import { generateSCP as generateLambdaVPCSecuritySCP } from "../lib/security-packages/lambda/vpc-security/preventative-controls/generate-scp";
import { SECURITY_PACKAGE_SLUG as LAMBDA_VPC_SECURITY_PACKAGE_SLUG } from "../lib/security-packages/lambda/vpc-security/shared/index";
import { generateSCP as generateSNSSubscriptionSecuritySCP } from "../lib/security-packages/sns/subscription-security/preventative-controls/generate-scp";
import { SECURITY_PACKAGE_SLUG as SNS_SUBSCRIPTION_SECURITY_PACKAGE_SLUG } from "../lib/security-packages/sns/subscription-security/shared/index";
import {
  buildConfiguration,
  cdkOutDirectory,
  commonComponentsDistDirectoryPath,
  distDirectory,
  lzaCustomizationsConfigFileName,
  lzaOrganizationConfigFileName,
  manifestFilePath,
  projectDirectory,
} from "../lib/shared/build-configuration";

const commonCloudformationStacksFileNames = {
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

async function addCloudFormationTemplateForCommonComponent(
  stack: keyof typeof commonCloudformationStacksFileNames,
): Promise<string> {
  const { generatedFileName, distFileName } =
    commonCloudformationStacksFileNames[stack];

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

  await fs.mkdir(commonComponentsDistDirectoryPath, { recursive: true });

  const distFilePath = path.join(
    commonComponentsDistDirectoryPath,
    distFileName,
  );

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

async function generateLZACustomizationsConfigFileForCommonComponents() {
  const lzaCustomizationsConfigFilePath = path.join(
    commonComponentsDistDirectoryPath,
    lzaCustomizationsConfigFileName,
  );

  const lzaCustomizationsConfig = dedent`
    customizations:
      cloudFormationStackSets:
        - name: trust-stack-common-cloudformation-hook-execution-role
          description: CloudFormation hook execution role for TrustStack
          template: ./trust-stack/common/cloudformation-hook-execution-role.template.json
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

async function addCloudFormationTemplateForSecurityPackage(
  securityPackage: SecurityPackageSlug,
): Promise<string> {
  const { generatedCloudFormationTemplateFilePath } =
    buildConfiguration[securityPackage];

  const securityPackageDistDir =
    getSecurityPackageDistDirectoryPath(securityPackage);

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

function getServiceControlPolicyFilePathForSecurityPackage(
  securityPackage: SecurityPackageSlug,
): string {
  return path.join(
    getSecurityPackageDistDirectoryPath(securityPackage),
    "preventative-controls",
    "service-control-policy.json",
  );
}

function getSecurityPackageDistDirectoryPath(
  securityPackage: SecurityPackageSlug,
): string {
  return path.join(
    distDirectory,
    "trust-stack",
    "security-packages",
    securityPackage,
  );
}

async function buildLambdaHandlerArchivesForSecurityPackage(
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
  const securityPackageDistDir = path.join(
    distDirectory,
    "security-packages",
    securityPackage,
  );
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
    } catch (error: unknown) {
      console.warn(
        `Failed to remove generated file: ${resolveErrorMessage(error)}`,
      );
      throw error;
    }
  }

  console.log("Cleanup of generated Lambda handler files complete");

  return archiveFilePaths;
}

async function generateLZAOrganizationConfigFileForSecurityPackage(
  securityPackage: SecurityPackageSlug,
  description: string,
) {
  const securityPackageDistDir =
    getSecurityPackageDistDirectoryPath(securityPackage);

  const organizationConfigFilePath = path.join(
    securityPackageDistDir,
    lzaOrganizationConfigFileName,
  );

  await fs.mkdir(securityPackageDistDir, { recursive: true });

  const organizationConfig = dedent`
  serviceControlPolicies:
    - name: trust-stack-${securityPackage}
      description: ${description}
      policy: ./trust-stack/security-packages/${securityPackage}/preventative-controls/service-control-policy.json
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

async function generateLZACustomizationsConfigFileForSecurityPackage(
  securityPackage: SecurityPackageSlug,
  description: string,
) {
  const securityPackageDistDir =
    getSecurityPackageDistDirectoryPath(securityPackage);

  const lzaCustomizationsConfigFilePath = path.join(
    securityPackageDistDir,
    lzaCustomizationsConfigFileName,
  );

  await fs.mkdir(securityPackageDistDir, { recursive: true });

  const lzaCustomizationsConfig = dedent`
    customizations:
      cloudFormationStackSets:
        - name: trust-stack-${securityPackage}
          description: ${description}
          template: ./trust-stack/security-packages/${securityPackage}/cloudformation-template.json
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

async function generateMergedLZAOrganizationConfig() {
  const lzaOrganizationConfigFilePath = path.join(
    distDirectory,
    "organization-config.yaml",
  );

  await fs.mkdir(distDirectory, { recursive: true });

  await mergeLZAConfigFiles({
    fileName: "organization-config.yaml",
    directoryPath: distDirectory,
    outputPath: lzaOrganizationConfigFilePath,
  });
}

async function generateMergedLZACustomizationsConfig() {
  const lzaCustomizationsConfigFilePath = path.join(
    distDirectory,
    "customizations-config.yaml",
  );

  await fs.mkdir(distDirectory, { recursive: true });

  await mergeLZAConfigFiles({
    fileName: "customizations-config.yaml",
    directoryPath: distDirectory,
    outputPath: lzaCustomizationsConfigFilePath,
  });
}

/**
 * Recursively scans a directory for customizations-config.yml files and merges them
 * @param directoryPath - The root directory path to scan
 * @param outputPath - Optional output file path for the merged config
 * @returns Promise<Record<> - The merged configuration object
 */
async function mergeLZAConfigFiles({
  fileName,
  directoryPath,
  outputPath,
}: {
  fileName: string;
  directoryPath: string;
  outputPath: string;
}): Promise<void> {
  const configFiles: string[] = [];

  // Recursively find all customizations-config.yml files
  async function findConfigFiles(dir: string): Promise<void> {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        await findConfigFiles(fullPath);
      } else if (item.isFile() && item.name === fileName) {
        configFiles.push(fullPath);
      }
    }
  }

  try {
    // Validate input directory exists
    if (!(await fs.stat(directoryPath)).isDirectory()) {
      throw new Error(`Directory does not exist: ${directoryPath}`);
    }

    if (!(await fs.stat(directoryPath)).isDirectory()) {
      throw new Error(`Path is not a directory: ${directoryPath}`);
    }

    // Find all config files
    await findConfigFiles(directoryPath);
    console.log(`Found ${configFiles.length.toString()} ${fileName} files`);

    // Merge all configurations using lodash.merge
    let mergedConfig: Record<string, unknown> = {};

    for (const configFile of configFiles) {
      try {
        const fileContent = await fs.readFile(configFile, "utf8");
        const config = yaml.load(fileContent) as Record<string, unknown>;

        mergedConfig = mergeWith(mergedConfig, config, (objValue, srcValue) => {
          if (Array.isArray(objValue)) {
            return objValue.concat(srcValue) as unknown[];
          }

          return undefined;
        });
        console.log(`Merged config from: ${configFile}`);
      } catch (error) {
        console.warn(`Failed to parse ${configFile}:`, error);
        throw error;
      }
    }

    // Write merged config to output file
    const yamlOutput = yaml.dump(mergedConfig, {
      indent: 2,
      lineWidth: 120,
      noRefs: true,
    });

    await fs.writeFile(outputPath, yamlOutput, "utf8");
    console.log(`Merged configuration written to: ${outputPath}`);
  } catch (error) {
    console.error("Error merging customization configs:", error);
    throw error;
  }
}

async function main() {
  synthesizeCDKApplication();

  const generatedFilePaths: string[] = [];

  const cloudformationHookExecutionRoleTemplateFilePath =
    await addCloudFormationTemplateForCommonComponent(
      "cloudFormationHookExecutionRole",
    );

  generatedFilePaths.push(
    path.relative(
      projectDirectory,
      cloudformationHookExecutionRoleTemplateFilePath,
    ),
  );

  const lzaCustomizationsConfigFilePath =
    await generateLZACustomizationsConfigFileForCommonComponents();

  generatedFilePaths.push(
    path.relative(projectDirectory, lzaCustomizationsConfigFilePath),
  );

  const config = parseManifestFile(ConfigurationSchema, manifestFilePath);
  const {
    spec: { securityPackages },
  } = config;

  if (securityPackages.ecrImageLayerAccess?.enabled) {
    console.log("ECR Image Layer Access is enabled");

    const description =
      "Deny ECR image layer access to untrusted roles and networks";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplateForSecurityPackage(
        ECR_IMAGE_LAYER_ACCESS_SECURITY_PACKAGE_SLUG,
      );

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const config = securityPackages.ecrImageLayerAccess.configuration;
    const scp = generateECRImageLayerAccessSCP(config);

    const scpFilePath = getServiceControlPolicyFilePathForSecurityPackage(
      ECR_IMAGE_LAYER_ACCESS_SECURITY_PACKAGE_SLUG,
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    const lzaOrganizationConfigFilePath =
      await generateLZAOrganizationConfigFileForSecurityPackage(
        ECR_IMAGE_LAYER_ACCESS_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFileForSecurityPackage(
        ECR_IMAGE_LAYER_ACCESS_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchivesForSecurityPackage(
        ECR_IMAGE_LAYER_ACCESS_SECURITY_PACKAGE_SLUG,
      );

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

  if (securityPackages.lambdaLayerPermissionSecurity?.enabled) {
    console.log("Lambda Layer Permission Security is enabled");

    const description = "Deny Lambda layer permissions to untrusted principals";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplateForSecurityPackage(
        LAMBDA_LAYER_PERMISSION_SECURITY_PACKAGE_SLUG,
      );

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFileForSecurityPackage(
        LAMBDA_LAYER_PERMISSION_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchivesForSecurityPackage(
        LAMBDA_LAYER_PERMISSION_SECURITY_PACKAGE_SLUG,
      );

    const relativeFilePaths = [
      lzaCustomizationsConfigFilePath,
      ...lambdaHandlerArchiveFilePaths,
    ].map((filePath) => path.relative(projectDirectory, filePath));

    generatedFilePaths.push(...relativeFilePaths);
  } else {
    console.log("Lambda Layer Permission Security is disabled.");
  }

  if (securityPackages.lambdaPermissionSecurity?.enabled) {
    console.log("Lambda Permission Security is enabled");

    const description = "Deny Lambda permissions with untrusted principals";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplateForSecurityPackage(
        LAMBDA_PERMISSION_SECURITY_PACKAGE_SLUG,
      );

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFileForSecurityPackage(
        LAMBDA_PERMISSION_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchivesForSecurityPackage(
        LAMBDA_PERMISSION_SECURITY_PACKAGE_SLUG,
      );

    const relativeFilePaths = [
      lzaCustomizationsConfigFilePath,
      ...lambdaHandlerArchiveFilePaths,
    ].map((filePath) => path.relative(projectDirectory, filePath));

    generatedFilePaths.push(...relativeFilePaths);
  } else {
    console.log("Lambda Permission Security is disabled.");
  }

  if (securityPackages.lambdaVPCSecurity?.enabled) {
    console.log("Lambda VPC Security is enabled");

    const description =
      "Deny Lambda functions from being created without a VPC configuration";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplateForSecurityPackage(
        LAMBDA_VPC_SECURITY_PACKAGE_SLUG,
      );

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const config = securityPackages.lambdaVPCSecurity.configuration;
    const scp = generateLambdaVPCSecuritySCP(config);

    const scpFilePath = getServiceControlPolicyFilePathForSecurityPackage(
      LAMBDA_VPC_SECURITY_PACKAGE_SLUG,
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    const lzaOrganizationConfigFilePath =
      await generateLZAOrganizationConfigFileForSecurityPackage(
        LAMBDA_VPC_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFileForSecurityPackage(
        LAMBDA_VPC_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchivesForSecurityPackage(
        LAMBDA_VPC_SECURITY_PACKAGE_SLUG,
      );

    const relativeFilePaths = [
      scpFilePath,
      lzaOrganizationConfigFilePath,
      lzaCustomizationsConfigFilePath,
      ...lambdaHandlerArchiveFilePaths,
    ].map((filePath) => path.relative(projectDirectory, filePath));

    generatedFilePaths.push(...relativeFilePaths);
  } else {
    console.log("Lambda VPC Security is disabled.");
  }

  if (securityPackages.snsSubscriptionSecurity?.enabled) {
    console.log("SNS Subscription Security is enabled");

    const description =
      "Deny SNS subscriptions to untrusted endpoints and protocols";

    const cloudformationTemplateFilePath =
      await addCloudFormationTemplateForSecurityPackage(
        SNS_SUBSCRIPTION_SECURITY_PACKAGE_SLUG,
      );

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const config = securityPackages.snsSubscriptionSecurity.configuration;
    const scp = generateSNSSubscriptionSecuritySCP(config);

    const scpFilePath = getServiceControlPolicyFilePathForSecurityPackage(
      SNS_SUBSCRIPTION_SECURITY_PACKAGE_SLUG,
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    const lzaOrganizationConfigFilePath =
      await generateLZAOrganizationConfigFileForSecurityPackage(
        SNS_SUBSCRIPTION_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lzaCustomizationsConfigFilePath =
      await generateLZACustomizationsConfigFileForSecurityPackage(
        SNS_SUBSCRIPTION_SECURITY_PACKAGE_SLUG,
        description,
      );

    const lambdaHandlerArchiveFilePaths =
      await buildLambdaHandlerArchivesForSecurityPackage(
        SNS_SUBSCRIPTION_SECURITY_PACKAGE_SLUG,
      );

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

  await generateMergedLZAOrganizationConfig();
  await generateMergedLZACustomizationsConfig();
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
