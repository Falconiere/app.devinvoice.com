"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { ComboBoxController, InputController } from "@/app/_components/forms";
import { countryInputOptions } from "@/data/currencies";
import type { Client } from "@/database/services/client/types";

import { useFormContext } from "react-hook-form";

const ClientAddressForm = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<Client>();
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

export { ClientAddressForm };
