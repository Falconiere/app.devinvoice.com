"use client";
import { useAccountDetailsFormController } from "@/app/(main)/settings/account/_controllers/useAccountDetailsFormController";
import { SignUpDialogFooter } from "@/app/auth/_components/SignUpDialogFooter";
import { useSignUpDialogCtx } from "@/app/auth/_providers/SignUpDialogProvider";
import { ComboboxBox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { countryInputOptions } from "@/data/currencies";
import type { UserProfile } from "@/database/services/users/types";

import { Controller } from "react-hook-form";

const AccountProfile = ({ currentUser }: { currentUser?: UserProfile }) => {
  const { onNext } = useSignUpDialogCtx();
  const { onSubmit, isPending, errors, register, control } =
    useAccountDetailsFormController({ currentUser, onSuccess: onNext });

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <Input
        label="First name"
        {...register("firstName")}
        error={errors?.firstName?.message}
      />
      <Input
        label="Last name"
        {...register("lastName")}
        error={errors?.lastName?.message}
      />
      <Input
        label="Email"
        {...register("email")}
        disabled
        error={errors?.email?.message}
      />
      <Input
        label="Phone"
        {...register("phone")}
        error={errors?.phone?.message}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <ComboboxBox
            label="Country"
            options={countryInputOptions}
            value={field.value}
            error={errors?.country?.message}
            onChange={(value) => field.onChange(value)}
          />
        )}
      />
      <SignUpDialogFooter isSubmitting={isPending} />
    </form>
  );
};
export { AccountProfile };
