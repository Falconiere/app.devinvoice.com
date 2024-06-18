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

const BusinessAdditionalInfoForm = () => {
  const { register } = useForm<Business>({
    resolver: zodResolver(businessSchema),
  });
  return (
    <ContentBox title="Additional Information">
      <form className="grid grid-cols-2 gap-4">
        <Input label="Phone" {...register("phone")} />
        <Input label="Notes" {...register("notes")} />
        <div className="flex justify-end col-span-2">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </ContentBox>
  );
};
export { BusinessAdditionalInfoForm };
