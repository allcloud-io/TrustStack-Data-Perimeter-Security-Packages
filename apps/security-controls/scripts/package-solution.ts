import {
  ConfigurationSchema,
  parseManifestFile,
  SecuritySolutionSlug,
} from "@trust-stack/schema";
import * as childProcess from "child_process";
import * as esbuild from "esbuild";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import {
  buildConfiguration,
  distDirectory,
  manifestFilePath,
  projectDirectory,
} from "../lib/shared/build-configuration";
import { generateSCP as generateSNSSubscriptionSecuritySCP } from "../lib/solutions/sns/subscription-security/scp-policy/generate-scp";

function synthesizeCDKApplication() {
  console.log("Synthesizing CDK application");

  childProcess.execSync("pnpm cdk synth", {
    cwd: projectDirectory,
    stdio: "inherit",
  });

  console.log("CDK application synthesized");
}

async function addCloudFormationTemplate(
  solution: SecuritySolutionSlug,
): Promise<string> {
  const { generatedCloudFormationTemplateFilePath } =
    buildConfiguration[solution];

  const solutionDistDir = path.join(distDirectory, solution);

  let generatedCloudFormationTemplate: string;
  try {
    generatedCloudFormationTemplate = await fs.readFile(
      generatedCloudFormationTemplateFilePath,
      "utf-8",
    );
  } catch (error) {
    console.error(
      `Failed to read generated CloudFormation template for solution "${solution}"`,
    );
    throw error;
  }

  const distFilePath = path.join(
    solutionDistDir,
    "cloudformation-template.json",
  );

  await fs.mkdir(solutionDistDir, { recursive: true });

  try {
    await fs.writeFile(distFilePath, generatedCloudFormationTemplate);
  } catch (error) {
    console.error(
      `Failed to add CloudFormation template for solution "${solution}"`,
    );
    throw error;
  }

  return distFilePath;
}

async function buildLambdaHandlerArchives(
  solution: SecuritySolutionSlug,
): Promise<string[]> {
  const { solutionDirectoryPath } = buildConfiguration[solution];

  console.log(
    `Packaging solution: ${solution} from directory: ${solutionDirectoryPath}`,
  );

  // Find all handler files in the solution directory
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

  await findLambdaHandlerFiles(solutionDirectoryPath);

  if (lambdaHandlerFiles.length === 0) {
    console.log(`No lambda handler files found in ${solutionDirectoryPath}`);
    return [];
  }

  console.log("Found lambda handler files:");
  lambdaHandlerFiles.forEach((file) =>
    console.log(`- ${path.relative(solutionDirectoryPath, file)}`),
  );

  // Create dist directory if it doesn't exist
  const solutionDistDir = path.join(distDirectory, solution);
  await fs.mkdir(solutionDistDir, { recursive: true });

  console.log(`Building Lambda handlers to ${solutionDistDir}`);

  const transformedFilePaths: string[] = [];

  // Build each handler file
  for (const handlerFile of lambdaHandlerFiles) {
    const relativePath = path.relative(solutionDirectoryPath, handlerFile);

    const relativeJSPath = relativePath.replace(/\.ts$/, ".js");
    const relativeMapPath = relativePath.replace(/\.ts$/, ".js.map");

    const outputDir = path.join(solutionDistDir, path.dirname(relativeJSPath));

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
    // Get the relative path from the solution directory
    const relativePath = path.relative(solutionDistDir, filePath);
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
      (lambdaHandlerFilesByDirectory[dir] as Record<string, string>)[file] =
        filePath;
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
      (lambdaHandlerFilesByDirectory[nestedDir] as Record<string, string>)[
        file
      ] = filePath;
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

    const outputDirectoryPath = path.join(solutionDistDir, dirPath);
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
    `Successfully built ${lambdaHandlerFiles.length} Lambda handlers to ${solutionDistDir}`,
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

async function main() {
  synthesizeCDKApplication();

  const config = parseManifestFile(ConfigurationSchema, manifestFilePath);
  const {
    spec: { solutions },
  } = config;

  const generatedFilePaths: string[] = [];

  if (solutions.snsSubscriptionSecurity.enabled) {
    console.log("SNS Subscription Security is enabled");

    const cloudformationTemplateFilePath = await addCloudFormationTemplate(
      "sns-subscription-security",
    );

    generatedFilePaths.push(
      path.relative(projectDirectory, cloudformationTemplateFilePath),
    );

    const config = solutions.snsSubscriptionSecurity.configuration;
    const scp = generateSNSSubscriptionSecuritySCP(config);

    const scpFilePath = path.join(
      distDirectory,
      "sns-subscription-security",
      "service-control-policy.json",
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    const lambdaHandlerArchiveFilePaths = await buildLambdaHandlerArchives(
      "sns-subscription-security",
    );

    const relativeFilePaths = [
      scpFilePath,
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
      console.log("Successfully packaged all solutions");
    })
    .catch((error) => {
      console.error("Failed to package solutions", error);
      process.exit(1);
    });
}
