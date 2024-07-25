"use client";
import type { Client } from "@/database/services/client/types";
import { ContentBox } from "@/domains/_components/ContentBox";
import { InputController } from "@/domains/_components/forms";

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
