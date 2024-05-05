"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { AuthFormFooter } from "../_components/AuthFormFooter";

type AuthFormProps = {
  type: "login" | "sign-up" | "forgot-password";
};

type AuthData = {
  email: string;
  password: string;
};

const AuthForm = ({ type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>();

  const onSubmit = (data: AuthData) => {
    console.log(data);
  };

  return (
    <form
      className="grid w-full gap-4 bg-white p-8 shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-4">
        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email",
            },
          })}
        />
        <Input
          label="Password"
          type="password"
          error={errors.password?.message}
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
      </div>
      <Button type="submit" className="w-full">
        {type === "login" && "Login"}
        {type === "sign-up" && "Signup"}
        {type === "forgot-password" && "Reset Password"}
      </Button>
      <AuthFormFooter type={type} />
    </form>
  );
};

export { AuthForm };
export type { AuthFormProps };
