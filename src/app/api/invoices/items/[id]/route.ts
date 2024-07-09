import { deleteInvoiceItem } from "@/database/services/invoice";
import { apiMiddleware } from "@/utils/apiMiddleware";

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } },
) =>
	apiMiddleware.delete(req, async () => {
		try {
			const invoiceItemId = params.id;
			const response = await deleteInvoiceItem(invoiceItemId);
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
