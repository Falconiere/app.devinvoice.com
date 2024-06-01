"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUser } from "@/app/_queries/users/useUpdateUser";
import { useToast } from "@/components/ui/use-toast";
import {
  updateUserSchema,
  type UpdateUserProfile,
} from "@/database/services/users/types";

const AccountDetailsForm = ({
  currentUser,
}: {
  currentUser: UpdateUserProfile;
}) => {
  const { toast } = useToast();
  const { mutateAsync, isPending } = useUpdateUser(currentUser.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserProfile>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      email: currentUser?.email,
    },
  });

  const onSubmit = handleSubmit(async (data: UpdateUserProfile) => {
    await mutateAsync(data);
    toast({
      title: "Success!",
      description: "Account details have been updated successfully.",
      variant: "default",
      duration: 2000,
    });
  });

  return (
    <ContentBox title="Account details" isLoading={isPending}>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={onSubmit}
      >
        <Input
          label="First name"
          {...register("firstName")}
          error={errors?.firstName?.message}
        />
        <Input
          label="Last name"
          {...register("lastName")}
          error={errors?.lastName?.message}
        />
        <Input
          label="Email"
          {...register("email")}
          error={errors?.email?.message}
        />
        <div className="sm:col-span-2 grid justify-end">
          <Button type="submit" disabled={isPending}>
            Save
          </Button>
        </div>
      </form>
    </ContentBox>
  );
};

export { AccountDetailsForm };
