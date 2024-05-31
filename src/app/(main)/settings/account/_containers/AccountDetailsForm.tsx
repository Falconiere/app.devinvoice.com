"use client";
import { ContentBox } from "@/app/(main)/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUser } from "@/app/(main)/_queries/users/useUpdateUser";
import { useAccountProfile } from "@/app/(main)/_queries/users/useAccountProfile";
import {
  type UpdateUserProfile,
  updateUserSchema,
} from "@/database/services/users/types";
import { useEffect } from "react";

const AccountDetailsForm = () => {
  const { data: currentUser, isLoading } = useAccountProfile();
  const { mutateAsync, isPending } = useUpdateUser(currentUser?.id ?? "");
  const {
    setValue,
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

  useEffect(() => {
    if (!isLoading && currentUser) {
      setValue("firstName", currentUser.firstName);
      setValue("lastName", currentUser.lastName);
      setValue("email", currentUser.email);
    }
  }, [currentUser, setValue, isLoading]);

  const onSubmit = handleSubmit(async (data: UpdateUserProfile) => {
    await mutateAsync(data);
  });

  return (
    <ContentBox title="Account details" isLoading={isPending || isLoading}>
      <form className="grid grid-cols-2 gap-4" onSubmit={onSubmit}>
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
        <div className="col-span-2 grid justify-end">
          <Button type="submit" disabled={isPending || isLoading}>
            Save
          </Button>
        </div>
      </form>
    </ContentBox>
  );
};

export { AccountDetailsForm };
