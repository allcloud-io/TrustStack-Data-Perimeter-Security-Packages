/**
 * TypeScript definitions for AWS::Events::EventBus
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::Events::EventBus
 */
export namespace AWS_Events_EventBus {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource type definition for AWS::Events::EventBus
   */
  export type EventBusResourceType = {
    /**
     * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
     */
    EventSourceName?: string;

    /**
     * The name of the event bus.
     * Create-only property
     */
    Name: string;

    /**
     * Any tags assigned to the event bus.
     */
    Tags?: TagType[];

    /**
     * The description of the event bus.
     */
    Description?: string;

    /**
     * Kms Key Identifier used to encrypt events at rest in the event bus.
     */
    KmsKeyIdentifier?: string;

    /**
     * A JSON string that describes the permission policy statement for the event bus.
     */
    Policy?: Record<string, any> | string;

    /**
     * The Amazon Resource Name (ARN) for the event bus.
     * Read-only property
     */
    Arn?: string;

    /**
     * Dead Letter Queue for the event bus.
     */
    DeadLetterConfig?: Record<string, any>;
  };
}
