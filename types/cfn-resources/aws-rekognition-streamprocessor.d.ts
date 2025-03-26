/**
 * TypeScript definitions for AWS::Rekognition::StreamProcessor
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Rekognition::StreamProcessor type is used to create an Amazon Rekognition StreamProcessor that you can use to analyze streaming videos.
 *
 */
export namespace AWS_Rekognition_StreamProcessor {
  /**
   * The ARN of the stream processor
   */
  export type ArnType = {};

  /**
   * The Kinesis Video Stream that streams the source video.
   */
  export type KinesisVideoStreamType = {
    /**
     * ARN of the Kinesis Video Stream that streams the source video.
     */
    Arn: string;
  };

  /**
   * The S3 location in customer's account where inference output & artifacts are stored, as part of connected home feature.
   */
  export type S3DestinationType = {
    /**
     * Name of the S3 bucket.
     */
    BucketName: string;

    /**
     * The object key prefix path where the results will be stored. Default is no prefix path
     */
    ObjectKeyPrefix?: string;
  };

  /**
   * The Amazon Kinesis Data Stream stream to which the Amazon Rekognition stream processor streams the analysis results, as part of face search feature.
   */
  export type KinesisDataStreamType = {
    /**
     * ARN of the Kinesis Data Stream stream.
     */
    Arn: string;
  };

  /**
   * List of labels that need to be detected in the video stream. Current supported values are PERSON, PET, PACKAGE, ALL.
   */
  export type LabelsType = {};

  /**
   * Connected home settings to use on a streaming video. Note that either ConnectedHomeSettings or FaceSearchSettings should be set. Not both
   */
  export type ConnectedHomeSettingsType = {
    Labels: LabelsType;

    /**
     * Minimum object class match confidence score that must be met to return a result for a recognized object.
     */
    MinConfidence?: number;
  };

  /**
   * Face search settings to use on a streaming video. Note that either FaceSearchSettings or ConnectedHomeSettings should be set. Not both
   */
  export type FaceSearchSettingsType = {
    /**
     * The ID of a collection that contains faces that you want to search for.
     */
    CollectionId: string;

    /**
     * Minimum face match confidence score percentage that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted.
     */
    FaceMatchThreshold?: number;
  };

  /**
   * The ARN of the SNS notification channel where events of interests are published, as part of connected home feature.
   */
  export type NotificationChannelType = {
    /**
     * ARN of the SNS topic.
     */
    Arn: string;
  };

  /**
   * An (X, Y) cartesian coordinate denoting a point on the frame
   */
  export type PointType = {
    /**
     * The X coordinate of the point.
     */
    X: number;

    /**
     * The Y coordinate of the point.
     */
    Y: number;
  };

  /**
   * A polygon showing a region of interest. Note that the ordering of the Point entries matter in defining the polygon
   */
  export type PolygonType = {};

  /**
   * A bounding box denoting a region of interest in the frame to be analyzed.
   */
  export type BoundingBoxType = {
    Height: number;

    Width: number;

    Left: number;

    Top: number;
  };

  /**
   * Indicates whether Rekognition is allowed to store the video stream data for model-training.
   */
  export type DataSharingPreferenceType = {
    /**
     * Flag to enable data-sharing
     */
    OptIn: boolean;
  };

  /**
   * A key-value pair to associate with a resource.
   */
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
   * The AWS::Rekognition::StreamProcessor type is used to create an Amazon Rekognition StreamProcessor that you can use to analyze streaming videos.
   *
   */
  export type StreamProcessorResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor.
     * Create-only property
     */
    Name?: string;

    /**
     * The KMS key that is used by Rekognition to encrypt any intermediate customer metadata and store in the customer's S3 bucket.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * ARN of the IAM role that allows access to the stream processor, and provides Rekognition read permissions for KVS stream and write permissions to S3 bucket and SNS topic.
     * Create-only property
     */
    RoleArn: string;

    /**
     * Create-only property
     */
    KinesisVideoStream: KinesisVideoStreamType;

    /**
     * Create-only property
     */
    FaceSearchSettings?: FaceSearchSettingsType;

    /**
     * Create-only property
     */
    ConnectedHomeSettings?: ConnectedHomeSettingsType;

    /**
     * Create-only property
     */
    KinesisDataStream?: KinesisDataStreamType;

    /**
     * Create-only property
     */
    S3Destination?: S3DestinationType;

    /**
     * Create-only property
     */
    NotificationChannel?: NotificationChannelType;

    /**
     * Create-only property
     */
    DataSharingPreference?: DataSharingPreferenceType;

    /**
     * The PolygonRegionsOfInterest specifies a set of polygon areas of interest in the video frames to analyze, as part of connected home feature. Each polygon is in turn, an ordered list of Point
     * Create-only property
     */
    PolygonRegionsOfInterest?: PolygonType[];

    /**
     * The BoundingBoxRegionsOfInterest specifies an array of bounding boxes of interest in the video frames to analyze, as part of connected home feature. If an object is partially in a region of interest, Rekognition will tag it as detected if the overlap of the object with the region-of-interest is greater than 20%.
     * Create-only property
     */
    BoundingBoxRegionsOfInterest?: BoundingBoxType[];

    /**
     * Current status of the stream processor.
     * Read-only property
     */
    Status?: string;

    /**
     * Detailed status message about the stream processor.
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
