"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { fetchUser } from "@/services/api";
import useAuth from "@/hooks/useAuth";
import { Suspense } from "react";

export default function AuthCallback() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCallbackContent />
    </Suspense>
  );
}

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) router.replace("/");
  }, [isAuthenticated, router]);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      router.replace("/login?error=Authentication failed (missing token)");
      return;
    }

    const processLogin = async () => {
      try {
        localStorage.setItem("token", token);

        const response = await fetchUser(token);
        const result = response.data;

        if (!result.success) {
          throw new Error("Failed to get user information");
        }

        const userData = result.data;

        localStorage.setItem("user", JSON.stringify(userData));

        router.replace("/");
      } catch (err) {
        console.error("Auth callback error:", err);
        setError("Authentication failed. Please try again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    processLogin();
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4 rounded-lg border border-red-800 bg-zinc-900 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">
            Authentication Failed
          </h1>
          <p className="text-red-400">{error}</p>
          <button
            onClick={() => router.push("/login")}
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-700"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6 text-center">
        <h1 className="text-2xl font-bold text-white">Logging you in</h1>
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
        </div>
        <p className="text-zinc-400">
          Please wait while we complete your login...
        </p>
      </div>
    </div>
  );
}
