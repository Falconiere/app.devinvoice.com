import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import type { AuthApiError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function POST(request: Request) {
	try {
		const payload = await request.json();

		const cookieStore = cookies();
		const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
		const { error } = await supabase.auth.signInWithPassword(payload);
		if (error) {
			throw error;
		}
		return new Response(JSON.stringify({ message: "success" }), {
			status: 200,
		});
	} catch (error) {
		const { message } = error as AuthApiError;
		return new Response(JSON.stringify({ message }), {
			status: 400,
		});
	}
}
