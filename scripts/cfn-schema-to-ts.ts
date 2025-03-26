/**
 * CloudFormation Schema to TypeScript Types Converter
 *
 * This script converts CloudFormation resource schema files to TypeScript type definitions.
 * It follows the rules defined in the cloudformation-resources-typescript-types.mdc Cursor rule.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as prettier from "prettier";

type SchemaProperty = {
  description?: string;
  type?: string | string[];
  items?: {
    type?: string;
    $ref?: string;
  };
  $ref?: string;
  default?: unknown;
};

type SchemaDefinition = {
  description?: string;
  type?: string;
  properties?: Record<string, SchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
};

type CloudFormationSchema = {
  typeName: string;
  description?: string;
  definitions?: Record<string, SchemaDefinition>;
  properties: Record<string, SchemaProperty>;
  required?: string[];
  readOnlyProperties?: string[];
  createOnlyProperties?: string[];
};

/**
 * Converts a CloudFormation resource type name to a TypeScript namespace name
 */
function getNamespace(typeName: string): string {
  return typeName.replace(/::/g, "_");
}

/**
 * Converts a CloudFormation resource type name to a TypeScript type name
 */
function getResourceTypeName(typeName: string): string {
  const parts = typeName.split("::");
  return parts[parts.length - 1] + "ResourceType";
}

/**
 * Converts a JSON Schema type to a TypeScript type
 */
function convertType(
  property: SchemaProperty,
  definitions: Record<string, SchemaDefinition> = {},
): string {
  if (property.$ref) {
    // Handle references to definitions
    const refName = property.$ref.split("/").pop();
    if (refName && definitions[refName]) {
      return `${refName}Type`;
    }
    return "any";
  }

  if (!property.type) {
    return "any";
  }

  if (Array.isArray(property.type)) {
    // Handle union types
    const types = property.type.map((t) => {
      if (t === "string") return "string";
      if (t === "integer" || t === "number") return "number";
      if (t === "boolean") return "boolean";
      if (t === "object") return "Record<string, any>";
      if (t === "array") {
        if (property.items?.$ref) {
          const refName = property.items.$ref.split("/").pop();
          return refName ? `${refName}Type[]` : "any[]";
        }
        return "any[]";
      }
      return "any";
    });
    return types.join(" | ");
  }

  // Handle single types
  if (property.type === "string") return "string";
  if (property.type === "integer" || property.type === "number")
    return "number";
  if (property.type === "boolean") return "boolean";
  if (property.type === "object") return "Record<string, any>";

  if (property.type === "array") {
    if (property.items) {
      if (property.items.type) {
        if (property.items.type === "string") return "string[]";
        if (
          property.items.type === "integer" ||
          property.items.type === "number"
        )
          return "number[]";
        if (property.items.type === "boolean") return "boolean[]";
        if (property.items.type === "object") return "Record<string, any>[]";
      }

      if (property.items.$ref) {
        const refName = property.items.$ref.split("/").pop();
        return refName ? `${refName}Type[]` : "any[]";
      }
    }
    return "any[]";
  }

  return "any";
}

/**
 * Formats a description for JSDoc
 */
