import { useCurrentUser } from "@/app/(main)/_hooks/useCurrentUser";
import { apiRoute } from "@/app/api/apiRoute";
import { http } from "@/app/api/http";
import type { UserProfile } from "@/database/services/users/types";

import { useQuery } from "@tanstack/react-query";
const useAccountProfile = () => {
  const currentUser = useCurrentUser();
  return useQuery({
    queryKey: ["accountProfile", currentUser?.id],
    queryFn: async (): Promise<UserProfile | undefined> =>{
      const response = await http.get<UserProfile>(apiRoute.users.get(currentUser?.id ?? ""))
      return response?.data;
    },
    enabled: !!currentUser?.id,
  });
};
export { useAccountProfile };
