import {
  NumericInput,
  type NumericInputProps,
} from "@/app/_components/NumericInput";

import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

type NumericControllerProps<T extends FieldValues> = Omit<
  NumericInputProps,
  "name"
> & {
  control: Control<T, object>;
  name: Path<T>;
};

const NumericController = <T extends FieldValues>({
  name,
  control,
  ...rest
}: NumericControllerProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <NumericInput
          {...rest}
          error={error?.message}
          onValueChange={({ value }) => {
            field.onChange(Number(value));
          }}
          value={field.value}
        />
      )}
    />
  );
};

export { NumericController };
