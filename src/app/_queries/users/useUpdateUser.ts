

import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
import type { UpdateUserProfile } from "@/database/services/users/types";
import { useMutation } from "@tanstack/react-query";

const useUpdateUser = (id: string) =>
  useMutation({
    mutationFn: (data: UpdateUserProfile) =>
      http.patch(apiRoute.users.patch(id), data),
  });
export { useUpdateUser };
