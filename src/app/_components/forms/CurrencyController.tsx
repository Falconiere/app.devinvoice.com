import {
  CurrencyInput,
  type CurrencyInputProps,
} from "@/app/_components/CurrencyInput";

import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

type CurrencyControllerProps<T extends FieldValues> = Omit<
  CurrencyInputProps,
  "name"
> & {
  control: Control<T, object>;
  name: Path<T>;
};

const CurrencyController = <T extends FieldValues>({
  name,
  control,
  label,
  ...rest
}: CurrencyControllerProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <CurrencyInput
          {...rest}
          error={error?.message}
          onValueChange={({ value }) => {
            field.onChange(Number(value));
          }}
          value={field.value}
          prefix="$"
        />
      )}
    />
  );
};

export { CurrencyController };
