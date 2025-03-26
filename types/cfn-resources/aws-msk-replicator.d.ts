/**
 * TypeScript definitions for AWS::MSK::Replicator
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::Replicator
 */
export namespace AWS_MSK_Replicator {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TopicReplicationType = {
    /**
     * List of regular expression patterns indicating the topics to copy.
     */
    TopicsToReplicate: string[];

    /**
     * List of regular expression patterns indicating the topics that should not be replicated.
     */
    TopicsToExclude?: string[];

    /**
     * Whether to periodically configure remote topics to match their corresponding upstream topics.
     */
    CopyTopicConfigurations?: boolean;

    /**
     * Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
     */
    CopyAccessControlListsForTopics?: boolean;

    /**
     * Whether to periodically check for new topics and partitions.
     */
    DetectAndCopyNewTopics?: boolean;

    /**
     * Configuration for specifying the position in the topics to start replicating from.
     */
    StartingPosition?: ReplicationStartingPositionType;

    /**
     * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
     */
    TopicNameConfiguration?: ReplicationTopicNameConfigurationType;
  };

  /**
   * Configuration for specifying the position in the topics to start replicating from.
   */
  export type ReplicationStartingPositionType = {
    Type?: ReplicationStartingPositionTypeType;
  };

  /**
   * The type of replication starting position.
   */
  export type ReplicationStartingPositionTypeType = {};

  /**
   * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
   */
  export type ReplicationTopicNameConfigurationType = {
    Type?: ReplicationTopicNameConfigurationTypeType;
  };

  /**
   * The type of replicated topic name.
   */
  export type ReplicationTopicNameConfigurationTypeType = {};

  /**
   * Configuration relating to consumer group replication.
   */
  export type ConsumerGroupReplicationType = {
    /**
     * List of regular expression patterns indicating the consumer groups to copy.
     */
    ConsumerGroupsToReplicate: string[];

    /**
     * List of regular expression patterns indicating the consumer groups that should not be replicated.
     */
    ConsumerGroupsToExclude?: string[];

    /**
     * Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.
     */
    SynchroniseConsumerGroupOffsets?: boolean;

    /**
     * Whether to periodically check for new consumer groups.
     */
    DetectAndCopyNewConsumerGroups?: boolean;
  };

  /**
   * Specifies configuration for replication between a source and target Kafka cluster.
   */
  export type ReplicationInfoType = {
    /**
     * Amazon Resource Name of the source Kafka cluster.
     */
    SourceKafkaClusterArn: string;

    /**
     * Amazon Resource Name of the target Kafka cluster.
     */
    TargetKafkaClusterArn: string;

    /**
     * The type of compression to use writing records to target Kafka cluster.
     */
    TargetCompressionType: string;

    /**
     * Configuration relating to topic replication.
     */
    TopicReplication: TopicReplicationType;

    /**
     * Configuration relating to consumer group replication.
     */
    ConsumerGroupReplication: ConsumerGroupReplicationType;
  };

  /**
   * Details of an Amazon MSK cluster.
   */
  export type AmazonMskClusterType = {
    /**
     * The ARN of an Amazon MSK cluster.
     */
    MskClusterArn: string;
  };

  /**
   * Details of an Amazon VPC which has network connectivity to the Kafka cluster.
   */
  export type KafkaClusterClientVpcConfigType = {
    /**
     * The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. If a security group is not specified, the default security group associated with the VPC is used.
     */
    SecurityGroupIds?: string[];

    /**
     * The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.
     */
    SubnetIds: string[];
  };

  /**
   * Details of a Kafka cluster for replication.
   */
  export type KafkaClusterType = {
    /**
     * Details of an Amazon MSK cluster. Exactly one of AmazonMskCluster is required.
     */
    AmazonMskCluster: AmazonMskClusterType;

    /**
     * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
     */
    VpcConfig: KafkaClusterClientVpcConfigType;
  };

  /**
   * Resource Type definition for AWS::MSK::Replicator
   */
  export type ReplicatorResourceType = {
    /**
     * Amazon Resource Name for the created replicator.
     * Read-only property
     */
    ReplicatorArn?: string;

    /**
     * The name of the replicator.
     * Create-only property
     */
    ReplicatorName: string;

    /**
     * The current version of the MSK replicator.
     */
    CurrentVersion?: string;

    /**
     * A summary description of the replicator.
     * Create-only property
     */
    Description?: string;

    /**
     * Specifies a list of Kafka clusters which are targets of the replicator.
     * Create-only property
     */
    KafkaClusters: KafkaClusterType[];

    /**
     * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
     */
    ReplicationInfoList: ReplicationInfoType[];

    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
     * Create-only property
     */
    ServiceExecutionRoleArn: string;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