function formatDescription(description?: string): string {
  if (!description) return "";

  return description
    .replace(/\n\s*/g, "\n * ")
    .replace(/``([^`]+)``/g, "`$1`")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

/**
 * Generates TypeScript type definitions for a CloudFormation schema
 */
function generateTypeDefinitions(schema: CloudFormationSchema): string {
  const namespace = getNamespace(schema.typeName);
  const resourceTypeName = getResourceTypeName(schema.typeName);
  const definitions = schema.definitions || {};
  const required = schema.required || [];
  const readOnlyProps =
    schema.readOnlyProperties?.map((p) => p.replace("/properties/", "")) || [];
  const createOnlyProps =
    schema.createOnlyProperties?.map((p) => p.replace("/properties/", "")) ||
    [];

  let output = `/**
 * TypeScript definitions for ${schema.typeName}
 * Generated from CloudFormation Resource Schema
 */

`;

  if (schema.description) {
    output += `/**
 * ${formatDescription(schema.description)}
 */
`;
  }

  // Declare the namespace
  output += `export namespace ${namespace} {\n`;

  // Generate types for definitions
  for (const [defName, definition] of Object.entries(definitions)) {
    if (definition.description) {
      output += `  /**
   * ${formatDescription(definition.description)}
   */\n`;
    }

    output += `  export type ${defName}Type = {\n`;

    const defRequired = definition.required || [];

    // Generate properties for the definition
    for (const [propName, property] of Object.entries(
      definition.properties || {},
    )) {
      if (property.description) {
        output += `    /**
     * ${formatDescription(property.description)}
     */\n`;
      }

      const isRequired = defRequired.includes(propName);
      const tsType = convertType(property, definitions);
      output += `    ${propName}${isRequired ? "" : "?"}: ${tsType};\n\n`;
    }

    output += `  };\n\n`;
  }

  // Generate the main resource type
  if (schema.description) {
    output += `  /**
   * ${formatDescription(schema.description)}
   */\n`;
  }

  output += `  export type ${resourceTypeName} = {\n`;

  // Generate properties for the resource
  for (const [propName, property] of Object.entries(schema.properties)) {
    const comments: string[] = [];

    if (property.description) {
      comments.push(formatDescription(property.description));
    }

    if (property.default !== undefined) {
      comments.push(`Default: ${JSON.stringify(property.default)}`);
    }

    if (readOnlyProps.includes(propName)) {
      comments.push("Read-only property");
    }

    if (createOnlyProps.includes(propName)) {
      comments.push("Create-only property");
    }

    if (comments.length > 0) {
      output += `    /**
     * ${comments.join("\n     * ")}
     */\n`;
    }

    const isRequired = required.includes(propName);
    const tsType = convertType(property, definitions);
    output += `    ${propName}${isRequired ? "" : "?"}: ${tsType};\n\n`;
  }

  output += `  };\n`;
  output += `}\n`;

  return output;
}

/**
 * Format typescript code using prettier
 */
async function formatTypeScript(code: string): Promise<string> {
  try {
    // Load prettier configuration
    const prettierConfig = await prettier.resolveConfig(process.cwd());

    // Format the code
    return prettier.format(code, {
      ...prettierConfig,
      parser: "typescript",
    });
  } catch (error) {
    console.error("Error formatting code with prettier");
    throw error;
  }
}

/**
 * Main function to process a schema file
 */
export async function processSchemaFile(
  schemaFilePath: string,
): Promise<string> {
  try {
    // Read and parse the schema file
    const schemaContent = fs.readFileSync(schemaFilePath, "utf-8");
    const schema: CloudFormationSchema = JSON.parse(schemaContent);

    // Generate TypeScript definitions
    const typeDefinitions = generateTypeDefinitions(schema);

    // Format the type definitions with prettier
    return await formatTypeScript(typeDefinitions);
  } catch (error) {
    console.error("Error processing schema file:", error);
    process.exit(1);
  }
}

function resolveOutputFilePath(outputDir: string, file: string): string {
  const filePath = file.slice(0, -5);
  return path.join(outputDir, `${filePath}.d.ts`);
}

async function processAllSchemaFiles(): Promise<void> {
  const cfnSchemasDir = path.join(__dirname, "..", "CloudformationSchema");
  const typesDir = path.join(__dirname, "..", "types", "cfn-resources");

  const schemaFiles = fs.readdirSync(cfnSchemasDir);

  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir, { recursive: true });
  }

  for (const file of schemaFiles) {
    const typeDefinitions = await processSchemaFile(
      path.join(cfnSchemasDir, file),
    );

    const outputFilePath = resolveOutputFilePath(typesDir, file);

    fs.writeFileSync(outputFilePath, typeDefinitions);
  }
}

async function main(): Promise<void> {
  await processAllSchemaFiles();
}

if (require.main === module) {
  main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
}
