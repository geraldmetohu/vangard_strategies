import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vangard Strategies | UK Business Consultancy",
  description:
    "Vangard Consulting helps businesses with company setup, compliance, policies, certifications, and securing public & private sector tenders across the UK.",
  keywords: [
    "UK business consultancy",
    "tender support",
    "start a business UK",
    "business certificates UK",
    "policy drafting",
    "public sector contracts",
    "Vangard Strategies",
    "business setup",
    "ISO accreditation support",
    "company compliance services",
    "business development UK"
  ],
  icons: {
    icon: "/favicon.ico", // used for browser tab
  },
  openGraph: {
    title: "Vangard Strategies | Business Consultancy & Tender Support UK",
    description:
      "Experts in business setup, compliance, accreditation, and helping SMEs win government tenders and private sector contracts in the UK.",
    url: "https://www.vangardstrategies.com",
    siteName: "Vangard Strategies",
    images: [
      {
        url: "https://www.vangardstrategies.com/logo_v.png",
        width: 1200,
        height: 630,
        alt: "Vangard Strategies - UK Business Consultancy",
      }
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vangard Strategies",
              url: "https://www.vangardstrategies.com",
              logo: "https://www.vangardstrategies.com/logo_v.png",
              description:
                "Helping businesses with setup, certification, policy creation, and public/private sector tender success in the UK.",
              sameAs: [
                "https://www.linkedin.com/company/vangard-strategies"
              ]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {children}
      </body>
    </html>
  );
}
