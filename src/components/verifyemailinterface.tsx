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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import Loader from "@/app/loading"

const formSchema = z.object({
  verificationCode: z
    .string()
    .length(6, { message: "Verification code must be 6 digits" })
    .regex(/^[0-9]+$/, { message: "Verification code must only contain numbers" }),
})

export default function VerifyEmailInterface() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verificationCode: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    console.log(values)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Email Verification</CardTitle>
          <CardDescription className="text-center">
            We've sent a 6-digit code to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="verificationCode"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="sr-only">Verification Code</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        {...field}
                      >
                        <InputOTPGroup className="gap-2 flex justify-center">
                          <InputOTPSlot itemType="number" index={0} className="w-10 h-12 text-center text-lg" />
                          <InputOTPSlot index={1} className="w-10 h-12 text-center text-lg" />
                          <InputOTPSlot index={2} className="w-10 h-12 text-center text-lg" />
                          <InputOTPSlot index={3} className="w-10 h-12 text-center text-lg" />
                          <InputOTPSlot index={4} className="w-10 h-12 text-center text-lg" />
                          <InputOTPSlot index={5} className="w-10 h-12 text-center text-lg" />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription className="text-center text-sm">
                      Enter the 6-digit verification code sent to your email
                    </FormDescription>
                    <FormMessage className="text-center" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader size="small" className="mr-2" />
                    Verifying...
                  </>
                ) : (
                  "Verify Email"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Didn't receive the code?
          </p>
          <Button variant="link" className="text-sm">
            Resend verification code
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

