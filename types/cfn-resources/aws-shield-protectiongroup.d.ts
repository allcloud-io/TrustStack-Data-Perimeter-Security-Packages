/**
 * TypeScript definitions for AWS::Shield::ProtectionGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * A grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
 */
export namespace AWS_Shield_ProtectionGroup {
  /**
   * A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.
   */
  export type TagType = {
    /**
     * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
     */
    Key: string;

    /**
     * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
     */
    Value: string;
  };

  /**
   * A grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
   */
  export type ProtectionGroupResourceType = {
    /**
     * The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
     * Create-only property
     */
    ProtectionGroupId: string;

    /**
     * The ARN (Amazon Resource Name) of the protection group.
     * Read-only property
     */
    ProtectionGroupArn?: string;

    /**
     * Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
     * * Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
     * * Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
     * * Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.
     */
    Aggregation: string;

    /**
     * The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.
     */
    Pattern: string;

    /**
     * The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
     */
    Members?: string[];

    /**
     * The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
     */
    ResourceType?: string;

    /**
     * One or more tag key-value pairs for the Protection object.
     */
    Tags?: TagType[];
  };
}
