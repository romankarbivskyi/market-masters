"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function dashboard() {
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = useState(true);

  const { isAuthenticated, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading) {
      if (!isAuthenticated) {
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

  return <div>Content</div>;
}
