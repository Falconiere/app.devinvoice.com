"use client";

import type { Business } from "@/database/services/business/types";
import { ContentBox } from "@/domains/components/ContentBox";
import { InputController } from "@/domains/components/forms";

import { useFormContext } from "react-hook-form";

const BusinessAdditionalInfoForm = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<Business>();

  return (
    <ContentBox title="Additional Information" isLoading={isSubmitting}>
      <div className="grid grid-cols-2 gap-4">
        <InputController control={control} name="phone" label="Phone" />
        <InputController control={control} name="notes" label="Notes" />
      </div>
    </ContentBox>
  );
};
export { BusinessAdditionalInfoForm };
