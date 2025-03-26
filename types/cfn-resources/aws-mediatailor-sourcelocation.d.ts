/**
 * TypeScript definitions for AWS::MediaTailor::SourceLocation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaTailor::SourceLocation Resource Type
 */
export namespace AWS_MediaTailor_SourceLocation {
  /**
   * <p>Access configuration parameters.</p>
   */
  export type AccessConfigurationType = {
    AccessType?: AccessTypeType;

    SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfigurationType;
  };

  export type AccessTypeType = {};

  /**
   * <p>The optional configuration for a server that serves segments. Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>
   */
  export type DefaultSegmentDeliveryConfigurationType = {
    /**
     * <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>
     */
    BaseUrl?: string;
  };

  /**
   * <p>The HTTP configuration for the source location.</p>
   */
  export type HttpConfigurationType = {
    /**
     * <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>
     */
    BaseUrl: string;
  };

  /**
   * <p>AWS Secrets Manager access token configuration parameters. For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>
   */
  export type SecretsManagerAccessTokenConfigurationType = {
    /**
     * <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
     */
    HeaderName?: string;

    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
     */
    SecretArn?: string;

    /**
     * <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>
     */
    SecretStringKey?: string;
  };

  /**
   * <p>The segment delivery configuration settings.</p>
   */
  export type SegmentDeliveryConfigurationType = {
    /**
     * <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
     */
    BaseUrl?: string;

    /**
     * <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>
     */
    Name?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::MediaTailor::SourceLocation Resource Type
   */
  export type SourceLocationResourceType = {
    AccessConfiguration?: AccessConfigurationType;

    /**
     * <p>The ARN of the source location.</p>
     * Read-only property
     */
    Arn?: string;

    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfigurationType;

    HttpConfiguration: HttpConfigurationType;

    /**
     * <p>A list of the segment delivery configurations associated with this resource.</p>
     */
    SegmentDeliveryConfigurations?: SegmentDeliveryConfigurationType[];

    /**
     * Create-only property
     */
    SourceLocationName: string;

    /**
     * The tags to assign to the source location.
     */
    Tags?: TagType[];
  };
}
