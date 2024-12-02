"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Loader from "../loading"
import VerifyEmailInterface from "@/components/verifyemailinterface"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


const sendUserInfo = async (
  userInfo: {
  username: string;
  email: string;
  password: string;
  confirmPassword:string
}): Promise<{ status: number; message: string }> => {
    const response = await fetch("http://localhost:4000/api/users/register", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return { status: response.status, message: data.message };
  } 


const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must not exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isRegister,setIsRegister] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
   const {status,message} = await sendUserInfo(values)
   if(status===200){
    setIsRegister(true)
   }else{
    console.log(message);
    throw new Error()
   }
  }

  return !isRegister ? <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <Card className="w-[50%]">
  <CardHeader className="space-y-2 text-center">
    <CardTitle className="text-3xl font-bold">Create an account</CardTitle>
    <CardDescription className="text-gray-500 dark:text-gray-400">
      Enter your information below to create your account
    </CardDescription>
  </CardHeader>
  <CardContent>
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="johndoe" {...field} />
            </FormControl>
            <FormDescription>
              Your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john.doe@example.com" {...field} />
            </FormControl>
            <FormDescription>
              We'll never share your email.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormDescription>
              Your password must be secure.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="********" {...field} />
            </FormControl>
            <FormDescription>
              Please confirm your password.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && (
          <Loader size="small"/>
        )}
        Register
      </Button>
    </form>
  </Form>
  </CardContent>
  <CardFooter className="text-center text-sm">
    Already have an account?{" "}
    <Link href="/login" className="font-medium text-primary hover:underline">
      Log in
    </Link>
  </CardFooter>
</Card>
  </div>
:
<VerifyEmailInterface />
}

