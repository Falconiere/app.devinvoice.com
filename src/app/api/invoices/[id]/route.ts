import {
	deleteInvoice,
	getInvoiceById,
	updateInvoice,
} from "@/database/services/invoice";
import { invoiceZodSchema } from "@/database/services/invoice/types";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const PATCH = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.patch(req, async (_, payload) => {
		try {
			const isValid = invoiceZodSchema.partial().parse(payload);
			if (!isValid) {
				return new Response(
					JSON.stringify({ message: "error", error: isValid }),
					{
						status: 400,
					},
				);
			}
			const invoiceId = params.id;
			const response = await updateInvoice(invoiceId, payload);
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
			const invoiceId = params.id;
			const response = await getInvoiceById(invoiceId);
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

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.delete(req, async () => {
		try {
			const invoiceId = params.id;
			await deleteInvoice(invoiceId);
			return new Response(JSON.stringify({ message: "success" }), {
				status: 200,
			});
		} catch (error) {
			return new Response(JSON.stringify({ message: "error", error }), {
				status: 500,
			});
		}
	});
