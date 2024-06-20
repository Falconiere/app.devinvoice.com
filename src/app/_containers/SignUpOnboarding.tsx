import { checkProfile } from "@/app/(main)/settings/actions";
import { SignUpDialog } from "@/app/auth/_components/SignUpDialog";
import { SignUpDialogProvider } from "@/app/auth/_providers/SignUpDialogProvider";
import { use } from "react";

const SignUpOnboarding = () => {
  const { hasAccount, hasBusiness } = use(checkProfile());
  const displayDialog = !hasAccount || !hasBusiness;
  if (displayDialog)
    return (
      <SignUpDialogProvider>
        <SignUpDialog />
      </SignUpDialogProvider>
    );
  return null;
};

export { SignUpOnboarding };
