// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import Script from 'next/script'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import CookieConsent from "@/components/cookieconent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Dashboard";
const description =
  "This is the admin dashboard";

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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
        <Toaster />
        <Suspense fallback="Loading...">
          {/* @ts-expect-error Async Server Component */}
          <AuthStatus />
        </Suspense>
        {children}
        {/* <CookieConsent /> */}
        <Footer />
      </body>
    </html>
  );
}
