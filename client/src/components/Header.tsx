"use client";

import Link from "next/link";
import { BarChart2, CircleHelp, Home, Menu, Phone } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-zinc-950">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-indigo-800 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-indigo-700">
              <BarChart2 size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              M<span className="text-indigo-400">Masters</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 sm:flex">
            <Link
              href="/"
              className="text-sm text-zinc-100 hover:text-zinc-300 active:text-zinc-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-zinc-100 hover:text-zinc-300 active:text-zinc-400"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-zinc-100 hover:text-zinc-300 active:text-zinc-400"
            >
              Contact us
            </Link>
          </nav>

          <Popover>
            <PopoverTrigger className="sm:hidden">
              <Button variant="outline">
                <Menu />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="mr-4 mt-2 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 p-0">
              <div className="flex flex-col gap-2">
                <div className="hover:bg-zinc-800">
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-100 hover:text-zinc-300 active:text-zinc-400"
                  >
                    <Home size={20} className="stroke-indigo-500" /> Home
                  </Link>
                </div>
                <div className="hover:bg-zinc-800">
                  <Link
                    href="/about"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-100 hover:text-zinc-300 active:text-zinc-400"
                  >
                    <CircleHelp size={20} className="stroke-indigo-500" /> About
                    us
                  </Link>
                </div>
                <div className="hover:bg-zinc-800">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-100 hover:text-zinc-300 active:text-zinc-400"
                  >
                    <Phone size={20} className="stroke-indigo-500" /> Contact us
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
