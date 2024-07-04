import { createBusiness } from "@/database/services/business";
import { businessZodSchema } from "@/database/services/business/types";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const POST = async (req: Request) =>
	apiMiddleware.post(req, async (user, payload) => {
		try {
			const isValid = businessZodSchema.omit({ userId: true }).parse(payload);
			if (!isValid) {
				return new Response(
					JSON.stringify({ message: "error", error: isValid }),
					{
						status: 400,
					},
				);
			}
			const response = await createBusiness(
				Object.assign(payload, { userId: user.sub }),
			);
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
	});
