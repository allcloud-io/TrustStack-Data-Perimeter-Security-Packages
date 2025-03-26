/**
 * TypeScript definitions for AWS::VpcLattice::Rule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions.
 */
export namespace AWS_VpcLattice_Rule {
  export type ForwardType = {
    TargetGroups: WeightedTargetGroupType[];
  };

  export type FixedResponseType = {
    StatusCode: number;
  };

  export type HeaderMatchType = {
    Name: string;

    Match: HeaderMatchTypeType;

    CaseSensitive?: boolean;
  };

  export type HeaderMatchTypeType = {
    Exact?: string;

    Prefix?: string;

    Contains?: string;
  };

  export type HttpMatchType = {
    Method?: string;

    PathMatch?: PathMatchType;

    HeaderMatches?: HeaderMatchType[];
  };

  export type PathMatchType = {
    Match: PathMatchTypeType;

    CaseSensitive?: boolean;
  };

  export type PathMatchTypeType = {
    Exact?: string;

    Prefix?: string;
  };

  export type ActionType = {
    Forward?: ForwardType;

    FixedResponse?: FixedResponseType;
  };

  export type MatchType = {
    HttpMatch: HttpMatchType;
  };

  export type WeightedTargetGroupType = {
    TargetGroupIdentifier: string;

    Weight?: number;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Creates a listener rule. Each listener has a default rule for checking connection requests, but you can define additional rules. Each rule consists of a priority, one or more actions, and one or more conditions.
   */
  export type RuleResourceType = {
    Action: ActionType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ListenerIdentifier?: string;

    Match: MatchType;

    /**
     * Create-only property
     */
    Name?: string;

    Priority: number;

    /**
     * Create-only property
     */
    ServiceIdentifier?: string;

    Tags?: TagType[];
  };
}
