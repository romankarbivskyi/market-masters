import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Modal from "@/components/ui/Modal";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MarketMasters | Home",
  description: "Find top market makers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} bg-black text-white antialiased`}>
        <Header />
        <main className="mt-5 px-5">{children}</main>
        <Modal />
      </body>
    </html>
  );
}
