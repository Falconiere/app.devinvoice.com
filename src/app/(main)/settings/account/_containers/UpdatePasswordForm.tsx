import { ContentBox } from "@/app/(main)/_components/ContentBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UpdatePasswordForm = () => (
  <ContentBox title="Update Password">
    <form className="grid grid-cols-2 gap-4">
      <Input name="password" label="New Password" />
      <Input name="password_confirmation" label="Confirm password" />
      <div className="col-span-2 grid justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  </ContentBox>
);

export { UpdatePasswordForm };
