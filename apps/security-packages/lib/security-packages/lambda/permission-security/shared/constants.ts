import type { SecurityPackageSlug } from "@trust-stack/schema";

/**
 * Security package slug for use in configuration
 */
export const SECURITY_PACKAGE_SLUG =
  "lambda-permission-security" satisfies SecurityPackageSlug;

/**
 * Security package name for use in AWS resource naming
 */
export const SECURITY_PACKAGE_NAME = "LambdaPermissionSecurity";
