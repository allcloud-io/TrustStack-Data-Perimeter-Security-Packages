/**
 * TypeScript definitions for AWS::SQS::Queue
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SQS::Queue` resource creates an SQS standard or FIFO queue.
 * Keep the following caveats in mind:
 * +  If you don't specify the `FifoQueue` property, SQS creates a standard queue.
 * You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving from a standard queue to a FIFO queue in the *Developer Guide*.
 * +  If you don't provide a value for a property, the queue is created with the default value for the property.
 * +  If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.
 * +  To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues.
 * For more information about creating FIFO (first-in-first-out) queues, see Creating an queue () in the *Developer Guide*.
 */
export namespace AWS_SQS_Queue {
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * The `AWS::SQS::Queue` resource creates an SQS standard or FIFO queue.
   * Keep the following caveats in mind:
   * +  If you don't specify the `FifoQueue` property, SQS creates a standard queue.
   * You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see Moving from a standard queue to a FIFO queue in the *Developer Guide*.
   * +  If you don't provide a value for a property, the queue is created with the default value for the property.
   * +  If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.
   * +  To successfully create a new queue, you must provide a queue name that adheres to the limits related to queues and is unique within the scope of your queues.
   * For more information about creating FIFO (first-in-first-out) queues, see Creating an queue () in the *Developer Guide*.
   */
  export type QueueResourceType = {
    /**
     * Read-only property
     */
    QueueUrl?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message. For more information, see the `ContentBasedDeduplication` attribute for the `CreateQueue` action in the *API Reference*.
     */
    ContentBasedDeduplication?: boolean;

    /**
     * For high throughput for FIFO queues, specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue`.
     * To enable high throughput for a FIFO queue, set this attribute to `messageGroup` *and* set the `FifoThroughputLimit` attribute to `perMessageGroupId`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see High throughput for FIFO queues and Quotas related to messages in the *Developer Guide*.
     */
    DeduplicationScope?: string;

    /**
     * The time in seconds for which the delivery of all messages in the queue is delayed. You can specify an integer value of `0` to `900` (15 minutes). The default value is `0`.
     */
    DelaySeconds?: number;

    /**
     * If set to true, creates a FIFO queue. If you don't specify this property, SQS creates a standard queue. For more information, see Amazon SQS FIFO queues in the *Developer Guide*.
     * Create-only property
     */
    FifoQueue?: boolean;

    /**
     * For high throughput for FIFO queues, specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` and `perMessageGroupId`.
     * To enable high throughput for a FIFO queue, set this attribute to `perMessageGroupId` *and* set the `DeduplicationScope` attribute to `messageGroup`. If you set these attributes to anything other than these values, normal throughput is in effect and deduplication occurs as specified. For more information, see High throughput for FIFO queues and Quotas related to messages in the *Developer Guide*.
     */
    FifoThroughputLimit?: string;

    /**
     * The length of time in seconds for which SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
     * A shorter time period provides better security, but results in more calls to KMS, which might incur charges after Free Tier. For more information, see Encryption at rest in the *Developer Guide*.
     */
    KmsDataKeyReusePeriodSeconds?: number;

    /**
     * The ID of an AWS Key Management Service (KMS) for SQS, or a custom KMS. To use the AWS managed KMS for SQS, specify a (default) alias ARN, alias name (for example `alias/aws/sqs`), key ARN, or key ID. For more information, see the following:
     * +   Encryption at rest in the *Developer Guide*
     * +   CreateQueue in the *API Reference*
     * +   Request Parameters in the *Key Management Service API Reference*
     * +   The Key Management Service (KMS) section of the Security best practices for Key Management Service in the *Key Management Service Developer Guide*
     */
    KmsMasterKeyId?: string;

    /**
     * Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, SSE-KMS or SSE-SQS). When `SqsManagedSseEnabled` is not defined, `SSE-SQS` encryption is enabled by default.
     */
    SqsManagedSseEnabled?: boolean;

    /**
     * The limit of how many bytes that a message can contain before SQS rejects it. You can specify an integer value from `1,024` bytes (1 KiB) to `262,144` bytes (256 KiB). The default value is `262,144` (256 KiB).
     */
    MaximumMessageSize?: number;

    /**
     * The number of seconds that SQS retains a message. You can specify an integer value from `60` seconds (1 minute) to `1,209,600` seconds (14 days). The default value is `345,600` seconds (4 days).
     */
    MessageRetentionPeriod?: number;

    /**
     * A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the `.fifo` suffix. For more information, see Amazon SQS FIFO queues in the *Developer Guide*.
     * If you don't specify a name, CFN generates a unique physical ID and uses that ID for the queue name. For more information, see Name type in the *User Guide*.
     * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * Create-only property
     */
    QueueName?: string;

    /**
     * Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property. For more information, see Consuming messages using long polling in the *Developer Guide*.
     */
    ReceiveMessageWaitTimeSeconds?: number;

    /**
     * The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:
     * +   `redrivePermission`: The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:
     * +   `allowAll`: (Default) Any source queues in this AWS account in the same Region can specify this queue as the dead-letter queue.
     * +   `denyAll`: No source queues can specify this queue as the dead-letter queue.
     * +   `byQueue`: Only queues specified by the `sourceQueueArns` parameter can specify this queue as the dead-letter queue.
     * +   `sourceQueueArns`: The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the `redrivePermission` parameter is set to `byQueue`. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the `redrivePermission` parameter to `allowAll`.
     */
    RedriveAllowPolicy?: Record<string, any> | string;

    /**
     * The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:
     * +   `deadLetterTargetArn`: The Amazon Resource Name (ARN) of the dead-letter queue to which SQS moves messages after the value of `maxReceiveCount` is exceeded.
     * +   `maxReceiveCount`: The number of times a message is received by a consumer of the source queue before being moved to the dead-letter queue. When the `ReceiveCount` for a message exceeds the `maxReceiveCount` for a queue, SQS moves the message to the dead-letter-queue.
     * The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.
     * *JSON*
     * `{ "deadLetterTargetArn" : String, "maxReceiveCount" : Integer }`
     * *YAML*
     * `deadLetterTargetArn : String`
     * `maxReceiveCount : Integer`
     */
    RedrivePolicy?: Record<string, any> | string;

    /**
     * The tags that you attach to this queue. For more information, see Resource tag in the *User Guide*.
     */
    Tags?: TagType[];

    /**
     * The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue.
     * Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.
     * For more information about SQS queue visibility timeouts, see Visibility timeout in the *Developer Guide*.
     */
    VisibilityTimeout?: number;
  };
}
