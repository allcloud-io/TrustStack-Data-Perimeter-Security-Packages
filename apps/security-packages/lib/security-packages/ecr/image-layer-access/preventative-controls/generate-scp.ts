import type { ECRImageLayerAccessPackageConfig } from "@trust-stack/schema";
import type {
  SCPStatement,
  ServiceControlPolicy,
} from "../../../../../../../types/service-control-policy";

/**
 * Generates a Service Control Policy (SCP) for the ECR image layer access package
 *
 * @param config - The configuration for the ECR image layer access package
 * @returns The generated SCP
 */
export function generateSCP(
  config: ECRImageLayerAccessPackageConfig,
): ServiceControlPolicy {
  const allowedPrincipalsPolicyStatement: SCPStatement = {
    Sid: "DenyGetDownloadUrlForLayerExceptAllowedPrincipals",
    Effect: "Deny",
    Action: ["ecr:GetDownloadUrlForLayer"],
    Resource: "*",
  };

  if (config.allowedRoleNames && config.allowedRoleNames.length > 0) {
    allowedPrincipalsPolicyStatement.Condition ??= {};
    allowedPrincipalsPolicyStatement.Condition.StringNotLike ??= {};
    allowedPrincipalsPolicyStatement.Condition.StringNotLike[
      "aws:PrincipalARN"
    ] = config.allowedRoleNames.map(
      (roleName) => `arn:aws:iam::*:role/${roleName}`,
    );
  }

  const allowedNetworksPolicyStatement: SCPStatement = {
    Sid: "DenyGetDownloadUrlForLayerExceptAllowedNetworks",
    Effect: "Deny",
    Action: ["ecr:GetDownloadUrlForLayer"],
    Resource: "*",
  };

  if (config.allowedNetworks && config.allowedNetworks.length > 0) {
    allowedNetworksPolicyStatement.Condition ??= {};
    allowedNetworksPolicyStatement.Condition.NotIpAddress ??= {};
    allowedNetworksPolicyStatement.Condition.NotIpAddress["aws:SourceIp"] =
      config.allowedNetworks;
  }

  if (config.allowedVPCEndpoints && config.allowedVPCEndpoints.length > 0) {
    allowedNetworksPolicyStatement.Condition ??= {};
    allowedNetworksPolicyStatement.Condition.StringNotLike ??= {};
    allowedNetworksPolicyStatement.Condition.StringNotLike["aws:SourceVpce"] =
      config.allowedVPCEndpoints;
  }

  return {
    Version: "2012-10-17",
    Statement: [
      allowedPrincipalsPolicyStatement,
      allowedNetworksPolicyStatement,
    ],
  };
}
