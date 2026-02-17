import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishaan Agrawal",
  description:
    "Software engineer, competitive programmer, world record holder. Eng #2 at Extend AI (YC W23).",
  openGraph: {
    title: "Ishaan Agrawal",
    description:
      "Software engineer, competitive programmer, world record holder.",
    url: "https://ishaan.ag",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
