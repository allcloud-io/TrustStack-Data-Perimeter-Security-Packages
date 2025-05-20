import { describe, expect, it } from "@jest/globals";
import type {
  SNSSubscriptionSecurityPackageConfig,
  SNSSupportedProtocols,
} from "@trust-stack/schema";
import { validateSnsSubscriptionEndpoint } from "./validate-sns-subscription-endpoint";
import { produce } from "immer";

describe("validateSnsSubscriptionEndpoint", () => {
  // Base configuration for tests
  const baseConfig: SNSSubscriptionSecurityPackageConfig = {
    trustedProtocols: [
      "email",
      "email-json",
      "http",
      "https",
      "lambda",
      "sqs",
      "application",
      "firehose",
      "sms",
    ],
    trustedEmailDomains: ["example.com", "trusted.org"],
    trustedHTTPDomains: ["api.example.com", "webhook.trusted.org"],
  };

  describe("Protocol validation", () => {
    it("should reject when protocol is not defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        undefined as unknown as SNSSupportedProtocols,
        "test@example.com",
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("does not have Protocol defined");
      }
    });

    it("should reject unsupported protocols", () => {
      const result = validateSnsSubscriptionEndpoint(
        "unsupported-protocol" as unknown as SNSSupportedProtocols,
        "some-endpoint",
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("unsupported Protocol");
      }
    });

    it("should accept protocols that don't require endpoint validation", () => {
      const protocols: SNSSupportedProtocols[] = [
        "lambda",
        "sqs",
        "application",
      ];

      for (const protocol of protocols) {
        const result = validateSnsSubscriptionEndpoint(
          protocol,
          "arn:aws:service:region:account:resource",
          baseConfig,
        );

        expect(result.isValid).toBe(true);
      }
    });
  });

  describe("Email protocol validation", () => {
    it("should accept valid email addresses with trusted domains", () => {
      const validEmails = [
        "user@example.com",
        "other.user@trusted.org",
        "someone@subdomain.example.com",
      ];

      for (const email of validEmails) {
        const result = validateSnsSubscriptionEndpoint(
          "email",
          email,
          baseConfig,
        );
        expect(result.isValid).toBe(true);
      }
    });

    it("should reject email addresses with untrusted domains", () => {
      const result = validateSnsSubscriptionEndpoint(
        "email",
        "user@untrusted.com",
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("untrusted email domain");
        expect(result.reason).toContain("untrusted.com");
      }
    });

    it("should reject malformed email addresses", () => {
      const noAtSignResult = validateSnsSubscriptionEndpoint(
        "email",
        "no-at-sign.com",
        baseConfig,
      );
      expect(noAtSignResult.isValid).toBe(false);
      if (!noAtSignResult.isValid) {
        expect(noAtSignResult.reason).toContain("invalid email format");
        expect(noAtSignResult.reason).toContain("no-at-sign.com");
      }

      const missingUsernameResult = validateSnsSubscriptionEndpoint(
        "email",
        "@trusted.org",
        baseConfig,
      );
      expect(missingUsernameResult.isValid).toBe(false);
      if (!missingUsernameResult.isValid) {
        expect(missingUsernameResult.reason).toContain("invalid email format");
        expect(missingUsernameResult.reason).toContain("@trusted.org");
      }
    });

    it("should reject when email endpoint is not defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        "email",
        undefined,
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("does not have Endpoint defined");
      }
    });

    it('should apply the same validation for the "email-json" protocol', () => {
      const validResult = validateSnsSubscriptionEndpoint(
        "email-json",
        "user@example.com",
        baseConfig,
      );
      expect(validResult.isValid).toBe(true);

      const invalidResult = validateSnsSubscriptionEndpoint(
        "email-json",
        "user@untrusted.com",
        baseConfig,
      );
      expect(invalidResult.isValid).toBe(false);
      if (!invalidResult.isValid) {
        expect(invalidResult.reason).toContain("untrusted email domain");
      }
    });
  });

  describe("HTTP/HTTPS protocol validation", () => {
    it("should accept valid URLs with trusted domains", () => {
      const validUrls = [
        "https://api.example.com/webhook",
        "http://webhook.trusted.org/sns",
        "https://subdomain.api.example.com/path",
      ];

      for (const url of validUrls) {
        const result = validateSnsSubscriptionEndpoint(
          "https",
          url,
          baseConfig,
        );
        expect(result.isValid).toBe(true);
      }
    });

    it("should reject URLs with untrusted domains", () => {
      const result = validateSnsSubscriptionEndpoint(
        "https",
        "https://untrusted.com/webhook",
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("untrusted HTTP domain");
        expect(result.reason).toContain("untrusted.com");
      }
    });

    it("should reject malformed URLs", () => {
      const result = validateSnsSubscriptionEndpoint(
        "https",
        "not-a-url",
        baseConfig,
      );
      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("invalid URL format");
        expect(result.reason).toContain("not-a-url");
      }

      const urls = ["http:/missing-slash", "https://"];

      // Test URLs that may or may not be valid URL format.
      //
      // We use new URL(url) to check if the URL is valid (i.e., Node.js is able to resolve the
      // protocol, hostname, and path) before passing it to validateSnsSubscriptionEndpoint.
      //
      // This helps us predict whether the validation will fail due to format or domain issues
      for (const url of urls) {
        try {
          new URL(url);
          const result = validateSnsSubscriptionEndpoint(
            "https",
            url,
            baseConfig,
          );
          expect(result.isValid).toBe(false);
          if (!result.isValid) {
            expect(result.reason).toContain("untrusted HTTP domain");
          }
        } catch {
          const result = validateSnsSubscriptionEndpoint(
            "https",
            url,
            baseConfig,
          );
          expect(result.isValid).toBe(false);
          if (!result.isValid) {
            expect(result.reason).toContain("invalid URL format");
          }
        }
      }
    });

    it("should reject when HTTP/HTTPS endpoint is not defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        "https",
        undefined,
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("does not have Endpoint defined");
      }
    });

    it("should apply the same validation for http protocol", () => {
      const validResult = validateSnsSubscriptionEndpoint(
        "http",
        "http://api.example.com/webhook",
        baseConfig,
      );
      expect(validResult.isValid).toBe(true);

      const invalidResult = validateSnsSubscriptionEndpoint(
        "http",
        "http://untrusted.com/webhook",
        baseConfig,
      );
      expect(invalidResult.isValid).toBe(false);
      if (!invalidResult.isValid) {
        expect(invalidResult.reason).toContain("untrusted HTTP domain");
      }
    });
  });

  describe("Firehose protocol validation", () => {
    it("should accept when firehose protocol has an endpoint defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        "firehose",
        "arn:aws:firehose:region:account:deliverystream/name",
        baseConfig,
      );

      expect(result.isValid).toBe(true);
    });

    it("should reject firehose when has no endpoint defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        "firehose",
        undefined,
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("does not have Endpoint defined");
      }
    });
  });

  describe("SMS protocol validation", () => {
    it("should accept when SMS protocol has an endpoint defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        "sms",
        "sms:1234567890",
        baseConfig,
      );

      expect(result.isValid).toBe(true);
    });

    it("should reject when SMS protocol has no endpoint defined", () => {
      const result = validateSnsSubscriptionEndpoint(
        "sms",
        undefined,
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("does not have Endpoint defined");
      }
    });
  });

  describe("Edge cases and configuration", () => {
    it("should handle case sensitivity for protocols", () => {
      const result = validateSnsSubscriptionEndpoint(
        "EMAIL" as unknown as SNSSupportedProtocols,
        "user@example.com",
        baseConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("unsupported Protocol");
      }
    });

    it("should reject when protocol is valid but not in trusted list", () => {
      const restrictedConfig: SNSSubscriptionSecurityPackageConfig = {
        ...baseConfig,
        trustedProtocols: ["sqs", "lambda"],
      };

      const result = validateSnsSubscriptionEndpoint(
        "email",
        "user@example.com",
        restrictedConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("unsupported Protocol");
      }
    });

    it("should reject when protocol is not in the list of supported protocols", () => {
      // Add an additional "unsupported-protocol" to the config to avoid
      // failing the test due to the protocol not being in the config.
      const testConfig = produce(baseConfig, (draft) => {
        draft.trustedProtocols.push(
          "unsupported-protocol" as SNSSupportedProtocols,
        );
      });

      const result = validateSnsSubscriptionEndpoint(
        "unsupported-protocol" as unknown as SNSSupportedProtocols,
        "user@example.com",
        testConfig,
      );

      expect(result.isValid).toBe(false);
      if (!result.isValid) {
        expect(result.reason).toContain("unsupported Protocol");
      }
    });
  });
});
