import { useBusinessFormController } from "@/app/(main)/settings/business/_controllers/useBusinessFormController";
import { SignUpDialogFooter } from "@/app/auth/_components/SignUpDialogFooter";
import { useSignUpDialogCtx } from "@/app/auth/_providers/SignUpDialogProvider";
import { InputController } from "@/domains/components/forms";

const BusinessProfile = () => {
  const { onBack } = useSignUpDialogCtx();
  const { onSubmit, form, isPending } = useBusinessFormController();

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <InputController
        label="Organization Name"
        name="name"
        control={form.control}
      />
      <InputController
        label="First Name"
        name="firstName"
        control={form.control}
      />
      <InputController
        label="Last Name"
        name="lastName"
        control={form.control}
      />
      <InputController label="Email" name="email" control={form.control} />
      <InputController label="Website" name="website" control={form.control} />
      <SignUpDialogFooter onBack={onBack} isSubmitting={isPending} />
    </form>
  );
};
export { BusinessProfile };
