"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/api";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AxiosError } from "axios";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(
    error || null,
  );

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setGeneralError(null);

    try {
      const response = await loginUser(data.email, data.password);
      const result = response.data;

      if (!(response.status === 200) || !result.success) {
        setGeneralError(result.message || "Login failed");
        return;
      }

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));

      router.push("/");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setGeneralError(
          error.response?.data?.message || "An error occurred during login",
        );
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-white">Sign In</h2>
      <p className="mt-2 text-center text-sm text-zinc-400">
        Welcome back! Please enter your details.
      </p>

      {generalError && (
        <Alert className="mt-4 border-red-800 bg-red-900/30 text-red-400">
          <AlertDescription>{generalError}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                    <Input
                      {...field}
                      type="email"
                      className="border-zinc-700 bg-zinc-800 pl-10 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-zinc-300">Password</FormLabel>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                    <Input
                      {...field}
                      type="password"
                      className="border-zinc-700 bg-zinc-800 pl-10 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="••••••••"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </Form>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="text-indigo-400 hover:text-indigo-300 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
