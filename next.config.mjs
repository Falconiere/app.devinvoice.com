/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/clients/new",
				destination: "/clients/form",
			},
			{
				source: "/clients/:id",
				destination: "/clients/edit",
			},
			{
				source: "/invoices/:id",
				destination: "/invoices/edit",
			},
			{
				source: "/invoices/pdf/:id",
				destination: "/pdf",
			},
		];
	},
};

export default nextConfig;
