enum Operator {
  Equal = "==",
  NotEqual = "!=",
  GreaterThanOrEqual = ">=",
  LessThanOrEqual = "<=",
  GreaterThan = ">",
  LessThan = "<"
}

enum FieldType {
  Text = "text",
  Number = "number",
  Checkbox = "checkbox",
  Select = "select"
}

type FieldText = {
  type: FieldType.Text;
};

type FieldNumber = {
  type: FieldType.Number;
};

type FieldCheckbox = {
  type: FieldType.Checkbox;
};

type FieldSelect = {
  type: FieldType.Select;
  options: string[];
};

type FieldVariant = FieldText | FieldNumber | FieldCheckbox | FieldSelect;

type VisibleIf = {
  field: string;
  operator: Operator;
  value: string | number | boolean;
};

type Field = {
  id: string;
  label: string;
  visibleIf?: VisibleIf;
} & FieldVariant;

export type { Field, VisibleIf };
export { FieldType, Operator };
