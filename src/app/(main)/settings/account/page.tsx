import { AccountDetailsForm } from "@/app/(main)/settings/account/_containers/AccountDetailsForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Suspense, use } from "react";
import { cookies } from "next/headers";
import { getUser } from "@/database/services/users";
import { AccountDetailsLoader } from "@/app/(main)/settings/account/_components/AccountDetailsLoader";

const getCurrentUser = async () => {
  const supabase = createServerComponentClient({ cookies: () => cookies() });
  const { data } = await supabase.auth.getUser();
  const profile = await getUser(data.user?.id ?? "");
  return profile;
};

const AccountDetails = () => {
  const currentUser = use(getCurrentUser());
  return <AccountDetailsForm currentUser={currentUser} />;
};

const ProfileSettingsPage = () => {
  return (
    <Suspense fallback={<AccountDetailsLoader />}>
      <AccountDetails />
    </Suspense>
  );
};
export default ProfileSettingsPage;
