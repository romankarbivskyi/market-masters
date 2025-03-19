import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmasters.live"),
  title: {
    default: "MMasters - Top Crypto Traders & Market Makers",
    template: "%s - MMasters",
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
    title: "MMasters - Top Crypto Traders & Market Makers",
    description:
      "Find and analyze top crypto market makers and traders. Track performance, trading strategies, and profitability across multiple blockchain networks.",
    url: "https://mmasters.live",
    images: [
      {
        url: "https://mmasters.live/banner-3x.jpg",
        width: 1200,
        height: 630,
        alt: "Market Masters - Crypto Trading Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Crypto Traders & Market Makers - MMasters",
    description:
      "Find and analyze top crypto market makers and traders. Track performance, trading strategies, and profitability across multiple blockchain networks.",
    images: [
      {
        url: "https://mmasters.live/banner-3x.jpg",
        width: 1200,
        height: 630,
        alt: "Market Masters - Crypto Trading Analytics",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#09090B",
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1430857171678326"
        ></script>
      </head>
      <body
        className={`${sora.className} dark flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow px-5 py-5">{children}</main>
        <Footer />
        <Toaster />
        <GoogleAnalytics gaId="G-1X66SFCTD9" />
      </body>
    </html>
  );
}
