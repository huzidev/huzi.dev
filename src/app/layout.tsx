import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PerformanceProvider } from "@/components/providers/PerformanceProvider";
import { ResponsiveProvider } from "@/components/providers/ResponsiveProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hmziqrs - Senior Software Engineer",
  description: "Modern CV Portfolio - Passionate developer crafting digital experiences with 9 years of full-stack expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceProvider>
          <ResponsiveProvider>
            {children}
          </ResponsiveProvider>
        </PerformanceProvider>
      </body>
    </html>
  );
}
