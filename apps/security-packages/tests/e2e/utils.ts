import { SSM } from "@aws-sdk/client-ssm";

/**
 * Helper function to sleep for a given number of milliseconds
 * @param ms - The number of milliseconds to sleep
 * @returns A promise that resolves after the given number of milliseconds
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Helper function to wait for a condition
 */
export async function waitFor<T>({
  condition,
  timeout,
  interval,
}: {
  condition: () => Promise<T>;
  timeout: number;
  interval: number;
}): Promise<T | undefined> {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    try {
      const result = await condition();
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (result) {
        return result;
      }
    } catch {
      // Continue waiting
    }
    await sleep(interval);
  }

  return undefined;
}

export async function getSSMParameterValue(name: string): Promise<string> {
  const ssm = new SSM({});

  const response = await ssm.getParameter({
    Name: name,
  });

  if (!response.Parameter?.Value) {
    throw new Error(`Parameter ${name} not found`);
  }

  return response.Parameter.Value;
}
