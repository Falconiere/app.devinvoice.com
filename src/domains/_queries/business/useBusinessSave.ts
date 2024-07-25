import type { Business } from "@/database/services/business/types";
import { apiRoute } from "@/domains/_utils/apiRoute";
import { http } from "@/domains/_utils/http";
import { useMutation } from "@tanstack/react-query";

const useBusinessSave = (id?: string) => {
	return useMutation({
		mutationFn: (data: Partial<Business>) =>
			id
				? http.patch(apiRoute.businesses.patch(id), data)
				: http.post(apiRoute.businesses.post, data),
	});
};
export { useBusinessSave };
