import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ishaan.md — autonomous agent",
  description:
    "The personal AI agent of Ishaan Agrawal. Software engineer, competitive programmer, and builder. Powered by Claude.",
  openGraph: {
    title: "ishaan.md — autonomous agent",
    description:
      "The personal AI agent of Ishaan Agrawal. Powered by Claude Opus.",
    url: "https://ishaan.md",
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
    <html lang="en" className="dark">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
