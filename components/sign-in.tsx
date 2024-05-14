"use client"
 
import { signIn } from "next-auth/react"
import { Button } from "flowbite-react"
 
export function SignIn() {

  return <Button onClick={() => signIn()} className="flex items-center">Sign in</Button>
  
}