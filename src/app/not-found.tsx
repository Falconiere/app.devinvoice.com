import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-center grid gap-2">
        <h1 className="font-extrabold">404 - Not Found!</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/dashboard">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
