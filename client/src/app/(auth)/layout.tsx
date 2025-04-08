"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

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

  if (isPageLoading || authLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <Button
        type="button"
        variant="outline"
        className="w-full border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
        asChild
      >
        <Link href={process.env.NEXT_PUBLIC_BASE_API_URL + "/auth/google"}>
          <svg
            className="mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          Sign in with Google
        </Link>
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-zinc-950 px-2 text-zinc-400">
            or continue with
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}
