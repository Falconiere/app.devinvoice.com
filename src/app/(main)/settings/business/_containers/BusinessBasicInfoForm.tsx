"use client";
import { ContentBox } from "@/app/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  type Business,
  businessSchema,
} from "@/database/services/business/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const BusinessBasicInfoForm = () => {
  const { register } = useForm<Business>({
    resolver: zodResolver(businessSchema),
  });
  return (
    <ContentBox title="Basic Information">
      <form className="grid gap-4">
        <Input label="Organization Name" {...register("name")} />
        <fieldset className="grid grid-cols-2 gap-4">
          <Input label="First Name" {...register("fistName")} />
          <Input label="Last Name" {...register("lastName")} />
          <Input label="Email" {...register("email")} />
          <Input label="Website" {...register("website")} />
        </fieldset>
        <div className="flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </ContentBox>
  );
};

export default BusinessBasicInfoForm;
