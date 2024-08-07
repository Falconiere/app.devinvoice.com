"use client";
import { useAccountDetailsFormController } from "@/app/(main)/settings/account/_controllers/useAccountDetailsFormController";

import { Button } from "@/components/ui/button";
import { countryInputOptions } from "@/data/countries";
import type { UserProfile } from "@/database/services/user/types";
import { ContentBox } from "@/domains/components/ContentBox";
import {
  ComboBoxController,
  InputController,
} from "@/domains/components/forms";

const AccountDetailsForm: React.FC<{ currentUser?: UserProfile }> = ({
  currentUser,
}) => {
  const { onSubmit, isPending, control } = useAccountDetailsFormController({
    currentUser,
  });
  return (
    <ContentBox title="Account details" isLoading={isPending}>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={onSubmit}
      >
        <InputController
          control={control}
          name="firstName"
          label="First name"
        />
        <InputController control={control} name="lastName" label="Last name" />
        <InputController
          control={control}
          name="email"
          label="Email"
          disabled
        />
        <InputController
          control={control}
          name="phone"
          label="Phone"
          disabled
        />
        <ComboBoxController
          control={control}
          name="country"
          label="Country"
          options={countryInputOptions}
        />
        <div className="sm:col-span-2 grid justify-end">
          <Button type="submit" disabled={isPending}>
            Save
          </Button>
        </div>
      </form>
    </ContentBox>
  );
};

export { AccountDetailsForm };
