"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BarChart2 } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-zinc-950">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-indigo-800 transition-all duration-300 group-hover:from-indigo-500 group-hover:to-indigo-700">
              <BarChart2 size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Market<span className="text-indigo-400">Masters</span>
            </span>
          </Link>

          <nav className="hidden md:block">
            <Link
              href="/advertise"
              className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 px-5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Buy Ads
            </Link>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:text-white focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-zinc-900 shadow-lg md:hidden">
          <div className="px-4 py-3">
            <Link
              href="/advertise"
              className="block w-full rounded-md border border-zinc-700 bg-zinc-800 px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Ads
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
