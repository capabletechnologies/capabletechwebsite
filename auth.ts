import NextAuth from "next-auth"
import Google from "next-auth/providers/google";
import { sendVerificationRequest } from "./lib/authSendRequest"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: "http-email",
      type: "email",
      sendVerificationRequest,
    },
    Google
  ],
})

/* GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
     */