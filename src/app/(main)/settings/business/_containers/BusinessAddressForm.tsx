"use client";

import { countryInputOptions } from "@/data/countries";

import type { Business } from "@/database/services/business/types";
import { ContentBox } from "@/domains/components/ContentBox";
import {
  ComboBoxController,
  InputController,
} from "@/domains/components/forms";

import { useFormContext } from "react-hook-form";

const BusinessAddressForm = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<Business>();
  return (
    <ContentBox title="Address" isLoading={isSubmitting}>
      <div className="grid grid-cols-2 gap-4">
        <InputController
          control={control}
          name="addressLine1"
          label="Address Line 1"
        />
        <InputController
          control={control}
          name="addressLine2"
          label="Address Line 2"
        />
        <InputController control={control} name="city" label="City" />
        <InputController control={control} name="state" label="State" />
        <InputController control={control} name="zipCode" label="Zip Code" />
        <ComboBoxController
          control={control}
          name="country"
          label="Country"
          options={countryInputOptions}
        />
      </div>
    </ContentBox>
  );
};

export { BusinessAddressForm };
