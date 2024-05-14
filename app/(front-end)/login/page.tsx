import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import { SignIn } from "@/components/sign-in";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <div className="overflow-hidden z-10 w-full max-w-md rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col justify-center items-center px-4 py-6 pt-8 space-y-3 text-center bg-white border-b border-gray-200 sm:px-16">
          <Link href="/">
            <Image
              src="/logo.webp"
              priority
              alt="Logo"
              className="w-10 rounded-full"
              width="20"
              height="20"
              
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        {/* <Form type="login" /> */}

        <SignIn/>
      </div>
    </div>
  );
}
