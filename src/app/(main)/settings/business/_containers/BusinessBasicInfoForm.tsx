"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { Input } from "@/components/ui/input";
import type { Business } from "@/database/services/business/types";
import { useFormContext } from "react-hook-form";

const BusinessBasicInfoForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<Business>();
  return (
    <ContentBox title="Basic Information" isLoading={isSubmitting}>
      <div className="grid gap-4">
        <Input
          label="Organization Name"
          {...register("name")}
          error={errors?.name?.message}
        />
        <fieldset className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register("firstName")}
            error={errors?.firstName?.message}
          />
          <Input
            label="Last Name"
            {...register("lastName")}
            error={errors?.lastName?.message}
          />
          <Input
            label="Email"
            {...register("email")}
            error={errors?.email?.message}
          />
          <Input
            label="Website"
            {...register("website")}
            error={errors?.website?.message}
          />
        </fieldset>
      </div>
    </ContentBox>
  );
};

export { BusinessBasicInfoForm };
