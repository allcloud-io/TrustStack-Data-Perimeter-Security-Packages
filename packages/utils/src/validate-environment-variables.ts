/**
 * Validates and returns required environment variables.
 * Throws an error if any of the specified environment variables are missing.
 *
 * @param envVarNames - Array of environment variable names to validate
 * @returns Object with environment variables as key-value pairs
 */
export function validateEnvironmentVariables<T extends string>(
  envVarNames: readonly T[],
): { [K in T]: string } {
  const result = {} as { [K in T]: string };

  const missingVars: string[] = [];

  for (const varName of envVarNames) {
    const value = process.env[varName];

    if (value === undefined || value === "") {
      missingVars.push(varName);
    } else {
      result[varName] = value;
    }
  }

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`,
    );
  }

  return result;
}
