import type { UserProfile } from "@/database/services/user/types";
import { useCurrentUser } from "@/domains/hooks/useCurrentUser";
import { apiRoute } from "@/domains/utils/apiRoute";
import { http } from "@/domains/utils/http";

import { useQuery } from "@tanstack/react-query";
const useUserProfile = (options?: { initialData?: UserProfile }) => {
	const currentUser = useCurrentUser();
	return useQuery({
		queryKey: ["accountProfile", currentUser?.id],
		queryFn: async (): Promise<UserProfile | undefined> => {
			const response = await http.get<UserProfile>(
				apiRoute.users.get(currentUser?.id ?? ""),
			);
			return response?.data;
		},
		initialData: options?.initialData,
		enabled: !!currentUser?.id,
	});
};
export { useUserProfile };
