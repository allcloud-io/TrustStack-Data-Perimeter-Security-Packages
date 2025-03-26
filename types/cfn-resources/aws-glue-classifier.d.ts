/**
 * TypeScript definitions for AWS::Glue::Classifier
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::Classifier
 */
export namespace AWS_Glue_Classifier {
  export type XMLClassifierType = {
    RowTag: string;

    Classification: string;

    Name?: string;
  };

  export type JsonClassifierType = {
    JsonPath: string;

    Name?: string;
  };

  export type CsvClassifierType = {
    ContainsCustomDatatype?: string[];

    QuoteSymbol?: string;

    ContainsHeader?: string;

    Delimiter?: string;

    Header?: string[];

    AllowSingleColumn?: boolean;

    CustomDatatypeConfigured?: boolean;

    DisableValueTrimming?: boolean;

    Name?: string;
  };

  export type GrokClassifierType = {
    CustomPatterns?: string;

    GrokPattern: string;

    Classification: string;

    Name?: string;
  };

  /**
   * Resource Type definition for AWS::Glue::Classifier
   */
  export type ClassifierResourceType = {
    XMLClassifier?: XMLClassifierType;

    CsvClassifier?: CsvClassifierType;

    /**
     * Read-only property
     */
    Id?: string;

    GrokClassifier?: GrokClassifierType;

    JsonClassifier?: JsonClassifierType;
  };
}
