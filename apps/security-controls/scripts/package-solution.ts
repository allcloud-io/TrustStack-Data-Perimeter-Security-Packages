import {
  ConfigurationSchema,
  parseManifestFile,
  SecuritySolutionSlug,
} from "@trust-stack/schema";
import * as childProcess from "child_process";
import * as esbuild from "esbuild";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { generateSCP as generateSNSSubscriptionSecuritySCP } from "../lib/solutions/sns/validate-subscription/scp-policy/generate-scp";

const manifestFilePath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "trust-stack.yml",
);

const projectDirectory = path.join(__dirname, "..");

const solutionsDirectoryPath = path.join(projectDirectory, "lib", "solutions");

const distDirectory = path.join(projectDirectory, "dist");

const solutionSlugToDirMapping = {
  ["ecr-image-layer-access" satisfies SecuritySolutionSlug]: path.join(
    solutionsDirectoryPath,
    "ecr",
    "image-layer-access",
  ),
  ["sns-subscription-security" satisfies SecuritySolutionSlug]: path.join(
    solutionsDirectoryPath,
    "sns",
    "validate-subscription",
  ),
} satisfies Record<SecuritySolutionSlug, string>;

async function packageSolution({
  solution,
}: {
  solution: SecuritySolutionSlug;
}): Promise<string[]> {
  const solutionDir = solutionSlugToDirMapping[solution];

  console.log(`Packaging solution: ${solution} from directory: ${solutionDir}`);

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

  await findLambdaHandlerFiles(solutionDir);

  if (lambdaHandlerFiles.length === 0) {
    console.log(`No lambda handler files found in ${solutionDir}`);
    return [];
  }

  console.log("Found lambda handler files:");
  lambdaHandlerFiles.forEach((file) =>
    console.log(`- ${path.relative(solutionDir, file)}`),
  );

  // Create dist directory if it doesn't exist
  const solutionDistDir = path.join(distDirectory, solution);
  await fs.mkdir(solutionDistDir, { recursive: true });

  console.log(`Building Lambda handlers to ${solutionDistDir}`);

  const generatedFilePaths: string[] = [];

  // Build each handler file
  for (const handlerFile of lambdaHandlerFiles) {
    const relativePath = path.relative(solutionDir, handlerFile);

    const relativeJSPath = relativePath.replace(/\.ts$/, ".js");
    const relativeMapPath = relativePath.replace(/\.ts$/, ".js.map");

    const outputDir = path.join(solutionDistDir, path.dirname(relativeJSPath));

    // Create the directory structure for the output file
    await fs.mkdir(outputDir, { recursive: true });

    console.log(
      `Building ${relativePath} to ${path.relative(process.cwd(), outputDir)}`,
    );

    const { code: sourceCode, map: sourceMap } = await esbuild.transform(
      await fs.readFile(handlerFile, "utf-8"),
      {
        loader: "ts",
        platform: "node",
        target: "node22",
        minify: true,
        sourcemap: true,
      },
    );

    // Create a zip file containing the source code and source map

    // Write the JS and source map files to disk first
    const jsFilePath = path.join(outputDir, path.basename(relativeJSPath));
    const mapFilePath = path.join(outputDir, path.basename(relativeMapPath));

    await fs.writeFile(jsFilePath, sourceCode);
    await fs.writeFile(mapFilePath, JSON.stringify(sourceMap));

    generatedFilePaths.push(jsFilePath, mapFilePath);
  }

  console.log(
    `Successfully built ${lambdaHandlerFiles.length} Lambda handlers to ${solutionDistDir}`,
  );

  return generatedFilePaths;
}

async function main() {
  const config = parseManifestFile(ConfigurationSchema, manifestFilePath);
  const {
    spec: { solutions },
  } = config;

  const generatedFilePaths: string[] = [];

  if (solutions.snsSubscriptionSecurity.enabled) {
    console.log("SNS Subscription Security is enabled");

    const config = solutions.snsSubscriptionSecurity.configuration;
    const scp = generateSNSSubscriptionSecuritySCP(config);

    const scpFilePath = path.join(
      distDirectory,
      "sns-subscription-security",
      "service-control-policy.json",
    );

    await fs.mkdir(path.dirname(scpFilePath), { recursive: true });
    await fs.writeFile(scpFilePath, JSON.stringify(scp, null, 2));

    const lambdaHandlerFiles = await packageSolution({
      solution: "sns-subscription-security",
    });

    const relativeFilePaths = [scpFilePath, ...lambdaHandlerFiles].map(
      (filePath) => path.relative(projectDirectory, filePath),
    );

    generatedFilePaths.push(...relativeFilePaths);
  } else {
    console.log("SNS Subscription Security is disabled.");
  }

  // Create a zip archive and compress it
  const zipFilePath = "security-controls.zip";

  // Change to the project directory before running zip to maintain relative paths
  const zipCommand = `cd "${projectDirectory}" && zip -r "${zipFilePath}" ${generatedFilePaths.join(" ")}`;

  console.log(`Running zip command: ${zipCommand}`);

  // Use the zip command which is available on most systems
  childProcess.execSync(zipCommand, {
    stdio: "inherit",
  });
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
