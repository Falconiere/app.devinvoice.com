"use client";
import { BusinessAdditionalInfoForm } from "@/app/(main)/settings/business/_containers/BusinessAdditionalInfoForm";
import { BusinessAddressForm } from "@/app/(main)/settings/business/_containers/BusinessAddressForm";
import { BusinessBasicInfoForm } from "@/app/(main)/settings/business/_containers/BusinessBasicInfoForm";
import { useBusinessFormController } from "@/app/(main)/settings/business/_controllers/useBusinessFormController";

import { Button } from "@/components/ui/button";
import { FormProvider } from "react-hook-form";

const BusinessPage = () => {
  const { form, onSubmit } = useBusinessFormController();
  return (
    <FormProvider {...form}>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <BusinessBasicInfoForm />
        <BusinessAddressForm />
        <BusinessAdditionalInfoForm />
        <div className="flex">
          <Button type="submit" className="ml-auto">
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default BusinessPage;
