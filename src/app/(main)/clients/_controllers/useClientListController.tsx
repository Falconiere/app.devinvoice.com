import { useClientListColumnsController } from "@/app/(main)/clients/_controllers/useClientListColumnsController";
import { useToast } from "@/components/ui/use-toast";
import { useClientPaginated } from "@/domains/queries/client/useClientPaginated";
import { apiRoute } from "@/domains/utils/apiRoute";
import { http } from "@/domains/utils/http";
import { useState } from "react";

const useClientListController = () => {
  const { toast } = useToast();
  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useClientPaginated();
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const { columns } = useClientListColumnsController({
    onDelete: setSelectedId,
  });

  const onDelete = async () => {
    try {
      if (!selectedId) {
        throw new Error("No client selected");
      }
      await http.delete(apiRoute.clients.delete(selectedId));
      await refetch();
      toast({
        title: "Success!",
        description: "Client has been deleted successfully.",
        variant: "default",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 2000,
      });
    }
    setSelectedId(undefined);
  };

  return {
    columns,
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isDeleteDialogOpen: !!selectedId,
    onClose: () => setSelectedId(undefined),
    onDelete,
  };
};

export { useClientListController };
