"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import churchLogo from "../../public/logo.jpeg";
const formSchema = z.object({
  phone: z
    .string()
    .regex(/^0\d{9}$|^\+?[1-9]\d{9,14}$/, {
      message: "Invalid phone number format",
    })
    .nonempty({ message: "Please enter your phone number" })
    .min(13, { message: "Phone number must be at least 10 digits" })
    .refine(
      async () => {
        await new Promise((res) => setTimeout(res, 1000));
        return true;
      },
      {
        message: "Async phone check failed",
        path: ["phone"],
      }
    ),
});

const LoginInterface = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await router.push("/dashboard/superadmin");
      toast.success("Authentication successful. You're logged in.", {
        style: { backgroundColor: "#093317", color: "white" },
        duration: 4000,
      });
    } catch (error) {
      toast.error("Authentication failed. Please try again.", {
        style: {
          backgroundColor: "#6b0000",
        },
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex h-screen items-center px-5 w-full justify-center">
      <div className="md:w-[400px] w-full p-6 shadow-sm rounded-md border">
        <div className="pb-8">
          <Image
            src={churchLogo}
            width={50}
            height={50}
            alt="church_logo"
            className="mx-auto"
          />
          <h1 className="font-bold text-center mt-1 text-[25px]">
            HWM Church Attendance
          </h1>
          <p className="text-center font-light mt-1">
            Sign in to access your dashboard
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div
                      className={`border-border-[#999999] flex w-full items-center relative border transition-colors ${
                        isActive ? "border-black shadow" : ""
                      } rounded-sm`}
                    >
                      {form.formState.isValid && (
                        <Check
                          className="absolute right-4"
                          color="#30961c"
                          size={17}
                        />
                      )}
                      {form.formState.isValidating &&
                        !form.formState.isSubmitting && (
                          <span className="loader2 absolute right-4"></span>
                        )}
                      <PhoneInput
                        country={"gh"}
                        value={String(field.value ?? "")}
                        placeholder="e.g. +233547985579"
                        inputStyle={{
                          width: "100%",
                          paddingLeft: 65,
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                        onFocus={() => setIsActive(true)}
                        buttonStyle={{
                          width: 55,
                          display: "flex",
                          justifyContent: "center",
                          border: "none",
                          borderRadius: "0.37rem 0 0 0.38rem",
                        }}
                        enableSearch={true}
                        onChange={(phone) => field.onChange(phone)}
                        onBlur={() => {
                          const phone = form.getValues("phone");
                          setIsActive(phone.length > 0);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={!form.formState.isValid && isLoading}
              type="submit"
              className="w-full cursor-pointer"
            >
              {form.formState.isValidating && <span className="loader" />}
              {isLoading && form.formState.isValidating ? (
                <Loader2 className="w-3 h-3" />
              ) : (
                <span>Sign in</span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginInterface;
