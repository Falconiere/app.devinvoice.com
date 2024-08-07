import { ComboboxBox, type ComboboxBoxProps } from "@/components/ui/combobox";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

type ComboBoxControllerProps<T extends FieldValues> = Omit<
  ComboboxBoxProps,
  "onChange" | "value" | "error"
> & {
  control: Control<T, object>;
  name: Path<T>;
};

const ComboBoxController = <T extends FieldValues>({
  name,
  control,
  ...rest
}: ComboBoxControllerProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ComboboxBox
          {...rest}
          value={field.value}
          onChange={(value) => field.onChange(value)}
          error={error?.message}
        />
      )}
    />
  );
};

export { ComboBoxController };
