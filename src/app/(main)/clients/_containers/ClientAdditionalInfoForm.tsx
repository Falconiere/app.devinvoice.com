"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { InputController } from "@/app/_components/forms";
import type { Client } from "@/database/services/client/types";

import { useFormContext } from "react-hook-form";

const ClientAdditionalInfoForm = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<Client>();

  return (
    <ContentBox title="Additional Information" isLoading={isSubmitting}>
      <div className="grid grid-cols-2 gap-4">
        <InputController control={control} name="phone" label="Phone" />
        <InputController control={control} name="notes" label="Notes" />
      </div>
    </ContentBox>
  );
};
export { ClientAdditionalInfoForm };
