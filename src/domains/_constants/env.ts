import "dotenv/config";
import { z } from "zod";
const envSchema = z.object({
	SUPABASE_URL: z.string(),
	SUPABASE_ANON_KEY: z.string(),
	DATABASE_URL: z.string(),
	SUPABASE_JWT_SECRET: z.string(),
	API_URL: z.string(),
});

const variables = {
	SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
	SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
	SUPABASE_JWT_SECRET: process.env.NEXT_PUBLIC_SUPABASE_JWT_SECRET,
	API_URL: process.env.NEXT_PUBLIC_API_URL,
} as const;

const env = envSchema.parse(variables);
export { env };
