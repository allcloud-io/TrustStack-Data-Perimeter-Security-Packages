/**
 * TypeScript definitions for AWS::SecretsManager::Secret
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new secret. A *secret* can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.
 * For RDS master user credentials, see AWS::RDS::DBCluster MasterUserSecret.
 * For RS admin user credentials, see AWS::Redshift::Cluster.
 * To retrieve a secret in a CFNshort template, use a *dynamic reference*. For more information, see Retrieve a secret in an resource.
 * For information about creating a secret in the console, see Create a secret. For information about creating a secret using the CLI or SDK, see CreateSecret.
 * For information about retrieving a secret in code, see Retrieve secrets from Secrets Manager.
 */
export namespace AWS_SecretsManager_Secret {
  /**
   * Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
   * *Required permissions:* `secretsmanager:GetRandomPassword`. For more information, see IAM policy actions for Secrets Manager and Authentication and access control in Secrets Manager.
   */
  export type GenerateSecretStringType = {
    /**
     * Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters.
     */
    ExcludeUppercase?: boolean;

    /**
     * Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type.
     */
    RequireEachIncludedType?: boolean;

    /**
     * Specifies whether to include the space character. If you include this switch, the password can contain space characters.
     */
    IncludeSpace?: boolean;

    /**
     * A string of the characters that you don't want in the password.
     */
    ExcludeCharacters?: string;

    /**
     * The JSON key name for the key/value pair, where the value is the generated password. This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate`.
     */
    GenerateStringKey?: string;

    /**
     * The length of the password. If you don't include this parameter, the default length is 32 characters.
     */
    PasswordLength?: number;

    /**
     * Specifies whether to exclude the following punctuation characters from the password: ``! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.
     */
    ExcludePunctuation?: boolean;

    /**
     * Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters.
     */
    ExcludeLowercase?: boolean;

    /**
     * A template that the generated string must match. When you make a change to this property, a new secret version is created.
     */
    SecretStringTemplate?: string;

    /**
     * Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.
     */
    ExcludeNumbers?: boolean;
  };

  /**
   * Specifies a `Region` and the `KmsKeyId` for a replica secret.
   */
  export type ReplicaRegionType = {
    /**
     * The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses `aws/secretsmanager`.
     */
    KmsKeyId?: string;

    /**
     * A string that represents a `Region`, for example "us-east-1".
     */
    Region: string;
  };

  /**
   * A structure that contains information about a tag.
   */
  export type TagType = {
    /**
     * The string value associated with the key of the tag.
     */
    Value: string;

    /**
     * The key identifier, or name, of the tag.
     */
    Key: string;
  };

  /**
   * Creates a new secret. A *secret* can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager.
   * For RDS master user credentials, see AWS::RDS::DBCluster MasterUserSecret.
   * For RS admin user credentials, see AWS::Redshift::Cluster.
   * To retrieve a secret in a CFNshort template, use a *dynamic reference*. For more information, see Retrieve a secret in an resource.
   * For information about creating a secret in the console, see Create a secret. For information about creating a secret using the CLI or SDK, see CreateSecret.
   * For information about retrieving a secret in code, see Retrieve secrets from Secrets Manager.
   */
  export type SecretResourceType = {
    /**
     * The description of the secret.
     */
    Description?: string;

    /**
     * The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see About aliases.
     * To use a KMS key in a different account, use the key ARN or the alias ARN.
     * If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
     * If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.
     */
    KmsKeyId?: string;

    /**
     * The text to encrypt and store in the secret. We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
     */
    SecretString?: string;

    /**
     * A structure that specifies how to generate a password to encrypt and store in the secret. To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
     * We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
     */
    GenerateSecretString?: GenerateSecretStringType;

    /**
     * A custom type that specifies a `Region` and the `KmsKeyId` for a replica secret.
     */
    ReplicaRegions?: ReplicaRegionType[];

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:
     * `[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`
     * Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
     * Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
     * If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see Control access to secrets using tags and Limit access to identities with tags that match secrets' tags.
     * For information about how to format a JSON parameter for the various command line tool environments, see Using JSON for Parameters. If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
     * The following restrictions apply to tags:
     * +  Maximum number of tags per secret: 50
     * +  Maximum key length: 127 Unicode characters in UTF-8
     * +  Maximum value length: 255 Unicode characters in UTF-8
     * +  Tag keys and values are case sensitive.
     * +  Do not use the `aws:` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
     * +  If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.
     */
    Tags?: TagType[];

    /**
     * The name of the new secret.
     * The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
     * Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
     * Create-only property
     */
    Name?: string;
  };
}
