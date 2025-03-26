/**
 * TypeScript definitions for AWS::IoTEvents::DetectorModel
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a *detector model* (a model of your equipment or process) using *states*. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see How to Use in the *Developer Guide*.
 * When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) all detector instances created by the model are reset to their initial states. (The detector's `state`, and the values of any variables and timers are reset.)
 * When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)
 * If you attempt to update a detector model using CFN and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.
 * Also, be aware that if you attempt to update several detector models at once using CFN, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.
 */
export namespace AWS_IoTEvents_DetectorModel {
  /**
   * Information that defines how a detector operates.
   */
  export type DetectorModelDefinitionType = {
    /**
     * The state that is entered at the creation of each detector (instance).
     */
    InitialStateName: string;

    /**
     * Information about the states of the detector.
     */
    States: StateType[];
  };

  /**
   * Information that defines a state of a detector.
   */
  export type StateType = {
    /**
     * When entering this state, perform these `actions` if the `condition` is TRUE.
     */
    OnEnter?: OnEnterType;

    /**
     * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
     */
    OnExit?: OnExitType;

    /**
     * When an input is received and the `condition` is TRUE, perform the specified `actions`.
     */
    OnInput?: OnInputType;

    /**
     * The name of the state.
     */
    StateName: string;
  };

  /**
   * When entering this state, perform these `actions` if the `condition` is TRUE.
   */
  export type OnEnterType = {
    /**
     * Specifies the actions that are performed when the state is entered and the `condition` is `TRUE`.
     */
    Events?: EventType[];
  };

  /**
   * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
   */
  export type OnExitType = {
    /**
     * Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE`.
     */
    Events?: EventType[];
  };

  /**
   * Specifies the actions performed when the `condition` evaluates to TRUE.
   */
  export type OnInputType = {
    /**
     * Specifies the actions performed when the `condition` evaluates to TRUE.
     */
    Events?: EventType[];

    /**
     * Specifies the actions performed, and the next state entered, when a `condition` evaluates to TRUE.
     */
    TransitionEvents?: TransitionEventType[];
  };

  /**
   * Specifies the `actions` to be performed when the `condition` evaluates to TRUE.
   */
  export type EventType = {
    /**
     * The actions to be performed.
     */
    Actions?: ActionType[];

    /**
     * Optional. The Boolean expression that, when TRUE, causes the `actions` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
     */
    Condition?: string;

    /**
     * The name of the event.
     */
    EventName: string;
  };

  /**
   * Specifies the actions performed and the next state entered when a `condition` evaluates to TRUE.
   */
  export type TransitionEventType = {
    /**
     * The actions to be performed.
     */
    Actions?: ActionType[];

    /**
     * Required. A Boolean expression that when TRUE causes the actions to be performed and the `nextState` to be entered.
     */
    Condition: string;

    /**
     * The name of the transition event.
     */
    EventName: string;

    /**
     * The next state to enter.
     */
    NextState: string;
  };

  /**
   * An action to be performed when the `condition` is TRUE.
   */
  export type ActionType = {
    /**
     * Information needed to clear the timer.
     */
    ClearTimer?: ClearTimerType;

    /**
     * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the payload. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see Actions in *Developer Guide*.
     */
    DynamoDB?: DynamoDBType;

    /**
     * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the payload. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see Actions in *Developer Guide*.
     */
    DynamoDBv2?: DynamoDBv2Type;

    /**
     * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
     */
    Firehose?: FirehoseType;

    /**
     * Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
     */
    IotEvents?: IotEventsType;

    /**
     * Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
     */
    IotSiteWise?: IotSiteWiseType;

    /**
     * Publishes an MQTT message with the given topic to the IoT message broker.
     */
    IotTopicPublish?: IotTopicPublishType;

    /**
     * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
     */
    Lambda?: LambdaType;

    /**
     * Information needed to reset the timer.
     */
    ResetTimer?: ResetTimerType;

    /**
     * Information needed to set the timer.
     */
    SetTimer?: SetTimerType;

    /**
     * Sets a variable to a specified value.
     */
    SetVariable?: SetVariableType;

    /**
     * Sends an Amazon SNS message.
     */
    Sns?: SnsType;

    /**
     * Sends an Amazon SNS message.
     */
    Sqs?: SqsType;
  };

