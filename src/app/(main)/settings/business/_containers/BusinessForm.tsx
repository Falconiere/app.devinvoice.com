"use client";
import { BusinessFormLoader } from "@/app/(main)/settings/business/_components/BusinessFormLoader";
import { BusinessAdditionalInfoForm } from "@/app/(main)/settings/business/_containers/BusinessAdditionalInfoForm";
import { BusinessAddressForm } from "@/app/(main)/settings/business/_containers/BusinessAddressForm";
import { BusinessBasicInfoForm } from "@/app/(main)/settings/business/_containers/BusinessBasicInfoForm";
import { useBusinessFormController } from "@/app/(main)/settings/business/_controllers/useBusinessFormController";
import { Button } from "@/components/ui/button";

import { FormProvider } from "react-hook-form";

type BusinessFormProps = {
  onSuccess?: () => void;
  onError?: () => void;
};
const BusinessForm = (props?: BusinessFormProps) => {
  const { onSuccess, onError } = props ?? {};
  const { form, onSubmit, isLoading } = useBusinessFormController({
    onSuccess,
    onError,
  });
  return (
    <FormProvider {...form}>
      <form className="grid gap-4" onSubmit={onSubmit}>
        {!isLoading ? <BusinessBasicInfoForm /> : <BusinessFormLoader />}
        {!isLoading ? <BusinessAddressForm /> : <BusinessFormLoader />}
        {!isLoading ? <BusinessAdditionalInfoForm /> : <BusinessFormLoader />}
        <div className="flex">
          <Button type="submit" className="ml-auto" disabled={isLoading}>
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export { BusinessForm };
