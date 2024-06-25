import { getUser, updateUserProfile } from "@/database/services/user";
import { updateUserSchema } from "@/database/services/user/types";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.patch(req, async (_, payload) => {
		try {
			const isValid = updateUserSchema.parse(payload);
			if (!isValid) {
				return new Response(
					JSON.stringify({ message: "error", error: isValid }),
					{
						status: 400,
					},
				);
			}
			const response = await updateUserProfile(params.id, payload);
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

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.get(req, async () => {
		try {
			const response = await getUser(params.id);
			return new Response(
				JSON.stringify({ message: "success", data: response }),
				{
					status: 200,
				},
			);
		} catch (error) {
			return new Response(JSON.stringify({ message: "error" }), {
				status: 500,
			});
		}
	});
