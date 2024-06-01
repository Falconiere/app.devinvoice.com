import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const getCurrentToken = async () => {
  const client = createClientComponentClient();
  const { data } = await client.auth.getSession();
  return data?.session?.access_token ?? "";
}
export { getCurrentToken };