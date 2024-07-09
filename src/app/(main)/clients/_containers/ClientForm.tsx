"use client";
import { ClientAdditionalInfoForm } from "@/app/(main)/clients/_containers/ClientAdditionalInfoForm";
import { ClientAddressForm } from "@/app/(main)/clients/_containers/ClientAddressForm";
import { ClientBasicInfoForm } from "@/app/(main)/clients/_containers/ClientBasicInfoForm";
import { useClientFormController } from "@/app/(main)/clients/_controllers/useClientFormController";
import { ROUTES } from "@/app/routes";
import { Button } from "@/components/ui/button";
import type { Client } from "@/database/services/client/types";
import { useRouter } from "next/navigation";
import { FormProvider } from "react-hook-form";

type ClientFormProps = {
  client?: Client;
};
const ClientForm = ({ client }: ClientFormProps) => {
  const { replace } = useRouter();
  const { form, onSubmit } = useClientFormController({
    client,
    onSuccess: (data) => {
      if (!data?.id) return;
      replace(ROUTES.PRIVATE.CLIENTS_EDIT.get(data.id));
    },
  });
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
export { ClientForm };
