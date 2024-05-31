import Link from "next/link";
import type { AuthFormProps } from "../_containers/AuthForm";

const AuthFormFooter = ({ type }: { type: AuthFormProps["type"] }) => (
  <>
    {type === "login" && (
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/auth/sign-up" className="text-blue-500">
          Signup
        </Link>
      </p>
    )}
    {type === "sign-up" && (
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Login
        </Link>
      </p>
    )}
    {type === "forgot-password" && (
      <p className="text-center">
        Remembered your password?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Login
        </Link>
      </p>
    )}
  </>
);
export { AuthFormFooter };
