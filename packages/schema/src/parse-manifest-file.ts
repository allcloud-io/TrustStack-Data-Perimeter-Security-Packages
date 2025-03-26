import * as fs from "node:fs";
import * as yaml from "js-yaml";
import prettyFormat from "pretty-format";
import type { z } from "zod";

export function parseManifestFile<S extends z.Schema>(
  schema: S,
  filePath: string,
): z.infer<S> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File "${filePath}" does not exists`);
  }

  const fileContents = fs.readFileSync(filePath, "utf-8") as string;

  let obj: z.infer<S>;

  try {
    obj = yaml.load(fileContents);
  } catch (_) {
    throw new Error(`File "${filePath}" is not a valid YAML file`);
  }

  const { success, data, error } = schema.safeParse(obj);

  if (success) {
    return data;
  }

  throw new Error(
    // biome-ignore lint/style/useTemplate: <explanation>
    `File "${filePath}" has failed validation. Issues found:\n` +
      prettyFormat(error.issues, { printBasicPrototype: false }),
  );
}
