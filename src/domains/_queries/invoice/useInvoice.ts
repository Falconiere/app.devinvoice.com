import type { Invoice } from "@/database/services/invoice/types";
import { apiRoute } from "@/domains/_utils/apiRoute";
import { http } from "@/domains/_utils/http";
import { useQuery } from "@tanstack/react-query";

const useInvoice = (id?: string) =>
	useQuery({
		queryKey: ["invoice", id],
		queryFn: id
			? async () => {
					const response = await http.get<Invoice>(apiRoute.invoices.get(id));
					return response?.data;
				}
			: undefined,
		enabled: !!id,
	});

export { useInvoice };
