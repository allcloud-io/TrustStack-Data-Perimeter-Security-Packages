/**
 * TypeScript definitions for AWS::LakeFormation::DataCellsFilter
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource schema representing a Lake Formation Data Cells Filter.
 */
export namespace AWS_LakeFormation_DataCellsFilter {
  /**
   * A string representing the Catalog Id.
   */
  export type CatalogIdStringType = {};

  /**
   * A string representing a resource's name.
   */
  export type NameStringType = {};

  /**
   * An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.
   */
  export type RowFilterType = {
    /**
     * A PartiQL predicate.
     */
    FilterExpression?: string;

    /**
     * An empty object representing a row wildcard.
     */
    AllRowsWildcard?: Record<string, any>;
  };

  /**
   * A list of column names.
   */
  export type ColumnNamesType = {};

  /**
   * An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.
   */
  export type ColumnWildcardType = {
    /**
     * A list of column names to be excluded from the Data Cells Filter.
     */
    ExcludedColumnNames?: ColumnNamesType;
  };

  /**
   * A resource schema representing a Lake Formation Data Cells Filter.
   */
  export type DataCellsFilterResourceType = {
    /**
     * The Catalog Id of the Table on which to create a Data Cells Filter.
     * Create-only property
     */
    TableCatalogId: CatalogIdStringType;

    /**
     * The name of the Database that the Table resides in.
     * Create-only property
     */
    DatabaseName: NameStringType;

    /**
     * The name of the Table to create a Data Cells Filter for.
     * Create-only property
     */
    TableName: NameStringType;

    /**
     * The desired name of the Data Cells Filter.
     * Create-only property
     */
    Name: NameStringType;

    /**
     * An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required
     * Create-only property
     */
    RowFilter?: RowFilterType;

    /**
     * A list of columns to be included in this Data Cells Filter.
     * Create-only property
     */
    ColumnNames?: ColumnNamesType;

    /**
     * An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required
     * Create-only property
     */
    ColumnWildcard?: ColumnWildcardType;
  };
}
