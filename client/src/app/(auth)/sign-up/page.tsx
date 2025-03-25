"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Lock, Contact } from "lucide-react";

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
import { signUpUser } from "@/services/api";
import useAuth from "@/hooks/useAuth";

const signUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const [isPageLoading, setIsPageLoading] = useState(true);

  const { isAuthenticated, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading) {
      if (isAuthenticated) {
        router.replace("/");
      } else {
        setIsPageLoading(false);
      }
    }
  }, [isAuthenticated, authLoading, router]);

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpForm) => {
    setIsLoading(true);
    setGeneralError(null);

    try {
      const response = await signUpUser(data.name, data.email, data.password);
      const result = response.data;

      if (!(response.status == 200) || !result.success) {
        setGeneralError(result.message || "Register failed");
      }

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));

      router.push("/");
    } catch (error: any) {
      setGeneralError(error.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  if (isPageLoading || authLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center">Sign Up</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Contact className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                    <Input
                      {...field}
                      type="text"
                      className="border-zinc-700 bg-zinc-800 pl-10 text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Full Name"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

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
              "Sign up"
            )}
          </Button>
        </form>
      </Form>

      {generalError && (
        <p className="text-center text-sm text-red-400">{generalError}</p>
      )}

      <p className="mt-4 text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-indigo-400 hover:text-indigo-300 hover:underline"
        >
          Login
        </Link>
      </p>
    </>
  );
}
