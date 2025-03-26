/**
 * TypeScript definitions for AWS::CloudFront::OriginAccessControl
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 * For more information about using a CloudFront origin access control, see Restricting access to an origin in the *Amazon CloudFront Developer Guide*.
 */
export namespace AWS_CloudFront_OriginAccessControl {
  /**
   * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
   * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
   * For more information about using a CloudFront origin access control, see Restricting access to an origin in the *Amazon CloudFront Developer Guide*.
   */
  export type OriginAccessControlConfigType = {
    /**
     * A description of the origin access control.
     */
    Description?: string;

    /**
     * A name to identify the origin access control. You can specify up to 64 characters.
     */
    Name: string;

    /**
     * The type of origin that this origin access control is for.
     */
    OriginAccessControlOriginType: string;

    /**
     * Specifies which requests CloudFront signs (adds authentication information to). Specify `always` for the most common use case. For more information, see origin access control advanced settings in the *Amazon CloudFront Developer Guide*.
     * This field can have one of the following values:
     * +   `always` – CloudFront signs all origin requests, overwriting the `Authorization` header from the viewer request if one exists.
     * +   `never` – CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
     * +   `no-override` – If the viewer request doesn't contain the `Authorization` header, then CloudFront signs the origin request. If the viewer request contains the `Authorization` header, then CloudFront doesn't sign the origin request and instead passes along the `Authorization` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*
     */
    SigningBehavior: string;

    /**
     * The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`.
     */
    SigningProtocol: string;
  };

  /**
   * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
   * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
   * For more information about using a CloudFront origin access control, see Restricting access to an origin in the *Amazon CloudFront Developer Guide*.
   */
  export type OriginAccessControlResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The origin access control.
     */
    OriginAccessControlConfig: OriginAccessControlConfigType;
  };
}
