import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: {
    default: "Ashish - Full Stack Developer",
    template: "%s | Ashish Portfolio",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and WordPress. Expert in building high-performance web applications using Next.js, Prisma, TypeScript, and more.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Delhi Developer",
    "Node.js Developer",
    "WordPress Developer",
    "Web Development",
    "JavaScript Developer",
  ],
  authors: [ { name: "Ritesh" } ],
  creator: "Ritesh",
  publisher: "Ritesh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ashish - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in Next.js, React, and database systems with experience in building high-performance web applications",
    // url: "",
    siteName: "Ashish Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and Database management   systems with experience in building high-performance web applications",
    creator: "https://x.com/ASHISHD26473289",
  },
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <head>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3DBHVT2XZS"></Script>
        <Script id="google-analytics">
          { `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-3DBHVT2XZS');`}
        </Script>
      </head>
      <body className={ `${ inter.className } font-sans select-none bg-black` }>
        { children }
        <Analytics />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
