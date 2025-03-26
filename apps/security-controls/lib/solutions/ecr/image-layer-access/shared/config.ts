export type Config = {
  /**
   * List of allowed role patterns
   */
  allowedRolePatterns: string[];

  /**
   * List of allowed networks
   */
  allowedNetworks: string[];
};

/**
 * Default configuration for ECR image layer access
 */
export const DEFAULT_CONFIG: Config = {
  allowedRolePatterns: ["Admin", "Deployment", "ECRAccess"],
  allowedNetworks: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"],
};
