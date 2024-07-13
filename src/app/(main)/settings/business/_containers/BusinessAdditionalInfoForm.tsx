"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { InputController } from "@/app/_components/forms";
import type { Business } from "@/database/services/business/types";

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
