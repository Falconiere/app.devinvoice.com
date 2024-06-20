"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { ComboboxBox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { countryInputOptions } from "@/data/countries";
import type { Business } from "@/database/services/business/types";

import { Controller, useFormContext } from "react-hook-form";

const BusinessAddressForm = () => {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<Business>();
  return (
    <ContentBox title="Address" isLoading={isSubmitting}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Address Line 1"
          {...register("addressLine1")}
          error={errors?.addressLine1?.message}
        />
        <Input
          label="Address Line 2"
          {...register("addressLine2")}
          error={errors?.addressLine2?.message}
        />
        <Input
          label="City"
          {...register("city")}
          error={errors?.city?.message}
        />
        <Input
          label="State"
          {...register("state")}
          error={errors?.state?.message}
        />
        <Input
          label="Zip Code"
          {...register("zipCode")}
          error={errors?.zipCode?.message}
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
      </div>
    </ContentBox>
  );
};

export { BusinessAddressForm };
