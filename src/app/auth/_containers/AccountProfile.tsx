"use client";
import { useAccountDetailsFormController } from "@/app/(main)/settings/account/_controllers/useAccountDetailsFormController";
import { ComboBoxController, InputController } from "@/app/_components/forms";
import { SignUpDialogFooter } from "@/app/auth/_components/SignUpDialogFooter";
import { useSignUpDialogCtx } from "@/app/auth/_providers/SignUpDialogProvider";
import { countryInputOptions } from "@/data/countries";
import type { UserProfile } from "@/database/services/user/types";

const AccountProfile = ({ currentUser }: { currentUser?: UserProfile }) => {
  const { onNext } = useSignUpDialogCtx();
  const { onSubmit, isPending, control } = useAccountDetailsFormController({
    currentUser,
    onSuccess: onNext,
  });

  return (
    <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
      <InputController control={control} name="firstName" label="First name" />
      <InputController control={control} name="lastName" label="Last name" />
      <InputController control={control} name="email" label="Email" />
      <InputController control={control} name="phone" label="Phone" />
      <ComboBoxController
        control={control}
        name="country"
        label="Country"
        options={countryInputOptions}
      />
      <SignUpDialogFooter isSubmitting={isPending} />
    </form>
  );
};
export { AccountProfile };
