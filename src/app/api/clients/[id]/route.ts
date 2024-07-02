import {
	deleteClient,
	getClientById,
	updateClient,
} from "@/database/services/client";
import { clientSchema } from "@/database/services/client/types";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.get(req, async () => {
		try {
			const response = await getClientById(params.id);
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

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.delete(req, async () => {
		try {
			const id = params.id;
			if (!id) {
				throw new Error("Client not found");
			}

			const response = await deleteClient(id);
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

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
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
			const clientId = params.id;
			const response = await updateClient(clientId, Object.assign(payload));

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
