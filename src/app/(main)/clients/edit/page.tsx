import { ClientForm } from "@/app/(main)/clients/_containers/ClientForm";
import { getClientById } from "@/database/services/client";
import type { Client } from "@/database/services/client/types";

type EditProps = {
  searchParams?: { id: string };
};
const Edit = async ({ searchParams }: EditProps) => {
  const { id } = searchParams ?? {};
  let client: Client | undefined = undefined;
  if (id) {
    client = await getClientById(id);
  }
  return <ClientForm client={client} />;
};
export default Edit;
