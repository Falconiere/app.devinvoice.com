import { AccountDetailsLoader } from "@/app/(main)/settings/account/_components/AccountDetailsLoader";
import { AccountDetailsForm } from "@/app/(main)/settings/account/_containers/AccountDetailsForm";
import { getUserById } from "@/database/services/user";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Suspense, use } from "react";

const getCurrentUser = async () => {
  const supabase = createServerComponentClient({ cookies: () => cookies() });
  const { data } = await supabase.auth.getUser();
  const profile = await getUserById(data.user?.id ?? "");
  return profile;
};

const AccountDetails = () => {
  const currentUser = use(getCurrentUser());
  return currentUser && <AccountDetailsForm currentUser={currentUser} />;
};

const ProfileSettingsPage = () => {
  return (
    <Suspense fallback={<AccountDetailsLoader />}>
      <AccountDetails />
    </Suspense>
  );
};
export default ProfileSettingsPage;
