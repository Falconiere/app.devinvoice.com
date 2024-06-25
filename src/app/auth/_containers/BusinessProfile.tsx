import { useBusinessFormController } from "@/app/(main)/settings/business/_controllers/useBusinessFormController";
import { SignUpDialogFooter } from "@/app/auth/_components/SignUpDialogFooter";
import { useSignUpDialogCtx } from "@/app/auth/_providers/SignUpDialogProvider";
import { Input } from "@/components/ui/input";

const BusinessProfile = () => {
  const { onBack } = useSignUpDialogCtx();
  const { onSubmit, register, errors, isPending } = useBusinessFormController();

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <Input
        label="Organization Name"
        {...register("name")}
        error={errors?.name?.message}
      />
      <Input
        label="First Name"
        {...register("firstName")}
        error={errors?.firstName?.message}
      />
      <Input
        label="Last Name"
        {...register("lastName")}
        error={errors?.lastName?.message}
      />
      <Input
        label="Email"
        {...register("email")}
        error={errors?.email?.message}
      />
      <Input
        label="Website"
        {...register("website")}
        error={errors?.website?.message}
      />
      <SignUpDialogFooter onBack={onBack} isSubmitting={isPending} />
    </form>
  );
};
export { BusinessProfile };
