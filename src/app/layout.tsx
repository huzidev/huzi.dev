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
  title: "huzidev - Software Engineer",
  description: "Modern CV Portfolio - Passionate full-stack developer with a focus on performance, user experience, and clean code.",
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
