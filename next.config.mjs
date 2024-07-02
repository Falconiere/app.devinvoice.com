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
		];
	},
};

export default nextConfig;
