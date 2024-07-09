import { useClientListColumnsController } from "@/app/(main)/clients/_controllers/useClientListColumnsController";
import { DataTable } from "@/app/_components/DataTable";
import { Divider } from "@/app/_components/Divider";
import { useClientPaginated } from "@/app/_queries/client/useClientPaginated";
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
const ClientListModal = ({ open, onClose, onSelect }: ClientListModalProps) => {
  const { columns } = useClientListColumnsController({ hideActions: true });
  const { data, isLoading, hasNextPage, fetchNextPage } = useClientPaginated();
  return (
    <Dialog open={open}>
      <DialogContent onClose={onClose} className="max-w-7xl">
        <DialogHeader>
          <DialogTitle>Choose a client</DialogTitle>
        </DialogHeader>
        <Divider />
        <DataTable
          columns={columns}
          isLoading={isLoading}
          data={data?.results ?? []}
          hasNextPage={hasNextPage}
          onLoadMore={fetchNextPage}
          onRowSubmit={onSelect}
          hideHeader
        />
      </DialogContent>
    </Dialog>
  );
};

export { ClientListModal };
