import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
import type { Business } from "@/database/services/business/types";
import { useMutation } from "@tanstack/react-query";

const useSaveBusiness = (id?:string) => {
  return useMutation({
    mutationFn: (data: Partial<Business>) => id ? 
      http.patch(apiRoute.businesses.patch(id), data) : 
      http.post(apiRoute.businesses.post, data),
  });
}
export { useSaveBusiness };