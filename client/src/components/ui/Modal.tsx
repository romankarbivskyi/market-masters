"use client";

import { useModalStore } from "@/stores/useModalStore";
import { useRef } from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { CircleX } from "lucide-react";

export default function Modal() {
  const { isOpen, content, actions } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => actions.toggle(false));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      <div className="fixed inset-0 bg-zinc-950/50 backdrop-blur-lg" />
      <div
        ref={modalRef}
        className="relative z-50 w-full max-w-lg rounded-xl border border-zinc-700 bg-black p-4 shadow-xl sm:p-6"
      >
        <button
          className="absolute right-3 top-3 cursor-pointer text-zinc-400 transition-colors hover:text-zinc-100 sm:right-4 sm:top-4"
          onClick={() => actions.toggle(false)}
        >
          <CircleX size={20} />
        </button>
        <div className="mt-6">{content}</div>
      </div>
    </div>
  );
}
