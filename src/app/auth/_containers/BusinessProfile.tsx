import { useBusinessForm } from "@/app/(main)/settings/business/_controllers/useBusinessFormController";
import { useSaveBusiness } from "@/app/_queries/businesses/useSaveBusiness";
import { useAccountProfile } from "@/app/_queries/users/useAccountProfile";
import { SignUpDialogFooter } from "@/app/auth/_components/SignUpDialogFooter";
import { useSignUpDialogCtx } from "@/app/auth/_providers/SignUpDialogProvider";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  type Business,
  businessSchema,
} from "@/database/services/business/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const BusinessProfile = () => {
  const { onBack } = useSignUpDialogCtx();
  const { onSubmit, register, errors, isPending } = useBusinessForm();

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
