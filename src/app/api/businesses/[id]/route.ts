import { updateBusiness } from "@/database/services/business";
import { businessSchema } from "@/database/services/business/types";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const PATCH = async (req:Request, { params }: { params: { id: string } }) => apiMiddleware.patch(req,
  async (user, payload)=> {
    try {
      const isValid = businessSchema.omit({ userId: true }).parse(payload);
      if (!isValid) {
        return new Response(JSON.stringify({ message: "error", error: isValid }), {
          status: 400,
        });
      }
      const response = await updateBusiness(params.id, Object.assign(payload,{userId: user.sub } ));
      return new Response(
        JSON.stringify({ message: "success", data: response }),
        {
          status: 200,
        },
      );
    } catch (error) {
      return new Response(JSON.stringify({ message: "error", error }), {
        status: 500,
      });
    }
})
