import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kramio Intelligence",
  description:
    "Kramio is a privacy-first, context-aware AI workspace for prosumers and professionals—organized tiles, managed access to leading AI models, and task-ready answers without re-explaining yourself.",
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
