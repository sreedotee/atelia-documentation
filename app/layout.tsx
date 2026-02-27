import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelia - AI Virtual Try-On Case Study",
  description:
    "A sleek, minimal case study documenting the strategic design of Atelia: AI virtual try-on for confident shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
