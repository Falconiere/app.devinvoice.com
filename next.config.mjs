/** @type {import('next').NextConfig} */
const uuidRegex =
	"[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/clients/new",
				destination: "/clients/form",
			},
			{
				source: `/clients/:id(${uuidRegex})`,
				destination: "/clients/edit",
			},
			{
				source: `/invoices/:id(${uuidRegex})/edit`,
				destination: "/invoices/edit",
			},
			{
				source: `/invoices/:id(${uuidRegex})`,
				destination: "/invoices/preview",
			},
			{
				source: `/invoices/pdf/:id(${uuidRegex})`,
				destination: "/pdf",
			},
		];
	},
};

export default nextConfig;
