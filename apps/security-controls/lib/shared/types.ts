export type LambdaHookTypeConfiguration = {
  CloudFormationConfiguration: {
    HookConfiguration: {
      HookInvocationStatus: "ENABLED";
      TargetOperations: HookTargetOperation[];
      FailureMode: HookFailureMode;
      Properties: Record<string, unknown>;
    };
  };
};

export const ALL_HOOK_TARGET_OPERATIONS = [
  "STACK",
  "RESOURCE",
  "CHANGE_SET",
  "CLOUD_CONTROL",
] as const;

export type HookTargetOperation = (typeof ALL_HOOK_TARGET_OPERATIONS)[number];

export const ALL_HOOK_FAILURE_MODES = ["FAIL", "WARN"] as const;

export type HookFailureMode = (typeof ALL_HOOK_FAILURE_MODES)[number];

export type LambdaHookSchema = {
  typeName: string;
  description: string;
  sourceUrl?: string;
  documentationUrl: string;
  definitions?: Record<string, unknown>;
  typeConfiguration: {
    properties: Record<
      string,
      {
        description: string;
        type: "string";
        default?: string;
      }
    >;
    required?: string[];
    additionalProperties: false;
  };
  handlers: {
    preCreate?: {
      targetNames: string[];
      permissions: string[];
    };
    preUpdate?: {
      targetNames: string[];
      permissions: string[];
    };
    preDelete?: {
      targetNames: string[];
      permissions: string[];
    };
  };
  additionalProperties: false;
};
