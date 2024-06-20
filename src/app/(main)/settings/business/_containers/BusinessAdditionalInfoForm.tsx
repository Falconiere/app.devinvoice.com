"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { Input } from "@/components/ui/input";
import type { Business } from "@/database/services/business/types";
import { useFormContext } from "react-hook-form";

const BusinessAdditionalInfoForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<Business>();

  return (
    <ContentBox title="Additional Information" isLoading={isSubmitting}>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Phone"
          {...register("phone")}
          error={errors?.phone?.message}
        />
        <Input
          label="Notes"
          {...register("notes")}
          error={errors?.notes?.message}
        />
      </div>
    </ContentBox>
  );
};
export { BusinessAdditionalInfoForm };
