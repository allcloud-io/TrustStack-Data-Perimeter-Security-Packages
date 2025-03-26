/**
 * TypeScript definitions for AWS::Budgets::Budget
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Budgets::Budget
 */
export namespace AWS_Budgets_Budget {
  export type HistoricalOptionsType = {
    BudgetAdjustmentPeriod: number;
  };

  export type ResourceTagType = {
    Value?: string;

    Key: string;
  };

  export type SubscriberType = {
    Address: string;

    SubscriptionType: string;
  };

  export type BudgetDataType = {
    BudgetLimit?: SpendType;

    TimePeriod?: TimePeriodType;

    AutoAdjustData?: AutoAdjustDataType;

    TimeUnit: string;

    PlannedBudgetLimits?: Record<string, any>;

    CostFilters?: Record<string, any>;

    BudgetName?: string;

    CostTypes?: CostTypesType;

    BudgetType: string;
  };

  export type TimePeriodType = {
    Start?: string;

    End?: string;
  };

  export type SpendType = {
    Unit: string;

    Amount: number;
  };

  export type NotificationWithSubscribersType = {
    Subscribers: SubscriberType[];

    Notification: NotificationType;
  };

  export type AutoAdjustDataType = {
    AutoAdjustType: string;

    HistoricalOptions?: HistoricalOptionsType;
  };

  export type NotificationType = {
    ComparisonOperator: string;

    NotificationType: string;

    Threshold: number;

    ThresholdType?: string;
  };

  export type CostTypesType = {
    IncludeSupport?: boolean;

    IncludeOtherSubscription?: boolean;

    IncludeTax?: boolean;

    IncludeSubscription?: boolean;

    UseBlended?: boolean;

    IncludeUpfront?: boolean;

    IncludeDiscount?: boolean;

    IncludeCredit?: boolean;

    IncludeRecurring?: boolean;

    UseAmortized?: boolean;

    IncludeRefund?: boolean;
  };

  /**
   * Resource Type definition for AWS::Budgets::Budget
   */
  export type BudgetResourceType = {
    Budget: BudgetDataType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    NotificationsWithSubscribers?: NotificationWithSubscribersType[];

    ResourceTags?: ResourceTagType[];
  };
}
