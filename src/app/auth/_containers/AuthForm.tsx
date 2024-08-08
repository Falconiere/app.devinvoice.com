"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { AuthApiError } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthFormFooter } from "../_components/AuthFormFooter";

type AuthFormProps = {
  type: "login" | "register" | "forgot-password";
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
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const onSubmit = async (data: AuthData) => {
    try {
      setApiError(null);
      setIsSubmitting(true);
      const response = await fetch(`/api/auth/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const body = await response.json();
      if (!response.ok) {
        throw new Error(body.message);
      }
      router.replace("/dashboard");
    } catch (error) {
      const { message } = error as AuthApiError;
      setApiError(message || "An error occurred");
    }
    setIsSubmitting(false);
  };
  return (
    <form
      className="grid w-full gap-4 bg-white p-8 shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
      action={`/api/auth/${type}`}
      method="post"
    >
      {apiError && (
        <div className="rounded-md bg-red-100 p-2 text-center text-red-500">
          {apiError}
        </div>
      )}
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
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {type === "login" && "Login"}
        {type === "register" && "Register"}
        {type === "forgot-password" && "Reset Password"}
      </Button>
      <AuthFormFooter type={type} />
    </form>
  );
};

export { AuthForm };
export type { AuthFormProps };
