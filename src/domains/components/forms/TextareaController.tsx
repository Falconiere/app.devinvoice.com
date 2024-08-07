import { Textarea, type TextareaProps } from "@/components/ui/textarea";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  useController,
} from "react-hook-form";

type TextareaControllerProps<T extends FieldValues> = Omit<
  TextareaProps,
  "name"
> & {
  control: Control<T, object>;
  name: Path<T>;
};

const TextareaController = <T extends FieldValues>({
  name,
  control,
  ...rest
}: TextareaControllerProps<T>) => {
  const {
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Textarea
          {...rest}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          error={error?.message}
        />
      )}
    />
  );
};

export { TextareaController };
