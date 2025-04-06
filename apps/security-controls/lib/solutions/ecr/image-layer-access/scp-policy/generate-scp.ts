import type { ECRImageLayerAccessSolutionConfig } from "@trust-stack/schema";
import type {
  SCPStatement,
  ServiceControlPolicy,
} from "../../../../../../../types/service-control-policy";

/**
 * Generates a Service Control Policy (SCP) for the SNS subscription security solution
 *
 * @param config - The configuration for the SNS subscription security solution
 * @returns The generated SCP
 */
export function generateSCP(
  config: ECRImageLayerAccessSolutionConfig,
): ServiceControlPolicy {
  const policyStatement: SCPStatement = {
    Sid: "DenyGetDownloadUrlForLayerExceptAllowed",
    Effect: "Deny",
    Action: ["ecr:GetDownloadUrlForLayer"],
    Resource: "*",
  };

  if (config.allowedRolePatterns && config.allowedRolePatterns.length > 0) {
    policyStatement.Condition ??= {};
    policyStatement.Condition.StringNotLike ??= {};
    policyStatement.Condition.StringNotLike["aws:PrincipalARN"] =
      config.allowedRolePatterns;
  }

  if (config.allowedNetworks && config.allowedNetworks.length > 0) {
    policyStatement.Condition ??= {};
    policyStatement.Condition.NotIpAddress ??= {};
    policyStatement.Condition.NotIpAddress["aws:SourceIp"] =
      config.allowedNetworks;
  }

  if (config.allowedVPCEndpoints && config.allowedVPCEndpoints.length > 0) {
    policyStatement.Condition ??= {};
    policyStatement.Condition.StringNotLike ??= {};
    policyStatement.Condition.StringNotLike["aws:SourceVpce"] =
      config.allowedVPCEndpoints;
  }

  return {
    Version: "2012-10-17",
    Statement: [policyStatement],
  };
}
