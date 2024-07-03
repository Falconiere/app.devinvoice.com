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
				destination: "/clients/form",
			},
			{
				source: "/invoices/new",
				destination: "/invoices/form",
			},
			{
				source: "/invoices/:id",
				destination: "/invoices/form",
			},
		];
	},
};

export default nextConfig;
