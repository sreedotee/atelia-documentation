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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
