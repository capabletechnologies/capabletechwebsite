// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from 'next/head';
import { MetaHeadEmbed } from "@phntms/react-share";
import Appbar from "./appbar";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "NextJS Auth and Prisma Starter";
const description =
  "Template to easily start with NextJS";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Toaster />
        <Navbar />
        <Suspense fallback="Loading...">
          {/* @ts-expect-error Async Server Component */}
          <AuthStatus />
        </Suspense>
        {/* <MetaHeadEmbed
          render={(meta: React.ReactNode) => <Head>{meta}</Head>}
          siteTitle="PHANTOM"
          pageTitle="Our Work"
          titleTemplate="[pageTitle] | [siteTitle]"
          description="Transforming challenges of all shapes and sizes into inventive, engaging and performance driven solutions that change the game."
          baseSiteUrl="https://phantom.land"
          pagePath="work"
          keywords={["creative-agency", "phantom", "work"]}
          imageUrl="https://bit.ly/3wiUOuk"
          imageAlt="PHANTOM logo."
          twitter={{
            cardSize: "large",
            siteUsername: "@phntmLDN",
            creatorUsername: "@phntmLDN",
          }}
        /> */}

        <Appbar />
        {children}
        {/* <CookieConsent /> */}
        <Footer />
      </body>
    </html>
  );
}
