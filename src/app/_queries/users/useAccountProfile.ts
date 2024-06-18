import { useCurrentUser } from "@/app/_hooks/useCurrentUser";
import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";

import type { UserProfile } from "@/database/services/users/types";

import { useQuery } from "@tanstack/react-query";
const useAccountProfile = (options?: { initialData?:UserProfile }) => {
  const currentUser = useCurrentUser();
  return useQuery({
    queryKey: ["accountProfile", currentUser?.id],
    queryFn: async (): Promise<UserProfile | undefined> =>{
      const response = await http.get<UserProfile>(apiRoute.users.get(currentUser?.id ?? ""))
      return response?.data;
    },
    initialData: options?.initialData,
    enabled: !!currentUser?.id,
  });
};
export { useAccountProfile };