  /**
   * Information needed to clear the timer.
   */
  export type ClearTimerType = {
    /**
     * The name of the timer to clear.
     */
    TimerName: string;
  };

  /**
   * Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the payload. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
   * You must use expressions for all parameters in `DynamoDBAction`. The expressions accept literals, operators, functions, references, and substitution templates.
   * **Examples**
   * +  For literal values, the expressions must contain single quotes. For example, the value for the `hashKeyType` parameter can be `'STRING'`.
   * +  For references, you must specify either variables or input values. For example, the value for the `hashKeyField` parameter can be `$input.GreenhouseInput.name`.
   * +  For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `hashKeyValue` parameter uses a substitution template.
   * `'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`
   * +  For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `tableName` parameter uses a string concatenation.
   * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
   * For more information, see Expressions in the *Developer Guide*.
   * If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw`.
   */
  export type DynamoDBType = {
    /**
     * The name of the hash key (also called the partition key). The `hashKeyField` value must match the partition key of the target DynamoDB table.
     */
    HashKeyField: string;

    /**
     * The data type for the hash key (also called the partition key). You can specify the following values:
     * +   `'STRING'` - The hash key is a string.
     * +   `'NUMBER'` - The hash key is a number.
     * If you don't specify `hashKeyType`, the default value is `'STRING'`.
     */
    HashKeyType?: string;

    /**
     * The value of the hash key (also called the partition key).
     */
    HashKeyValue: string;

    /**
     * The type of operation to perform. You can specify the following values:
     * +   `'INSERT'` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
     * +   `'UPDATE'` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
     * +   `'DELETE'` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
     * If you don't specify this parameter, ITE triggers the `'INSERT'` operation.
     */
    Operation?: string;

    /**
     * Information needed to configure the payload.
     * By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
    Payload?: PayloadType;

    /**
     * The name of the DynamoDB column that receives the action payload.
     * If you don't specify this parameter, the name of the DynamoDB column is `payload`.
     */
    PayloadField?: string;

    /**
     * The name of the range key (also called the sort key). The `rangeKeyField` value must match the sort key of the target DynamoDB table.
     */
    RangeKeyField?: string;

    /**
     * The data type for the range key (also called the sort key), You can specify the following values:
     * +   `'STRING'` - The range key is a string.
     * +   `'NUMBER'` - The range key is number.
     * If you don't specify `rangeKeyField`, the default value is `'STRING'`.
     */
    RangeKeyType?: string;

    /**
     * The value of the range key (also called the sort key).
     */
    RangeKeyValue?: string;

    /**
     * The name of the DynamoDB table. The `tableName` value must match the table name of the target DynamoDB table.
     */
    TableName: string;
  };

  /**
   * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the payload. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
   * You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
   * **Examples**
   * +  For literal values, the expressions must contain single quotes. For example, the value for the `tableName` parameter can be `'GreenhouseTemperatureTable'`.
   * +  For references, you must specify either variables or input values. For example, the value for the `tableName` parameter can be `$variable.ddbtableName`.
   * +  For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `contentExpression` parameter in `Payload` uses a substitution template.
   * `'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`
   * +  For a string concatenation, you must use `+`. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `tableName` parameter uses a string concatenation.
   * `'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`
   * For more information, see Expressions in the *Developer Guide*.
   * The value for the `type` parameter in `Payload` must be `JSON`.
   */
  export type DynamoDBv2Type = {
    /**
     * Information needed to configure the payload.
     * By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
     */
    Payload?: PayloadType;

    /**
     * The name of the DynamoDB table.
     */
    TableName: string;
  };

  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   */
  export type FirehoseType = {
    /**
     * The name of the Kinesis Data Firehose delivery stream where the data is written.
     */
    DeliveryStreamName: string;

    /**
     * You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
     */
    Payload?: PayloadType;

    /**
     * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
     */
    Separator?: string;
  };

