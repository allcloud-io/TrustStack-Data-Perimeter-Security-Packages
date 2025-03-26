/**
 * TypeScript definitions for AWS::WAFv2::RegexPatternSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Contains a list of Regular expressions based on the provided inputs. RegexPatternSet can be used with other WAF entities with RegexPatternSetReferenceStatement to perform other actions .
 */
export namespace AWS_WAFv2_RegexPatternSet {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Contains a list of Regular expressions based on the provided inputs. RegexPatternSet can be used with other WAF entities with RegexPatternSetReferenceStatement to perform other actions .
   */
  export type RegexPatternSetResourceType = {
    /**
     * ARN of the WAF entity.
     * Read-only property
     */
    Arn?: string;

    /**
     * Description of the entity.
     */
    Description?: string;

    /**
     * Name of the RegexPatternSet.
     * Create-only property
     */
    Name?: string;

    /**
     * Id of the RegexPatternSet
     * Read-only property
     */
    Id?: string;

    RegularExpressionList: string[];

    /**
     * Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.
     * Create-only property
     */
    Scope: string;

    Tags?: TagType[];
  };
}
