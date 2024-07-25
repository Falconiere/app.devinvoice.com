import { Input, type InputProps } from "@/components/ui/input";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

type InputControllerProps<T extends FieldValues> = Omit<InputProps, "name"> & {
  control: Control<T, object>;
  name: Path<T>;
};

const InputController = <T extends FieldValues>({
  name,
  control,
  ...rest
}: InputControllerProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...rest}
          value={field.value}
          onChange={field.onChange}
          error={error?.message}
        />
      )}
    />
  );
};

export { InputController };