  /**
   * Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.
   */
  export type IotEventsType = {
    /**
     * The name of the ITE input where the data is sent.
     */
    InputName: string;

    /**
     * You can configure the action payload when you send a message to an ITE input.
     */
    Payload?: PayloadType;
  };

  /**
   * Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.
   * You must use expressions for all parameters in `IotSiteWiseAction`. The expressions accept literals, operators, functions, references, and substitutions templates.
   * **Examples**
   * +  For literal values, the expressions must contain single quotes. For example, the value for the `propertyAlias` parameter can be `'/company/windfarm/3/turbine/7/temperature'`.
   * +  For references, you must specify either variables or input values. For example, the value for the `assetId` parameter can be `$input.TurbineInput.assetId1`.
   * +  For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `propertyAlias` parameter uses a substitution template.
   * `'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`
   * You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in ITSW.
   * For more information, see Expressions in the *Developer Guide*.
   */
  export type IotSiteWiseType = {
    /**
     * The ID of the asset that has the specified property.
     */
    AssetId?: string;

    /**
     * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
     */
    EntryId?: string;

    /**
     * The alias of the asset property.
     */
    PropertyAlias?: string;

    /**
     * The ID of the asset property.
     */
    PropertyId?: string;

    /**
     * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
     */
    PropertyValue: AssetPropertyValueType;
  };

  /**
   * Information required to publish the MQTT message through the IoT message broker.
   */
  export type IotTopicPublishType = {
    /**
     * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
     */
    MqttTopic: string;

    /**
     * You can configure the action payload when you publish a message to an IoTCore topic.
     */
    Payload?: PayloadType;
  };

  /**
   * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
   */
  export type LambdaType = {
    /**
     * The ARN of the Lambda function that is executed.
     */
    FunctionArn: string;

    /**
     * You can configure the action payload when you send a message to a Lambda function.
     */
    Payload?: PayloadType;
  };

  /**
   * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
   */
  export type ResetTimerType = {
    /**
     * The name of the timer to reset.
     */
    TimerName: string;
  };

  /**
   * Information needed to set the timer.
   */
  export type SetTimerType = {
    /**
     * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
     */
    DurationExpression?: string;

    /**
     * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
     */
    Seconds?: number;

    /**
     * The name of the timer.
     */
    TimerName: string;
  };

  /**
   * Information about the variable and its new value.
   */
  export type SetVariableType = {
    /**
     * The new value of the variable.
     */
    Value: string;

    /**
     * The name of the variable.
     */
    VariableName: string;
  };

  /**
   * Information required to publish the Amazon SNS message.
   */
  export type SnsType = {
    /**
     * You can configure the action payload when you send a message as an Amazon SNS push notification.
     */
    Payload?: PayloadType;

    /**
     * The ARN of the Amazon SNS target where the message is sent.
     */
    TargetArn: string;
  };

  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
   */
  export type SqsType = {
    /**
     * You can configure the action payload when you send a message to an Amazon SQS queue.
     */
    Payload?: PayloadType;

    /**
     * The URL of the SQS queue where the data is written.
     */
    QueueUrl: string;

    /**
     * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
     */
    UseBase64?: boolean;
  };

  /**
   * A structure that contains value information. For more information, see AssetPropertyValue in the *API Reference*.
   * You must use expressions for all parameters in `AssetPropertyValue`. The expressions accept literals, operators, functions, references, and substitution templates.
   * **Examples**
   * +  For literal values, the expressions must contain single quotes. For example, the value for the `quality` parameter can be `'GOOD'`.
   * +  For references, you must specify either variables or input values. For example, the value for the `quality` parameter can be `$input.TemperatureInput.sensorData.quality`.
   * For more information, see Expressions in the *Developer Guide*.
   */
  export type AssetPropertyValueType = {
    /**
     * The quality of the asset property value. The value must be `'GOOD'`, `'BAD'`, or `'UNCERTAIN'`.
     */
    Quality?: string;

    /**
     * The timestamp associated with the asset property value. The default is the current event time.
     */
    Timestamp?: AssetPropertyTimestampType;

    /**
     * The value to send to an asset property.
     */
    Value: AssetPropertyVariantType;
  };

