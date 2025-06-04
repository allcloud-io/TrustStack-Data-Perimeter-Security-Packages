import { z } from "zod";

export const E2ETestsOptions = z.object({
  untrustedAccountID: z.string().optional(),
  untrustedOrgID: z.string().optional(),
  trustedAccountID: z.string().optional(),
  trustedOrgID: z.string().optional(),
});

export type E2ETestsOptions = z.infer<typeof E2ETestsOptions>;
