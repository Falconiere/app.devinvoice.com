import { getUser } from "@/database/services/users";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const checkProfile  = async () => {
  const supabase = createServerComponentClient({ cookies: () => cookies() });
  const { data } = await supabase.auth.getUser();
  const profile = await getUser(data.user?.id ?? "");
  const hasAccount = Boolean(profile?.firstName && profile?.lastName && profile?.email && profile?.phone && profile?.country);
  const hasBusiness = Boolean(profile?.businesses?.length);

  return {
    hasAccount,
    hasBusiness,
    profile,
    business: profile?.businesses?.[0]
  }
}

export {  checkProfile }