/**
 * TypeScript definitions for AWS::Bedrock::GuardrailVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::GuardrailVersion Resource Type
 */
export namespace AWS_Bedrock_GuardrailVersion {
  /**
   * Definition of AWS::Bedrock::GuardrailVersion Resource Type
   */
  export type GuardrailVersionResourceType = {
    /**
     * Description of the Guardrail version
     * Create-only property
     */
    Description?: string;

    /**
     * Arn representation for the guardrail
     * Read-only property
     */
    GuardrailArn?: string;

    /**
     * Unique id for the guardrail
     * Read-only property
     */
    GuardrailId?: string;

    /**
     * Identifier (GuardrailId or GuardrailArn) for the guardrail
     * Create-only property
     */
    GuardrailIdentifier: string;

    /**
     * Guardrail version
     * Read-only property
     */
    Version?: string;
  };
}
