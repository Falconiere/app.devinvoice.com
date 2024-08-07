import { useClientFormController } from "@/app/(main)/clients/_controllers/useClientFormController";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { countryInputOptions } from "@/data/countries";
import type { Client } from "@/database/services/client/types";
import { Divider } from "@/domains/components/Divider";
import {
  ComboBoxController,
  InputController,
} from "@/domains/components/forms";

type ClientFormModalProps = {
  open: boolean;
  onClose: () => void;
  client: Client;
};
const ClientFormModal = ({ onClose, client, open }: ClientFormModalProps) => {
  const { form, onSubmit, isPending } = useClientFormController({
    onSuccess: onClose,
    client,
  });
  const { control } = form;

  return (
    <Dialog open={open}>
      <DialogContent onClose={onClose} className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
        </DialogHeader>
        <Divider />
        <form className="grid gap-4" onSubmit={onSubmit}>
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
              <InputController
                label="Website"
                control={control}
                name="website"
              />
            </fieldset>
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <InputController
              control={control}
              name="addressLine1"
              label="Address Line 1"
            />
            <InputController
              control={control}
              name="addressLine2"
              label="Address Line 2"
            />
            <InputController control={control} name="city" label="City" />
            <InputController control={control} name="state" label="State" />
            <InputController
              control={control}
              name="zipCode"
              label="Zip Code"
            />
            <ComboBoxController
              control={control}
              name="country"
              label="Country"
              options={countryInputOptions}
            />
          </div>
          <Divider />
          <div className="grid grid-cols-2 gap-4">
            <InputController control={control} name="phone" label="Phone" />
            <InputController control={control} name="notes" label="Notes" />
          </div>
          <div className="flex">
            <Button type="submit" className="ml-auto" disabled={isPending}>
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { ClientFormModal };
