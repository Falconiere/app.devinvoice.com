import { DatePicker, type DatePickerProps } from "@/components/ui/date-picker";

import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

type DatePickerControllerProps<T extends FieldValues> = Omit<
  DatePickerProps,
  "onChange" | "value" | "error"
> & {
  control: Control<T, object>;
  name: Path<T>;
};

const DatePickerController = <T extends FieldValues>({
  name,
  control,
  ...rest
}: DatePickerControllerProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          {...rest}
          value={field.value}
          onChange={field.onChange}
          error={error?.message}
        />
      )}
    />
  );
};

export { DatePickerController };
