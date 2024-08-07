import { ROUTES } from "@/app/routes";
import Link from "next/link";
import type { AuthFormProps } from "../_containers/AuthForm";

const AuthFormFooter = ({ type }: { type: AuthFormProps["type"] }) => (
  <>
    {type === "login" && (
      <p className="text-center">
        Don't have an account?{" "}
        <Link href={ROUTES.AUTH.REGISTER.path} className="text-blue-500">
          Signup
        </Link>
      </p>
    )}
    {type === "register" && (
      <p className="text-center">
        Already have an account?{" "}
        <Link href={ROUTES.AUTH.LOGIN.path} className="text-blue-500">
          Login
        </Link>
      </p>
    )}
    {type === "forgot-password" && (
      <p className="text-center">
        Remembered your password?{" "}
        <Link href={ROUTES.AUTH.RESET_PASSWORD.path} className="text-blue-500">
          Forgot Password
        </Link>
      </p>
    )}
  </>
);
export { AuthFormFooter };
