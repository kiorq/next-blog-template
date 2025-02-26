import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
import blogConfig from "../../blog.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: blogConfig.siteName,
  description: blogConfig.siteDescription,
  keywords: blogConfig.siteKeywords,
  openGraph: {
    title: blogConfig.siteName,
    description: blogConfig.siteDescription,
    url: blogConfig.baseUrl,
    type: "website",
    images: [
      {
        url: blogConfig.ogImage,
        width: 1200,
        height: 630,
        alt: blogConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: blogConfig.siteName,
    description: blogConfig.siteDescription,
    images: [blogConfig.ogImage],
  },
  icons: {
    icon: blogConfig.favicon,
    apple: blogConfig.appleTouchIcon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href={blogConfig.favicon} />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {blogConfig.showGradientBackground && (
          <div className="mesh-gradient-bg !fixed !translate-y-[-50vh] md:!translate-y-[-70vh] top-0 left-0 w-full h-[40vh] z-[-1]" />
        )}
        <header className="w-full flex flex-row justify-between items-center border-b border-foreground/10 bg-foreground/5 md:bg-transparent md:py-5 md:px-5 py-4 px-3 sticky top-0 backdrop-blur-xl z-10">
          <div className="h-6 md:h-7 flex items-center">
            <Link href="/" className="">
              <img
                src={blogConfig.logo}
                className="h-4 md:h-5"
                alt={blogConfig.siteName}
              />
            </Link>
          </div>

          {blogConfig.mainSiteUrl && (
            <div className="">
              <Link
                href={blogConfig.mainSiteUrl}
                className="text-primary underline decoration-primary/50 hover:decoration-primary transition-all duration-200 underline-offset-4 md:text-base text-sm"
              >
                {blogConfig.mainSiteLabel || "Back to Site"}
              </Link>
            </div>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}
