import type {
  SNSSubscriptionSecuritySolutionConfig,
  SupportedProtocols,
} from "@trust-stack/schema";

/**
 * Validates that an SNS subscription endpoint is trusted
 *
 * @param protocol - The protocol of the SNS subscription
 * @param endpoint - The endpoint of the SNS subscription
 * @param config - Configuration for trusted endpoints
 * @returns An object with validation result and failure reason if applicable
 */
export function validateSnsSubscriptionEndpoint(
  protocol: SupportedProtocols,
  endpoint: string | undefined,
  config: SNSSubscriptionSecuritySolutionConfig,
): { isValid: boolean; reason?: string } {
  // If Protocol is not defined, we can't validate
  if (!protocol) {
    return {
      isValid: false,
      reason: `SNS subscription does not have Protocol defined.`,
    };
  }

  // For some protocols, we don't need to validate the endpoint
  // For example, the 'application' protocol uses ARNs that are validated by AWS
  if (config.trustedProtocols.includes(protocol)) {
    return { isValid: true };
  }

  // For email and email-json protocols, validate the email domain
  if (
    protocol.toLowerCase() === "email" ||
    protocol.toLowerCase() === "email-json"
  ) {
    if (!endpoint) {
      return {
        isValid: false,
        reason:
          `SNS subscription with Protocol '${protocol}' ` +
          "does not have Endpoint defined.",
      };
    }

    // Extract the domain from the email address
    const emailParts = endpoint.split("@");
    if (emailParts.length !== 2) {
      return {
        isValid: false,
        reason:
          `SNS subscription has an invalid email format ` +
          `for Endpoint: '${endpoint}'.`,
      };
    }

    const emailDomain = emailParts[1].toLowerCase();
    if (
      !config.trustedEmailDomains.some(
        (domain) =>
          emailDomain === domain || emailDomain.endsWith(`.${domain}`),
      )
    ) {
      return {
        isValid: false,
        reason:
          `SNS subscription has an untrusted email domain: '${emailDomain}'. ` +
          `Trusted domains are: ${config.trustedEmailDomains.join(", ")}.`,
      };
    }

    return { isValid: true };
  }

  // For http and https protocols, validate the domain
  if (protocol.toLowerCase() === "http" || protocol.toLowerCase() === "https") {
    if (!endpoint) {
      return {
        isValid: false,
        reason:
          `SNS subscription with Protocol '${protocol}' ` +
          "does not have Endpoint defined.",
      };
    }

    try {
      // Extract the domain from the URL
      const url = new URL(endpoint);
      const hostname = url.hostname.toLowerCase();

      if (
        !config.trustedHttpDomains.some(
          (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
        )
      ) {
        return {
          isValid: false,
          reason:
            `SNS subscription has an untrusted HTTP domain: '${hostname}'. ` +
            `Trusted domains are: ${config.trustedHttpDomains.join(", ")}.`,
        };
      }

      return { isValid: true };
    } catch (_error) {
      return {
        isValid: false,
        reason:
          `SNS subscription has an invalid URL format ` +
          `for Endpoint: '${endpoint}'.`,
      };
    }
  }

  // For SMS protocol, we might want to validate phone numbers
  // This is a simplified example - in a real implementation, you might want to validate
  // phone numbers against a list of trusted country codes or patterns
  if (protocol.toLowerCase() === "sms") {
    // For this example, we'll just check that the endpoint is defined
    if (!endpoint) {
      return {
        isValid: false,
        reason: `SNS subscription with Protocol 'sms' does not have Endpoint defined.`,
      };
    }

    // In a real implementation, you might want to add more validation here
    return { isValid: true };
  }

  // If we reach here, it means the protocol is not recognized or not supported
  return {
    isValid: false,
    reason: `SNS subscription has an unsupported Protocol: '${protocol}'.`,
  };
}
