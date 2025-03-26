/**
 * TypeScript definitions for AWS::QuickSight::Theme
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::Theme Resource Type.
 */
export namespace AWS_QuickSight_Theme {
  /**
   * <p>The display options for tile borders for visuals.</p>
   */
  export type BorderStyleType = {
    /**
     * <p>The option to enable display of borders for visuals.</p>
     */
    Show?: boolean;
  };

  /**
   * <p>The theme colors that are used for data colors in charts. The colors description is a
   * hexadecimal color code that consists of six alphanumerical characters, prefixed with
   * <code>#</code>, for example #37BFF5. </p>
   */
  export type DataColorPaletteType = {
    /**
     * <p>The hexadecimal codes for the colors.</p>
     */
    Colors?: string[];

    /**
     * <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>
     */
    MinMaxGradient?: string[];

    /**
     * <p>The hexadecimal code of a color that applies to charts where a lack of data is
     * highlighted.</p>
     */
    EmptyFillColor?: string;
  };

  export type FontType = {
    FontFamily?: string;
  };

  /**
   * <p>The display options for gutter spacing between tiles on a sheet.</p>
   */
  export type GutterStyleType = {
    /**
     * <p>This Boolean value controls whether to display a gutter space between sheet tiles.
     * </p>
     */
    Show?: boolean;
  };

  /**
   * <p>The display options for margins around the outside edge of sheets.</p>
   */
  export type MarginStyleType = {
    /**
     * <p>This Boolean value controls whether to display sheet margins.</p>
     */
    Show?: boolean;
  };

  /**
   * <p>Permission for the resource.</p>
   */
  export type ResourcePermissionType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
     * following:</p>
     * <ul>
     * <li>
     * <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
     * ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
     * (This is less common.) </p>
     * </li>
     * </ul>
     */
    Principal: string;

    /**
     * <p>The IAM action to grant or revoke permissions on.</p>
     */
    Actions: string[];
  };

  export type ResourceStatusType = {};

  /**
   * <p>The theme display options for sheets. </p>
   */
  export type SheetStyleType = {
    Tile?: TileStyleType;

    TileLayout?: TileLayoutStyleType;
  };

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag key.</p>
     */
    Key: string;

    /**
     * <p>Tag value.</p>
     */
    Value: string;
  };

  /**
   * <p>The theme configuration. This configuration contains all of the display properties for
   * a theme.</p>
   */
  export type ThemeConfigurationType = {
    DataColorPalette?: DataColorPaletteType;

    UIColorPalette?: UIColorPaletteType;

    Sheet?: SheetStyleType;

    Typography?: TypographyType;
  };

  /**
   * <p>Theme error.</p>
   */
  export type ThemeErrorType = {
    Type?: ThemeErrorTypeType;

    /**
     * <p>The error message.</p>
     */
    Message?: string;
  };

  export type ThemeErrorTypeType = {};

  export type ThemeTypeType = {};

  /**
   * <p>A version of a theme.</p>
   */
  export type ThemeVersionType = {
    /**
     * <p>The version number of the theme.</p>
     */
    VersionNumber?: number;

    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    Arn?: string;

    /**
     * <p>The description of the theme.</p>
     */
    Description?: string;

    /**
     * <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
     * themes initially inherit from a default Amazon QuickSight theme.</p>
     */
    BaseThemeId?: string;

    /**
     * <p>The date and time that this theme version was created.</p>
     */
    CreatedTime?: string;

    Configuration?: ThemeConfigurationType;

    /**
     * <p>Errors associated with the theme.</p>
     */
    Errors?: ThemeErrorType[];

    Status?: ResourceStatusType;
  };

  /**
   * <p>The display options for the layout of tiles on a sheet.</p>
   */
  export type TileLayoutStyleType = {
    Gutter?: GutterStyleType;

    Margin?: MarginStyleType;
  };

  /**
   * <p>Display options related to tiles on a sheet.</p>
   */
  export type TileStyleType = {
    Border?: BorderStyleType;
  };

  export type TypographyType = {
    FontFamilies?: FontType[];
  };

  /**
   * <p>The theme colors that apply to UI and to charts, excluding data colors. The colors
   * description is a hexadecimal color code that consists of six alphanumerical characters,
   * prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
   * Guide.</i>
   * </p>
   */
  export type UIColorPaletteType = {
    /**
     * <p>The color of text and other foreground elements that appear over the primary
     * background regions, such as grid lines, borders, table banding, icons, and so on.</p>
     */
    PrimaryForeground?: string;

    /**
     * <p>The background color that applies to visuals and other high emphasis UI.</p>
     */
    PrimaryBackground?: string;

    /**
     * <p>The foreground color that applies to any sheet title, sheet control text, or UI that
     * appears over the secondary background.</p>
     */
    SecondaryForeground?: string;

    /**
     * <p>The background color that applies to the sheet background and sheet controls.</p>
     */
    SecondaryBackground?: string;

    /**
     * <p>This color is that applies to selected states and buttons.</p>
     */
    Accent?: string;

    /**
     * <p>The foreground color that applies to any text or other elements that appear over the
     * accent color.</p>
     */
    AccentForeground?: string;

    /**
     * <p>The color that applies to error messages.</p>
     */
    Danger?: string;

    /**
     * <p>The foreground color that applies to any text or other elements that appear over the
     * error color.</p>
     */
    DangerForeground?: string;

    /**
     * <p>This color that applies to warning and informational messages.</p>
     */
    Warning?: string;

    /**
     * <p>The foreground color that applies to any text or other elements that appear over the
     * warning color.</p>
     */
    WarningForeground?: string;

    /**
     * <p>The color that applies to success messages, for example the check mark for a
     * successful download.</p>
     */
    Success?: string;

    /**
     * <p>The foreground color that applies to any text or other elements that appear over the
     * success color.</p>
     */
    SuccessForeground?: string;

    /**
     * <p>The color that applies to the names of fields that are identified as
     * dimensions.</p>
     */
    Dimension?: string;

    /**
     * <p>The foreground color that applies to any text or other elements that appear over the
     * dimension color.</p>
     */
    DimensionForeground?: string;

    /**
     * <p>The color that applies to the names of fields that are identified as measures.</p>
     */
    Measure?: string;

    /**
     * <p>The foreground color that applies to any text or other elements that appear over the
     * measure color.</p>
     */
    MeasureForeground?: string;
  };

  /**
   * Definition of the AWS::QuickSight::Theme Resource Type.
   */
  export type ThemeResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the theme.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AwsAccountId: string;

    BaseThemeId: string;

    Configuration: ThemeConfigurationType;

    /**
     * <p>The date and time that the theme was created.</p>
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * <p>The date and time that the theme was last updated.</p>
     * Read-only property
     */
    LastUpdatedTime?: string;

    Name: string;

    Permissions?: ResourcePermissionType[];

    Tags?: TagType[];

    /**
     * Create-only property
     */
    ThemeId: string;

    /**
     * Read-only property
     */
    Type?: ThemeTypeType;

    /**
     * Read-only property
     */
    Version?: ThemeVersionType;

    VersionDescription?: string;
  };
}
