import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelia - AI Virtual Try-On Case Study",
  description:
    "A strategic case study on designing an AI-powered shopping companion. Research, framework development, and 27 documented design decisions.",
  keywords:
    "product design, UX design, AI, virtual try-on, case study, portfolio",
  openGraph: {
    title: "Atelia - AI Virtual Try-On Case Study",
    description:
      "Strategic product design case study with interactive decision documentation",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelia Case Study",
    description: "AI Virtual Try-On for Confident Shopping",
    images: ["/twitter-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