  /**
   * A structure that contains timestamp information. For more information, see TimeInNanos in the *API Reference*.
   * You must use expressions for all parameters in `AssetPropertyTimestamp`. The expressions accept literals, operators, functions, references, and substitution templates.
   * **Examples**
   * +  For literal values, the expressions must contain single quotes. For example, the value for the `timeInSeconds` parameter can be `'1586400675'`.
   * +  For references, you must specify either variables or input values. For example, the value for the `offsetInNanos` parameter can be `$variable.time`.
   * +  For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `timeInSeconds` parameter uses a substitution template.
   * `'${$input.TemperatureInput.sensorData.timestamp / 1000}'`
   * For more information, see Expressions in the *Developer Guide*.
   */
  export type AssetPropertyTimestampType = {
    /**
     * The nanosecond offset converted from `timeInSeconds`. The valid range is between 0-999999999.
     */
    OffsetInNanos?: string;

    /**
     * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
     */
    TimeInSeconds: string;
  };

  /**
   * A structure that contains an asset property value. For more information, see Variant in the *API Reference*.
   * You must use expressions for all parameters in `AssetPropertyVariant`. The expressions accept literals, operators, functions, references, and substitution templates.
   * **Examples**
   * +  For literal values, the expressions must contain single quotes. For example, the value for the `integerValue` parameter can be `'100'`.
   * +  For references, you must specify either variables or parameters. For example, the value for the `booleanValue` parameter can be `$variable.offline`.
   * +  For a substitution template, you must use `${}`, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
   * In the following example, the value for the `doubleValue` parameter uses a substitution template.
   * `'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'`
   * For more information, see Expressions in the *Developer Guide*.
   * You must specify one of the following value types, depending on the `dataType` of the specified asset property. For more information, see AssetProperty in the *API Reference*.
   */
  export type AssetPropertyVariantType = {
    /**
     * The asset property value is a Boolean value that must be `'TRUE'` or `'FALSE'`. You must use an expression, and the evaluated result should be a Boolean value.
     */
    BooleanValue?: string;

    /**
     * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
     */
    DoubleValue?: string;

    /**
     * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
     */
    IntegerValue?: string;

    /**
     * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
     */
    StringValue?: string;
  };

  /**
   * Information needed to configure the payload.
   * By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
   */
  export type PayloadType = {
    /**
     * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
     */
    ContentExpression: string;

    /**
     * The value of the payload type can be either `STRING` or `JSON`.
     */
    Type: string;
  };

  /**
   * Metadata that can be used to manage the resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a *detector model* (a model of your equipment or process) using *states*. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see How to Use in the *Developer Guide*.
   * When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) all detector instances created by the model are reset to their initial states. (The detector's `state`, and the values of any variables and timers are reset.)
   * When you successfully update a detector model (using the ITE console, ITE API or CLI commands, or CFN) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)
   * If you attempt to update a detector model using CFN and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.
   * Also, be aware that if you attempt to update several detector models at once using CFN, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.
   */
  export type DetectorModelResourceType = {
    /**
     * Information that defines how a detector operates.
     */
    DetectorModelDefinition: DetectorModelDefinitionType;

    /**
     * A brief description of the detector model.
     */
    DetectorModelDescription?: string;

    /**
     * The name of the detector model.
     * Create-only property
     */
    DetectorModelName?: string;

    /**
     * Information about the order in which events are evaluated and how actions are executed.
     */
    EvaluationMethod?: string;

    /**
     * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information.
     * This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
     * Create-only property
     */
    Key?: string;

    /**
     * The ARN of the role that grants permission to ITE to perform its operations.
     */
    RoleArn: string;

    /**
     * An array of key-value pairs to apply to this resource.
     * For more information, see Tag.
     */
    Tags?: TagType[];
  };
}
