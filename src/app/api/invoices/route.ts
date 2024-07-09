import {
	createInvoice,
	getInvoicePaginated,
} from "@/database/services/invoice";
import { invoiceZodSchema } from "@/database/services/invoice/types";
import { getUserById } from "@/database/services/user";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const POST = async (req: Request) =>
	apiMiddleware.post(req, async (_, payload) => {
		try {
			const isValid = invoiceZodSchema.parse(payload);
			if (!isValid) {
				return new Response(
					JSON.stringify({ message: "error", error: isValid }),
					{
						status: 400,
					},
				);
			}
			const response = await createInvoice(payload);

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

			const response = await getInvoicePaginated(payload);
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
