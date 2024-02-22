import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Getting started with Bryntum Scheduler in Next.js",
  description: "Quick Start Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
