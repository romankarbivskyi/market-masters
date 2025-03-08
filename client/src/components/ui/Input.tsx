"use client";

import { cn } from "@/lib/utils";

interface InputProps {
  defaultValue?: string;
  type?: "text";
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Input({
  defaultValue,
  className,
  type = "text",
  placeholder,
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      type={type!}
      className={cn(
        className,
        "rounded-md border border-zinc-700 bg-black px-4 py-2 placeholder:text-zinc-600",
      )}
      placeholder={placeholder ?? ""}
      defaultValue={defaultValue ?? ""}
      {...props}
      disabled={disabled}
    />
  );
}
