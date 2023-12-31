export type SelectOption = {
  label: string;
  value: string | number;
};

export type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[] /* | undefined */;
  onChange: (value: SelectOption[]) => void;
};

export type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);
