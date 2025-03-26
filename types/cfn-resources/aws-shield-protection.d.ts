/**
 * TypeScript definitions for AWS::Shield::Protection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, AWS Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.
 */
export namespace AWS_Shield_Protection {
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
   * The automatic application layer DDoS mitigation settings for a Protection. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.
   */
  export type ApplicationLayerAutomaticResponseConfigurationType = {
    /**
     * Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
     */
    Action: Record<string, any>;

    /**
     * Indicates whether automatic application layer DDoS mitigation is enabled for the protection.
     */
    Status: string;
  };

  /**
   * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, AWS Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.
   */
  export type ProtectionResourceType = {
    /**
     * The unique identifier (ID) of the protection.
     * Read-only property
     */
    ProtectionId?: string;

    /**
     * The ARN (Amazon Resource Name) of the protection.
     * Read-only property
     */
    ProtectionArn?: string;

    /**
     * Friendly name for the Protection.
     * Create-only property
     */
    Name: string;

    /**
     * The ARN (Amazon Resource Name) of the resource to be protected.
     * Create-only property
     */
    ResourceArn: string;

    /**
     * The Amazon Resource Names (ARNs) of the health check to associate with the protection.
     */
    HealthCheckArns?: string[];

    ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfigurationType;

    /**
     * One or more tag key-value pairs for the Protection object.
     */
    Tags?: TagType[];
  };
}
