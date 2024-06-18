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
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const BusinessProfile = () => {
  const { refresh } = useRouter();
  const { data } = useAccountProfile();
  const { toast } = useToast();
  const { onBack } = useSignUpDialogCtx();

  const business = data?.businesses?.[0];
  const { mutateAsync, isPending } = useSaveBusiness(business?.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Business>({
    defaultValues: business,
    resolver: zodResolver(
      businessSchema.pick({
        name: true,
        firstName: true,
        lastName: true,
        email: true,
        website: true,
      })
    ),
  });

  useEffect(() => {
    if (business) {
      setValue("name", business.name);
      setValue("firstName", business.firstName);
      setValue("lastName", business.lastName);
      setValue("email", business.email);
      setValue("website", business.website);
    }
  }, [business, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
      toast({
        title: "Success!",
        description: "Business details have been saved successfully.",
        variant: "default",
        duration: 2000,
      });
    } catch {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 2000,
      });
    }
    refresh();
  });

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
