"use client";

import type { Business } from "@/database/services/business/types";
import { ContentBox } from "@/domains/_components/ContentBox";
import { InputController } from "@/domains/_components/forms";
import { useFormContext } from "react-hook-form";

const BusinessBasicInfoForm = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useFormContext<Business>();
  return (
    <ContentBox title="Basic Information" isLoading={isSubmitting}>
      <div className="grid gap-4">
        <InputController
          label="Organization Name"
          control={control}
          name="name"
        />
        <fieldset className="grid grid-cols-2 gap-4">
          <InputController
            label="First Name"
            control={control}
            name="firstName"
          />
          <InputController
            label="Last Name"
            control={control}
            name="lastName"
          />
          <InputController label="Email" control={control} name="email" />
          <InputController label="Website" control={control} name="website" />
        </fieldset>
      </div>
    </ContentBox>
  );
};

export { BusinessBasicInfoForm };
