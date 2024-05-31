import { AccountDetailsForm } from "@/app/(main)/settings/account/_containers/AccountDetailsForm";
import { UpdatePasswordForm } from "@/app/(main)/settings/account/_containers/UpdatePasswordForm";

const ProfileSettingsPage = () => {
  return (
    <>
      <AccountDetailsForm />
      <UpdatePasswordForm />
    </>
  );
};
export default ProfileSettingsPage;
