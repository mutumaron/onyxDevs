"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export function ButtonLoading() {
  return (
    <Button disabled className="w-full md:w-1/2">
      <RotateCw className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RotateCw, Send } from "lucide-react";
import supabase from "../../../supabase/supabase";
import { PricingData } from "@/lib/types";
import { useSearchParams, useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  useremail: z.string().email("Invalid email address"),
  phonenumber: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().optional(),
});

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      useremail: "",
      phonenumber: "",
      message: "",
    },
  });
  const { reset } = form;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("contact").insert(values);
      if (error) {
        throw error;
      }
      reset();
      setIsLoading(false);
      toast({
        title: "Form submited successfully",
        description:
          " Your Contact has been received!We will get back to you ASAP!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormDescription>Enter Your Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Phonenumber</FormLabel>
              <FormControl>
                <Input placeholder="phonenumber" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Message</FormLabel>
              <FormControl>
                <Input placeholder="message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <ButtonLoading />
        ) : (
          <Button type="submit" className="w-full md:w-1/2">
            <Send className="mr-2 h-4 w-4" /> Submit
          </Button>
        )}
      </form>
    </Form>
  );
}

const bookingSchema = z.object({
  username: z.string().min(1, "Username is required"),
  useremail: z.string().email("Invalid email address"),
  phonenumber: z.string().min(10, "Phone number must be at least 10 digits"),
  bookingId: z.string().min(1, "Booking ID is required"),
  bookingTitle: z.string().min(1, "Booking title is required"),
});

export function BookingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const searchParams = useSearchParams();
  const bookingIdString = searchParams.get("bookingId");
  const bookingTitleString = searchParams.get("bookingTitle");

  const bookingId = bookingIdString || "";
  const bookingTitle = bookingTitleString || "";

  // 1. Define your form.
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      username: "",
      useremail: "",
      phonenumber: "",
      bookingId: bookingId,
      bookingTitle: bookingTitle,
    },
  });
  const { reset } = form;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    try {
      const { error } = await supabase.from("orders").insert(values);
      if (error) {
        throw error;
      }
      reset();
      setIsLoading(false);
      toast({
        title: "Form submited successifully",
        description:
          "Your order has been received!Please check your whatsapp for confirmation!",
      });
      setTimeout(() => {
        router.push("/pricing");
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: " There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormDescription>Enter Your Email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Your Phonenumber</FormLabel>
              <FormControl>
                <Input placeholder="phonenumber" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <ButtonLoading />
        ) : (
          <Button type="submit" className="w-full md:w-1/2">
            <Send className="mr-2 h-4 w-4" /> Submit
          </Button>
        )}
      </form>
    </Form>
  );
}
