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

const BusinessAddressForm = () => {
  const { register } = useForm<Business>({
    resolver: zodResolver(businessSchema),
  });

  return (
    <ContentBox title="Address">
      <form className="grid grid-cols-2 gap-4">
        <Input label="Address Line 1" {...register("addressLine1")} />
        <Input label="Address Line 2" {...register("addressLine2")} />
        <Input label="City" {...register("city")} />
        <Input label="State" {...register("state")} />
        <Input label="Zip Code" {...register("zipCode")} />
        <Input label="Country" {...register("country")} />
        <div className="flex justify-end col-span-2">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </ContentBox>
  );
};

export { BusinessAddressForm };
