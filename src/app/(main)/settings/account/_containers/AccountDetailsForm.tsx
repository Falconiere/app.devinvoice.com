"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUser } from "@/app/_queries/users/useUpdateUser";
import { useToast } from "@/components/ui/use-toast";
import {
  updateUserSchema,
  type UpdateUserProfile,
} from "@/database/services/users/types";
import { ComboboxBox } from "@/components/ui/combobox";
import { countries } from "@/data/countries";

const options = countries.map((country) => ({
  label: country.name,
  value: country.code,
  urlImg: country.flag,
}));

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
    control,
  } = useForm<UpdateUserProfile>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      country: currentUser?.country,
      phone: currentUser?.phone,
      email: currentUser?.email,
    },
  });

  const onSubmit = handleSubmit(async (data: UpdateUserProfile) => {
    try {
      await mutateAsync(data);
      toast({
        title: "Success!",
        description: "Account details have been updated successfully.",
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
        <Input
          label="Phone"
          {...register("phone")}
          error={errors?.phone?.message}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <ComboboxBox
              label="Country"
              options={options}
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
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
