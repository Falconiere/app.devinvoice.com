import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import type { AuthApiError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  try {
    const { email, password } = await request.json();
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${requestUrl.origin}/api/auth/callback`,
      },
    });
    if (error) {
      throw error;
    }
    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
    });
  } catch (error) {
    const { message, status } = error as AuthApiError;
    return new Response(JSON.stringify({ message }), {
      status: status || 500,
    });
  }
}
