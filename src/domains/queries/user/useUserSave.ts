import type { UpdateUserProfile } from "@/database/services/user/types";
import { apiRoute } from "@/domains/utils/apiRoute";
import { http } from "@/domains/utils/http";

import { useMutation } from "@tanstack/react-query";

const useUserSave = (id: string) =>
	useMutation({
		mutationFn: (data: UpdateUserProfile) =>
			http.patch(apiRoute.users.patch(id), data),
	});
export { useUserSave };
