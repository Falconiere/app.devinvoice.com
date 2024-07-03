import { ClientList } from "@/app/(main)/clients/_containers/ClientList";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Client } from "@/database/services/client/types";

type ClientListModalProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (client: Client) => void;
};
const ClientListModal = ({ open, onClose, onSelect }: ClientListModalProps) => (
  <Dialog open={open}>
    <DialogContent onClose={onClose}>
      <DialogHeader>
        <DialogTitle>Choose a client</DialogTitle>
      </DialogHeader>
      <ClientList hideActions hideHeader onSelect={onSelect} />
    </DialogContent>
  </Dialog>
);

export { ClientListModal };
