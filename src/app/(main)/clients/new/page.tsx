"use client";
import { ClientAdditionalInfoForm } from "@/app/(main)/clients/_containers/ClientAdditionalInfoForm";
import { ClientAddressForm } from "@/app/(main)/clients/_containers/ClientAddressForm";
import { ClientBasicInfoForm } from "@/app/(main)/clients/_containers/ClientBasicInfoForm";
import { useClientFormController } from "@/app/(main)/clients/_controllers/useClientFormController";
import { Button } from "@/components/ui/button";
import { FormProvider } from "react-hook-form";

const ClientAdd = () => {
  const { form, onSubmit } = useClientFormController();
  return (
    <FormProvider {...form}>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <ClientBasicInfoForm />
        <ClientAddressForm />
        <ClientAdditionalInfoForm />
        <div className="flex">
          <Button type="submit" className="ml-auto">
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
export default ClientAdd;
