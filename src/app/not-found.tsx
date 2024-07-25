import { Button } from "@/components/ui/button";
import Link from "next/link";

import notfound from "@/app/_assets/illustrations/404.svg";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-center grid gap-2">
        <Image src={notfound} alt="Not Found" />
        <Link href="/dashboard">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
