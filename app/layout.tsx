// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



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
        {children}
        {/* <CookieConsent /> */}
        <Footer />
      </body>
    </html>
  );
}
