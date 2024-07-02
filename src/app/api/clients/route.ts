import { createClient, getClientPaginated } from "@/database/services/client";
import { clientSchema } from "@/database/services/client/types";
import { getUserById } from "@/database/services/user";

import { apiMiddleware } from "@/utils/apiMiddleware";

export const POST = async (req: Request) =>
	apiMiddleware.post(req, async (user, payload) => {
		try {
			const isValid = clientSchema.parse(payload);
			if (!isValid) {
				return new Response(
					JSON.stringify({ message: "error", error: isValid }),
					{
						status: 400,
					},
				);
			}
			const currentActiveBusiness = await getUserById(user.sub);
			const response = await createClient(
				Object.assign(payload, {
					businessId: currentActiveBusiness?.businesses[0].id,
				}),
			);

			return new Response(
				JSON.stringify({ message: "success", data: response[0] }),
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

export const GET = async (req: Request) =>
	apiMiddleware.get(req, async (user) => {
		try {
			const { searchParams } = new URL(req.url);
			const page = searchParams.get("page") || 1;
			const limit = searchParams.get("limit") || 10;

			const currentActiveBusiness = await getUserById(user.sub);
			const businessId = currentActiveBusiness?.businesses[0].id;
			if (!businessId) {
				throw new Error("Business not found");
			}

			const payload = {
				page: Number(page),
				limit: Number(limit),
				businessId: currentActiveBusiness?.businesses[0].id,
			};

			const response = await getClientPaginated(payload);
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
