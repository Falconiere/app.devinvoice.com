"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import type { UserProfile } from "@/database/services/users/types";
import { ComboboxBox } from "@/components/ui/combobox";
import { countries } from "@/data/countries";
import { useAccountDetailsFormController } from "@/app/(main)/settings/account/_controllers/useAccountDetailsFormController";

const options = countries.map((country) => ({
  label: country.name,
  value: country.code,
  urlImg: country.flag,
}));

const AccountDetailsForm = ({ currentUser }: { currentUser?: UserProfile }) => {
  const { onSubmit, isPending, errors, register, control } =
    useAccountDetailsFormController({ currentUser });
  return (
    <ContentBox title="Account details" isLoading={isPending}>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={onSubmit}
      >
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
              options={options}
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
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
