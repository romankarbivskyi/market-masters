import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import Modal from "@/components/ui/Modal";
import { GoogleAnalytics } from "@next/third-parties/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmasters.live"),
  title: {
    default: "MMasters | Top Crypto Traders & Market Makers",
    template: "%s | MMasters",
  },
  description:
    "Find and analyze top crypto market makers and traders. Track performance, trading strategies, and profitability across multiple blockchain networks.",
  keywords: [
    "crypto",
    "trading",
    "market makers",
    "blockchain analytics",
    "trader performance",
    "DEX",
    "DeFi",
  ],
  authors: [{ name: "MMasters Team" }],
  creator: "MMasters",
  publisher: "MMasters",
  applicationName: "Market Masters",
  category: "Finance",
  openGraph: {
    type: "website",
    siteName: "Market Masters",
    title: "MMasters | Top Crypto Traders & Market Makers",
    description:
      "Find and analyze top crypto market makers and traders. Track performance, trading strategies, and profitability across multiple blockchain networks.",
    url: "https://mmasters.live",
    images: [
      {
        url: "https://mmasters.live/logo.png",
        width: 1200,
        height: 630,
        alt: "Market Masters - Crypto Trading Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Crypto Traders & Market Makers | MMasters",
    description:
      "Find and analyze top crypto market makers and traders. Track performance, trading strategies, and profitability across multiple blockchain networks.",
    images: ["https://mmasters.live/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#000000",
  alternates: {
    canonical: "https://mmasters.live",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1430857171678326" />
      </head>
      <body className={`${sora.className} bg-black text-white antialiased`}>
        <Header />
        <main className="mt-5 px-5">{children}</main>
        <Modal />
        <GoogleAnalytics gaId="G-1X66SFCTD9" />
      </body>
    </html>
  );
}
